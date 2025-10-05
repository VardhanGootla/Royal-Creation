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
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '' });
  
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
    const quotationRequest = { ...formData, event: selectedEvent };
    
    try {
      const response = await fetch('http://localhost:5000/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quotationRequest),
      });

      if (response.ok) {
        console.log('Quotation request submitted successfully');
        // Navigate to the details page and pass the form data in the state
        navigate('/services', { state: { submission: quotationRequest } });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to submit quotation request.');
        console.error('Failed to submit quotation request:', errorData);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <div className="booking-container">
        <div className="booking-card">
          <h1 className="booking-title">Plan Your Perfect Event</h1>
          <p className="booking-subtitle">Select an event and fill out your details to get a personalized suggestion.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-section d-block">
              <h2 className="section-title">1.Choose Your Event</h2> 
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

            <div className="form-section d-block">
              <h2 className="section-title d-block">2. Your Details</h2>
              <div className="details-grid form-inputs d-block">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" name="name" placeholder="Enter Your Full Name" className="form-input" value={formData.name} onChange={handleInputChange} required />
                <label for="email" class="form-label"> Email Address</label>
                <input type="email" name="email" placeholder="Enter Your Email Address" className="form-input" value={formData.email} onChange={handleInputChange} required />
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter Your Phone Number" className="form-input" value={formData.phone} onChange={handleInputChange} required />
                <label for="date" class="form-label">Event Date</label>
                <input type="date" name="date" id="date" className="form-input" value={formData.date} onChange={handleInputChange} required />
              </div>
            </div>
            
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit" className="submit-btn">Contact Us</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceBooking;