const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModel');

// @route   POST api/bookings
// @desc    Create a new booking
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, phone, eventDate, eventType, budget, status } = req.body;

  try {
    const newBooking = new Booking({
      name,
      email,
      phone,
      eventDate,
      eventType,
      budget,
      status: status || 'Pending',
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

// @route   PUT api/bookings/:id
// @desc    Update a booking
// @access  Private
router.put('/:id', async (req, res) => {
  const { name, email, phone, eventDate, eventType, budget, status } = req.body;

  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ msg: 'Booking not found' });
    }

    booking.name = name || booking.name;
    booking.email = email || booking.email;
    booking.phone = phone || booking.phone;
    booking.eventDate = eventDate || booking.eventDate;
    booking.eventType = eventType || booking.eventType;
    booking.budget = budget !== undefined ? budget : booking.budget;
    booking.status = status || booking.status;

    await booking.save();
    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/bookings/:id
// @desc    Delete a booking
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ msg: 'Booking not found' });
    }

    await Booking.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Booking deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
