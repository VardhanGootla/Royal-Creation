const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModel');

// @route   POST api/bookings
// @desc    Create a new booking
// @access  Private
router.post('/', async (req, res) => {
  const { user, eventDate, eventType, numberOfGuests, services } = req.body;

  try {
    const newBooking = new Booking({
      user,
      eventDate,
      eventType,
      numberOfGuests,
      services,
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
    const bookings = await Booking.find().populate('user', ['name', 'email']);
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
