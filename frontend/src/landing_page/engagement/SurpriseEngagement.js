import React from 'react';
import EngagementCategoryPage from './EngagementCategoryPage';

const surpriseEngagementData = {
  title: 'Surprise Engagement Celebrations',
  engagements: [
    {
      image: '/media/images/search1.jpg',
      title: 'Flash Mob Surprise',
      location: 'Mumbai, Maharashtra',
      description: 'An exciting flash mob surprise engagement with choreographed dance, music, and celebration in a public space.',
      includes: [
        'Flash mob choreography',
        'Surprise coordination',
        'Public venue setup',
        'Music and sound system',
        'Video recording',
        'Celebration setup'
      ],
      pricing: {
        total: '₹1,50,000',
        breakdown: [
          { service: 'Flash Mob Choreography', cost: '₹60,000' },
          { service: 'Surprise Coordination', cost: '₹30,000' },
          { service: 'Public Venue Setup', cost: '₹25,000' },
          { service: 'Music & Sound', cost: '₹20,000' },
          { service: 'Video Recording', cost: '₹10,000' },
          { service: 'Celebration Setup', cost: '₹5,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Home Sweet Surprise',
      location: 'Delhi, NCR',
      description: 'A intimate surprise engagement at home with family and close friends, featuring personalized decorations and heartfelt moments.',
      includes: [
        'Home decoration setup',
        'Personalized decorations',
        'Family coordination',
        'Intimate catering',
        'Memory lane activities',
        'Surprise video messages'
      ],
      pricing: {
        total: '₹80,000',
        breakdown: [
          { service: 'Home Decorations', cost: '₹25,000' },
          { service: 'Personalized Items', cost: '₹15,000' },
          { service: 'Family Coordination', cost: '₹10,000' },
          { service: 'Intimate Catering', cost: '₹20,000' },
          { service: 'Memory Activities', cost: '₹7,000' },
          { service: 'Video Messages', cost: '₹3,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Destination Surprise',
      location: 'Goa',
      description: 'A surprise destination engagement with travel coordination, beach celebration, and memorable experiences.',
      includes: [
        'Travel coordination',
        'Destination decorations',
        'Beach celebration setup',
        'Surprise activities',
        'Destination photography',
        'Memorable experiences'
      ],
      pricing: {
        total: '₹2,00,000',
        breakdown: [
          { service: 'Travel Coordination', cost: '₹60,000' },
          { service: 'Destination Decorations', cost: '₹40,000' },
          { service: 'Beach Celebration', cost: '₹50,000' },
          { service: 'Surprise Activities', cost: '₹30,000' },
          { service: 'Destination Photography', cost: '₹15,000' },
          { service: 'Experiences', cost: '₹5,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Restaurant Surprise',
      location: 'Bangalore, Karnataka',
      description: 'A romantic surprise engagement in a fine dining restaurant with elegant decorations, gourmet dinner, and intimate celebration.',
      includes: [
        'Restaurant coordination',
        'Elegant table setup',
        'Gourmet dinner service',
        'Surprise entertainment',
        'Professional photography',
        'Romantic atmosphere'
      ],
      pricing: {
        total: '₹1,20,000',
        breakdown: [
          { service: 'Restaurant Coordination', cost: '₹30,000' },
          { service: 'Elegant Table Setup', cost: '₹25,000' },
          { service: 'Gourmet Dinner', cost: '₹40,000' },
          { service: 'Surprise Entertainment', cost: '₹15,000' },
          { service: 'Professional Photography', cost: '₹8,000' },
          { service: 'Romantic Atmosphere', cost: '₹2,000' }
        ]
      }
    }
  ]
};

const SurpriseEngagement = () => {
  return <EngagementCategoryPage category={surpriseEngagementData} />;
};

export default SurpriseEngagement;
