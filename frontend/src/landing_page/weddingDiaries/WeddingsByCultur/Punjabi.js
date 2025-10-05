import React from 'react';
import CulturePage from '../CulturePage';

const punjabiWeddings = {
  title: 'Punjabi Weddings',
  weddings: [
    {
      image: '/media/images/search1.jpg',
      title: 'Aarav & Ananya',
      location: 'Amritsar, Punjab',
      description: 'A grand and lively wedding in the holy city of Amritsar, filled with Bhangra, food, and festivities.',
      expenses: {
        total: '₹20,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹7,00,000' },
          { item: 'Catering', cost: '₹6,00,000' },
          { item: 'Decor', cost: '₹3,00,000' },
          { item: 'Photography', cost: '₹2,50,000' },
          { item: 'Entertainment', cost: '₹1,50,000' }
        ]
      },
      rituals: [
        'Roka (Pre-engagement)',
        'Sagan (Engagement)',
        'Chunni Chadai (Veil Ceremony)',
        'Ghara Ghardoli (Pot Ceremony)',
        'Milni (Meeting of Families)',
        'Anand Karaj (Sikh Wedding Ceremony)',
        'Doli (Bride\'s Departure)'
      ]
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Vivaan & Ishita',
      location: 'Ludhiana, Punjab',
      description: 'A modern and stylish wedding in the industrial hub of Ludhiana, blending tradition with contemporary trends.',
      expenses: {
        total: '₹30,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹12,00,000' },
          { item: 'Catering', cost: '₹8,00,000' },
          { item: 'Decor', cost: '₹5,00,000' },
          { item: 'Photography', cost: '₹3,50,000' },
          { item: 'Entertainment', cost: '₹1,50,000' }
        ]
      },
      rituals: [
        'Roka (Pre-engagement)',
        'Sagan (Engagement)',
        'Chunni Chadai (Veil Ceremony)',
        'Ghara Ghardoli (Pot Ceremony)',
        'Milni (Meeting of Families)',
        'Anand Karaj (Sikh Wedding Ceremony)',
        'Doli (Bride\'s Departure)'
      ]
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Aditya & Diya',
      location: 'Chandigarh, Punjab',
      description: 'An elegant and sophisticated wedding in the beautiful city of Chandigarh.',
       expenses: {
        total: '₹25,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹10,00,000' },
          { item: 'Catering', cost: '₹7,00,000' },
          { item: 'Decor', cost: '₹4,00,000' },
          { item: 'Photography', cost: '₹3,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Roka (Pre-engagement)',
        'Sagan (Engagement)',
        'Chunni Chadai (Veil Ceremony)',
        'Ghara Ghardoli (Pot Ceremony)',
        'Milni (Meeting of Families)',
        'Anand Karaj (Sikh Wedding Ceremony)',
        'Doli (Bride\'s Departure)'
      ]
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Arjun & Myra',
      location: 'Jalandhar, Punjab',
      description: 'A traditional Punjabi wedding in Jalandhar, celebrating the vibrant culture of the region.',
       expenses: {
        total: '₹22,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹8,00,000' },
          { item: 'Catering', cost: '₹6,00,000' },
          { item: 'Decor', cost: '₹4,00,000' },
          { item: 'Photography', cost: '₹3,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Roka (Pre-engagement)',
        'Sagan (Engagement)',
        'Chunni Chadai (Veil Ceremony)',
        'Ghara Ghardoli (Pot Ceremony)',
        'Milni (Meeting of Families)',
        'Anand Karaj (Sikh Wedding Ceremony)',
        'Doli (Bride\'s Departure)'
      ]
    },
    {
      image: '/media/images/search5.jpg',
      title: 'Sai & Riya',
      location: 'Patiala, Punjab',
      description: 'A royal wedding in the city of Patiala, known for its regal history and traditions.',
       expenses: {
        total: '₹28,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹11,00,000' },
          { item: 'Catering', cost: '₹8,00,000' },
          { item: 'Decor', cost: '₹5,00,000' },
          { item: 'Photography', cost: '₹3,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Roka (Pre-engagement)',
        'Sagan (Engagement)',
        'Chunni Chadai (Veil Ceremony)',
        'Ghara Ghardoli (Pot Ceremony)',
        'Milni (Meeting of Families)',
        'Anand Karaj (Sikh Wedding Ceremony)',
        'Doli (Bride\'s Departure)'
      ]
    },
    {
        image: '/media/images/Anniversaries.jpg',
        title: 'Kabir & Zara',
        location: 'Bathinda, Punjab',
        description: 'A beautiful and heartwarming wedding in the historic city of Bathinda.',
         expenses: {
        total: '₹18,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹6,00,000' },
          { item: 'Catering', cost: '₹5,00,000' },
          { item: 'Decor', cost: '₹3,00,000' },
          { item: 'Photography', cost: '₹2,50,000' },
          { item: 'Entertainment', cost: '₹1,50,000' }
        ]
      },
      rituals: [
        'Roka (Pre-engagement)',
        'Sagan (Engagement)',
        'Chunni Chadai (Veil Ceremony)',
        'Ghara Ghardoli (Pot Ceremony)',
        'Milni (Meeting of Families)',
        'Anand Karaj (Sikh Wedding Ceremony)',
        'Doli (Bride\'s Departure)'
      ]
    }
  ]
};

const Punjabi = () => {
  return <CulturePage culture={punjabiWeddings} />;
};

export default Punjabi;