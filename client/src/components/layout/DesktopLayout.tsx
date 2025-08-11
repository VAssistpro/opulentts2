import React from 'react';
import ErrorBoundary from '../error/ErrorBoundary';
import LuxuryNavbar from '../navigation/LuxuryNavbar';
import DesktopHeader from './DesktopLayout/DesktopHeader';
import MainContent from './MainContent';
import Footer from './Footer';
import Testimonials from './Testimonials';
import BackgroundEffects from './DesktopLayout/BackgroundEffects';
import ShimmerBackground from '../effects/ShimmerBackground';

const DesktopLayout = ({ children }: { children?: React.ReactNode }) => {
  const sidebarMarginClass = "ml-56";
  const mainContentHeight = "h-[calc(100vh-8rem)]";

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-transparent text-text-primary flex flex-col">
        <ShimmerBackground />
        <BackgroundEffects />
        
        {/* Fixed Navigation */}
        <LuxuryNavbar />
        
        <div className="relative px-8">
          <DesktopHeader />
          
          <div className="fixed left-4 top-[35%] z-40 w-48">
            <Testimonials />
          </div>
        </div>

        <main className={`relative z-10 flex-1 ${sidebarMarginClass} pt-20 pb-2 pr-2 pl-6 transition-all duration-500`}>
          <div className={`relative ${mainContentHeight} mr-8`}>
            <div className="absolute -top-px left-1 right-1 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent shadow-[0_0_9px_rgba(147,113,39,0.3)] pointer-events-none" />
            <div className="absolute top-2 bottom-2 -left-px w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent shadow-[0_0_9px_rgba(147,113,39,0.3)] pointer-events-none" />
            <div className="absolute top-2 bottom-2 -right-px w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent shadow-[0_0_9px_rgba(147,113,39,0.3)] pointer-events-none" />
            <div className="absolute -bottom-px left-2 right-2 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent shadow-[0_0_9px_rgba(147,113,39,0.3)] pointer-events-none" />

            <div className="relative h-full rounded-xl overflow-hidden mx-[5px] z-10">
              <div className="relative h-full w-full overflow-y-auto scrollbar-hide">
                <div className="p-4 md:p-6">
                  {children ? children : <MainContent />}
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="mt-auto">
          <Footer className={`${sidebarMarginClass}`} />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DesktopLayout;