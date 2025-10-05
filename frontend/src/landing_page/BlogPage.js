import React from 'react';
import { Link } from 'react-router-dom';


// Expanded list of blog posts for the dedicated page
const allBlogPosts = [
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
  {
    id: 4,
    title: 'The Ultimate Guide to Venue Selection',
    excerpt: 'The venue sets the tone for your entire event. Learn how to choose the perfect location that fits your budget and style.',
    image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg',
    route: '/blog/venue-selection-guide'
  },
  {
    id: 5,
    title: 'How to Create a Realistic Event Budget',
    excerpt: 'Budgeting is key to a successful event. Follow our step-by-step guide to create a budget that works for you.',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg',
    route: '/blog/event-budgeting'
  },
  {
    id: 6,
    title: 'Decor Trends to Watch For This Year',
    excerpt: 'From sustainable decor to bold color palettes, discover the latest trends that will make your event stand out.',
    image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg',
    route: '/blog/decor-trends'
  },
];

const themeColor = 'rgb(255, 102, 163)';

function BlogPage() {
  return (
    <>
    
      <header className="py-5" style={{ backgroundColor: '#fdf2f7' }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold" style={{ color: themeColor }}>Our Blog</h1>
          <p className="lead text-muted">Insights, tips, and inspiration for your next event.</p>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {allBlogPosts.map((post) => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <img src={post.image} className="card-img-top" alt={post.title} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{post.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{post.excerpt}</p>
                    <Link to={post.route} className="text-decoration-none fw-bold mt-auto" style={{ color: themeColor }}>
                      Read More &rarr;
                    </Link>
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

export default BlogPage;