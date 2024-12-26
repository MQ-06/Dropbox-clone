const express = require('express');
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');


const { checkEmail, register, login } = require('../controllers/authController');
router.post('/check-email', checkEmail);
router.post('/register', register);
router.post('/login', login);
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
    const token = jwt.sign(
        {
            id: req.user._id,
            firstName: req.user.firstName || "",
            lastName: req.user.lastName || "",
            profilePicture: req.user.profilePicture || null,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.redirect(`${process.env.CLIENT_URL}dashboard?token=${token}`);
});

const verifyAuth = (req, res, next) => {
    if (req.isAuthenticated() || req.cookies.jwt) {
        return next();
    } else {
        return res.status(401).json({ message: "Not logged in" });
    }
};

router.get('/auth/check-login-status', verifyAuth, (req, res) => {
    res.status(200).json({ loggedIn: true, user: req.user });
});

module.exports = router;
