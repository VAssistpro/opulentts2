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

        {/* Professional Hero Content - No Panel Background */}
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 mb-8 rounded-full 
                       bg-black/60 backdrop-blur-xl border border-gold/40"
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              ★ NEW YORK'S PREMIER LUXURY SERVICE ★
            </span>
          </motion.div>

          {/* Main Title with Professional Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8
                       text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
                       tracking-tight leading-[0.9]"
          >
            <span className="block">OPULENT</span>
            <span className="block bg-gradient-to-r from-gold-lighter via-gold to-gold-dark 
                             bg-clip-text text-transparent drop-shadow-none">
              TRANSPORT
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-4 tracking-widest">
              SOLUTIONS
            </span>
          </motion.h1>

          {/* Professional Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-10"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-white font-light 
                         drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-4">
              Premium Chauffeur Services
            </p>
            <div className="flex items-center justify-center space-x-4 text-white/90 text-sm sm:text-base">
              <span>NYC</span>
              <span className="text-gold">•</span>
              <span>JFK • LGA • EWR</span>
              <span className="text-gold">•</span>
              <span>Charter Services</span>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-white/80 text-lg mb-6">Ready to elevate your travel experience?</p>
            <motion.button
              onClick={() => handleScrollToSection('book')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark
                         hover:from-[#5c4718] hover:via-[#937127] hover:to-[#5c4718]
                         text-black font-bold text-xl tracking-wider
                         border border-gold/50 shadow-[0_0_25px_rgba(147,113,39,0.5)]
                         hover:shadow-[0_0_35px_rgba(147,113,39,0.7)]
                         flex items-center justify-center gap-3 group mx-auto
                         transition-all duration-300"
            >
              <span>BOOK NOW</span>
              <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.button>
          </motion.div>
        </div>

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