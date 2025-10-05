import React from 'react';
import CulturePage from '../CulturePage';

const teluguWeddings = {
  title: 'Telugu Weddings',
  weddings: [
    {
      image: '/media/images/search1.jpg',
      title: 'Aarav & Ananya',
      location: 'Hyderabad, Telangana',
      description: 'A splendid wedding in the city of pearls, Hyderabad, celebrating the rich and vibrant Telugu culture.',
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
        'Nischitartham (Engagement)',
        'Pellikuthuru (Making of the Bride)',
        'Kashi Yatra (Pilgrimage to Kashi)',
        'Mangala Snanam (Holy Bath)',
        'Jeelakarra Bellam (Cumin and Jaggery)',
        'Talambralu (Showering of Rice)',
        'Arundhati Nakshatram (Arundhati Star Sighting)'
      ]
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Vivaan & Ishita',
      location: 'Visakhapatnam, Andhra Pradesh',
      description: 'A beautiful coastal wedding in Visakhapatnam, blending traditional Telugu rituals with scenic beauty.',
      expenses: {
        total: '₹18,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹6,00,000' },
          { item: 'Catering', cost: '₹5,00,000' },
          { item: 'Decor', cost: '₹3,50,000' },
          { item: 'Photography', cost: '₹2,50,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Nischitartham (Engagement)',
        'Pellikuthuru (Making of the Bride)',
        'Kashi Yatra (Pilgrimage to Kashi)',
        'Mangala Snanam (Holy Bath)',
        'Jeelakarra Bellam (Cumin and Jaggery)',
        'Talambralu (Showering of Rice)',
        'Arundhati Nakshatram (Arundhati Star Sighting)'
      ]
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Aditya & Diya',
      location: 'Vijayawada, Andhra Pradesh',
      description: 'A grand wedding celebration in the heart of Andhra Pradesh, Vijayawada.',
       expenses: {
        total: '₹20,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹7,00,000' },
          { item: 'Catering', cost: '₹6,00,000' },
          { item: 'Decor', cost: '₹3,00,000' },
          { item: 'Photography', cost: '₹2,50,000' },
          { item: 'Entertainment', cost: '₹1,50,000' }
        ]
      },
      rituals: [
        'Nischitartham (Engagement)',
        'Pellikuthuru (Making of the Bride)',
        'Kashi Yatra (Pilgrimage to Kashi)',
        'Mangala Snanam (Holy Bath)',
        'Jeelakarra Bellam (Cumin and Jaggery)',
        'Talambralu (Showering of Rice)',
        'Arundhati Nakshatram (Arundhati Star Sighting)'
      ]
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Arjun & Myra',
      location: 'Warangal, Telangana',
      description: 'A historic wedding in the ancient city of Warangal, celebrating Telugu heritage and traditions.',
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
        'Nischitartham (Engagement)',
        'Pellikuthuru (Making of the Bride)',
        'Kashi Yatra (Pilgrimage to Kashi)',
        'Mangala Snanam (Holy Bath)',
        'Jeelakarra Bellam (Cumin and Jaggery)',
        'Talambralu (Showering of Rice)',
        'Arundhati Nakshatram (Arundhati Star Sighting)'
      ]
    },
    {
      image: '/media/images/search5.jpg',
      title: 'Sai & Riya',
      location: 'Guntur, Andhra Pradesh',
      description: 'A vibrant and spicy wedding in Guntur, reflecting the local culture and traditions.',
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
        'Nischitartham (Engagement)',
        'Pellikuthuru (Making of the Bride)',
        'Kashi Yatra (Pilgrimage to Kashi)',
        'Mangala Snanam (Holy Bath)',
        'Jeelakarra Bellam (Cumin and Jaggery)',
        'Talambralu (Showering of Rice)',
        'Arundhati Nakshatram (Arundhati Star Sighting)'
      ]
    },
    {
        image: '/media/images/Anniversaries.jpg',
        title: 'Kabir & Zara',
        location: 'Nellore, Andhra Pradesh',
        description: 'A beautiful wedding in the city of Nellore, known for its rich culture and delicious food.',
         expenses: {
        total: '₹16,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹6,00,000' },
          { item: 'Catering', cost: '₹4,00,000' },
          { item: 'Decor', cost: '₹3,00,000' },
          { item: 'Photography', cost: '₹2,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Nischitartham (Engagement)',
        'Pellikuthuru (Making of the Bride)',
        'Kashi Yatra (Pilgrimage to Kashi)',
        'Mangala Snanam (Holy Bath)',
        'Jeelakarra Bellam (Cumin and Jaggery)',
        'Talambralu (Showering of Rice)',
        'Arundhati Nakshatram (Arundhati Star Sighting)'
      ]
    }
  ]
};

const Telugu = () => {
  return <CulturePage culture={teluguWeddings} />;
};

export default Telugu;