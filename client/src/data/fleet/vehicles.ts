import type { Vehicle } from '../../types/fleet';

export const FLEET_DATA: Vehicle[] = [
  {
    id: 's-class',
    name: 'Mercedes S Class',
    description: 'Ultimate luxury sedan experience with premium amenities',
    capacity: '3 Passengers',
    luggage: 3,
    images: [
      {
        url: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Mercedes S Class Exterior',
        type: 'exterior'
      },
      {
        url: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Mercedes S Class Interior',
        type: 'interior'
      }
    ],
    features: [
      { name: 'Premium Leather Seats' },
      { name: 'Dual Zone Climate Control' },
      { name: 'Complimentary WiFi' },
      { name: 'Bottled Water & Refreshments' },
      { name: 'Phone Charging Stations' }
    ]
  },
  {
    id: 'ct5',
    name: 'Cadillac CT5',
    description: 'Sophisticated luxury sedan with cutting-edge technology',
    capacity: '3 Passengers',
    luggage: 3,
    images: [
      {
        url: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Cadillac CT5 Exterior',
        type: 'exterior'
      },
      {
        url: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Cadillac CT5 Interior',
        type: 'interior'
      }
    ],
    features: [
      { name: 'Premium Leather Seating' },
      { name: 'Advanced Climate Control' },
      { name: 'High-Speed WiFi' },
      { name: 'Refreshment Service' },
      { name: 'USB & Wireless Charging' },
      { name: 'Premium Audio System' }
    ]
  },
  {
    id: 'escalade',
    name: 'Cadillac Escalade',
    description: 'Premium luxury SUV with commanding presence and space',
    capacity: '7 Passengers',
    luggage: 6,
    images: [
      {
        url: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Cadillac Escalade Exterior',
        type: 'exterior'
      },
      {
        url: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Cadillac Escalade Interior',
        type: 'interior'
      }
    ],
    features: [
      { name: 'Captain\'s Chair Seating' },
      { name: 'Tri-Zone Climate Control' },
      { name: 'Premium Sound System' },
      { name: 'Panoramic Sunroof' },
      { name: 'Advanced Technology Suite' },
      { name: 'Ample Cargo Space' }
    ]
  },
  {
    id: 'suburban',
    name: 'Chevrolet Suburban',
    description: 'Spacious luxury SUV perfect for group transportation',
    capacity: '7 Passengers',
    luggage: 5,
    images: [
      {
        url: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Chevrolet Suburban Exterior',
        type: 'exterior'
      },
      {
        url: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Chevrolet Suburban Interior',
        type: 'interior'
      }
    ],
    features: [
      { name: 'Comfortable Seating' },
      { name: 'Climate Control' },
      { name: 'Entertainment System' },
      { name: 'USB Charging Ports' },
      { name: 'Spacious Luggage Area' },
      { name: 'Safety Features' }
    ]
  },
  {
    id: 'sprinter-van',
    name: 'Mercedes Sprinter Van',
    description: 'Executive group transportation with luxury amenities',
    capacity: '12 Passengers',
    luggage: 8,
    images: [
      {
        url: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Mercedes Sprinter Van Exterior',
        type: 'exterior'
      },
      {
        url: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Mercedes Sprinter Van Interior',
        type: 'interior'
      }
    ],
    features: [
      { name: 'Executive Seating' },
      { name: 'Climate Control' },
      { name: 'WiFi Connectivity' },
      { name: 'Entertainment System' },
      { name: 'Premium Sound System' },
      { name: 'Refreshment Bar' }
    ]
  },
  {
    id: 'luxury-sedan',
    name: 'Executive Sedan',
    description: 'Professional luxury sedan for business travel',
    capacity: '3 Passengers',
    luggage: 3,
    images: [
      {
        url: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Executive Sedan Exterior',
        type: 'exterior'
      },
      {
        url: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Executive Sedan Interior',
        type: 'interior'
      }
    ],
    features: [
      { name: 'Business Class Seating' },
      { name: 'Climate Control' },
      { name: 'WiFi Access' },
      { name: 'Phone Charging' },
      { name: 'Professional Service' }
    ]
  }
];