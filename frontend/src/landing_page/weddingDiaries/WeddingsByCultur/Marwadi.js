import React from 'react';
import CulturePage from '../CulturePage';

const marwadiWeddings = {
  title: 'Marwadi Weddings',
  weddings: [
    {
      image: '/media/images/search1.jpg',
      title: 'Aarav & Ananya',
      location: 'Jaipur, Rajasthan',
      description: 'A royal wedding in the Pink City of Jaipur, celebrating the grandeur of Marwadi traditions.',
      expenses: {
        total: '₹35,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹15,00,000' },
          { item: 'Catering', cost: '₹10,00,000' },
          { item: 'Decor', cost: '₹5,00,000' },
          { item: 'Photography', cost: '₹3,00,000' },
          { item: 'Entertainment', cost: '₹2,00,000' }
        ]
      },
      rituals: [
        'Byah Haath (Purification Ceremony)',
        'Mayra (Maternal Uncle\'s Gifts)',
        'Nikasi (Groom\'s Procession)',
        'Toran (Welcoming the Groom)',
        'Granthi Bandhan (Tying the Knot)',
        'Pheras (Circling the Holy Fire)',
        'Sir Guthi (Parting the Bride\'s Hair)'
      ]
    },
    {
      image: '/media/images/search2.jpg',
      title: 'Vivaan & Ishita',
      location: 'Jodhpur, Rajasthan',
      description: 'A majestic wedding in the Blue City of Jodhpur, reflecting the rich cultural heritage of Marwar.',
      expenses: {
        total: '₹45,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹20,00,000' },
          { item: 'Catering', cost: '₹12,00,000' },
          { item: 'Decor', cost: '₹7,00,000' },
          { item: 'Photography', cost: '₹4,00,000' },
          { item: 'Entertainment', cost: '₹2,00,000' }
        ]
      },
      rituals: [
        'Byah Haath (Purification Ceremony)',
        'Mayra (Maternal Uncle\'s Gifts)',
        'Nikasi (Groom\'s Procession)',
        'Toran (Welcoming the Groom)',
        'Granthi Bandhan (Tying the Knot)',
        'Pheras (Circling the Holy Fire)',
        'Sir Guthi (Parting the Bride\'s Hair)'
      ]
    },
    {
      image: '/media/images/search3.jpg',
      title: 'Aditya & Diya',
      location: 'Udaipur, Rajasthan',
      description: 'A fairytale wedding in the City of Lakes, Udaipur, known for its romantic and picturesque settings.',
       expenses: {
        total: '₹55,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹25,00,000' },
          { item: 'Catering', cost: '₹15,00,000' },
          { item: 'Decor', cost: '₹8,00,000' },
          { item: 'Photography', cost: '₹5,00,000' },
          { item: 'Entertainment', cost: '₹2,00,000' }
        ]
      },
      rituals: [
        'Byah Haath (Purification Ceremony)',
        'Mayra (Maternal Uncle\'s Gifts)',
        'Nikasi (Groom\'s Procession)',
        'Toran (Welcoming the Groom)',
        'Granthi Bandhan (Tying the Knot)',
        'Pheras (Circling the Holy Fire)',
        'Sir Guthi (Parting the Bride\'s Hair)'
      ]
    },
    {
      image: '/media/images/search4.jpg',
      title: 'Arjun & Myra',
      location: 'Kota, Rajasthan',
      description: 'A traditional Marwadi wedding in Kota, celebrating the customs and rituals with great enthusiasm.',
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
        'Byah Haath (Purification Ceremony)',
        'Mayra (Maternal Uncle\'s Gifts)',
        'Nikasi (Groom\'s Procession)',
        'Toran (Welcoming the Groom)',
        'Granthi Bandhan (Tying the Knot)',
        'Pheras (Circling the Holy Fire)',
        'Sir Guthi (Parting the Bride\'s Hair)'
      ]
    },
    {
      image: '/media/images/search5.jpg',
      title: 'Sai & Riya',
      location: 'Ajmer, Rajasthan',
      description: 'A beautiful wedding near the holy city of Ajmer, blending spirituality with Marwadi traditions.',
       expenses: {
        total: '₹20,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹8,00,000' },
          { item: 'Catering', cost: '₹6,00,000' },
          { item: 'Decor', cost: '₹3,00,000' },
          { item: 'Photography', cost: '₹2,00,000' },
          { item: 'Entertainment', cost: '₹1,00,000' }
        ]
      },
      rituals: [
        'Byah Haath (Purification Ceremony)',
        'Mayra (Maternal Uncle\'s Gifts)',
        'Nikasi (Groom\'s Procession)',
        'Toran (Welcoming the Groom)',
        'Granthi Bandhan (Tying the Knot)',
        'Pheras (Circling the Holy Fire)',
        'Sir Guthi (Parting the Bride\'s Hair)'
      ]
    },
    {
        image: '/media/images/Anniversaries.jpg',
        title: 'Kabir & Zara',
        location: 'Bikaner, Rajasthan',
        description: 'A desert wedding in Bikaner, showcasing the vibrant culture and hospitality of the Marwadi people.',
         expenses: {
        total: '₹30,00,000',
        breakdown: [
          { item: 'Venue', cost: '₹12,00,000' },
          { item: 'Catering', cost: '₹8,00,000' },
          { item: 'Decor', cost: '₹5,00,000' },
          { item: 'Photography', cost: '₹3,00,000' },
          { item: 'Entertainment', cost: '₹2,00,000' }
        ]
      },
      rituals: [
        'Byah Haath (Purification Ceremony)',
        'Mayra (Maternal Uncle\'s Gifts)',
        'Nikasi (Groom\'s Procession)',
        'Toran (Welcoming the Groom)',
        'Granthi Bandhan (Tying the Knot)',
        'Pheras (Circling the Holy Fire)',
        'Sir Guthi (Parting the Bride\'s Hair)'
      ]
    }
  ]
};

const Marwadi = () => {
  return <CulturePage culture={marwadiWeddings} />;
};

export default Marwadi;