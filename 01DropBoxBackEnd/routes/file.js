const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { authenticateToken } = require("../middlewares/AuthValidation");
const upload = require('../config/multer'); // Import the multer configuration

// Create a new folder
router.post("/folder", authenticateToken, async (req, res) => {
    try {
        if (!req.body || !req.body.folderName || req.body.folderName.trim() === "") {
            return res.status(400).json({ message: "Folder name is required." });
        }

        const { folderName } = req.body;
        const userId = req.user.id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const newFolder = { folderName, files: [] }; // Ensure files array exists in the folder
        user.folders.push(newFolder);

        await user.save();

        return res.status(201).json({
            message: "Folder created successfully.",
            folder: newFolder,
        });
    } catch (error) {
        console.error("Error creating folder:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
});

// Fetch all folders for the logged-in user
router.get("/folders", authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        return res.status(200).json(user.folders);
    } catch (error) {
        console.error("Error fetching folders:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
});

// Upload a file to a specific folder
router.post("/folders/:folderName/upload", authenticateToken, upload.single("file"), async (req, res) => {
    const userId = req.user.id; // Assuming the user ID is available from the token
    const folderName = req.params.folderName;
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }



        const folder = user.folders.find((folder) => folder.folderName === folderName);
        if (!folder) {
            return res.status(404).json({ message: "Folder not found" });
        }



        const newFile = {
            fileName: file.filename,
            uploadedAt: new Date(),
        };

        // Add the new file metadata to the folder
        folder.files.push(newFile);

        // Save the updated user object with the new file
        await user.save()
            .then(() => {
                console.log("File metadata saved successfully");
            })
            .catch((error) => {
                console.error("Error saving user data:", error);
                return res.status(500).json({ message: "Error saving file metadata" });
            });

        res.status(200).json({ message: "File uploaded successfully", file: newFile });
    } catch (error) {
        console.error("Error uploading file:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Fetch all files in a specific folder
const path = require("path");

router.get("/folders/:folderName/files", authenticateToken, async (req, res) => {
    const userId = req.user.id;
    const folderName = req.params.folderName;


    try {
        const user = await User.findById(userId);
        if (!user) {
            console.log("User not found for ID:", userId);
            return res.status(404).json({ message: "User not found" });
        }

        const folder = user.folders.find((folder) => folder.folderName === folderName);
        if (!folder) {
            console.log("Folder not found for name:", folderName);
            return res.status(404).json({ message: "Folder not found" });
        }

        // Include the accessible file path for each file
        const filesWithPaths = folder.files.map((file) => ({
            fileName: file.fileName,
            uploadedAt: file.uploadedAt,
            filePath: `/uploads/${file.fileName}` // Path to serve the file
        }));


        res.status(200).json(filesWithPaths);
    } catch (error) {
        console.error("Error fetching files:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
