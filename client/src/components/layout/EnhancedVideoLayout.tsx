import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from '../error/ErrorBoundary';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { SECTIONS } from './constants';

const EnhancedVideoLayout = ({ children }: { children?: React.ReactNode }) => {
  const { activeSection, setActiveSection } = useDesktopNavigation();
  const ActiveComponent = SECTIONS[activeSection];

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        
        {/* Enhanced Full-Screen Video Background */}
        <div className="fixed inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          >
            <source src="http://opulentts.com/bgvideo/otsbgvido2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Enhanced Luxury Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,113,39,0.15)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
          
          {/* Atmospheric Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-radial from-gold/10 to-transparent rounded-full blur-3xl animate-pulse-slow opacity-60" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-blue-400/8 to-transparent rounded-full blur-3xl animate-float opacity-50" />
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-radial from-purple-400/8 to-transparent rounded-full blur-2xl animate-pulse-slow opacity-40" />
          </div>
        </div>

        {/* Restructured Header with Separate Logo and Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10"
               style={{
                 background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(10,15,26,0.6) 50%, rgba(0,0,0,0.7) 100%)',
                 boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
               }}>

          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">

            {/* Large Logo Section */}
            <div className="flex justify-center py-4 border-b border-white/10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group cursor-pointer"
                onClick={() => {
                  setActiveSection('home');
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-gold/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-80" />
                  <img
                    src="https://opulentts.com/bgvideo/otsnobg.png"
                    alt="Opulent Transport Solutions"
                    className="relative w-auto object-contain group-hover:scale-105 transition-all duration-500
                             filter drop-shadow-[0_0_25px_rgba(147,113,39,0.5)] group-hover:drop-shadow-[0_0_35px_rgba(147,113,39,0.7)]"
                    style={{ height: '85px' }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Navigation Menu Row */}
            <div className="flex items-center justify-between h-16">

              {/* Navigation Items */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:flex items-center gap-2"
              >
                {[
                  { icon: '🏠', label: 'Home', section: 'home' },
                  { icon: '📋', label: 'About', section: 'about' },
                  { icon: '⚡', label: 'Services', section: 'services' },
                  { icon: '🚗', label: 'Fleet', section: 'fleet' },
                  { icon: '⭐', label: 'Reviews', section: 'testimonials' },
                  { icon: '📧', label: 'Contact', section: 'contact' }
                ].map(({ icon, label, section }) => {
                  const isActive = activeSection === section;
                  return (
                    <button
                      key={section}
                      onClick={() => {
                        setActiveSection(section as any);
                        setTimeout(() => {
                          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium
                                backdrop-blur-xl border ${
                        isActive
                          ? 'bg-gold/20 text-gold border-gold/50 shadow-[0_0_20px_rgba(147,113,39,0.4)]'
                          : 'bg-white/5 text-white/90 border-white/10 hover:bg-white/10 hover:border-gold/30 hover:text-gold'
                      }`}
                    >
                      <span className="text-base">{icon}</span>
                      <span>{label}</span>
                    </button>
                  );
                })}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <button
                  onClick={() => {
                    setActiveSection('book');
                    setTimeout(() => {
                      document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="group relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-black
                           bg-gradient-to-r from-gold via-gold-lighter to-gold
                           hover:from-gold-lighter hover:via-gold hover:to-gold-dark
                           transform hover:scale-105 transition-all duration-300
                           shadow-[0_0_20px_rgba(147,113,39,0.4)] hover:shadow-[0_0_30px_rgba(147,113,39,0.6)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>📅</span>
                    <span>Book Now</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <button
                  className="group flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-white
                           bg-white/10 backdrop-blur-xl border border-white/20
                           hover:bg-white/20 hover:border-gold/40 transition-all duration-300"
                >
                  <span>👤</span>
                  <span>Account</span>
                </button>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Main Content Area with Glass Effects */}
        <main className="relative z-10 pt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1]
              }}
              className="w-full"
            >
              {activeSection === 'home' ? (
                <ActiveComponent />
              ) : (
                <div className="min-h-screen pb-8">
                  {/* Content Container with Glass Effect */}
                  <div className="container mx-auto px-6 lg:px-8 py-8 max-w-7xl">
                    <div className="backdrop-blur-2xl bg-black/20 rounded-3xl border border-white/10
                                  shadow-[0_0_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]
                                  overflow-hidden min-h-[calc(100vh-12rem)]"
                         style={{
                           background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(10,15,26,0.2) 50%, rgba(0,0,0,0.3) 100%)'
                         }}>

                      {/* Content with Better Scrolling */}
                      <div className="h-full overflow-y-auto custom-scrollbar p-8">
                        <ActiveComponent />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Floating Contact Button */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <a
            href="tel:+15163245483"
            className="group flex items-center justify-center w-16 h-16 rounded-full
                     bg-gradient-to-r from-gold to-gold-dark text-black
                     shadow-[0_0_30px_rgba(147,113,39,0.5)] hover:shadow-[0_0_40px_rgba(147,113,39,0.7)]
                     transform hover:scale-110 transition-all duration-300"
          >
            <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </motion.div>

        {/* Luxury Status Indicators */}
        <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
          <div className="backdrop-blur-xl bg-black/30 rounded-full px-4 py-2 border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-xs font-medium">LIVE</span>
            </div>
          </div>
          <div className="backdrop-blur-xl bg-black/30 rounded-full px-4 py-2 border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-white/80 text-xs font-medium">24/7 AVAILABLE</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced CSS for luxury animations */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.05); }
          50% { transform: translateY(-10px) translateX(-5px) scale(0.95); }
          75% { transform: translateY(-30px) translateX(15px) scale(1.1); }
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </ErrorBoundary>
  );
};

export default EnhancedVideoLayout;
