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

        {/* Desktop-specific blue lights positioned over the main content area */}
        <div className="fixed inset-0 z-50 pointer-events-none">
          {/* Left vertical blue light */}
          <div
            className="absolute left-0 top-0 h-full opacity-80"
            style={{
              width: '6px',
              background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,1), rgba(59,130,246,0.9), rgba(59,130,246,1), transparent)',
              filter: 'blur(2px)',
              boxShadow: '0 0 25px rgba(59,130,246,0.8), 0 0 50px rgba(59,130,246,0.4)'
            }}
          />
          <div
            className="absolute left-0 top-0 h-full opacity-60"
            style={{
              width: '12px',
              background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.6), rgba(59,130,246,0.4), rgba(59,130,246,0.6), transparent)',
              filter: 'blur(6px)'
            }}
          />

          {/* Top horizontal blue light */}
          <div
            className="absolute top-0 left-0 w-full opacity-80"
            style={{
              height: '6px',
              background: 'linear-gradient(to right, transparent, rgba(59,130,246,1), rgba(59,130,246,0.9), rgba(59,130,246,1), transparent)',
              filter: 'blur(2px)',
              boxShadow: '0 0 25px rgba(59,130,246,0.8), 0 0 50px rgba(59,130,246,0.4)'
            }}
          />
          <div
            className="absolute top-0 left-0 w-full opacity-60"
            style={{
              height: '12px',
              background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.6), rgba(59,130,246,0.4), rgba(59,130,246,0.6), transparent)',
              filter: 'blur(6px)'
            }}
          />

          {/* Right vertical blue light */}
          <div
            className="absolute right-0 top-0 h-full opacity-80"
            style={{
              width: '6px',
              background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,1), rgba(59,130,246,0.9), rgba(59,130,246,1), transparent)',
              filter: 'blur(2px)',
              boxShadow: '0 0 25px rgba(59,130,246,0.8), 0 0 50px rgba(59,130,246,0.4)'
            }}
          />
          <div
            className="absolute right-0 top-0 h-full opacity-60"
            style={{
              width: '12px',
              background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.6), rgba(59,130,246,0.4), rgba(59,130,246,0.6), transparent)',
              filter: 'blur(6px)'
            }}
          />
        </div>
        
        {/* Fixed Navigation */}
        <LuxuryNavbar />
        
        <div className="relative px-8">
          <DesktopHeader />
          
          <div className="fixed left-4 top-[30%] z-40 w-48">
            <Testimonials />
          </div>
        </div>

        <main className={`relative z-10 flex-1 ${sidebarMarginClass} pt-20 pb-2 pr-2 pl-6 transition-all duration-500`}>
          <div className={`relative ${mainContentHeight} mr-8`}>
            {/* Enhanced dramatic border lighting */}
            <div className="absolute -top-px left-1 right-1 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent shadow-[0_0_15px_rgba(147,113,39,0.6),0_0_30px_rgba(147,113,39,0.3)] pointer-events-none" />
            <div className="absolute top-2 bottom-2 -left-px w-px bg-gradient-to-b from-transparent via-gold/80 to-transparent shadow-[0_0_15px_rgba(147,113,39,0.6),0_0_30px_rgba(147,113,39,0.3)] pointer-events-none" />
            <div className="absolute top-2 bottom-2 -right-px w-px bg-gradient-to-b from-transparent via-gold/80 to-transparent shadow-[0_0_15px_rgba(147,113,39,0.6),0_0_30px_rgba(147,113,39,0.3)] pointer-events-none" />
            <div className="absolute -bottom-px left-2 right-2 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent shadow-[0_0_15px_rgba(147,113,39,0.6),0_0_30px_rgba(147,113,39,0.3)] pointer-events-none" />

            {/* Enhanced shadow and depth effects */}
            <div className="absolute inset-0 bg-black/20 rounded-xl shadow-dramatic pointer-events-none" />
            <div className="absolute inset-2 bg-gradient-to-br from-black/10 via-transparent to-black/20 rounded-xl pointer-events-none" />
            
            <div className="relative h-full rounded-xl overflow-hidden mx-[5px] z-10 shadow-inner-glow border-depth">
              {/* Background Video for Main Content */}
              <div className="absolute inset-0">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source
                    src="http://opulentts.com/bgvideo/otsbgvido2.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Content overlay with enhanced transparency for background visibility */}
              <div className="relative h-full w-full rounded-xl overflow-hidden bg-black/40">
                  {children ? children : <MainContent />}
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
