import React, { useState } from 'react';
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
import PullToRefresh from '../ui/PullToRefresh';
import FloatingActionButton from '../ui/FloatingActionButton';
import OfflineIndicator from '../ui/OfflineIndicator';

const MobileLayout = () => {
  const { activeSection } = useMobileNavigation();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = async () => {
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRefreshKey(prev => prev + 1);
  };

  // Using default actions from FloatingActionButton (Call, SMS, Email)

  return (
    <div className="lg:hidden min-h-screen relative overflow-hidden" key={refreshKey}>
      <ShimmerBackground />
      <OfflineIndicator />
      <MobileHeader />

      <main className="relative z-10 h-screen">
        {activeSection === 'home' ? (
          <div className="h-full overflow-y-auto overflow-x-hidden">
            <MobileHero />
          </div>
        ) : (
          <div className="h-full overflow-y-auto overflow-x-hidden">
            <div className="min-h-screen pt-24 pb-32 px-4">
              <div className="container mx-auto max-w-4xl space-y-8">
                {activeSection === 'about' && <About />}
                {activeSection === 'services' && <Services />}
                {activeSection === 'fleet' && <Fleet />}
                {activeSection === 'contact' && <Contact />}
                {activeSection === 'book' && <Booking />}
              </div>
            </div>
          </div>
        )}
      </main>

      <MobileNavigation />
      <FloatingActionButton position="top-right" />
    </div>
  );
};

export default MobileLayout;
