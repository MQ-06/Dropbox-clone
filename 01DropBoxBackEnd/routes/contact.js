const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.post("/submit", async (req, res) => {
    try {
        const {
            firstName, lastName, email, phone, company,
            companySize, jobTitle, country, help, message
        } = req.body;

        const newContact = new Contact({
            firstName,
            lastName,
            email,
            phone,
            company,
            companySize,
            jobTitle,
            country,
            help,
            message,
        });

        await newContact.save();
        res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
