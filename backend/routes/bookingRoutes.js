const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModel');

// @route   POST api/bookings
// @desc    Create a new booking
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, phone, date, budget, event } = req.body;

  try {
    const newBooking = new Booking({
      name,
      email,
      phone,
      eventDate: date,
      eventType: event,
      budget,
    });

    const booking = await newBooking.save();

    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/bookings
// @desc    Get all bookings
// @access  Private
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
