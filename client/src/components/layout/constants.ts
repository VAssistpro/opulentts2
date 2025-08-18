import Hero from '../sections/Hero';
import About from '../sections/desktop/About';
import Services from '../sections/desktop/Services';
import Contact from '../sections/desktop/Contact';
import Booking from '../sections/desktop/Booking';

// Import Fleet component with explicit path
import NewFleetGallery from '../fleet/NewFleetGallery';

export const SECTIONS = {
  home: Hero,
  about: About,
  services: Services,
  fleet: NewFleetGallery,
  contact: Contact,
  book: Booking,
} as const;