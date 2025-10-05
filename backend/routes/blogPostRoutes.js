const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPostModel');

// @route   POST api/blogposts
// @desc    Create a new blog post
// @access  Private
router.post('/', async (req, res) => {
  const { title, content, author, image } = req.body;

  try {
    const newBlogPost = new BlogPost({
      title,
      content,
      author,
      image,
    });

    const blogPost = await newBlogPost.save();

    res.json(blogPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/blogposts
// @desc    Get all blog posts
// @access  Public
router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('author', ['name']);
    res.json(blogPosts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
