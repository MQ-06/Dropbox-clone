// backend/routes/uploadRoutes.js

const express = require('express');
const { generateUploadURL } = require('../config/uploadthing');  // Import the function

const router = express.Router();

// Route to generate the upload URL
router.post('/upload-url', generateUploadURL);

module.exports = router;
