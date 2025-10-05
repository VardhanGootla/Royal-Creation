import React from 'react';
import BirthdayCategoryPage from './BirthdayCategoryPage';

const kidsBirthdayData = {
  title: 'Kids Birthday Parties',
  parties: [
    {
      image: '/media/images/search1.jpg',
      title: 'Princess Party',
      location: 'Mumbai, Maharashtra',
      description: 'A magical princess-themed birthday party with royal decorations, princess costumes, and fairy tale activities.',
      includes: [
        'Princess decorations and backdrops',
        'Costume accessories for all guests',
        'Princess-themed games and activities',
        'Magical photo booth',
        'Princess cake and treats',
        'Party favors and goodie bags'
      ],
      pricing: {
        total: '₹25,000',
        breakdown: [
          { service: 'Decorations & Setup', cost: '₹8,000' },
          { service: 'Costumes & Accessories', cost: '₹5,000' },
          { service: 'Games & Activities', cost: '₹4,000' },
          { service: 'Photo Booth', cost: '₹3,000' },
          { service: 'Cake & Treats', cost: '₹3,000' },
          { service: 'Party Favors', cost: '₹2,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Superhero Adventure',
      location: 'Delhi, NCR',
      description: 'An action-packed superhero birthday party with capes, masks, and heroic activities for little superheroes.',
      includes: [
        'Superhero costumes and accessories',
        'Hero training obstacle course',
        'Superhero-themed decorations',
        'Action-packed games',
        'Superhero cake and snacks',
        'Certificate of heroism'
      ],
      pricing: {
        total: '₹30,000',
        breakdown: [
          { service: 'Costumes & Accessories', cost: '₹10,000' },
          { service: 'Obstacle Course Setup', cost: '₹8,000' },
          { service: 'Decorations', cost: '₹5,000' },
          { service: 'Games & Activities', cost: '₹4,000' },
          { service: 'Cake & Snacks', cost: '₹2,000' },
          { service: 'Certificates & Favors', cost: '₹1,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Dinosaur Discovery',
      location: 'Bangalore, Karnataka',
      description: 'A prehistoric adventure with dinosaur decorations, fossil hunting, and Jurassic-themed activities.',
      includes: [
        'Dinosaur decorations and props',
        'Fossil hunting activity',
        'Dinosaur costume accessories',
        'Prehistoric games',
        'Dinosaur cake and treats',
        'Discovery certificates'
      ],
      pricing: {
        total: '₹22,000',
        breakdown: [
          { service: 'Decorations & Props', cost: '₹7,000' },
          { service: 'Fossil Hunting Setup', cost: '₹5,000' },
          { service: 'Costumes & Accessories', cost: '₹4,000' },
          { service: 'Games & Activities', cost: '₹3,000' },
          { service: 'Cake & Treats', cost: '₹2,000' },
          { service: 'Certificates', cost: '₹1,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Space Adventure',
      location: 'Pune, Maharashtra',
      description: 'A cosmic journey through space with astronaut costumes, rocket decorations, and space exploration activities.',
      includes: [
        'Space-themed decorations',
        'Astronaut costumes and helmets',
        'Rocket building activity',
        'Space exploration games',
        'Galaxy cake and cosmic treats',
        'Mission completion badges'
      ],
      pricing: {
        total: '₹28,000',
        breakdown: [
          { service: 'Space Decorations', cost: '₹8,000' },
          { service: 'Astronaut Costumes', cost: '₹6,000' },
          { service: 'Rocket Building Kit', cost: '₹4,000' },
          { service: 'Space Games', cost: '₹4,000' },
          { service: 'Galaxy Cake', cost: '₹4,000' },
          { service: 'Badges & Favors', cost: '₹2,000' }
        ]
      }
    }
  ]
};

const KidsBirthday = () => {
  return <BirthdayCategoryPage category={kidsBirthdayData} />;
};

export default KidsBirthday;
