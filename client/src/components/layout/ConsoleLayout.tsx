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

        {/* Console Device Container with Enhanced Liquid Glass */}
        <div className="relative z-10 flex-1 p-2 lg:p-4 flex items-center justify-center pt-[0px] pb-[0px] pl-[0px] pr-[0px]">
          <div className="w-full max-w-7xl h-[calc(100vh-60px)]">
            {/* Outer Console Glass Shell */}
            <div className="relative bg-white/[0.015] backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/[0.08]
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.37),0_1px_3px_rgba(0,0,0,0.3)]
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/[0.03] before:to-transparent before:pointer-events-none before:rounded-3xl p-2 h-full">
              {/* Inner Console with Nested Glass Effect */}
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-gold/20
                            shadow-[inset_0_2px_6px_rgba(0,0,0,0.6),inset_0_-2px_6px_rgba(147,113,39,0.1),0_0_30px_rgba(147,113,39,0.2)]
                            before:absolute before:inset-0 before:bg-gradient-to-br before:from-gold/[0.02] before:to-transparent before:pointer-events-none before:rounded-2xl h-full flex flex-col">
                
                {/* Top Control Panel - Navbar with Glass Effect */}
                <div className="relative bg-black/30 backdrop-blur-xl border-b border-white/10
                              shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_2px_rgba(147,113,39,0.2)]
                              before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/[0.02] before:to-transparent before:pointer-events-none">
                  <ConsoleNavbar />
                </div>

                {/* Main Console Body */}
                <div className="flex flex-1">
                  {/* Left Control Panel - Logo + Testimonials with Glass Effect */}
                  <div className="w-56 bg-white/[0.01] backdrop-blur-xl flex flex-col relative border-r border-white/[0.08]
                                shadow-[inset_1px_0_0_rgba(255,255,255,0.05),1px_0_2px_rgba(147,113,39,0.1)]
                                before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.02] before:to-transparent before:pointer-events-none">
                    {/* Extended Logo Area - positioned to extend upward */}
                    <div className="absolute -top-4 left-0 right-0 h-32 bg-black/20 flex justify-center items-center z-10 rounded-t-lg">
                      <img
                        src="https://opulentts.com/bgvideo/otsnobg.png"
                        alt="Opulent Transport Solutions"
                        className="h-28 w-auto object-contain opacity-90"
                      />
                    </div>
                    {/* Spacer for logo */}
                    <div className="h-32 bg-black/20"></div>
                    <div className="flex-1 p-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_-1px_2px_rgba(147,113,39,0.1)]">
                      <ConsoleTestimonials />
                    </div>
                  </div>

                  {/* Center Screen - Main Content with Liquid Glass Screen */}
                  <div className="flex-1 relative">
                    {/* Enhanced Screen Bezel with Liquid Glass Effect */}
                    <div className="absolute inset-2 bg-white/[0.02] backdrop-blur-2xl rounded-xl border border-white/[0.1]
                                  shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.37),0_0_20px_rgba(147,113,39,0.2)]
                                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/[0.03] before:via-transparent before:to-gold/[0.01] before:pointer-events-none before:rounded-xl">
                      {/* Subtle glass edge lighting */}
                      <div className="absolute -top-px left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                      <div className="absolute top-2 bottom-2 -left-px w-px bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none" />
                      <div className="absolute top-2 bottom-2 -right-px w-px bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none" />
                      <div className="absolute -bottom-px left-2 right-2 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />
                      
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

                  {/* Right Control Panel - Contact & System Info with Glass Effect */}
                  <div className="w-20 bg-white/[0.01] backdrop-blur-xl flex flex-col border-l border-white/[0.08] relative
                                shadow-[inset_-1px_0_0_rgba(255,255,255,0.05),-1px_0_2px_rgba(147,113,39,0.1)]
                                before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.02] before:to-transparent before:pointer-events-none">
                    
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

                {/* Enhanced Bottom Status Bar with Glass Footer Effect */}
                <div className="relative bg-black/20 backdrop-blur-xl p-2 border-t border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_-1px_2px_rgba(147,113,39,0.1)] mt-[3px] mb-[3px] pt-[10px] pb-[10px]
                              before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/[0.015] before:to-transparent before:pointer-events-none">
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
