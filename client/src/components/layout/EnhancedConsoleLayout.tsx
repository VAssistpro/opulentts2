import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from '../error/ErrorBoundary';
import LuxuryNavbar from '../navigation/LuxuryNavbar';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { SECTIONS } from './constants';

const EnhancedConsoleLayout = ({ children }: { children?: React.ReactNode }) => {
  const { activeSection } = useDesktopNavigation();
  const ActiveComponent = SECTIONS[activeSection];

  return (
    <ErrorBoundary>
      <div className="relative h-screen text-white flex flex-col overflow-hidden" 
           style={{ backgroundColor: '#030407' }}>
        
        {/* Atmospheric Background Effects */}
        <div className="absolute inset-0 opacity-95" style={{
          background: 'linear-gradient(135deg, #030407 0%, #0a0f1a 25%, #030407 50%, #0f1419 75%, #030407 100%)'
        }} />
        
        {/* Dynamic Lighting Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-gold/20 via-gold/5 to-transparent rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/15 via-blue-500/5 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-radial from-purple-500/10 via-purple-500/3 to-transparent rounded-full blur-2xl animate-pulse-slow" />
        </div>

        {/* Enhanced Console Device Container */}
        <div className="relative z-10 flex-1 p-4 flex items-center justify-center">
          <div className="w-full h-full max-w-[1600px] max-h-[900px]">
            
            {/* Liquid Glass Console Interface */}
            <div className="liquid-glass-border overflow-hidden h-full relative rounded-3xl"
                 style={{
                   background: 'rgba(3, 4, 7, 0.85)',
                   backdropFilter: 'blur(40px) saturate(1.8)',
                   border: '2px solid rgba(147, 113, 39, 0.3)',
                   boxShadow: `
                     0 0 60px rgba(147, 113, 39, 0.4),
                     0 0 120px rgba(59, 130, 246, 0.2),
                     inset 0 2px 6px rgba(255, 255, 255, 0.1),
                     inset 0 -2px 6px rgba(0, 0, 0, 0.4),
                     0 8px 32px rgba(0, 0, 0, 0.6)
                   `
                 }}>
              
              {/* Enhanced Backlight Effects */}
              <div className="absolute -inset-8 rounded-3xl pointer-events-none -z-10"
                   style={{
                     background: `
                       conic-gradient(from 0deg, 
                         rgba(147, 113, 39, 0.3) 0deg,
                         rgba(59, 130, 246, 0.2) 72deg,
                         rgba(147, 51, 234, 0.2) 144deg,
                         rgba(219, 39, 119, 0.2) 216deg,
                         rgba(147, 113, 39, 0.3) 288deg,
                         rgba(147, 113, 39, 0.3) 360deg
                       )
                     `,
                     filter: 'blur(3px)',
                     opacity: '0.8',
                     animation: 'spin 20s linear infinite'
                   }}>
              </div>
              
              {/* Console Frame Structure */}
              <div className="h-full flex flex-col rounded-3xl overflow-hidden"
                   style={{
                     background: 'rgba(3, 4, 7, 0.95)',
                     backdropFilter: 'blur(30px)'
                   }}>
                
                {/* Top Control Panel with Enhanced Navigation */}
                <div className="backdrop-blur-xl border-b border-gold/40 relative"
                     style={{
                       background: 'linear-gradient(135deg, rgba(3,4,7,0.9) 0%, rgba(10,15,26,0.8) 100%)',
                       boxShadow: 'inset 0 1px 3px rgba(147,113,39,0.2), 0 1px 3px rgba(0,0,0,0.4)'
                     }}>
                  <LuxuryNavbar />
                  
                  {/* Control Panel Lights */}
                  <div className="absolute top-2 right-4 flex gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    <div className="w-3 h-3 bg-gold rounded-full animate-pulse shadow-[0_0_8px_rgba(147,113,39,0.6)]" />
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  </div>
                </div>

                {/* Main Console Body */}
                <div className="flex flex-1 overflow-hidden">
                  
                  {/* Left Control Panel - Enhanced Logo Area */}
                  <div className="w-80 backdrop-blur-xl flex flex-col relative border-r border-gold/40"
                       style={{
                         background: 'linear-gradient(180deg, rgba(3,4,7,0.95) 0%, rgba(10,15,26,0.9) 100%)',
                         boxShadow: 'inset 1px 0 3px rgba(147,113,39,0.2), 1px 0 3px rgba(0,0,0,0.4)'
                       }}>
                    
                    {/* Large Premium Logo Area */}
                    <div className="relative p-8 flex flex-col items-center justify-center border-b border-gold/30"
                         style={{
                           background: 'linear-gradient(135deg, rgba(10,15,26,0.8) 0%, rgba(3,4,7,0.9) 100%)',
                           boxShadow: 'inset 0 2px 4px rgba(147,113,39,0.1), 0 -1px 3px rgba(0,0,0,0.3)'
                         }}>
                      
                      {/* Logo with Glow Effect */}
                      <div className="relative group cursor-pointer"
                           onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-80" />
                        <img
                          src="https://opulentts.com/bgvideo/otsnobg.png"
                          alt="Opulent Transport Solutions"
                          className="relative w-full h-auto max-w-[280px] object-contain opacity-95 group-hover:opacity-100 
                                   transition-all duration-500 group-hover:scale-105 drop-shadow-2xl"
                          style={{
                            filter: 'drop-shadow(0 0 20px rgba(147, 113, 39, 0.4)) drop-shadow(0 0 40px rgba(147, 113, 39, 0.2))'
                          }}
                        />
                      </div>
                      
                      {/* Company Tagline */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-6 text-center"
                      >
                        <h2 className="text-gold text-lg font-semibold tracking-wider mb-2">
                          LUXURY TRANSPORTATION
                        </h2>
                        <p className="text-white/70 text-sm tracking-widest uppercase">
                          New York's Premier Service
                        </p>
                      </motion.div>
                    </div>
                    
                    {/* Enhanced System Status */}
                    <div className="flex-1 p-6 space-y-6">
                      
                      {/* Status Indicators */}
                      <div className="p-4 rounded-xl border border-gold/20"
                           style={{ background: 'rgba(10,15,26,0.6)' }}>
                        <h3 className="text-gold text-sm font-semibold mb-3 tracking-wider">SYSTEM STATUS</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-white/80 text-xs">Service Available</span>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                              <span className="text-green-400 text-xs font-mono">ONLINE</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white/80 text-xs">Fleet Ready</span>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                              <span className="text-gold text-xs font-mono">READY</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white/80 text-xs">Booking System</span>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                              <span className="text-blue-400 text-xs font-mono">ACTIVE</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg border border-gold/20 text-center"
                             style={{ background: 'rgba(10,15,26,0.4)' }}>
                          <div className="text-gold text-xl font-bold">24/7</div>
                          <div className="text-white/60 text-xs">Available</div>
                        </div>
                        <div className="p-3 rounded-lg border border-gold/20 text-center"
                             style={{ background: 'rgba(10,15,26,0.4)' }}>
                          <div className="text-gold text-xl font-bold">5★</div>
                          <div className="text-white/60 text-xs">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Screen - Main Content with Enhanced Bezel */}
                  <div className="flex-1 relative p-4">
                    <div className="h-full rounded-2xl border-4 border-gold/50 relative overflow-hidden"
                         style={{
                           background: 'rgba(3, 4, 7, 0.9)',
                           boxShadow: `
                             inset 0 4px 8px rgba(0,0,0,0.8),
                             inset 0 -4px 8px rgba(147,113,39,0.3),
                             0 8px 16px rgba(0,0,0,0.6)
                           `
                         }}>
                      
                      {/* Screen Border Lighting */}
                      <div className="absolute -inset-1 rounded-2xl pointer-events-none">
                        <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-gold/80 to-transparent" />
                        <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-gold/80 to-transparent" />
                        <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-gold/80 to-transparent" />
                        <div className="absolute right-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-gold/80 to-transparent" />
                      </div>

                      {/* Content Display */}
                      <div className="relative h-full w-full rounded-xl overflow-hidden">
                        {activeSection === 'home' ? (
                          <ActiveComponent />
                        ) : (
                          <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={activeSection}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="min-h-full"
                              >
                                <ActiveComponent />
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Control Panel - Enhanced Contact */}
                  <div className="w-24 backdrop-blur-xl flex flex-col border-l border-gold/40"
                       style={{
                         background: 'linear-gradient(180deg, rgba(3,4,7,0.95) 0%, rgba(10,15,26,0.9) 100%)',
                         boxShadow: 'inset -1px 0 3px rgba(147,113,39,0.2), -1px 0 3px rgba(0,0,0,0.4)'
                       }}>
                    
                    <div className="flex-1 p-3 space-y-4">
                      {/* Contact Icons */}
                      <a href="tel:+15163245483" 
                         className="group flex flex-col items-center p-3 rounded-lg border border-gold/20 hover:border-gold/40 
                                  transition-all duration-300 hover:bg-gold/10"
                         style={{ background: 'rgba(10,15,26,0.4)' }}>
                        <svg className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" 
                             fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="text-xs text-white/60 mt-1">Call</span>
                      </a>
                    </div>
                    
                    {/* System Indicators */}
                    <div className="p-3 space-y-2 border-t border-gold/30">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]" 
                             title="System Online" />
                        <div className="w-3 h-3 bg-gold rounded-full animate-pulse shadow-[0_0_6px_rgba(147,113,39,0.6)]" 
                             title="Ready" />
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(59,130,246,0.6)]" 
                             title="Connected" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Bottom Status Bar */}
                <div className="backdrop-blur-xl p-4 border-t border-gold/40"
                     style={{
                       background: 'linear-gradient(135deg, rgba(3,4,7,0.9) 0%, rgba(10,15,26,0.8) 100%)',
                       boxShadow: 'inset 0 1px 3px rgba(147,113,39,0.2), 0 -1px 3px rgba(0,0,0,0.4)'
                     }}>
                  <div className="flex items-center justify-between text-xs text-gold/60 font-mono">
                    {/* Left - Copyright with Status */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white/60">SYSTEM OPERATIONAL</span>
                      </div>
                      <span className="text-white/60">© {new Date().getFullYear()} OPULENT TRANSPORT SOLUTIONS</span>
                    </div>

                    {/* Right - Powered by V Assist Pro */}
                    <div className="flex items-center gap-3">
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
                          className="h-5 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                        />
                      </a>
                      <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional CSS for animations */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-5px); }
          75% { transform: translateY(-30px) translateX(15px); }
        }
      `}</style>
    </ErrorBoundary>
  );
};

export default EnhancedConsoleLayout;
