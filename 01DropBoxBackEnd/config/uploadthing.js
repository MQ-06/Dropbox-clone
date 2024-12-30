// backend/config/uploadthing.js

const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { generateUploadThingURL } = require('uploadthing/server'); // Import from the correct path

dotenv.config();

// Function to generate an upload URL
const generateUploadURL = async (req, res) => {
  try {
    // Authenticate the user (you can use JWT or another method)
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error('Unauthorized');

    // Verify the token (if you're using JWT)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Generate the upload URL
    const uploadUrl = await generateUploadThingURL({
      files: 1, // Number of files allowed in one upload
      maxFileSize: '5MB', // Max file size allowed
      destination: 's3', // Default storage (can be customized to S3 or others)
      userId: decoded.id, // Attach the decoded user ID (or any identifier)
    });

    // Return the generated URL
    res.status(200).json({ uploadUrl });
  } catch (error) {
    res.status(500).json({ message: 'Error generating upload URL', error: error.message });
  }
};

module.exports = { generateUploadURL };
