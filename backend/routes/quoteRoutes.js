const express = require('express');
const router = express.Router();
const Quote = require('../models/quoteModel');

// @route   POST api/quotes
// @desc    Create a new quote
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, phone, date, event, budget } = req.body;

  try {
    const newQuote = new Quote({
      name,
      email,
      phone,
      eventDate: date,
      eventType: event,
      budget,
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

// @route   PUT api/quotes/:id
// @desc    Update a quote
// @access  Private
router.put('/:id', async (req, res) => {
  const { name, email, phone, eventDate, eventType, budget, numberOfGuests, message, contactedSuccessfully } = req.body;

  try {
    const quote = await Quote.findById(req.params.id);

    if (!quote) {
      return res.status(404).json({ msg: 'Quote not found' });
    }

    quote.name = name || quote.name;
    quote.email = email || quote.email;
    quote.phone = phone || quote.phone;
    quote.eventDate = eventDate || quote.eventDate;
    quote.eventType = eventType || quote.eventType;
    quote.budget = budget !== undefined ? budget : quote.budget;
    quote.numberOfGuests = numberOfGuests !== undefined ? numberOfGuests : quote.numberOfGuests;
    quote.message = message || quote.message;
    quote.contactedSuccessfully = contactedSuccessfully !== undefined ? contactedSuccessfully : quote.contactedSuccessfully;

    await quote.save();
    res.json(quote);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/quotes/:id
// @desc    Delete a quote
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);

    if (!quote) {
      return res.status(404).json({ msg: 'Quote not found' });
    }

    await Quote.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Quote deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
