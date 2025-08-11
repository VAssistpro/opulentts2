export interface VehicleImage {
  url: string;
  alt: string;
  type: 'exterior' | 'interior';
}

export interface VehicleFeature {
  name: string;
}

export interface Vehicle {
  id: string;
  name: string;
  description: string;
  capacity: string;
  luggage: number;
  images: VehicleImage[];
  features: VehicleFeature[];
}