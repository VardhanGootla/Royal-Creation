import React from 'react';
import Hero from './Hero';
import PopularSearch from './PopularSearch';
import EventCategory from './EventCategory';
import ContactUs from './ContactUs';
import Reviews from './Reviews';
import Blog from './Blog';
import OpenAccount from '../OpenAccount'; 
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const ContactUsCTA = () => (
  <div className="contact-us-cta-container">
    <h2>Contact Us to Plan Your Event</h2>
    <p>Please sign in to get in touch with our team and start planning your perfect event.</p>
    <Link to="/signin" className="btn-primary">Sign In to Contact Us</Link>
  </div>
);

function HomePage() {
  const { isAuthenticated, currentUser } = useAuth();

  return (
    <>
        
      <Hero/>
      <PopularSearch/>
      <EventCategory/>
      {isAuthenticated ? <ContactUs /> : <ContactUsCTA />}
      <Reviews/>
      <Blog/>
      {!isAuthenticated ? (
        <OpenAccount/>
      ) : (
        <div className="text-center p-5 bg-light">
          <h2>Welcome back, {currentUser?.name}!</h2>
          <p className="lead">Ready to plan your next spectacular event? Let's make some magic happen!</p>
          <Link to="/book-event" className="btn btn-primary btn-lg">Let's Get Started!</Link>
        </div>
      )}
      
    </>
  );
}

export default HomePage;