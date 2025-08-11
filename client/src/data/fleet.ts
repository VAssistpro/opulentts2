import { Shield, Clock, Award, HeadphonesIcon } from 'lucide-react';
import type { Feature, Vehicle } from '../types';

export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Professional chauffeurs with extensive safety training and background checks'
  },
  {
    icon: Clock,
    title: 'Punctuality',
    description: 'Guaranteed on-time service with real-time flight tracking'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest standards of luxury service'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Attention to Detail',
    description: 'Round-the-clock customer support and meticulous attention to every aspect of your journey'
  }
];

// Rest of the file remains the same...