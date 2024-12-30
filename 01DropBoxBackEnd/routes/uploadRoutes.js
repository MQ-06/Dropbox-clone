const express = require('express');
const fetch = require('node-fetch');
const multer = require('multer');
const router = express.Router();

// Set up Multer storage (optional, if you want to store files locally, you can skip this if you're directly uploading to UploadThing)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Optional: store locally
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Optional: file name modification
  },
});

const upload = multer({ storage });

// Generate Upload URL from UploadThing
router.post('/upload', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from authorization header

    console.log('Received token:', token);

    if (!token) {
      console.log('No token provided');
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Send a request to UploadThing to generate the upload URL
    console.log('Requesting upload URL from UploadThing...');
    const response = await fetch('https://api.uploadthing.com/v1/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.UPLOADTHING_API_KEY}`, // API key from UploadThing
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        maxFileSize: '5MB', // Optional: file size limit
      }),
    });

    if (!response.ok) {
      console.log('Failed to get upload URL from UploadThing:', response.statusText);
      return res.status(500).json({ message: 'Failed to get upload URL from UploadThing' });
    }

    const data = await response.json();
    console.log('Upload URL received:', data.uploadUrl);
    res.status(200).json({ uploadUrl: data.uploadUrl }); // Send back the UploadThing URL
  } catch (error) {
    console.error('Error generating upload URL:', error);
    res.status(500).json({ message: 'Error generating upload URL', error: error.message });
  }
});

// Endpoint to store file metadata (after file is uploaded to UploadThing)
router.post('/folder/:folderId/upload', async (req, res) => {
  try {
    const { folderId } = req.params;
    const { fileUrl, fileName } = req.body;

    console.log('Received file metadata:', { fileUrl, fileName, folderId });

    // Store file metadata in your database (example below)
    // You can modify this part to fit your schema and save metadata

    const user = await User.findById(req.user.id);
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    const folder = user.folders.id(folderId);
    if (!folder) {
      console.log('Folder not found');
      return res.status(404).json({ message: 'Folder not found' });
    }

    folder.files.push({
      fileName,
      fileUrl,
      uploadedAt: new Date(),
    });

    await user.save();
    console.log('File metadata saved successfully');
    res.status(200).json({ message: 'File uploaded and metadata stored successfully' });
  } catch (error) {
    console.error('Error uploading file metadata:', error);
    res.status(500).json({ message: 'Error uploading file metadata', error: error.message });
  }
});

module.exports = router;
