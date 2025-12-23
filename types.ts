
export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  category: 'Apartment' | 'Villa' | 'Penthouse' | 'Mansion';
  lat: number;
  lng: number;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix: string;
}
