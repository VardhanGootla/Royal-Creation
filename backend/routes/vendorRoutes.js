const express = require('express');
const router = express.Router();
const Vendor = require('../models/vendorModel');

// @route   POST api/vendors
// @desc    Create a new vendor
// @access  Private
router.post('/', async (req, res) => {
  const { name, service, contact, email } = req.body;

  try {
    const newVendor = new Vendor({
      name,
      service,
      contact,
      email,
    });

    const vendor = await newVendor.save();

    res.json(vendor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/vendors
// @desc    Get all vendors
// @access  Public
router.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.find().populate('service', ['name', 'description']);
    res.json(vendors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
