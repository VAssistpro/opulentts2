import type { Vehicle } from '../../types/fleet';

export const FLEET_DATA: Vehicle[] = [
  {
    id: 's-class',
    name: 'Mercedes S Class',
    description: 'Ultimate luxury sedan experience',
    capacity: '3 Passengers',
    luggage: 3,
    images: [
      {
        url: 'https://res.cloudinary.com/dwjg0avzx/image/upload/v1733243223/Mercedes_S_Class_Exterior_px7xxk.png',
        alt: 'S Class Exterior',
        type: 'exterior'
      },
      {
        url: 'https://res.cloudinary.com/dwjg0avzx/image/upload/v1733243222/Mercedes_S_Class_Interior_1_uyd2t8.png',
        alt: 'S Class Interior',
        type: 'interior'
      }
    ],
    features: [
      { name: 'Leather Seats' },
      { name: 'Climate Control' },
      { name: 'WiFi Available' },
      { name: 'Bottled Water' }
    ]
  },
  {
    id: 'ct5',
    name: 'Cadillac CT5',
    description: 'Sophisticated luxury sedan with modern amenities',
    capacity: '3 Passengers',
    luggage: 3,
    images: [
      {
        url: 'https://res.cloudinary.com/dwjg0avzx/image/upload/v1733243594/Cadillac_CT5_2025_Exterior_1_ljugdm.png',
        alt: 'CT5 Exterior',
        type: 'exterior'
      },
      {
        url: 'https://res.cloudinary.com/dwjg0avzx/image/upload/v1733243595/Cadillac_CT5_2025_Interior_ajcss0.png',
        alt: 'CT5 Interior',
        type: 'interior'
      }
    ],
    features: [
      { name: 'Leather Seats' },
      { name: 'Climate Control' },
      { name: 'WiFi Available' },
      { name: 'Bottled Water' },
      { name: 'USB Charging' }
    ]
  },
  {
    id: 'jet-sprinter',
    name: 'Mercedes Jet Sprinter',
    description: 'Luxurious and spacious for group travel',
    capacity: '12 Passengers',
    luggage: 8,
    images: [
      {
        url: 'https://opulentts.com/Mercedes%20Sprinter%20Jet%20Style%20Exterior.png',
        alt: 'Mercedes Jet Sprinter Exterior',
        type: 'exterior'
      },
      {
        url: 'https://opulentts.com/Mercedes%20Sprinter%20Jet%20Style%20Interior%202.png',
        alt: 'Mercedes Jet Sprinter Interior',
        type: 'interior'
      }
    ],
    features: [
      { name: 'Leather Seats' },
      { name: 'Climate Control' },
      { name: 'WiFi Available' },
      { name: 'Entertainment System' },
      { name: 'Premium Sound System' }
    ]
  },
  {
    id: 'sprinter-limo',
    name: 'Mercedes Sprinter Limo',
    description: 'Experience the ultimate in luxury limousine service',
    capacity: '10 Passengers',
    luggage: 6,
    images: [
      {
        url: 'https://opulentts.com/Mercedes%20Limo%20Sprinter%20Exterior.png',
        alt: 'Mercedes Sprinter Limo Exterior',
        type: 'exterior'
      },
      {
        url: 'https://opulentts.com/Mercedes%20Limo%20Sprinter%20Interior.png',
        alt: 'Mercedes Sprinter Limo Interior',
        type: 'interior'
      }
    ],
    features: [
      { name: 'Leather Seats' },
      { name: 'Climate Control' },
      { name: 'Wet Bar' },
      { name: 'Premium Sound System' },
      { name: 'Mood Lighting' }
    ]
  },
  {
    id: 'cadillac-escalade',
    name: 'Cadillac Escalade',
    description: 'Premium luxury SUV with commanding presence',
    capacity: '7 Passengers',
    luggage: 6,
    images: [
      {
        url: 'https://res.cloudinary.com/dwjg0avzx/image/upload/v1733244000/Cadillac_Escalade_Exterior_2025_nj8ov9.png',
        alt: 'Cadillac Escalade Exterior',
        type: 'exterior'
      },
      {
        url: 'https://res.cloudinary.com/dwjg0avzx/image/upload/v1733244001/Cadillac_Escalade_Interior_2025_kw9mn2.png',
        alt: 'Cadillac Escalade Interior',
        type: 'interior'
      }
    ],
    features: [
      { name: 'Leather Seats' },
      { name: 'Climate Control' },
      { name: 'Premium Sound System' },
      { name: 'Panoramic Sunroof' },
      { name: 'Advanced Technology' }
    ]
  },
  {
    id: 'chevrolet-suburban',
    name: 'Chevrolet Suburban',
    description: 'Spacious and comfortable SUV for any occasion',
    capacity: '7 Passengers',
    luggage: 5,
    images: [
      {
        url: 'https://opulentts.com/Suburban%20exterior%203.png',
        alt: 'Chevrolet Suburban Exterior',
        type: 'exterior'
      },
      {
        url: 'https://opulentts.com/Suburban%20interior%201.png',
        alt: 'Chevrolet Suburban Interior',
        type: 'interior'
      }
    ],
    features: [
      { name: 'Leather Seats' },
      { name: 'Climate Control' },
      { name: 'Premium Sound System' },
      { name: 'USB Charging Ports' },
      { name: 'Ample Luggage Space' }
    ]
  }
];