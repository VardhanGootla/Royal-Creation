import React from 'react';
import AnniversaryCategoryPage from './AnniversaryCategoryPage';

const silverAnniversaryData = {
  title: '25th Silver Anniversary Celebrations',
  anniversaries: [
    {
      image: '/media/images/search1.jpg',
      title: 'Silver Garden Party',
      location: 'Mumbai, Maharashtra',
      description: 'A elegant silver anniversary celebration in a beautiful garden setting with silver decorations and romantic atmosphere.',
      includes: [
        'Silver-themed decorations',
        'Garden venue setup',
        'Silver anniversary cake',
        'Professional photography',
        'Live music performance',
        'Silver anniversary gifts'
      ],
      pricing: {
        total: '₹3,50,000',
        breakdown: [
          { service: 'Silver Decorations', cost: '₹120,000' },
          { service: 'Garden Venue', cost: '₹80,000' },
          { service: 'Silver Anniversary Cake', cost: '₹30,000' },
          { service: 'Professional Photography', cost: '₹50,000' },
          { service: 'Live Music', cost: '₹40,000' },
          { service: 'Silver Gifts', cost: '₹30,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Intimate Silver Dinner',
      location: 'Delhi, NCR',
      description: 'An intimate silver anniversary dinner with close family and friends, featuring gourmet cuisine and elegant silver decorations.',
      includes: [
        'Intimate venue setup',
        'Silver table decorations',
        'Gourmet dinner service',
        'Silver anniversary wine',
        'Professional photography',
        'Personalized silver gifts'
      ],
      pricing: {
        total: '₹2,20,000',
        breakdown: [
          { service: 'Intimate Venue', cost: '₹60,000' },
          { service: 'Silver Table Decor', cost: '₹40,000' },
          { service: 'Gourmet Dinner', cost: '₹80,000' },
          { service: 'Silver Anniversary Wine', cost: '₹20,000' },
          { service: 'Photography', cost: '₹15,000' },
          { service: 'Personalized Gifts', cost: '₹5,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Silver Beach Celebration',
      location: 'Goa',
      description: 'A romantic silver anniversary celebration on the beach with sunset views, silver decorations, and beachside dinner.',
      includes: [
        'Beach venue setup',
        'Silver beach decorations',
        'Sunset dinner setup',
        'Beach photography',
        'Romantic entertainment',
        'Silver anniversary ceremony'
      ],
      pricing: {
        total: '₹2,80,000',
        breakdown: [
          { service: 'Beach Venue', cost: '₹70,000' },
          { service: 'Silver Beach Decor', cost: '₹60,000' },
          { service: 'Sunset Dinner', cost: '₹80,000' },
          { service: 'Beach Photography', cost: '₹35,000' },
          { service: 'Romantic Entertainment', cost: '₹25,000' },
          { service: 'Silver Ceremony', cost: '₹10,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Silver Renewal Ceremony',
      location: 'Bangalore, Karnataka',
      description: 'A beautiful silver anniversary renewal ceremony with vows renewal, family blessings, and silver-themed celebrations.',
      includes: [
        'Renewal ceremony setup',
        'Silver ceremony decorations',
        'Vows renewal ceremony',
        'Family blessing ceremony',
        'Silver anniversary photography',
        'Celebration reception'
      ],
      pricing: {
        total: '₹3,20,000',
        breakdown: [
          { service: 'Ceremony Setup', cost: '₹100,000' },
          { service: 'Silver Decorations', cost: '₹80,000' },
          { service: 'Vows Renewal', cost: '₹50,000' },
          { service: 'Family Blessing', cost: '₹30,000' },
          { service: 'Photography', cost: '₹40,000' },
          { service: 'Reception', cost: '₹20,000' }
        ]
      }
    }
  ]
};

const SilverAnniversary = () => {
  return <AnniversaryCategoryPage category={silverAnniversaryData} />;
};

export default SilverAnniversary;
