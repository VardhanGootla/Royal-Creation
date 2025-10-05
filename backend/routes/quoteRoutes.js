const express = require('express');
const router = express.Router();
const Quote = require('../models/quoteModel');

// @route   POST api/quotes
// @desc    Create a new quote
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, phone, date, event } = req.body;

  try {
    const newQuote = new Quote({
      name,
      email,
      phone,
      eventDate: date,
      eventType: event,
      numberOfGuests: 0, // Assuming a default value
      message: '', // Assuming a default value
    });

    const quote = await newQuote.save();

    res.json(quote);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/quotes
// @desc    Get all quotes
// @access  Private
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
