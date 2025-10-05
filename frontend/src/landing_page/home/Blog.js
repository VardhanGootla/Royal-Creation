import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for a Stress-Free Wedding Day',
    excerpt: 'Your wedding day should be a joyous occasion. Here are our top 10 tips to ensure everything runs smoothly...',
    image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg',
    route: '/blog/stress-free-wedding'
  },
  {
    id: 2,
    title: 'Choosing the Perfect Theme for Your Birthday Bash',
    excerpt: 'A great theme can elevate your party from fun to unforgettable. Let\'s explore some creative ideas for your next celebration.',
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
    route: '/blog/birthday-themes'
  },
  {
    id: 3,
    title: 'Corporate Events That People Actually Enjoy',
    excerpt: 'Tired of boring corporate gatherings? We share our secrets to planning engaging and memorable events for your team.',
    image: 'https://images.pexels.com/photos/1181303/pexels-photo-1181303.jpeg',
    route: '/blog/corporate-events-ideas'
  },
];

function Blog() {
  return (
    <section className="blog-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: 'rgb(255, 102, 163)' }}>
          From Our Blog
        </h2>
        <div className="row g-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <img src={post.image} className="card-img-top" alt={post.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{post.title}</h5>
                  <p className="card-text text-muted flex-grow-1">{post.excerpt}</p>
                  <Link to={post.route} className="text-decoration-none fw-bold" style={{ color: 'rgb(255, 102, 163)' }}>
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
            <Link
                to="/blog"
                className="btn text-white"
                style={{ 
                    background: 'rgb(255, 102, 163)', 
                    borderRadius: '50px', 
                    padding: '10px 30px'
                }}
            >
                Know More
            </Link>
        </div>
      </div>
    </section>
  );
}

export default Blog;