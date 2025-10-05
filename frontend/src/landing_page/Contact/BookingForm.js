import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    eventDate: '',
    eventType: '',
    numberOfGuests: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Replace with actual logged in user ID and selected services
    const userId = '60d21b4667d0d8992e610c85'; // Hardcoded for now
    const serviceIds = ['60d21b4667d0d8992e610c86', '60d21b4667d0d8992e610c87']; // Hardcoded for now

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, user: userId, services: serviceIds }),
      });

      if (response.ok) {
        alert('Booking created successfully!');
        setFormData({
          eventDate: '',
          eventType: '',
          numberOfGuests: '',
        });
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to create booking.');
      }
    } catch (error) {
      console.error('Booking form error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Create a Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventType">Event Type</label>
          <input
            type="text"
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfGuests">Number of Guests</label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;