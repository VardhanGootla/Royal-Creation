import React from 'react';
import EngagementCategoryPage from './EngagementCategoryPage';

const traditionalEngagementData = {
  title: 'Traditional Engagement Ceremonies',
  engagements: [
    {
      image: '/media/images/search1.jpg',
      title: 'Classic Ring Ceremony',
      location: 'Mumbai, Maharashtra',
      description: 'A traditional engagement ceremony with classic rituals, family blessings, and elegant decorations.',
      includes: [
        'Traditional venue decoration',
        'Ring exchange ceremony setup',
        'Family blessing ceremony',
        'Traditional catering',
        'Photography and videography',
        'Traditional music and entertainment'
      ],
      pricing: {
        total: '₹2,50,000',
        breakdown: [
          { service: 'Venue & Decorations', cost: '₹80,000' },
          { service: 'Ceremony Setup', cost: '₹50,000' },
          { service: 'Traditional Catering', cost: '₹70,000' },
          { service: 'Photography & Videography', cost: '₹30,000' },
          { service: 'Music & Entertainment', cost: '₹15,000' },
          { service: 'Coordination', cost: '₹5,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Sagai Ceremony',
      location: 'Delhi, NCR',
      description: 'A beautiful Sagai ceremony with traditional rituals, family exchange of gifts, and cultural celebrations.',
      includes: [
        'Traditional mandap setup',
        'Sagai ceremony rituals',
        'Gift exchange ceremony',
        'Traditional food and sweets',
        'Cultural performances',
        'Family photography'
      ],
      pricing: {
        total: '₹1,80,000',
        breakdown: [
          { service: 'Mandap Setup', cost: '₹60,000' },
          { service: 'Ceremony Rituals', cost: '₹40,000' },
          { service: 'Traditional Food', cost: '₹50,000' },
          { service: 'Cultural Performances', cost: '₹20,000' },
          { service: 'Photography', cost: '₹8,000' },
          { service: 'Coordination', cost: '₹2,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Mangni Ceremony',
      location: 'Punjab',
      description: 'A traditional Punjabi Mangni ceremony with vibrant decorations, traditional rituals, and festive celebrations.',
      includes: [
        'Vibrant traditional decorations',
        'Mangni ceremony rituals',
        'Traditional Punjabi food',
        'Bhangra performances',
        'Traditional attire coordination',
        'Family celebration setup'
      ],
      pricing: {
        total: '₹2,20,000',
        breakdown: [
          { service: 'Traditional Decorations', cost: '₹70,000' },
          { service: 'Ceremony Rituals', cost: '₹50,000' },
          { service: 'Punjabi Food', cost: '₹60,000' },
          { service: 'Bhangra Performances', cost: '₹25,000' },
          { service: 'Attire Coordination', cost: '₹10,000' },
          { service: 'Celebration Setup', cost: '₹5,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Nischitartham Ceremony',
      location: 'Chennai, Tamil Nadu',
      description: 'A traditional South Indian engagement ceremony with classical rituals, traditional decorations, and cultural elements.',
      includes: [
        'Traditional South Indian decorations',
        'Nischitartham ceremony rituals',
        'Classical music performance',
        'Traditional South Indian food',
        'Cultural dance performances',
        'Traditional photography'
      ],
      pricing: {
        total: '₹1,60,000',
        breakdown: [
          { service: 'Traditional Decorations', cost: '₹50,000' },
          { service: 'Ceremony Rituals', cost: '₹40,000' },
          { service: 'Classical Music', cost: '₹25,000' },
          { service: 'South Indian Food', cost: '₹35,000' },
          { service: 'Cultural Dances', cost: '₹20,000' },
          { service: 'Photography', cost: '₹10,000' }
        ]
      }
    }
  ]
};

const TraditionalEngagement = () => {
  return <EngagementCategoryPage category={traditionalEngagementData} />;
};

export default TraditionalEngagement;
