const express = require('express');
const router = express.Router();
const Service = require('../models/serviceModel');

// @route   POST api/services
// @desc    Create a new service
// @access  Private
router.post('/', async (req, res) => {
  const { name, description, price, category } = req.body;

  try {
    const newService = new Service({
      name,
      description,
      price,
      category,
    });

    const service = await newService.save();

    res.json(service);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/services
// @desc    Get all services
// @access  Public
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
