import React from 'react';
import CulturePage from '../CulturePage';

const maharashtrianWeddings = {
  title: 'Maharashtrian Weddings',
  weddings: [
    {
      image: '/media/images/search1.jpg',
      title: 'Priya & Rohan',
      location: 'Pune, Maharashtra',
      description: 'A beautiful traditional wedding in the heart of Pune, celebrating Maharashtrian culture with a modern twist.',
      expenses: {
        total: '₹15,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹5,00,000' },
          { item: 'Catering', cost: '₹4,00,000' },
          { item: 'Decor', cost: '₹3,00,000' },
          { item: 'Photography', cost: '₹2,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Sakhar Puda (Engagement)',
        'Halad Chadavane (Haldi Ceremony)',
        'Gaurihar Puja',
        'Antarpat',
        'Kanyadaan',
        'Saptapadi (Seven Steps)',
        'Varat (Bride\'s Farewell)'
      ]
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Anika & Sameer',
      location: 'Mumbai, Maharashtra',
      description: 'A grand celebration in Mumbai, blending traditional rituals with contemporary style.',
      expenses: {
        total: '₹25,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹10,00,000' },
          { item: 'Catering', cost: '₹7,00,000' },
          { item: 'Decor', cost: '₹4,00,000' },
          { item: 'Photography', cost: '₹3,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Sakhar Puda (Engagement)',
        'Halad Chadavane (Haldi Ceremony)',
        'Gaurihar Puja',
        'Antarpat',
        'Kanyadaan',
        'Saptapadi (Seven Steps)',
        'Varat (Bride\'s Farewell)'
      ]
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Meera & Aditya',
      location: 'Nagpur, Maharashtra',
      description: 'An elegant and intimate wedding in Nagpur, focusing on the beauty of Maharashtrian traditions.',
       expenses: {
        total: '₹12,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹4,00,000' },
          { item: 'Catering', cost: '₹3,00,000' },
          { item: 'Decor', cost: '₹2,00,000' },
          { item: 'Photography', cost: '₹2,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Sakhar Puda (Engagement)',
        'Halad Chadavane (Haldi Ceremony)',
        'Gaurihar Puja',
        'Antarpat',
        'Kanyadaan',
        'Saptapadi (Seven Steps)',
        'Varat (Bride\'s Farewell)'
      ]
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Riya & Arjun',
      location: 'Nashik, Maharashtra',
      description: 'A picturesque wedding in the vineyards of Nashik, combining natural beauty with cultural richness.',
       expenses: {
        total: '₹18,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹6,00,000' },
          { item: 'Catering', cost: '₹5,00,000' },
          { item: 'Decor', cost: '₹3,00,000' },
          { item: 'Photography', cost: '₹3,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Sakhar Puda (Engagement)',
        'Halad Chadavane (Haldi Ceremony)',
        'Gaurihar Puja',
        'Antarpat',
        'Kanyadaan',
        'Saptapadi (Seven Steps)',
        'Varat (Bride\'s Farewell)'
      ]
    },
    {
      image: '/media/images/search5.jpg',
      title: 'Diya & Ishaan',
      location: 'Aurangabad, Maharashtra',
      description: 'A royal wedding experience in the historic city of Aurangabad, filled with grandeur and tradition.',
       expenses: {
        total: '₹10,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹3,00,000' },
          { item: 'Catering', cost: '₹3,00,000' },
          { item: 'Decor', cost: '₹2,00,000' },
          { item: 'Photography', cost: '₹1,50,000' },
          { item: 'Entertainment', cost: '₹50,000' }
        ]
      },
      rituals: [
        'Sakhar Puda (Engagement)',
        'Halad Chadavane (Haldi Ceremony)',
        'Gaurihar Puja',
        'Antarpat',
        'Kanyadaan',
        'Saptapadi (Seven Steps)',
        'Varat (Bride\'s Farewell)'
      ]
    },
    {
        image: '/media/images/Anniversaries.jpg',
        title: 'Saanvi & Vihaan',
        location: 'Thane, Maharashtra',
        description: 'A vibrant and lively wedding in Thane, celebrating love and togetherness with family and friends.',
         expenses: {
        total: '₹22,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹8,00,000' },
          { item: 'Catering', cost: '₹6,00,000' },
          { item: 'Decor', cost: '₹4,00,000' },
          { item: 'Photography', cost: '₹3,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Sakhar Puda (Engagement)',
        'Halad Chadavane (Haldi Ceremony)',
        'Gaurihar Puja',
        'Antarpat',
        'Kanyadaan',
        'Saptapadi (Seven Steps)',
        'Varat (Bride\'s Farewell)'
      ]
    }
  ]
};

const Maharashtrian = () => {
  return <CulturePage culture={maharashtrianWeddings} />;
};

export default Maharashtrian;
