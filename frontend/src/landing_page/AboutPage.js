import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const teamMembers = [
  {
    id: 1,
    name: 'Sumit Lone',
    role: 'Founder & Lead Planner',
    bio: 'With over a decade of experience, Aisha founded Royal Creation to bring dream events to life with a personal and creative touch.',
    image: 'https://i.pravatar.cc/400?img=25',
  },
  {
    id: 2,
    name: 'Anushka Patil',
    role: 'Creative Director',
    bio: 'Rohan is the artistic force behind our stunning designs, transforming spaces into unforgettable experiences.',
    image: 'https://i.pravatar.cc/400?img=32',
  },
  {
    id: 3,
    name: 'Sakshi Garat',
    role: 'Client Relations Manager',
    bio: 'Priya ensures every client feels heard and valued, managing communications with warmth and professionalism.',
    image: 'https://i.pravatar.cc/400?img=49',
  },
  {
    id: 4,
    name: 'Vardhan Gootla',
    role: 'Client Relations Manager',
    bio: 'Priya ensures every client feels heard and valued, managing communications with warmth and professionalism.',
    image: 'https://i.pravatar.cc/400?img=49',
  },
];

const themeColor = 'rgb(255, 102, 163)';

function AboutPage() {
  return (
    <>
      

      {/* Page Header */}
      <header className="py-5" style={{ backgroundColor: '#fdf2f7' }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold" style={{ color: themeColor }}>About Royal Creation</h1>
          <p className="lead text-muted">Crafting Unforgettable Moments Since <b>2019</b></p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img 
                src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg" 
                alt="Our Story" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h2 className="fw-bold" style={{ color: themeColor }}>Our Story</h2>
              <p className="text-muted">
                Royal Creation was born from a simple idea: every celebration deserves to be extraordinary. We started as a small team with a big passion for design and a commitment to flawless execution. Over the years, we've grown into a full-service event planning company known for our creativity, attention to detail, and dedication to our clients.
              </p>
              <p className="text-muted ">
                Our mission is to take the stress out of planning and infuse every event with joy and elegance. From intimate gatherings to grand weddings, we treat every project as a unique piece of art, crafted with love and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: themeColor }}>
            Meet Our Talented Team
          </h2>
          <div className="row g-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 text-center shadow-sm" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-circle mb-3"
                      style={{ width: '150px', height: '150px', objectFit: 'cover', border: `4px solid ${themeColor}` }}
                    />
                    <h5 className="card-title fw-bold">{member.name}</h5>
                    <h6 className="card-subtitle mb-2" style={{ color: themeColor }}>{member.role}</h6>
                    <p className="card-text text-muted">{member.bio}</p>
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

export default AboutPage;