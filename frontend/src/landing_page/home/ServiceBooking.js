import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ServiceBooking.css';

// --- Event Data with Image Links (No changes here) ---
const events = [
  { name: 'Wedding', img: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg' },
  { name: 'Birthday Party', img: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg' },
  { name: 'Engagement', img: 'https://images.pexels.com/photos/724118/pexels-photo-724118.jpeg' },
  { name: 'Anniversary', img: 'https://images.pexels.com/photos/2950331/pexels-photo-2950331.jpeg' },
  { name: 'Corporate Event', img: 'https://images.pexels.com/photos/6691674/pexels-photo-6691674.jpeg' },
  { name: 'Baby Shower', img: 'https://images.pexels.com/photos/6691674/pexels-photo-6691674.jpeg' },
  { name: 'Catering Service', img: 'https://images.pexels.com/photos/6691674/pexels-photo-6691674.jpeg' },
  { name: 'Naming Ceremony', img: 'https://images.pexels.com/photos/6691674/pexels-photo-6691674.jpeg' },
];

const ServiceBooking = () => {
  // Get state from the location to pre-select an event
  const location = useLocation();
  const preselectedEvent = location.state?.eventType;

  const [selectedEvent, setSelectedEvent] = useState(preselectedEvent || null);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', budget: '' });
  
  // Initialize the navigate function
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleEventSelect = (eventName) => {
    setSelectedEvent(eventName);
    setErrorMessage(''); // Clear error message when user selects an event
  };

  // *** UPDATED SUBMIT FUNCTION ***
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedEvent) {
      setErrorMessage('Please select an event type!');
      return;
    }
    const bookingRequest = { ...formData, event: selectedEvent };
    console.log('Sending booking request:', bookingRequest);

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingRequest),
      });

      if (response.ok) {
        console.log('Booking request submitted successfully');
        // Navigate to the admin dashboard bookings page
        navigate('/admin/dashboard/bookings');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to submit booking request.');
        console.error('Failed to submit booking request:', errorData);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      console.error('An error occurred during fetch:', error.message, error);
    }
  };

  return (
    <>
      <div className="booking-container">
        <div className="booking-card">
          <h1 className="booking-title">Plan Your Perfect Event</h1>
          <p className="booking-subtitle">Let us know your event details and we will get back to you with a personalized plan.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h2 className="section-title">1. Choose Your Event Type</h2> 
              <div className="event-selection-grid ">
                {events.map((event) => (
                  <div
                    key={event.name}
                    className={`event-card ${selectedEvent === event.name ? 'selected' : ''}`}
                    onClick={() => handleEventSelect(event.name)}
                  >
                    <img src={event.img} alt={event.name} className="event-image" />
                    <div className="event-name">{event.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-section">
              <h2 className="section-title">2. Your Contact & Event Details</h2>
              <div className="details-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter Your Full Name" className="form-input" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label"> Email Address</label>
                  <input type="email" id="email" name="email" placeholder="Enter Your Email Address" className="form-input" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number" className="form-input" value={formData.phone} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="date" className="form-label">Event Date</label>
                  <input type="date" id="date" name="date" className="form-input" value={formData.date} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="budget" className="form-label">Your Budget (Optional)</label>
                  <input type="number" id="budget" name="budget" placeholder="Enter Your Budget" className="form-input" value={formData.budget} onChange={handleInputChange} />
                </div>
              </div>
            </div>
            
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit" className="submit-btn">Get a Quote</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceBooking;