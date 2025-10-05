
import React, { useState } from 'react';

function AddReview() {
  const [formData, setFormData] = useState({
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Replace with actual logged in user ID
    const userId = '60d21b4667d0d8992e610c85'; // Hardcoded for now

    try {
      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, user: userId }),
      });

      if (response.ok) {
        alert('Review submitted successfully!');
        setFormData({
          rating: '',
          comment: ''
        });
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to submit review.');
      }
    } catch (error) {
      console.error('Add review error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="add-review-container">
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default AddReview;
