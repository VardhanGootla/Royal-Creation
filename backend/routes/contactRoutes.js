const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel');

// @route   POST api/contacts
// @desc    Create a new contact message
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    const contact = await newContact.save();

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/contacts
// @desc    Get all contact messages
// @access  Private
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
