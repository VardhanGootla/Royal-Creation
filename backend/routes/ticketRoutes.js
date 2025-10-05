const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticketModel');

// @route   POST api/tickets
// @desc    Create a new ticket
// @access  Private
router.post('/', async (req, res) => {
  const { user, subject, message } = req.body;

  try {
    const newTicket = new Ticket({
      user,
      subject,
      message,
    });

    const ticket = await newTicket.save();

    res.json(ticket);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/tickets
// @desc    Get all tickets
// @access  Private
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find().populate('user', ['name', 'email']);
    res.json(tickets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
