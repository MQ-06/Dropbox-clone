// backend/controllers/fileController.js

const User = require('../models/User');

const uploadFile = async (req, res) => {
  try {
    const { folderId } = req.params;
    const { fileUrl, fileName } = req.body;  // File URL and name after upload

    const user = await User.findById(req.user.id);  // Get the current user
    if (!user) return res.status(404).json({ message: 'User not found' });

    const folder = user.folders.id(folderId);  // Find the folder by ID
    if (!folder) return res.status(404).json({ message: 'Folder not found' });

    // Add file metadata to the folder
    folder.files.push({
      fileName,
      fileUrl,
      uploadedAt: new Date(),
    });

    await user.save();  // Save the updated user document
    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading file', error: error.message });
  }
};

// Fetch files in a specific folder
const getFolderFiles = async (req, res) => {
  try {
    const { folderId } = req.params;
    const user = await User.findById(req.user.id);  // Get the current user

    const folder = user.folders.id(folderId);  // Find the folder
    if (!folder) return res.status(404).json({ message: 'Folder not found' });

    res.status(200).json({ files: folder.files });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching files', error: error.message });
  }
};

module.exports = { uploadFile, getFolderFiles };
