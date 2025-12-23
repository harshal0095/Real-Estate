
import { Property, NavItem, Statistic } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Sky Loft',
    price: '$2,450,000',
    location: 'Manhattan, New York',
    beds: 3,
    baths: 2,
    area: '2,800 sqft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    category: 'Apartment',
    lat: 40.7128,
    lng: -74.0060,
    description: 'A breathtaking duplex loft featuring double-height ceilings, floor-to-ceiling windows, and a private terrace with panoramic views of the Manhattan skyline.'
  },
  {
    id: '2',
    title: 'Azure Heights Villa',
    price: '$5,900,000',
    location: 'Beverly Hills, CA',
    beds: 5,
    baths: 6,
    area: '7,200 sqft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    category: 'Villa',
    lat: 34.0736,
    lng: -118.4004,
    description: 'A modern architectural masterpiece in the heart of Beverly Hills. This villa offers an infinity pool, smart home automation, and an expansive chef\'s kitchen.'
  },
  {
    id: '3',
    title: 'Emerald Bay Manor',
    price: '$12,200,000',
    location: 'Miami Beach, FL',
    beds: 7,
    baths: 9,
    area: '12,500 sqft',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    category: 'Mansion',
    lat: 25.7907,
    lng: -80.1300,
    description: 'An ultra-exclusive waterfront mansion featuring a private dock, tropical gardens, and a grand ballroom. The ultimate statement in coastal luxury living.'
  },
  {
    id: '4',
    title: 'Vantage Point Penthouse',
    price: '$8,750,000',
    location: 'London, UK',
    beds: 4,
    baths: 4,
    area: '4,500 sqft',
    image: 'https://images.unsplash.com/photo-1600607687940-4e7a6a357d19?auto=format&fit=crop&w=1200&q=80',
    category: 'Penthouse',
    lat: 51.5074,
    lng: -0.1278,
    description: 'Located in the most prestigious district of London, this penthouse offers 360-degree city views, a private elevator, and bespoke interior design by world-renowned artists.'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Properties', path: '/properties' },
  { label: 'Contact', path: '/contact' }
];

export const STATISTICS: Statistic[] = [
  { label: 'Properties Sold', value: 450, suffix: '+' },
  { label: 'Happy Clients', value: 1200, suffix: '+' },
  { label: 'Years Experience', value: 15, suffix: '' },
  { label: 'Expert Agents', value: 85, suffix: '' }
];
