import { Plane, Building2, Map, Wine, Users, Calendar, Shield, Clock, Award, Phone, Mail, MapPin } from 'lucide-react';
import type { Feature, Service, ContactInfo } from '../types';

export const NAV_LINKS = [
  { title: 'Home', href: '#home' },
  { title: 'About Us', href: '#about' },
  { title: 'Services', href: '#services' },
  { title: 'Fleet Gallery', href: '#fleet' },
  { title: 'Book Now', href: '#book' },
  { title: 'Contact', href: '#contact' },
];

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
  }
];

export const SERVICES: Service[] = [
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Seamless airport transportation with flight tracking and meet & greet service'
  },
  {
    icon: Building2,
    title: 'Corporate Travel',
    description: 'Professional transportation solutions for business executives and teams'
  },
  {
    icon: Map,
    title: 'City Tours',
    description: 'Customized tours of New York City with knowledgeable chauffeurs'
  },
  {
    icon: Wine,
    title: 'Special Events',
    description: 'Luxury transportation for weddings, galas, and special occasions'
  },
  {
    icon: Users,
    title: 'Group Transportation',
    description: 'Comfortable and efficient transport for groups of any size'
  },
  {
    icon: Calendar,
    title: 'Hourly Service',
    description: 'Flexible hourly booking for meetings, events, or personal errands'
  }
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Phone,
    title: 'Phone',
    content: '(516) 324-5483'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'reservations@opulentts.com'
  },
  {
    icon: MapPin,
    title: 'Address',
    content: "59 John St Plainview, NY 11803"
  },
  {
    icon: Clock,
    title: 'Hours',
    content: '24/7 Service Available'
  }
];