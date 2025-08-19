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
      <div className="relative min-h-screen bg-black text-text-primary flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95" />

        {/* Console Device Container */}
        <div className="relative z-10 flex-1 p-2 lg:p-4 flex items-center justify-center">
          <div className="w-full max-w-7xl h-[calc(100vh-60px)]">
            {/* Integrated Console Interface with Liquid Glass Effect */}
            <div className="liquid-glass-border overflow-hidden p-1 h-full relative"
                 style={{
                   boxShadow: `
                     0 8px 32px rgba(0, 0, 0, 0.4),
                     inset 0 2px 4px rgba(255, 255, 255, 0.1),
                     inset 0 -2px 4px rgba(0, 0, 0, 0.3),
                     0 0 40px rgba(147, 113, 39, 0.3),
                     0 0 80px rgba(59, 130, 246, 0.2)
                   `
                 }}>
              {/* Enhanced Leonardo-style Backlight - Static */}
              <div className="absolute -inset-6 rounded-3xl pointer-events-none -z-10"
                   style={{
                     background: 'linear-gradient(135deg, rgba(147, 113, 39, 0.2) 0%, rgba(59, 130, 246, 0.15) 25%, rgba(147, 51, 234, 0.15) 50%, rgba(219, 39, 119, 0.15) 75%, rgba(147, 113, 39, 0.2) 100%)',
                     filter: 'blur(2px)',
                     opacity: '0.6'
                   }}></div>
              {/* Stable Atmospheric Glow */}
              <div className="absolute -inset-4 rounded-3xl pointer-events-none -z-5"
                   style={{
                     background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(147,113,39,0.05) 40%, rgba(219,39,119,0.04) 70%, transparent 90%)',
                     filter: 'blur(1px)'
                   }}></div>
              {/* Console Frame/Bezel with Enhanced Glass Effect */}
              <div className="bg-gradient-to-br from-black/90 via-black/70 to-black/90 rounded-xl overflow-hidden 
                            leonardo-glass-border h-full flex flex-col"
                   style={{
                     background: 'rgba(0, 0, 0, 0.85)',
                     backdropFilter: 'blur(30px) saturate(1.8)',
                     border: '1px solid rgba(255, 255, 255, 0.08)'
                   }}>
                
                {/* Top Control Panel - Navbar with Subtle Glass Effect */}
                <div className="bg-black/50 backdrop-blur-sm border-b border-gold/30 rounded-t-xl"
                     style={{
                       background: 'rgba(0, 0, 0, 0.6)',
                       backdropFilter: 'blur(20px)',
                       boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.6), 0 1px 2px rgba(147,113,39,0.1)'
                     }}>
                  <ConsoleNavbar />
                </div>

                {/* Main Console Body */}
                <div className="flex flex-1">
                  {/* Left Control Panel - Logo + Testimonials */}
                  <div className="w-56 bg-black/30 backdrop-blur-sm flex flex-col relative border-r border-gold/30
                                shadow-[inset_1px_0_2px_rgba(0,0,0,0.6),1px_0_2px_rgba(147,113,39,0.1)]">
                    {/* Extended Logo Area - positioned to extend upward */}
                    <div className="absolute -top-4 left-0 right-0 h-32 bg-black/20 flex justify-center items-center z-10 rounded-t-lg mt-[9px] mb-[9px] pt-[0px] pb-[0px] pl-[0px] pr-[0px] ml-[6px] mr-[6px]">
                      <img
                        src="https://opulentts.com/bgvideo/otsnobg.png"
                        alt="Opulent Transport Solutions"
                        className="h-28 w-auto object-contain opacity-90 pt-[0px] pb-[0px] ml-[0px] mr-[0px] mt-[0px] mb-[0px] pl-[11px] pr-[11px]"
                      />
                    </div>
                    {/* Spacer for logo */}
                    <div className="h-32 bg-black/20"></div>
                    <div className="flex-1 p-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_-1px_2px_rgba(147,113,39,0.1)]">
                      <ConsoleTestimonials />
                    </div>
                  </div>

                  {/* Center Screen - Main Content */}
                  <div className="flex-1 relative">
                    {/* Screen Bezel with Deep Engraved Effect */}
                    <div className="absolute inset-2 bg-black/80 rounded-xl border-2 border-gold/40
                                  shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-2px_4px_rgba(147,113,39,0.3),0_4px_8px_rgba(0,0,0,0.6)]">
                      {/* Simplified border lighting */}
                      <div className="absolute -top-px left-1 right-1 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent pointer-events-none" />
                      <div className="absolute top-2 bottom-2 -left-px w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent pointer-events-none" />
                      <div className="absolute top-2 bottom-2 -right-px w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent pointer-events-none" />
                      <div className="absolute -bottom-px left-2 right-2 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent pointer-events-none" />
                      
                      {/* Screen Content */}
                      <div className="relative h-full rounded-xl overflow-hidden">
                        {/* Background Video for Screen */}
                        <div className="absolute inset-0">
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="none"
                            className="w-full h-full object-cover opacity-90"
                            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23000'/%3E%3C/svg%3E"
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
                  <div className="w-20 bg-black/30 backdrop-blur-sm flex flex-col border-l border-gold/30
                                shadow-[inset_-1px_0_2px_rgba(0,0,0,0.6),-1px_0_2px_rgba(147,113,39,0.1)]">
                    
                    <div className="flex-1 p-2">
                      <ConsoleContactPanel />
                    </div>
                    
                    {/* System Status Indicators */}
                    <div className="p-2 space-y-2 border-t border-gold/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_-1px_2px_rgba(147,113,39,0.1)]">
                      <div className="flex flex-col gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mx-auto animate-pulse" title="System Online" />
                        <div className="w-2 h-2 bg-gold rounded-full mx-auto animate-pulse" title="Ready" />
                        <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto animate-pulse" title="Connected" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Bottom Status Bar with Footer Info */}
                <div className="bg-black/60 backdrop-blur-sm p-2 border-t border-gold/30 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_-1px_2px_rgba(147,113,39,0.1)] mt-[3px] mb-[3px] pt-[10px] pb-[10px]">
                  <div className="flex items-center justify-between text-xs text-gold/60 font-mono">
                    {/* Left - Copyright */}
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-white/60">© {new Date().getFullYear()} OPULENT TRANSPORT SOLUTIONS</span>
                    </div>

                    {/* Center - Powered by V Assist Pro */}
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.virtualassistancepro.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/60 hover:text-gold/80 transition-colors duration-150"
                      >
                        <span>POWERED BY V ASSIST PRO</span>
                        <img
                          src="https://opulentts.com/00.%20Logo%20V%20Assist%20Pro%20-Black.png"
                          alt="V Assist Pro Inc"
                          className="h-4 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                        />
                      </a>
                    </div>

                    {/* Right - Phone & Status */}
                    <div className="flex items-center gap-2">
                      <span className="text-white/60">(516) 324-5483</span>
                      <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Mobile Footer Info */}
                  <div className="lg:hidden mt-2 pt-2 flex flex-col gap-1 text-xs text-white/60 border-t border-gold/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_-1px_2px_rgba(147,113,39,0.1)]">
                    <div className="flex items-center justify-between">
                      <span>© {new Date().getFullYear()} OPULENT TRANSPORT SOLUTIONS</span>
                      <span>(516) 324-5483</span>
                    </div>
                    <div className="text-center">
                      <a
                        href="https://www.virtualassistancepro.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold/80 transition-colors duration-150"
                      >
                        POWERED BY V ASSIST PRO
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </ErrorBoundary>
  );
};

export default ConsoleLayout;
