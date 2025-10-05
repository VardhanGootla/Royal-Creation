import React from 'react';
import CorporateEventCategoryPage from './CorporateEventCategoryPage';

const teamBuildingData = {
  title: 'Team Building Events',
  events: [
    {
      image: '/media/images/search1.jpg',
      title: 'Adventure Team Building',
      location: 'Mumbai, Maharashtra',
      description: 'An exciting adventure team building program with outdoor activities, team challenges, and leadership development.',
      includes: [
        'Adventure venue setup',
        'Outdoor activity arrangements',
        'Team challenge activities',
        'Leadership development sessions',
        'Team bonding activities',
        'Adventure photography'
      ],
      pricing: {
        total: '₹3,50,000',
        breakdown: [
          { service: 'Adventure Venue', cost: '₹100,000' },
          { service: 'Outdoor Activities', cost: '₹80,000' },
          { service: 'Team Challenges', cost: '₹70,000' },
          { service: 'Leadership Development', cost: '₹60,000' },
          { service: 'Team Bonding', cost: '₹30,000' },
          { service: 'Adventure Photography', cost: '₹10,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Creative Workshop',
      location: 'Delhi, NCR',
      description: 'A creative team building workshop with art activities, collaborative projects, and creative problem solving.',
      includes: [
        'Creative workshop setup',
        'Art activity materials',
        'Collaborative projects',
        'Creative problem solving',
        'Team art creation',
        'Workshop photography'
      ],
      pricing: {
        total: '₹2,80,000',
        breakdown: [
          { service: 'Workshop Setup', cost: '₹80,000' },
          { service: 'Art Materials', cost: '₹60,000' },
          { service: 'Collaborative Projects', cost: '₹50,000' },
          { service: 'Creative Problem Solving', cost: '₹40,000' },
          { service: 'Team Art Creation', cost: '₹40,000' },
          { service: 'Workshop Photography', cost: '₹10,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Culinary Team Building',
      location: 'Bangalore, Karnataka',
      description: 'A fun culinary team building experience with cooking challenges, team cooking, and culinary competitions.',
      includes: [
        'Culinary venue setup',
        'Cooking challenge activities',
        'Team cooking sessions',
        'Culinary competitions',
        'Chef instruction',
        'Culinary photography'
      ],
      pricing: {
        total: '₹2,20,000',
        breakdown: [
          { service: 'Culinary Venue', cost: '₹60,000' },
          { service: 'Cooking Challenges', cost: '₹50,000' },
          { service: 'Team Cooking', cost: '₹40,000' },
          { service: 'Culinary Competitions', cost: '₹40,000' },
          { service: 'Chef Instruction', cost: '₹25,000' },
          { service: 'Culinary Photography', cost: '₹5,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Sports Team Building',
      location: 'Chennai, Tamil Nadu',
      description: 'An energetic sports team building program with various sports activities, team competitions, and fitness challenges.',
      includes: [
        'Sports venue setup',
        'Sports activity arrangements',
        'Team competitions',
        'Fitness challenges',
        'Sports equipment',
        'Sports photography'
      ],
      pricing: {
        total: '₹3,00,000',
        breakdown: [
          { service: 'Sports Venue', cost: '₹80,000' },
          { service: 'Sports Activities', cost: '₹70,000' },
          { service: 'Team Competitions', cost: '₹60,000' },
          { service: 'Fitness Challenges', cost: '₹50,000' },
          { service: 'Sports Equipment', cost: '₹30,000' },
          { service: 'Sports Photography', cost: '₹10,000' }
        ]
      }
    }
  ]
};

const TeamBuilding = () => {
  return <CorporateEventCategoryPage category={teamBuildingData} />;
};

export default TeamBuilding;
