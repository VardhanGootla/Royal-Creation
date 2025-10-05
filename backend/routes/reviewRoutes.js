const express = require('express');
const router = express.Router();
const Review = require('../models/reviewModel');

// @route   POST api/reviews
// @desc    Create a new review
// @access  Private
router.post('/', async (req, res) => {
  const { user, rating, comment } = req.body;

  try {
    const newReview = new Review({
      user,
      rating,
      comment,
    });

    const review = await newReview.save();

    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/reviews
// @desc    Get all reviews
// @access  Public
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().populate('user', ['name']);
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
