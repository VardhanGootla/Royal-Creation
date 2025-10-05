import React from 'react';
import AnniversaryCategoryPage from './AnniversaryCategoryPage';

const goldenAnniversaryData = {
  title: '50th Golden Anniversary Celebrations',
  anniversaries: [
    {
      image: '/media/images/search1.jpg',
      title: 'Golden Palace Celebration',
      location: 'Mumbai, Maharashtra',
      description: 'A magnificent golden anniversary celebration in a palace setting with gold decorations, royal treatment, and grand festivities.',
      includes: [
        'Palace venue setup',
        'Gold-themed decorations',
        'Royal treatment service',
        'Golden anniversary cake',
        'Professional photography',
        'Golden anniversary gifts'
      ],
      pricing: {
        total: '₹8,00,000',
        breakdown: [
          { service: 'Palace Venue', cost: '₹300,000' },
          { service: 'Gold Decorations', cost: '₹200,000' },
          { service: 'Royal Service', cost: '₹150,000' },
          { service: 'Golden Anniversary Cake', cost: '₹50,000' },
          { service: 'Professional Photography', cost: '₹80,000' },
          { service: 'Golden Gifts', cost: '₹20,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Golden Garden Gala',
      location: 'Delhi, NCR',
      description: 'A grand golden anniversary gala in a beautiful garden with gold decorations, live entertainment, and family celebration.',
      includes: [
        'Garden gala setup',
        'Gold garden decorations',
        'Live entertainment show',
        'Gourmet catering',
        'Golden anniversary ceremony',
        'Family celebration activities'
      ],
      pricing: {
        total: '₹6,50,000',
        breakdown: [
          { service: 'Garden Gala Setup', cost: '₹200,000' },
          { service: 'Gold Garden Decor', cost: '₹150,000' },
          { service: 'Live Entertainment', cost: '₹100,000' },
          { service: 'Gourmet Catering', cost: '₹150,000' },
          { service: 'Golden Ceremony', cost: '₹30,000' },
          { service: 'Family Activities', cost: '₹20,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Golden Beach Paradise',
      location: 'Goa',
      description: 'A luxurious golden anniversary celebration on a private beach with gold decorations, sunset views, and beachside luxury.',
      includes: [
        'Private beach venue',
        'Gold beach decorations',
        'Luxury beach setup',
        'Sunset photography',
        'Beachside entertainment',
        'Golden anniversary ceremony'
      ],
      pricing: {
        total: '₹7,20,000',
        breakdown: [
          { service: 'Private Beach Venue', cost: '₹250,000' },
          { service: 'Gold Beach Decor', cost: '₹180,000' },
          { service: 'Luxury Beach Setup', cost: '₹150,000' },
          { service: 'Sunset Photography', cost: '₹80,000' },
          { service: 'Beach Entertainment', cost: '₹40,000' },
          { service: 'Golden Ceremony', cost: '₹20,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Golden Renewal Ceremony',
      location: 'Chennai, Tamil Nadu',
      description: 'A sacred golden anniversary renewal ceremony with traditional rituals, family blessings, and golden celebrations.',
      includes: [
        'Sacred ceremony setup',
        'Golden traditional decorations',
        'Renewal ceremony rituals',
        'Family blessing ceremony',
        'Golden anniversary photography',
        'Traditional celebration'
      ],
      pricing: {
        total: '₹5,80,000',
        breakdown: [
          { service: 'Sacred Ceremony Setup', cost: '₹180,000' },
          { service: 'Golden Traditional Decor', cost: '₹150,000' },
          { service: 'Renewal Rituals', cost: '₹100,000' },
          { service: 'Family Blessing', cost: '₹80,000' },
          { service: 'Golden Photography', cost: '₹60,000' },
          { service: 'Traditional Celebration', cost: '₹10,000' }
        ]
      }
    }
  ]
};

const GoldenAnniversary = () => {
  return <AnniversaryCategoryPage category={goldenAnniversaryData} />;
};

export default GoldenAnniversary;
