const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { authenticateToken } = require("../middlewares/AuthValidation");


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

        const newFolder = { folderName };
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

router.get("/folders", authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Return the user's folders
        return res.status(200).json(user.folders);
    } catch (error) {
        console.error("Error fetching folders:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
});

module.exports = router;
