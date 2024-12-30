const fetch = require('node-fetch'); // To make requests to UploadThing API

const generateUploadURL = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Get the JWT token
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const response = await fetch('https://api.uploadthing.com/v1/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.UPLOADTHING_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        maxFileSize: '5MB', // You can modify the file size limit here
      }),
    });

    if (!response.ok) {
      return res.status(500).json({ message: 'Failed to get upload URL from UploadThing' });
    }

    const data = await response.json();
    res.status(200).json({ uploadUrl: data.uploadUrl });
  } catch (error) {
    res.status(500).json({ message: 'Error generating upload URL', error: error.message });
  }
};


module.exports = { generateUploadURL };
