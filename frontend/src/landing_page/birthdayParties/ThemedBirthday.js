import React from 'react';
import BirthdayCategoryPage from './BirthdayCategoryPage';

const themedBirthdayData = {
  title: 'Themed Birthday Parties',
  parties: [
    {
      image: '/media/images/search1.jpg',
      title: 'Harry Potter Magic',
      location: 'Mumbai, Maharashtra',
      description: 'A magical Harry Potter themed party with wizarding decorations, potion making, and magical activities.',
      includes: [
        'Hogwarts decorations',
        'Wizard costumes and wands',
        'Potion making station',
        'Quidditch game setup',
        'Magical photo booth',
        'Butterbeer and magical treats'
      ],
      pricing: {
        total: '₹45,000',
        breakdown: [
          { service: 'Hogwarts Decorations', cost: '₹15,000' },
          { service: 'Costumes & Wands', cost: '₹10,000' },
          { service: 'Potion Station', cost: '₹8,000' },
          { service: 'Quidditch Setup', cost: '₹6,000' },
          { service: 'Photo Booth', cost: '₹4,000' },
          { service: 'Magical Treats', cost: '₹2,000' }
        ]
      }
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Under the Sea Adventure',
      location: 'Chennai, Tamil Nadu',
      description: 'An underwater themed party with ocean decorations, mermaid costumes, and sea creature activities.',
      includes: [
        'Ocean-themed decorations',
        'Mermaid and sea creature costumes',
        'Underwater photo booth',
        'Sea creature games',
        'Ocean-themed cake',
        'Treasure hunt activity'
      ],
      pricing: {
        total: '₹35,000',
        breakdown: [
          { service: 'Ocean Decorations', cost: '₹12,000' },
          { service: 'Mermaid Costumes', cost: '₹8,000' },
          { service: 'Photo Booth', cost: '₹6,000' },
          { service: 'Sea Games', cost: '₹5,000' },
          { service: 'Ocean Cake', cost: '₹3,000' },
          { service: 'Treasure Hunt', cost: '₹1,000' }
        ]
      }
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Circus Carnival',
      location: 'Kolkata, West Bengal',
      description: 'A fun-filled circus themed party with carnival games, clown entertainment, and circus decorations.',
      includes: [
        'Circus tent decorations',
        'Carnival games and prizes',
        'Clown entertainment',
        'Circus photo booth',
        'Cotton candy and popcorn',
        'Circus-themed cake'
      ],
      pricing: {
        total: '₹40,000',
        breakdown: [
          { service: 'Circus Decorations', cost: '₹15,000' },
          { service: 'Carnival Games', cost: '₹10,000' },
          { service: 'Clown Entertainment', cost: '₹8,000' },
          { service: 'Photo Booth', cost: '₹4,000' },
          { service: 'Snacks & Treats', cost: '₹2,000' },
          { service: 'Circus Cake', cost: '₹1,000' }
        ]
      }
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Fairy Tale Castle',
      location: 'Hyderabad, Telangana',
      description: 'A magical fairy tale party with castle decorations, princess and prince costumes, and enchanted activities.',
      includes: [
        'Castle decorations and backdrop',
        'Princess and prince costumes',
        'Fairy tale photo booth',
        'Enchanted games',
        'Magical cake and treats',
        'Fairy tale storytelling'
      ],
      pricing: {
        total: '₹38,000',
        breakdown: [
          { service: 'Castle Decorations', cost: '₹14,000' },
          { service: 'Royal Costumes', cost: '₹10,000' },
          { service: 'Photo Booth', cost: '₹6,000' },
          { service: 'Enchanted Games', cost: '₹5,000' },
          { service: 'Magical Treats', cost: '₹2,000' },
          { service: 'Storytelling', cost: '₹1,000' }
        ]
      }
    }
  ]
};

const ThemedBirthday = () => {
  return <BirthdayCategoryPage category={themedBirthdayData} />;
};

export default ThemedBirthday;
