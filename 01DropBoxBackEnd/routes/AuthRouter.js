const express = require('express');
const router = express.Router();
const { checkEmail, register,login } = require('../controllers/authController')

router.post('/check-email', checkEmail);
router.post('/register', register);
router.post('/login', login);


module.exports = router;
