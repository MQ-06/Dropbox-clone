const express = require('express');
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');

// Local authentication routes
const { checkEmail, register, login } = require('../controllers/authController');
router.post('/check-email', checkEmail);
router.post('/register', register);
router.post('/login', login);

// Google Authentication routes
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        // Generate JWT for the authenticated user
        const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Redirect to the client with the token (pass it via query or HTTP headers)
        res.redirect(`${process.env.CLIENT_URL}?token=${token}`);
    }
);

module.exports = router;
