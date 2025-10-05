import React from 'react';
import EngagementCategoryPage from './EngagementCategoryPage';

const modernEngagementData = {
  title: 'Modern Engagement Celebrations',
  engagements: [
    {
      image: '/media/images/search1.jpg',
      title: 'Garden Party Engagement',
      location: 'Mumbai, Maharashtra',
      description: 'A contemporary garden party engagement with modern decorations, live music, and elegant outdoor celebration.',
      includes: [
        'Modern garden decorations',
        'Outdoor ceremony setup',
        'Live music performance',
        'Contemporary catering',
        'Professional photography',
        'Modern entertainment'
      ],
      pricing: {
        total: '₹3,00,000',
        breakdown: [
          { service: 'Garden Decorations', cost: '₹100,000' },
          { service: 'Outdoor Setup', cost: '₹60,000' },
          { service: 'Live Music', cost: '₹50,000' },
          { service: 'Contemporary Catering', cost: '₹70,000' },
          { service: 'Professional Photography', cost: '₹15,000' },
          { service: 'Entertainment', cost: '₹5,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Rooftop Engagement',
      location: 'Delhi, NCR',
      description: 'A stylish rooftop engagement with city views, modern decorations, and contemporary celebration elements.',
      includes: [
        'Rooftop venue setup',
        'Modern city view decorations',
        'Contemporary music setup',
        'Gourmet catering',
        'Skyline photography',
        'Modern celebration elements'
      ],
      pricing: {
        total: '₹2,80,000',
        breakdown: [
          { service: 'Rooftop Venue', cost: '₹80,000' },
          { service: 'Modern Decorations', cost: '₹70,000' },
          { service: 'Music Setup', cost: '₹40,000' },
          { service: 'Gourmet Catering', cost: '₹60,000' },
          { service: 'Skyline Photography', cost: '₹25,000' },
          { service: 'Celebration Elements', cost: '₹5,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Beach Engagement',
      location: 'Goa',
      description: 'A romantic beach engagement with sunset views, beach decorations, and intimate celebration by the sea.',
      includes: [
        'Beach venue setup',
        'Sunset decorations',
        'Beach ceremony setup',
        'Seafood catering',
        'Sunset photography',
        'Beach entertainment'
      ],
      pricing: {
        total: '₹2,20,000',
        breakdown: [
          { service: 'Beach Venue', cost: '₹60,000' },
          { service: 'Sunset Decorations', cost: '₹50,000' },
          { service: 'Beach Ceremony', cost: '₹40,000' },
          { service: 'Seafood Catering', cost: '₹50,000' },
          { service: 'Sunset Photography', cost: '₹15,000' },
          { service: 'Beach Entertainment', cost: '₹5,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Art Gallery Engagement',
      location: 'Bangalore, Karnataka',
      description: 'A sophisticated engagement in an art gallery with contemporary art, modern decorations, and cultural celebration.',
      includes: [
        'Art gallery venue',
        'Contemporary art display',
        'Modern ceremony setup',
        'Artistic catering',
        'Artistic photography',
        'Cultural performances'
      ],
      pricing: {
        total: '₹2,60,000',
        breakdown: [
          { service: 'Art Gallery Venue', cost: '₹70,000' },
          { service: 'Art Display', cost: '₹50,000' },
          { service: 'Modern Setup', cost: '₹60,000' },
          { service: 'Artistic Catering', cost: '₹50,000' },
          { service: 'Artistic Photography', cost: '₹20,000' },
          { service: 'Cultural Performances', cost: '₹10,000' }
        ]
      }
    }
  ]
};

const ModernEngagement = () => {
  return <EngagementCategoryPage category={modernEngagementData} />;
};

export default ModernEngagement;
