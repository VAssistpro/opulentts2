import EnhancedHero from '../sections/desktop/EnhancedHero';
import About from '../sections/desktop/About';
import Services from '../sections/desktop/Services';
import Fleet from '../sections/desktop/Fleet';
import Contact from '../sections/desktop/Contact';
import Booking from '../sections/desktop/Booking';

export const SECTIONS = {
  home: Hero,
  about: About,
  services: Services,
  fleet: NewFleetGallery,
  contact: Contact,
  book: Booking,
} as const;
