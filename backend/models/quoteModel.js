const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  numberOfGuests: {
    type: Number,
  },
  message: {
    type: String,
  },
}, {
  timestamps: true,
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
