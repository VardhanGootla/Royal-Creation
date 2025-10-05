import React from 'react';
import AnniversaryCategoryPage from './AnniversaryCategoryPage';

const milestoneAnniversaryData = {
  title: 'Milestone Anniversary Celebrations',
  anniversaries: [
    {
      image: '/media/images/search1.jpg',
      title: 'Diamond Jubilee Celebration',
      location: 'Mumbai, Maharashtra',
      description: 'A spectacular diamond jubilee celebration marking 60 years of togetherness with diamond-themed decorations and grand festivities.',
      includes: [
        'Diamond-themed decorations',
        'Luxury venue setup',
        'Diamond anniversary cake',
        'Professional photography',
        'Live orchestra performance',
        'Diamond anniversary gifts'
      ],
      pricing: {
        total: '₹12,00,000',
        breakdown: [
          { service: 'Diamond Decorations', cost: '₹400,000' },
          { service: 'Luxury Venue', cost: '₹300,000' },
          { service: 'Diamond Anniversary Cake', cost: '₹100,000' },
          { service: 'Professional Photography', cost: '₹150,000' },
          { service: 'Live Orchestra', cost: '₹200,000' },
          { service: 'Diamond Gifts', cost: '₹50,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Platinum Anniversary Gala',
      location: 'Delhi, NCR',
      description: 'An exclusive platinum anniversary gala celebrating 70 years of marriage with platinum decorations and royal treatment.',
      includes: [
        'Platinum-themed decorations',
        'Exclusive gala setup',
        'Platinum anniversary ceremony',
        'Royal catering service',
        'Platinum photography',
        'Exclusive entertainment'
      ],
      pricing: {
        total: '₹15,00,000',
        breakdown: [
          { service: 'Platinum Decorations', cost: '₹500,000' },
          { service: 'Exclusive Gala Setup', cost: '₹400,000' },
          { service: 'Platinum Ceremony', cost: '₹200,000' },
          { service: 'Royal Catering', cost: '₹300,000' },
          { service: 'Platinum Photography', cost: '₹150,000' },
          { service: 'Exclusive Entertainment', cost: '₹50,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Ruby Anniversary Celebration',
      location: 'Bangalore, Karnataka',
      description: 'A beautiful ruby anniversary celebration marking 40 years of marriage with ruby-themed decorations and romantic atmosphere.',
      includes: [
        'Ruby-themed decorations',
        'Romantic venue setup',
        'Ruby anniversary cake',
        'Romantic photography',
        'Live music performance',
        'Ruby anniversary gifts'
      ],
      pricing: {
        total: '₹4,50,000',
        breakdown: [
          { service: 'Ruby Decorations', cost: '₹150,000' },
          { service: 'Romantic Venue', cost: '₹100,000' },
          { service: 'Ruby Anniversary Cake', cost: '₹40,000' },
          { service: 'Romantic Photography', cost: '₹80,000' },
          { service: 'Live Music', cost: '₹60,000' },
          { service: 'Ruby Gifts', cost: '₹20,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Sapphire Anniversary Gala',
      location: 'Hyderabad, Telangana',
      description: 'An elegant sapphire anniversary celebration marking 45 years of marriage with sapphire decorations and sophisticated festivities.',
      includes: [
        'Sapphire-themed decorations',
        'Elegant venue setup',
        'Sapphire anniversary ceremony',
        'Sophisticated catering',
        'Sapphire photography',
        'Elegant entertainment'
      ],
      pricing: {
        total: '₹6,80,000',
        breakdown: [
          { service: 'Sapphire Decorations', cost: '₹220,000' },
          { service: 'Elegant Venue', cost: '₹180,000' },
          { service: 'Sapphire Ceremony', cost: '₹120,000' },
          { service: 'Sophisticated Catering', cost: '₹150,000' },
          { service: 'Sapphire Photography', cost: '₹80,000' },
          { service: 'Elegant Entertainment', cost: '₹30,000' }
        ]
      }
    }
  ]
};

const MilestoneAnniversary = () => {
  return <AnniversaryCategoryPage category={milestoneAnniversaryData} />;
};

export default MilestoneAnniversary;
