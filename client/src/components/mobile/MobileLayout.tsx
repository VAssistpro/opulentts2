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

  const fabActions = [
    {
      id: 'call',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>,
      label: 'Call Now',
      action: () => window.open('tel:+1-555-LUXURY'),
      color: 'bg-green-600'
    },
    {
      id: 'whatsapp',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/15551234567'),
      color: 'bg-green-500'
    },
    {
      id: 'book',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>,
      label: 'Book Ride',
      action: () => {/* Navigate to booking */},
      color: 'bg-gold'
    }
  ];

  return (
    <div className="lg:hidden min-h-screen relative" key={refreshKey}>
      <ShimmerBackground />
      <OfflineIndicator />
      <MobileHeader />
      
      <main className="relative z-10">
        {activeSection === 'home' ? (
          <PullToRefresh onRefresh={handleRefresh}>
            <MobileHero />
          </PullToRefresh>
        ) : (
          <PullToRefresh onRefresh={handleRefresh}>
            <div className="min-h-[calc(100vh-8rem)] pt-24 pb-40 px-4 overflow-y-auto custom-scrollbar">
              <div className="container mx-auto max-w-4xl space-y-8">
                {activeSection === 'about' && <About />}
                {activeSection === 'services' && <Services />}
                {activeSection === 'fleet' && <Fleet />}
                {activeSection === 'contact' && <Contact />}
                {activeSection === 'book' && <Booking />}
              </div>
            </div>
          </PullToRefresh>
        )}
      </main>

      <MobileNavigation />
      <FloatingActionButton actions={fabActions} />
    </div>
  );
};

export default MobileLayout;