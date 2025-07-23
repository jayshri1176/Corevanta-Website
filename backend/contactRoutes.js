const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
