import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from '../error/ErrorBoundary';
import LuxuryNavbar from '../navigation/LuxuryNavbar';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { SECTIONS } from './constants';
import Footer from './Footer';
import BackgroundEffects from './DesktopLayout/BackgroundEffects';

const LuxuryDesktopLayout = ({ children }: { children?: React.ReactNode }) => {
  const { activeSection } = useDesktopNavigation();
  const ActiveComponent = SECTIONS[activeSection];

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* Background Effects */}
        <BackgroundEffects />
        
        {/* Luxury Navigation */}
        <LuxuryNavbar />

        {/* Main Content Area */}
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] // Custom easing for luxury feel
              }}
              className="w-full"
            >
              {/* Section-specific backgrounds and styling */}
              <div className={`${getSectionStyles(activeSection)}`}>
                {activeSection === 'home' ? (
                  <ActiveComponent />
                ) : (
                  <div className="h-screen overflow-y-auto overflow-x-hidden custom-scrollbar pt-20">
                    <div className="min-h-full">
                      <ActiveComponent />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Luxury Footer - Only show on non-hero sections */}
        {activeSection !== 'home' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Footer />
          </motion.div>
        )}

        {/* Floating Elements for Luxury Feel */}
        <div className="fixed bottom-8 right-8 z-50">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            <a
              href="tel:+15163245483"
              className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold to-gold-dark 
                       text-black rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 
                       transition-all duration-300 group"
              aria-label="Call us"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

// Helper function to get section-specific styling
const getSectionStyles = (section: string): string => {
  const baseStyles = "relative";

  switch (section) {
    case 'home':
      return `${baseStyles} min-h-screen`;
    case 'about':
      return `${baseStyles} h-screen`;
    case 'services':
      return `${baseStyles} h-screen`;
    case 'fleet':
      return `${baseStyles} h-screen`;
    case 'testimonials':
      return `${baseStyles} h-screen`;
    case 'contact':
      return `${baseStyles} h-screen`;
    case 'book':
      return `${baseStyles} h-screen`;
    default:
      return `${baseStyles} h-screen`;
  }
};

export default LuxuryDesktopLayout;
