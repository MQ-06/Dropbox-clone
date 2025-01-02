const User = require('../models/users'); // Import the user model

// Controller function to get user data including folders
const getUserWithFolders = async (req, res) => {
  try {
    const userId = req.params.id; // Get the user ID from the URL params

    // Find the user by ID and populate the folders and files
    const user = await User.findById(userId).select('firstName lastName email folders');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the user data and folders
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user and folders:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getUserWithFolders,
};
