import React from 'react';
import CorporateEventCategoryPage from './CorporateEventCategoryPage';

const conferencesData = {
  title: 'Corporate Conferences',
  events: [
    {
      image: '/media/images/search1.jpg',
      title: 'Tech Innovation Summit',
      location: 'Mumbai, Maharashtra',
      description: 'A comprehensive technology innovation summit with keynote speakers, panel discussions, and networking opportunities.',
      includes: [
        'Conference venue setup',
        'Audio-visual equipment',
        'Keynote speaker arrangements',
        'Panel discussion setup',
        'Networking sessions',
        'Catering and refreshments'
      ],
      pricing: {
        total: '₹15,00,000',
        breakdown: [
          { service: 'Conference Venue', cost: '₹500,000' },
          { service: 'Audio-Visual Equipment', cost: '₹300,000' },
          { service: 'Keynote Speakers', cost: '₹400,000' },
          { service: 'Panel Discussion Setup', cost: '₹200,000' },
          { service: 'Networking Sessions', cost: '₹100,000' },
          { service: 'Catering & Refreshments', cost: '₹100,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Business Leadership Forum',
      location: 'Delhi, NCR',
      description: 'An exclusive business leadership forum with industry leaders, strategic discussions, and executive networking.',
      includes: [
        'Executive venue setup',
        'Leadership panel discussions',
        'Strategic planning sessions',
        'Executive networking',
        'Premium catering',
        'Strategic materials'
      ],
      pricing: {
        total: '₹12,00,000',
        breakdown: [
          { service: 'Executive Venue', cost: '₹400,000' },
          { service: 'Leadership Panels', cost: '₹300,000' },
          { service: 'Strategic Sessions', cost: '₹250,000' },
          { service: 'Executive Networking', cost: '₹150,000' },
          { service: 'Premium Catering', cost: '₹80,000' },
          { service: 'Strategic Materials', cost: '₹20,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Industry Best Practices',
      location: 'Bangalore, Karnataka',
      description: 'A comprehensive industry best practices conference with workshops, case studies, and practical implementation sessions.',
      includes: [
        'Workshop venue setup',
        'Case study presentations',
        'Interactive workshops',
        'Best practices sessions',
        'Implementation guides',
        'Professional networking'
      ],
      pricing: {
        total: '₹8,50,000',
        breakdown: [
          { service: 'Workshop Venue', cost: '₹250,000' },
          { service: 'Case Study Presentations', cost: '₹200,000' },
          { service: 'Interactive Workshops', cost: '₹180,000' },
          { service: 'Best Practices Sessions', cost: '₹150,000' },
          { service: 'Implementation Guides', cost: '₹50,000' },
          { service: 'Professional Networking', cost: '₹20,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Global Market Trends',
      location: 'Chennai, Tamil Nadu',
      description: 'An international market trends conference with global speakers, market analysis, and future predictions.',
      includes: [
        'International venue setup',
        'Global speaker arrangements',
        'Market analysis sessions',
        'Future predictions panel',
        'International networking',
        'Global catering'
      ],
      pricing: {
        total: '₹18,00,000',
        breakdown: [
          { service: 'International Venue', cost: '₹600,000' },
          { service: 'Global Speakers', cost: '₹500,000' },
          { service: 'Market Analysis', cost: '₹400,000' },
          { service: 'Future Predictions', cost: '₹200,000' },
          { service: 'International Networking', cost: '₹80,000' },
          { service: 'Global Catering', cost: '₹20,000' }
        ]
      }
    }
  ]
};

const Conferences = () => {
  return <CorporateEventCategoryPage category={conferencesData} />;
};

export default Conferences;
