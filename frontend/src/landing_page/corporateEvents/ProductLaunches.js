import React from 'react';
import CorporateEventCategoryPage from './CorporateEventCategoryPage';

const productLaunchesData = {
  title: 'Product Launch Events',
  events: [
    {
      image: '/media/images/search1.jpg',
      title: 'Tech Product Launch',
      location: 'Mumbai, Maharashtra',
      description: 'A spectacular technology product launch with live demonstrations, media coverage, and industry showcase.',
      includes: [
        'Product launch venue',
        'Live demonstration setup',
        'Media coverage arrangements',
        'Industry showcase',
        'Product presentation',
        'Launch celebration'
      ],
      pricing: {
        total: '₹20,00,000',
        breakdown: [
          { service: 'Launch Venue', cost: '₹800,000' },
          { service: 'Live Demo Setup', cost: '₹500,000' },
          { service: 'Media Coverage', cost: '₹400,000' },
          { service: 'Industry Showcase', cost: '₹200,000' },
          { service: 'Product Presentation', cost: '₹80,000' },
          { service: 'Launch Celebration', cost: '₹20,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Fashion Brand Launch',
      location: 'Delhi, NCR',
      description: 'An elegant fashion brand launch with runway show, celebrity appearances, and fashion industry networking.',
      includes: [
        'Fashion launch venue',
        'Runway show setup',
        'Celebrity arrangements',
        'Fashion industry networking',
        'Brand presentation',
        'Fashion celebration'
      ],
      pricing: {
        total: '₹25,00,000',
        breakdown: [
          { service: 'Fashion Venue', cost: '₹1,000,000' },
          { service: 'Runway Setup', cost: '₹600,000' },
          { service: 'Celebrity Arrangements', cost: '₹500,000' },
          { service: 'Fashion Networking', cost: '₹300,000' },
          { service: 'Brand Presentation', cost: '₹150,000' },
          { service: 'Fashion Celebration', cost: '₹50,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Automotive Launch',
      location: 'Bangalore, Karnataka',
      description: 'A dynamic automotive product launch with vehicle showcase, test drives, and automotive industry presentation.',
      includes: [
        'Automotive venue setup',
        'Vehicle showcase area',
        'Test drive arrangements',
        'Automotive industry presentation',
        'Vehicle demonstrations',
        'Launch celebration'
      ],
      pricing: {
        total: '₹30,00,000',
        breakdown: [
          { service: 'Automotive Venue', cost: '₹1,200,000' },
          { service: 'Vehicle Showcase', cost: '₹800,000' },
          { service: 'Test Drive Arrangements', cost: '₹600,000' },
          { service: 'Industry Presentation', cost: '₹300,000' },
          { service: 'Vehicle Demonstrations', cost: '₹80,000' },
          { service: 'Launch Celebration', cost: '₹20,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Luxury Brand Launch',
      location: 'Goa',
      description: 'An exclusive luxury brand launch with premium venue, VIP guests, and luxury brand experience.',
      includes: [
        'Luxury venue setup',
        'VIP guest arrangements',
        'Luxury brand experience',
        'Premium catering',
        'Luxury presentation',
        'Exclusive celebration'
      ],
      pricing: {
        total: '₹35,00,000',
        breakdown: [
          { service: 'Luxury Venue', cost: '₹1,500,000' },
          { service: 'VIP Arrangements', cost: '₹800,000' },
          { service: 'Luxury Experience', cost: '₹700,000' },
          { service: 'Premium Catering', cost: '₹300,000' },
          { service: 'Luxury Presentation', cost: '₹150,000' },
          { service: 'Exclusive Celebration', cost: '₹50,000' }
        ]
      }
    }
  ]
};

const ProductLaunches = () => {
  return <CorporateEventCategoryPage category={productLaunchesData} />;
};

export default ProductLaunches;
