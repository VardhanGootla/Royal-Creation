import React from 'react';

import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Full-Service Wedding Planning',
    description: 'From venue selection to the final send-off, we handle every detail to create your perfect wedding day. Let us manage the logistics so you can enjoy the moment.',
    image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg',
    icon: 'bi-gem'
  },
  {
    id: 2,
    title: 'Corporate Events & Conferences',
    description: 'We design and execute professional corporate events, from product launches to annual conferences, ensuring your brand message is delivered with impact.',
    image: 'https://images.pexels.com/photos/1181303/pexels-photo-1181303.jpeg',
    icon: 'bi-briefcase-fill'
  },
  {
    id: 3,
    title: 'Birthday & Private Parties',
    description: 'Celebrate your milestones in style. We create fun, memorable birthday parties and private gatherings tailored to your personality and theme.',
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
    icon: 'bi-cake2-fill'
  },
  {
    id: 4,
    title: 'Engagement & Anniversaries',
    description: 'Mark your special romantic occasions with an elegant and intimate celebration. We specialize in creating beautiful moments for couples.',
    image: 'https://images.pexels.com/photos/724118/pexels-photo-724118.jpeg',
    icon: 'bi-heart-fill'
  },
  {
    id: 5,
    title: 'Baby Shower & Naming Ceremony',
    description: 'Delicious and diverse menu options prepared by our expert chefs. From traditional cuisine to international flavors, we cater to all tastes and dietary requirements.',
    image: 'https://images.pexels.com/photos/6752433/pexels-photo-6752433.jpeg',
    icon: 'bi-egg-fill'
  },
  {
    id: 6,
    title: 'Decor & Theme Design',
    description: 'Transform any space into a magical setting with our creative decor services. We bring your vision to life with stunning floral arrangements and thematic designs.',
    image: 'https://images.pexels.com/photos/1266032/pexels-photo-1266032.jpeg',
    icon: 'bi-flower1'
  },
];

// CSS Styles
const styles = `
  .services-header {
    padding: 3rem 0;
    background: linear-gradient(135deg, #fdf2f7 0%, #ffffff 100%);
  }
  .services-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: rgb(255, 102, 163);
    margin-bottom: 0.5rem;
    position: relative;
  }
  .services-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: rgb(255, 102, 163);
    border-radius: 2px;
  }
  .services-subtitle {
    font-size: 1.25rem;
    color: #6c757d;
    margin-bottom: 0;
  }
  .services-section {
    padding: 3rem 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  }
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }
  .service-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    background: white;
  }
  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(255, 102, 163, 0.15);
  }
  .service-card-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .service-image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  .service-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }
  .service-card:hover .service-image {
    transform: scale(1.05);
  }
  .service-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
    transition: all 0.3s ease;
  }
  .service-card:hover .service-overlay {
    background: linear-gradient(to bottom, transparent 0%, rgba(255, 102, 163, 0.1) 100%);
  }
  .service-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .service-icon {
    margin-bottom: 1rem;
  }
  .service-icon i {
    font-size: 2rem;
    color: rgb(255, 102, 163);
    transition: all 0.3s ease;
  }
  .service-card:hover .service-icon i {
    transform: scale(1.1);
    color: #e60073;
  }
  .service-title {
    font-weight: 700;
    color: #333333;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.3;
    transition: all 0.3s ease;
  }
  .service-card:hover .service-title {
    color: rgb(255, 102, 163);
  }
  .service-description {
    color: #6c757d;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
  .service-button {
    background: rgb(255, 102, 163);
    color: white;
    border: none;
    border-radius: 25px;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease;
    align-self: flex-start;
    position: relative;
    overflow: hidden;
  }
  .service-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  .service-button:hover {
    background: #e60073;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 102, 163, 0.3);
  }
  .service-button:hover::before {
    left: 100%;
  }
  .services-cta-section {
    padding: 3rem 0;
    background: #fdf2f7;
    text-align: center;
  }
  .services-cta-content {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: rgb(255, 102, 163);
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  .cta-description {
    font-size: 1.1rem;
    color: #6c757d;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  .btn-primary {
    background: rgb(255, 102, 163);
    color: white;
    border: none;
    border-radius: 25px;
    padding: 0.75rem 2rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .btn-primary:hover {
    background: #e60073;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 102, 163, 0.4);
    color: white;
  }
  .btn-secondary {
    background: transparent;
    color: rgb(255, 102, 163);
    border: 2px solid rgb(255, 102, 163);
    border-radius: 25px;
    padding: 0.75rem 2rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .btn-secondary:hover {
    background: rgb(255, 102, 163);
    color: white;
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    .services-title {
      font-size: 2.5rem;
    }
    .services-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .services-header {
      padding: 2rem 0;
    }
    .services-section {
      padding: 2rem 0;
    }
    .cta-title {
      font-size: 2rem;
    }
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
    .btn-primary, .btn-secondary {
      width: 100%;
      max-width: 280px;
    }
  }
  @media (max-width: 576px) {
    .services-title {
      font-size: 2rem;
    }
    .services-header {
      padding: 1.5rem 0;
    }
    .services-section {
      padding: 1.5rem 0;
    }
    .service-content {
      padding: 1.25rem;
    }
    .cta-title {
      font-size: 1.75rem;
    }
  }
`;

function ServicesPage() {
  return (
    <>
      <style>{styles}</style>
     

      {/* Page Header */}
      <header className="services-header">
        <div className="container text-center">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">Everything You Need for a Perfect Event</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card-inner">
                  <div className="service-image-container">
                    <img src={service.image} alt={service.title} className="service-image" />
                    <div className="service-overlay"></div>
                  </div>
                  <div className="service-content">
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <Link
                      to="/book-event"
                      state={{ eventType: service.title }}
                      className="service-button"
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-content">
            <h2 className="cta-title">Ready to Plan Your Perfect Event?</h2>
            <p className="cta-description">
              Let's work together to create an unforgettable experience. Contact us for a free consultation and personalized quote.
            </p>
            <div className="cta-buttons">
              <Link to="/book-event" className="btn-primary">
                Contact Us 
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}

export default ServicesPage;