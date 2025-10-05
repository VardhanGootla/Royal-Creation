import React from 'react';
import { useLocation } from 'react-router-dom';

function BookingPage() {
  const location = useLocation();
  const eventData = location.state?.event || {};

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') || '',
      contact: formData.get('contact') || '',
      venue: formData.get('venue') || '',
      eventDate: formData.get('eventDate') || '',
      budget: formData.get('budget') || '',
      location: formData.get('location') || '',
      event: {
        title,
        startingPrice: derivedStartingPrice,
      },
    };
    // Replace with API call if available
    // eslint-disable-next-line no-alert
    alert('Thank you! We\'ve received your booking inquiry.');
    // For debugging
    // eslint-disable-next-line no-console
    console.log('Booking payload:', payload);
    e.currentTarget.reset();
  };

  return (
    <div className="container py-5" style={{ maxWidth: '1100px' }}>
      <div className="row g-4">
        <div className="col-12">
          <h1 className="h2 mb-1">Book Your Event</h1>
          <p className="text-muted mb-0">We\'ll get back to you shortly with availability and next steps.</p>
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
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3">Send us your details</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" className="form-control" required />
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
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;


