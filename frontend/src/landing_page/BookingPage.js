import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function BookingPage() {
  const location = useLocation();
  const eventData = location.state?.event || {};
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    title = 'Selected Event',
    location: eventLocation,
    image,
    description,
    includes,
    pricing,
    expenses,
    startingPrice,
  } = eventData;

  const derivedStartingPrice = startingPrice || pricing?.total || expenses?.total || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const budgetValue = formData.get('budget') || '';
    const numericBudgetValue = parseInt(budgetValue.replace(/\D/g, ''), 10) || 0;

    const payload = {
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      phone: formData.get('contact') || '',
      eventDate: formData.get('eventDate') || '',
      budget: numericBudgetValue,
      eventType: title,
    };
    console.log('Sending booking request:', payload);

    try {
      console.log('Sending booking request to server...');
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        console.log('Booking successful!');
        setShowSuccess(true);
        e.currentTarget.reset();
      } else {
        const errorData = await response.json();
        console.error('Booking error:', errorData);
        if (errorData.errors && errorData.errors.length > 0) {
          alert('Please fill in all required fields: ' + errorData.errors.join(', '));
        } else {
          alert(errorData.message || 'Failed to submit booking request.');
        }
      }
    } catch (error) {
      console.error('Network or server error:', error.message, error);
      // Check if it's a network error vs server error
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        alert('Unable to connect to server. Please check if the backend is running.');
      } else {
        console.log('Unexpected error, but booking might have succeeded:', error);
        // Don't show generic error alert
      }
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: '1100px' }}>
      <div className="row g-4">
        <div className="col-12">
          <h1 className="h2 mb-1">Book Your Event</h1>
        </div>

        <div className="col-lg-6">
          <div className="card h-100 shadow-sm">
            {image ? (
              <img src={process.env.PUBLIC_URL + image} alt={title} className="card-img-top" style={{ objectFit: 'cover', height: '260px' }} />
            ) : null}
            <div className="card-body">
              <h5 className="card-title mb-2">{title}</h5>
              {eventLocation ? <p className="mb-1"><strong>Location:</strong> {eventLocation}</p> : null}
              {derivedStartingPrice ? <p className="mb-2"><strong>Starting Price:</strong> {derivedStartingPrice}</p> : null}
              {description ? <p className="text-muted mb-3">{description}</p> : null}
              {Array.isArray(includes) && includes.length > 0 ? (
                <>
                  <h6 className="mb-2">Includes</h6>
                  <ul className="mb-0">
                    {includes.map((inc, i) => (
                      <li key={i}>{inc}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              {Array.isArray(pricing?.breakdown) && pricing.breakdown.length > 0 ? (
                <div className="mt-4">
                  <h6 className="mb-2">Pricing Breakdown</h6>
                  <div className="table-responsive">
                    <table className="table align-middle mb-0">
                      <thead>
                        <tr>
                          <th style={{ width: '60%' }}>Service</th>
                          <th className="text-end">Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pricing.breakdown.map((row, idx) => (
                          <tr key={idx}>
                            <td>{row.service}</td>
                            <td className="text-end">{row.cost}</td>
                          </tr>
                        ))}
                        {pricing.total ? (
                          <tr>
                            <td><strong>Total</strong></td>
                            <td className="text-end"><strong>{pricing.total}</strong></td>
                          </tr>
                        ) : null}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}

              {!pricing?.breakdown && Array.isArray(expenses?.breakdown) && expenses.breakdown.length > 0 ? (
                <div className="mt-4">
                  <h6 className="mb-2">Expense Details</h6>
                  <div className="table-responsive">
                    <table className="table align-middle mb-0">
                      <thead>
                        <tr>
                          <th style={{ width: '60%' }}>Item</th>
                          <th className="text-end">Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {expenses.breakdown.map((row, idx) => (
                          <tr key={idx}>
                            <td>{row.item}</td>
                            <td className="text-end">{row.cost}</td>
                          </tr>
                        ))}
                        {expenses.total ? (
                          <tr>
                            <td><strong>Total</strong></td>
                            <td className="text-end"><strong>{expenses.total}</strong></td>
                          </tr>
                        ) : null}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              {showSuccess ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', border: '2px dashed #28a745', borderRadius: '15px', backgroundColor: '#f0fff4' }}>
                  <h2 style={{ color: '#28a745', marginBottom: '15px' }}>Booking Confirmed!</h2>
                  <p style={{ fontSize: '1.1rem', color: '#555' }}>Thank you for choosing Royal Creation. Our team will contact you shortly to finalize the details.</p>
                  <button onClick={() => setShowSuccess(false)} style={{ marginTop: '20px', padding: '10px 25px', border: 'none', borderRadius: '5px', backgroundColor: '#28a745', color: 'white', fontSize: '1rem', cursor: 'pointer' }}>
                    Close
                  </button>
                </div>
              ) : (
              <form onSubmit={handleSubmit}>
                <h5 className="card-title mb-3">Send us your details</h5>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contact">Contact</label>
                  <input id="contact" name="contact" type="tel" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="venue">Venue</label>
                  <input id="venue" name="venue" type="text" className="form-control" placeholder="Venue name/address" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="eventDate">Event Date</label>
                  <input id="eventDate" name="eventDate" type="date" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="budget">Budget</label>
                  <input id="budget" name="budget" type="text" className="form-control" placeholder="e.g. 2,00,000 INR" />
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="location">Location</label>
                  <input id="location" name="location" type="text" className="form-control" defaultValue={eventLocation || ''} />
                </div>
                <button type="submit" className="btn btn-primary">Book Now</button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;


