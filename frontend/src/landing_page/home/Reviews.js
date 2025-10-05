import React from 'react';
import { Link } from 'react-router-dom';

const reviews = [
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
];

function Reviews() {
  return (
    <section className="reviews-section py-5" style={{ backgroundColor: '#fdf2f7' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: 'rgb(255, 102, 163)' }}>
          What Our Clients Say
        </h2>
        <div className="row g-4">
          {reviews.map((review) => (
            <div key={review.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <p className="card-text fst-italic">"{review.text}"</p>
                  <div className="d-flex align-items-center mt-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="rounded-circle"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                    <div className="ms-3">
                      <h6 className="fw-bold mb-0" style={{ color: 'rgb(255, 102, 163)' }}>
                        {review.name}
                      </h6>
                      <small className="text-muted">{review.event}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
            <Link
                to="/reviews" // This can be a route to a dedicated reviews page
                className="btn text-white"
                style={{ 
                    background: 'rgb(255, 102, 163)', 
                    borderRadius: '50px', 
                    padding: '10px 30px',
                    transition: 'background-color 0.3s'
                }}
            >
                View All Reviews
            </Link>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
