import React from 'react';
import BirthdayCategoryPage from './BirthdayCategoryPage';

const surpriseBirthdayData = {
  title: 'Surprise Birthday Parties',
  parties: [
    {
      image: '/media/images/search1.jpg',
      title: 'Secret Garden Surprise',
      location: 'Mumbai, Maharashtra',
      description: 'A beautifully orchestrated surprise party in a secret garden setting with elegant decorations and intimate celebration.',
      includes: [
        'Secret venue coordination',
        'Elegant garden decorations',
        'Surprise entrance setup',
        'Professional photography',
        'Intimate catering',
        'Surprise entertainment'
      ],
      pricing: {
        total: '₹75,000',
        breakdown: [
          { service: 'Venue & Coordination', cost: '₹25,000' },
          { service: 'Garden Decorations', cost: '₹20,000' },
          { service: 'Surprise Setup', cost: '₹10,000' },
          { service: 'Photography', cost: '₹12,000' },
          { service: 'Intimate Catering', cost: '₹6,000' },
          { service: 'Entertainment', cost: '₹2,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Flash Mob Surprise',
      location: 'Delhi, NCR',
      description: 'An exciting flash mob surprise with choreographed dance, music, and celebration in a public space.',
      includes: [
        'Flash mob choreography',
        'Music and sound setup',
        'Dance performance',
        'Surprise coordination',
        'Video recording',
        'Celebration setup'
      ],
      pricing: {
        total: '₹55,000',
        breakdown: [
          { service: 'Choreography', cost: '₹20,000' },
          { service: 'Music & Sound', cost: '₹10,000' },
          { service: 'Dance Performance', cost: '₹15,000' },
          { service: 'Coordination', cost: '₹5,000' },
          { service: 'Video Recording', cost: '₹4,000' },
          { service: 'Celebration Setup', cost: '₹1,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Home Sweet Surprise',
      location: 'Bangalore, Karnataka',
      description: 'A cozy surprise party at home with family and close friends, featuring personalized decorations and heartfelt moments.',
      includes: [
        'Home decoration setup',
        'Personalized decorations',
        'Family photo display',
        'Home-cooked special meal',
        'Memory lane activities',
        'Surprise video messages'
      ],
      pricing: {
        total: '₹25,000',
        breakdown: [
          { service: 'Home Decorations', cost: '₹8,000' },
          { service: 'Personalized Items', cost: '₹5,000' },
          { service: 'Photo Display', cost: '₹3,000' },
          { service: 'Special Meal', cost: '₹6,000' },
          { service: 'Memory Activities', cost: '₹2,000' },
          { service: 'Video Messages', cost: '₹1,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Destination Surprise',
      location: 'Goa',
      description: 'A surprise destination birthday celebration with travel coordination, beach party, and memorable experiences.',
      includes: [
        'Travel coordination',
        'Destination decorations',
        'Beach party setup',
        'Surprise activities',
        'Professional photography',
        'Memorable experiences'
      ],
      pricing: {
        total: '₹1,20,000',
        breakdown: [
          { service: 'Travel Coordination', cost: '₹40,000' },
          { service: 'Beach Decorations', cost: '₹25,000' },
          { service: 'Party Setup', cost: '₹20,000' },
          { service: 'Surprise Activities', cost: '₹15,000' },
          { service: 'Photography', cost: '₹15,000' },
          { service: 'Experiences', cost: '₹5,000' }
        ]
      }
    }
  ]
};

const SurpriseBirthday = () => {
  return <BirthdayCategoryPage category={surpriseBirthdayData} />;
};

export default SurpriseBirthday;
