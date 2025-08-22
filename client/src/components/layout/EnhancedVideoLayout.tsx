import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from '../error/ErrorBoundary';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { SECTIONS } from './constants';
import ResponsiveNavbar from '../navigation/ResponsiveNavbar';

const EnhancedVideoLayout = ({ children }: { children?: React.ReactNode }) => {
  const { activeSection } = useDesktopNavigation();
  const ActiveComponent = SECTIONS[activeSection];

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-black text-white">
        
        {/* Full-Screen Video Background */}
        <div className="fixed inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="http://opulentts.com/bgvideo/otsbgvido2.mp4" type="video/mp4" />
          </video>
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Navigation */}
        <ResponsiveNavbar />

        {/* Main Content */}
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen"
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Floating Contact Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="fixed bottom-8 right-8 z-50"
        >
          <a
            href="tel:+15163245483"
            className="flex items-center justify-center w-14 h-14 rounded-full
                     bg-gold text-black shadow-lg hover:shadow-xl
                     transform hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </motion.div>

        {/* Live Status */}
        <div className="fixed bottom-8 left-8 z-40">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">LIVE - 24/7 AVAILABLE</span>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default EnhancedVideoLayout;