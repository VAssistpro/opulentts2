import React from 'react';
import { useMobileNavigation } from '../../contexts/MobileNavigationContext';
import MobileHeader from '../hero/mobile/MobileHeader';
import MobileNavigation from '../hero/mobile/MobileNavigation';
import About from '../sections/About';
import Services from '../sections/Services';
import Fleet from '../sections/Fleet';
import Contact from '../sections/Contact';
import Booking from '../sections/Booking';
import MobileHero from '../hero/mobile/MobileHero';
import ShimmerBackground from '../effects/ShimmerBackground';

const MobileLayout = () => {
  const { activeSection } = useMobileNavigation();

  return (
    <div className="lg:hidden min-h-screen relative">
      <ShimmerBackground />
      <MobileHeader />
      
      <main className="relative z-10">
        {activeSection === 'home' ? (
          <MobileHero />
        ) : (
          <div className="min-h-[calc(100vh-8rem)] pt-24 pb-40 px-4 overflow-y-auto custom-scrollbar">
            <div className="container mx-auto max-w-4xl space-y-8">
              {activeSection === 'about' && <About />}
              {activeSection === 'services' && <Services />}
              {activeSection === 'fleet' && <Fleet />}
              {activeSection === 'contact' && <Contact />}
              {activeSection === 'book' && <Booking />}
            </div>
          </div>
        )}
      </main>

      <MobileNavigation />
    </div>
  );
};

export default MobileLayout;