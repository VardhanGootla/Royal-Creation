const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModel');
const { sendBookingEmails } = require('../services/emailService');

// @route   POST api/bookings
// @desc    Create a new booking
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, phone, eventDate, eventType, event, budget, status } = req.body;
  
  console.log('Received booking data:', req.body);
  console.log('eventDate value:', eventDate);
  console.log('eventType value:', eventType);

  try {
    const newBooking = new Booking({
      name,
      email,
      phone,
      eventDate,
      eventType: eventType || event, // Handle both field names
      budget,
      status: status || 'Pending',
    });

    const booking = await newBooking.save();

    // Send emails after successful booking
    try {
      console.log('Attempting to send emails...');
      const emailResult = await sendBookingEmails(booking);
      console.log('Email sending result:', emailResult);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      console.error('Email error details:', emailError.message);
      // Don't fail the booking if email fails
    }

    res.json(booking);
  } catch (err) {
    console.error('Booking creation error:', err.message);
    console.error('Full error:', err);
    
    // Send more specific error message
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors 
      });
    }
    
    res.status(500).json({ message: 'Server Error', error: err.message });
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
