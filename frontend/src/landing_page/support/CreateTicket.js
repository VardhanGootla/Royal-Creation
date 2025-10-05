
import React, { useState } from 'react';

function CreateTicket() {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
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
      const response = await fetch('http://localhost:5000/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, user: userId }),
      });

      if (response.ok) {
        alert('Ticket created successfully!');
        setFormData({
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to create ticket.');
      }
    } catch (error) {
      console.error('Create ticket error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="create-ticket-container">
      <h2>Create a Support Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
}

export default CreateTicket;
