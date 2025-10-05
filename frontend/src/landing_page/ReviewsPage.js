import React from 'react';


// Expanded list of reviews for the dedicated page
const allReviews = [
  {
    id: 1,
    name: 'Priya & Rohan',
    event: 'Wedding',
    text: 'Royal Creation made our wedding a dream come true! The attention to detail was impeccable. We couldn\'t have asked for a better team.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Anjali Sharma',
    event: 'Birthday Party',
    text: 'The best 25th birthday party ever! Everything from the decor to the music was perfect. Highly recommended for any celebration.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 3,
    name: 'Vikram Singh',
    event: 'Corporate Event',
    text: 'Our annual corporate meeting was a huge success, thanks to Royal Creation. Professional, organized, and delivered beyond our expectations.',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 4,
    name: 'Sunita & Kumar',
    event: 'Anniversary',
    text: 'They planned our 25th anniversary, and it was magical. Every guest was impressed. Thank you, Royal Creation!',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 5,
    name: 'Deepak Gupta',
    event: 'Product Launch',
    text: 'Extremely professional and creative. Our product launch event was a massive success and generated a lot of buzz.',
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
  {
    id: 6,
    name: 'Neha Reddy',
    event: 'Engagement Party',
    text: 'The team is so friendly and easy to work with. They understood our vision perfectly and executed it flawlessly.',
    avatar: 'https://i.pravatar.cc/150?img=20',
  },
];

const themeColor = 'rgb(255, 102, 163)';

function ReviewsPage() {
  return (
    <>
      
      <header className="py-5" style={{ backgroundColor: '#fdf2f7' }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold" style={{ color: themeColor }}>Client Testimonials</h1>
          <p className="lead text-muted">Hear what our happy clients have to say about us.</p>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {allReviews.map((review) => (
              <div key={review.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-4 d-flex flex-column">
                    <p className="card-text fst-italic flex-grow-1">"{review.text}"</p>
                    <div className="d-flex align-items-center mt-4">
                      <img src={review.avatar} alt={review.name} className="rounded-circle" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                      <div className="ms-3">
                        <h6 className="fw-bold mb-0" style={{ color: themeColor }}>{review.name}</h6>
                        <small className="text-muted">{review.event}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    </>
  );
}

export default ReviewsPage;