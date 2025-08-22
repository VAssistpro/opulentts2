import ResponsiveHero from '../sections/desktop/ResponsiveHero';
import About from '../sections/desktop/About';
import Services from '../sections/desktop/Services';
import Fleet from '../sections/desktop/Fleet';
import LuxuryTestimonials from '../sections/desktop/LuxuryTestimonials';
import Contact from '../sections/desktop/Contact';
import Booking from '../sections/desktop/Booking';

export const SECTIONS = {
  home: ResponsiveHero,
  about: About,
  services: Services,
  fleet: Fleet,
  testimonials: LuxuryTestimonials,
  contact: Contact,
  book: Booking,
} as const;
