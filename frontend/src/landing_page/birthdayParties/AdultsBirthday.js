import React from 'react';
import BirthdayCategoryPage from './BirthdayCategoryPage';

const adultsBirthdayData = {
  title: 'Adults Birthday Parties',
  parties: [
    {
      image: '/media/images/search1.jpg',
      title: 'Elegant Garden Party',
      location: 'Mumbai, Maharashtra',
      description: 'A sophisticated outdoor celebration with elegant decorations, gourmet catering, and live entertainment.',
      includes: [
        'Elegant garden decorations',
        'Premium catering service',
        'Live music performance',
        'Professional photography',
        'Floral arrangements',
        'Cocktail bar service'
      ],
      pricing: {
        total: '₹1,50,000',
        breakdown: [
          { service: 'Venue & Decorations', cost: '₹50,000' },
          { service: 'Premium Catering', cost: '₹60,000' },
          { service: 'Live Entertainment', cost: '₹20,000' },
          { service: 'Photography', cost: '₹15,000' },
          { service: 'Floral Arrangements', cost: '₹3,000' },
          { service: 'Bar Service', cost: '₹2,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Roaring 20s Theme',
      location: 'Delhi, NCR',
      description: 'A glamorous 1920s themed party with vintage decorations, jazz music, and period costumes.',
      includes: [
        'Vintage 1920s decorations',
        'Jazz band performance',
        'Costume accessories',
        'Vintage photo booth',
        'Art deco cake',
        'Prohibition-style cocktails'
      ],
      pricing: {
        total: '₹1,20,000',
        breakdown: [
          { service: 'Vintage Decorations', cost: '₹40,000' },
          { service: 'Jazz Band', cost: '₹30,000' },
          { service: 'Costume Accessories', cost: '₹15,000' },
          { service: 'Photo Booth', cost: '₹20,000' },
          { service: 'Art Deco Cake', cost: '₹10,000' },
          { service: 'Cocktail Bar', cost: '₹5,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Beach Party Celebration',
      location: 'Goa',
      description: 'A tropical beach party with ocean views, beach games, and sunset celebrations.',
      includes: [
        'Beach venue setup',
        'Tropical decorations',
        'Beach games and activities',
        'BBQ and seafood catering',
        'Sunset photography',
        'Tropical cocktails'
      ],
      pricing: {
        total: '₹80,000',
        breakdown: [
          { service: 'Beach Venue', cost: '₹25,000' },
          { service: 'Tropical Decorations', cost: '₹15,000' },
          { service: 'Beach Games', cost: '₹10,000' },
          { service: 'BBQ Catering', cost: '₹20,000' },
          { service: 'Photography', cost: '₹8,000' },
          { service: 'Cocktails', cost: '₹2,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Wine Tasting Party',
      location: 'Nashik, Maharashtra',
      description: 'A sophisticated wine tasting experience with premium wines, cheese pairings, and sommelier guidance.',
      includes: [
        'Premium wine selection',
        'Cheese and charcuterie board',
        'Sommelier service',
        'Wine education session',
        'Elegant table setup',
        'Wine tasting notes'
      ],
      pricing: {
        total: '₹60,000',
        breakdown: [
          { service: 'Premium Wines', cost: '₹30,000' },
          { service: 'Cheese & Charcuterie', cost: '₹15,000' },
          { service: 'Sommelier Service', cost: '₹8,000' },
          { service: 'Table Setup', cost: '₹4,000' },
          { service: 'Education Materials', cost: '₹2,000' },
          { service: 'Tasting Notes', cost: '₹1,000' }
        ]
      }
    }
  ]
};

const AdultsBirthday = () => {
  return <BirthdayCategoryPage category={adultsBirthdayData} />;
};

export default AdultsBirthday;
