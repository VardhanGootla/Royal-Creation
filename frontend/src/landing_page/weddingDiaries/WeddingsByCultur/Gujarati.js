import React from 'react';
import CulturePage from '../CulturePage';

const gujaratiWeddings = {
  title: 'Gujarati Weddings',
  weddings: [
    {
      image: '/media/images/search1.jpg',
      title: 'Aarav & Ananya',
      location: 'Ahmedabad, Gujarat',
      description: 'A vibrant and colorful wedding in Ahmedabad, showcasing the rich traditions of Gujarat.',
      expenses: {
        total: '₹18,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹6,00,000' },
          { item: 'Catering', cost: '₹5,00,000' },
          { item: 'Decor', cost: '₹3,50,000' },
          { item: 'Photography', cost: '₹2,50,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Chandlo Matli (Acceptance)',
        'Ganesh Sthapan (Lord Ganesh\'s Installation)',
        'Pithi (Haldi Ceremony)',
        'Jaan (Groom\'s Procession)',
        'Hasta Milap (Joining of Hands)',
        'Mangal Pheras (Circling the Holy Fire)',
        'Vidaai (Bride\'s Departure)'
      ]
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Vivaan & Ishita',
      location: 'Surat, Gujarat',
      description: 'A lavish wedding in the diamond city of Surat, filled with joy, laughter, and cultural festivities.',
      expenses: {
        total: '₹28,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹12,00,000' },
          { item: 'Catering', cost: '₹8,00,000' },
          { item: 'Decor', cost: '₹4,00,000' },
          { item: 'Photography', cost: '₹3,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Chandlo Matli (Acceptance)',
        'Ganesh Sthapan (Lord Ganesh\'s Installation)',
        'Pithi (Haldi Ceremony)',
        'Jaan (Groom\'s Procession)',
        'Hasta Milap (Joining of Hands)',
        'Mangal Pheras (Circling the Holy Fire)',
        'Vidaai (Bride\'s Departure)'
      ]
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Aditya & Diya',
      location: 'Vadodara, Gujarat',
      description: 'A graceful and elegant wedding in the cultural capital of Gujarat, Vadodara.',
       expenses: {
        total: '₹14,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹5,00,000' },
          { item: 'Catering', cost: '₹4,00,000' },
          { item: 'Decor', cost: '₹2,50,000' },
          { item: 'Photography', cost: '₹1,50,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Chandlo Matli (Acceptance)',
        'Ganesh Sthapan (Lord Ganesh\'s Installation)',
        'Pithi (Haldi Ceremony)',
        'Jaan (Groom\'s Procession)',
        'Hasta Milap (Joining of Hands)',
        'Mangal Pheras (Circling the Holy Fire)',
        'Vidaai (Bride\'s Departure)'
      ]
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Arjun & Myra',
      location: 'Rajkot, Gujarat',
      description: 'A traditional wedding in the princely state of Rajkot, celebrating Gujarati heritage.',
       expenses: {
        total: '₹20,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹7,00,000' },
          { item: 'Catering', cost: '₹6,00,000' },
          { item: 'Decor', cost: '₹3,00,000' },
          { item: 'Photography', cost: '₹3,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Chandlo Matli (Acceptance)',
        'Ganesh Sthapan (Lord Ganesh\'s Installation)',
        'Pithi (Haldi Ceremony)',
        'Jaan (Groom\'s Procession)',
        'Hasta Milap (Joining of Hands)',
        'Mangal Pheras (Circling the Holy Fire)',
        'Vidaai (Bride\'s Departure)'
      ]
    },
    {
      image: '/media/images/search5.jpg',
      title: 'Sai & Riya',
      location: 'Gandhinagar, Gujarat',
      description: 'A serene and beautiful wedding in the green capital of Gujarat, Gandhinagar.',
       expenses: {
        total: '₹11,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹4,00,000' },
          { item: 'Catering', cost: '₹3,00,000' },
          { item: 'Decor', cost: '₹2,00,000' },
          { item: 'Photography', cost: '₹1,50,000' },
          { item: 'Entertainment', cost: '₹50,000' }
        ]
      },
      rituals: [
        'Chandlo Matli (Acceptance)',
        'Ganesh Sthapan (Lord Ganesh\'s Installation)',
        'Pithi (Haldi Ceremony)',
        'Jaan (Groom\'s Procession)',
        'Hasta Milap (Joining of Hands)',
        'Mangal Pheras (Circling the Holy Fire)',
        'Vidaai (Bride\'s Departure)'
      ]
    },
    {
        image: '/media/images/Anniversaries.jpg',
        title: 'Kabir & Zara',
        location: 'Bhavnagar, Gujarat',
        description: 'A grand and royal wedding in the historic city of Bhavnagar.',
         expenses: {
        total: '₹24,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹9,00,000' },
          { item: 'Catering', cost: '₹7,00,000' },
          { item: 'Decor', cost: '₹4,00,000' },
          { item: 'Photography', cost: '₹3,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Chandlo Matli (Acceptance)',
        'Ganesh Sthapan (Lord Ganesh\'s Installation)',
        'Pithi (Haldi Ceremony)',
        'Jaan (Groom\'s Procession)',
        'Hasta Milap (Joining of Hands)',
        'Mangal Pheras (.Circling the Holy Fire)',
        'Vidaai (Bride\'s Departure)'
      ]
    }
  ]
};

const Gujarati = () => {
  return <CulturePage culture={gujaratiWeddings} />;
};

export default Gujarati;