const User = require('../models/users'); // Your User Schema

// Function to handle storing file metadata
const uploadFileMetadata = async (req, res) => {
  try {
    const { folderId } = req.params;
    const { fileUrl, fileName } = req.body;

    // Find the user from token
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Find the folder by ID
    const folder = user.folders.id(folderId);
    if (!folder) return res.status(404).json({ message: 'Folder not found' });

    // Add the file metadata to the folder
    folder.files.push({
      fileName,
      fileUrl,
      uploadedAt: new Date(),
    });

    await user.save(); // Save the updated user document
    res.status(200).json({ message: 'File uploaded and metadata stored successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading file metadata', error: error.message });
  }
};

module.exports = { uploadFileMetadata };
