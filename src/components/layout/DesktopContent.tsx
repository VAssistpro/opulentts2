import React from 'react';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import Hero from '../sections/desktop/Hero';
import About from '../sections/desktop/About';
import Services from '../sections/desktop/Services';
import Fleet from '../sections/desktop/Fleet';
import Contact from '../sections/desktop/Contact';
import Booking from '../sections/desktop/Booking';

const DesktopContent = () => {
  const { activeSection } = useDesktopNavigation();

  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <div className="relative min-h-full">
        {activeSection === 'home' && <Hero />}
        {activeSection === 'about' && <About />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'fleet' && <Fleet />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'book' && <Booking />}
      </div>
    </div>
  );
};

export default DesktopContent;