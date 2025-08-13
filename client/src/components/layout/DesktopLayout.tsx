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
  const mainContentHeight = "h-[calc(100vh-10rem)]";

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
          
        </main>

        <div className="mt-auto">
          <Footer className={`${sidebarMarginClass}`} />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DesktopLayout;