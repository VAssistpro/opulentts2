import React from 'react';
import ErrorBoundary from '../error/ErrorBoundary';
import ConsoleNavbar from './console/ConsoleNavbar';
import ConsoleTestimonials from './console/ConsoleTestimonials';
import ConsoleContactPanel from './console/ConsoleContactPanel';
import MainContent from './MainContent';
import Footer from './Footer';
import BackgroundEffects from './DesktopLayout/BackgroundEffects';
import ShimmerBackground from '../effects/ShimmerBackground';

const ConsoleLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-transparent text-text-primary flex flex-col">
        <ShimmerBackground />
        <BackgroundEffects />

        {/* Console Device Container */}
        <div className="relative z-10 flex-1 p-2 lg:p-4">
          <div className="max-w-[95vw] mx-auto h-[calc(100vh-120px)]">
            {/* Integrated Console Interface */}
            <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gold/30 shadow-[0_0_50px_rgba(147,113,39,0.3)] p-1 h-full">
              {/* Console Frame/Bezel */}
              <div className="bg-gradient-to-br from-black/90 via-black/70 to-black/90 rounded-xl overflow-hidden border border-gold/20 h-full flex flex-col">
                
                {/* Top Control Panel - Navbar */}
                <div className="border-b border-gold/20 bg-black/50 backdrop-blur-sm">
                  <ConsoleNavbar />
                </div>

                {/* Main Console Body */}
                <div className="flex flex-1">
                  {/* Left Control Panel - Testimonials */}
                  <div className="w-64 border-r border-gold/20 bg-black/30 backdrop-blur-sm flex flex-col">
                    <div className="p-4 border-b border-gold/10 bg-black/20">
                      <div className="text-xs text-gold/80 font-semibold tracking-wider uppercase text-center">
                        Client Panel
                      </div>
                    </div>
                    <div className="flex-1 p-2">
                      <ConsoleTestimonials />
                    </div>
                  </div>

                  {/* Center Screen - Main Content */}
                  <div className="flex-1 relative">
                    {/* Screen Bezel */}
                    <div className="absolute inset-2 bg-black/80 rounded-lg border border-gold/40 shadow-inner">
                      {/* Enhanced dramatic border lighting for screen */}
                      <div className="absolute -top-px left-1 right-1 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent shadow-[0_0_15px_rgba(147,113,39,0.6)] pointer-events-none" />
                      <div className="absolute top-2 bottom-2 -left-px w-px bg-gradient-to-b from-transparent via-gold/80 to-transparent shadow-[0_0_15px_rgba(147,113,39,0.6)] pointer-events-none" />
                      <div className="absolute top-2 bottom-2 -right-px w-px bg-gradient-to-b from-transparent via-gold/80 to-transparent shadow-[0_0_15px_rgba(147,113,39,0.6)] pointer-events-none" />
                      <div className="absolute -bottom-px left-2 right-2 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent shadow-[0_0_15px_rgba(147,113,39,0.6)] pointer-events-none" />
                      
                      {/* Screen Content */}
                      <div className="relative h-full rounded-lg overflow-hidden">
                        {/* Background Video for Screen */}
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
                        
                        {/* Content overlay */}
                        <div className="relative h-full w-full rounded-lg overflow-hidden bg-black/40">
                          <MainContent />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Control Panel - Contact & System Info */}
                  <div className="w-20 border-l border-gold/20 bg-black/30 backdrop-blur-sm flex flex-col">
                    
                    <div className="flex-1 p-2">
                      <ConsoleContactPanel />
                    </div>
                    
                    {/* System Status Indicators */}
                    <div className="p-2 space-y-2 border-t border-gold/10">
                      <div className="flex flex-col gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mx-auto animate-pulse" title="System Online" />
                        <div className="w-2 h-2 bg-gold rounded-full mx-auto animate-pulse" title="Ready" />
                        <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto animate-pulse" title="Connected" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="border-t border-gold/20 bg-black/50 backdrop-blur-sm p-2">
                  <div className="flex items-center justify-between text-xs text-gold/60">
                    <div className="flex items-center gap-4">
                      <span>OPULENT TRANSPORT CONSOLE v2.0</span>
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>ONLINE</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{new Date().toLocaleTimeString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <Footer className="" />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ConsoleLayout;
