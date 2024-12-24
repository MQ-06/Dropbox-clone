const User = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.checkEmail = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, error: 'Server error' });
    }
};

exports.register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        // Check if the email is already registered
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, error: 'Email already in use' });
        }

        // Hash the user's password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user document
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        // Save the user in the database
        await user.save();

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Generate initials for the user
        const initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

        // Exclude the password from the user object before sending the response
        const { password: pwd, ...userWithoutPassword } = user.toObject();

        // Send success response
        res.status(201).json({
            success: true,
            token,
            user: {
                ...userWithoutPassword,
                initials,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};




exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, error: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ success: false, error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);


        if (!isMatch) {
            return res.status(400).json({ success: false, error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ success: true, token, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};
