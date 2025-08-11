import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useDesktopNavigation } from '../../../contexts/DesktopNavigationContext'; // Adjust path
import HeroContent from '../content/HeroContent'; // Import the panel component
// Assume HeroOverlay is separate and handles background effects
// import HeroOverlay from '../effects/HeroOverlay';

const Hero = () => {
  const { setActiveSection } = useDesktopNavigation();

  const handleScrollToSection = (sectionId: string) => {
     setActiveSection(sectionId);
     setTimeout(() => {
       document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }, 100);
  };

  // Gold shadow colors for BUTTON
  const GOLD_DEFAULT_RGB = '147, 113, 39';
  const GOLD_SHADOW_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.4)`;
  const GOLD_SHADOW_HOVER_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.6)`;

  return (
    // Use items-start and pt-* for vertical positioning
    <div className="relative w-full h-screen flex items-start justify-center pt-28 md:pt-32 lg:pt-36 overflow-hidden"> {/* Adjust pt-* */}
      {/* Background Video (Keep as is) */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" /* poster="..." */ >
          <source src="http://opulentts.com/bgvideo/otsbgvido2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Render Overlay Component Separately */}
        {/* <HeroOverlay /> */}
         {/* OR keep overlays here if preferred */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10 pointer-events-none" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.7)_100%)] z-10 pointer-events-none" />

      </div>

      {/* Content Container - WRAPS PANEL AND BUTTON */}
      {/* Ensure this container's padding works with the fixed CTA */}
      <div className="relative z-20 flex flex-col items-center w-full"> {/* Use z-20 for content */}

        {/* Render the Frosted Glass Panel with Text */}
        <HeroContent />

        {/* Primary CTA Button - Positioned AFTER the panel */}
         <motion.button
            onClick={() => handleScrollToSection('book')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }} // Adjust delay based on panel animations
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            // Use mt-* relative to the panel above it
            className="mt-8 md:mt-10 px-10 md:px-12 py-4 md:py-5 rounded-full
                     bg-gradient-to-r from-gold-dark via-gold to-gold-dark
                     hover:from-[#5c4718] hover:via-[#937127] hover:to-[#5c4718]
                     text-black font-bold text-lg md:text-xl tracking-wider
                     border border-gold/50
                     shadow-[0_0_20px_var(--shadow-color)]
                     hover:shadow-[0_0_30px_var(--shadow-hover-color)]
                     flex items-center justify-center gap-3 group"
             style={{ '--shadow-color': GOLD_SHADOW_COLOR, '--shadow-hover-color': GOLD_SHADOW_HOVER_COLOR } as React.CSSProperties}
          >
            <span>Book Your Journey</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1.5" />
          </motion.button>

      </div>


      {/* Scroll Down Indicator (Keep as is) */}
      <motion.button
        onClick={() => handleScrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 /* Ensure above fixed CTA */
                 flex flex-col items-center gap-1 md:gap-2
                 text-text-secondary hover:text-gold transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="text-xs md:text-sm font-medium tracking-wider uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 animate-bounce" />
      </motion.button>
    </div>
  );
};

export default Hero;