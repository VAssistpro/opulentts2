import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Fleet from '../sections/Fleet';
import Contact from '../sections/Contact';
import Booking from '../sections/Booking';

export const SECTIONS = {
  home: Hero,
  about: About,
  services: Services,
  fleet: Fleet,
  contact: Contact,
  book: Booking,
} as const;