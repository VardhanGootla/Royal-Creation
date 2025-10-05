import React from 'react';
import Hero from './Hero';
import PopularSearch from './PopularSearch';
import EventCategory from './EventCategory';
import ContactUs from './ContactUs';
import Reviews from './Reviews';
import Blog from './Blog';
import OpenAccount from '../OpenAccount'; 

function HomePage() {
  return (
    <>
        
      <Hero/>
      <PopularSearch/>
      <EventCategory/>
      <ContactUs/>
      <Reviews/>
      <Blog/>
      <OpenAccount/>
      
    </>
  );
}

export default HomePage;