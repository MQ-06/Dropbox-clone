// /routes/userRoutes.js

const express = require('express');
const authenticateToken = require('../middlewares/AuthValidation').authenticateToken;
const userController = require('../controllers/fileController');

const router = express.Router();
const User = require('../models/users'); // Assuming your User model is in models/User.js

router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const userData = {
      id: user._id.toString(),
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      profilePicture: user.profilePicture || null,
    };

    res.json(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});




// Fetch user folders route
router.get("/:id/folders", authenticateToken, async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the user is authenticated and the token is valid
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the user's folders
    return res.status(200).json(user.folders);
  } catch (error) {
    console.error("Error fetching user folders:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;

module.exports = router;
