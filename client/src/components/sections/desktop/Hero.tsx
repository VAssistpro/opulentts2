import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useDesktopNavigation } from '../../../contexts/DesktopNavigationContext'; // Adjust path
import HeroContent from '../content/HeroContent'; // Import the panel component
import GlassmorphicBookButton from '../../ui/buttons/GlassmorphicBookButton';
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
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        >
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

          {/* Enhanced Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl text-gold font-semibold
                         drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-4 tracking-wide">
              Where Excellence Meets Luxury
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-light
                         drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-6 max-w-4xl mx-auto leading-relaxed">
              Experience unparalleled sophistication with our fleet of premium vehicles,
              professional chauffeurs, and white-glove service that sets the standard
              for luxury transportation in New York City.
            </p>

            {/* Service Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gold/30">
                <div className="text-gold text-2xl font-bold mb-1">24/7</div>
                <div className="text-white/80 text-sm">Availability</div>
              </div>
              <div className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gold/30">
                <div className="text-gold text-2xl font-bold mb-1">5★</div>
                <div className="text-white/80 text-sm">Service Rating</div>
              </div>
              <div className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gold/30">
                <div className="text-gold text-2xl font-bold mb-1">10+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gold/30">
                <div className="text-gold text-2xl font-bold mb-1">100%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mb-6">
              <p className="text-white/80 text-sm font-medium mb-3 tracking-wider uppercase">
                Serving All of New York Metro Area
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full backdrop-blur-sm border border-gold/40 text-white/95 font-medium">
                  Manhattan
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full backdrop-blur-sm border border-gold/40 text-white/95 font-medium">
                  Brooklyn
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full backdrop-blur-sm border border-gold/40 text-white/95 font-medium">
                  Queens
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full backdrop-blur-sm border border-gold/40 text-white/95 font-medium">
                  Bronx & Staten Island
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full backdrop-blur-sm border border-gold/40 text-white/95 font-medium">
                  JFK • LGA • EWR
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full backdrop-blur-sm border border-gold/40 text-white/95 font-medium">
                  Westchester & Long Island
                </span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <p className="text-white text-xl md:text-2xl font-medium mb-2">
                Ready to Experience True Luxury?
              </p>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Join New York's elite who trust Opulent Transport for their most important journeys.
                From corporate executives to celebrities, we deliver discretion, punctuality, and unmatched comfort.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <GlassmorphicBookButton onClick={() => handleScrollToSection('book')} />
              <a
                href="tel:+15163245483"
                className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white/30
                          text-white font-semibold rounded-xl backdrop-blur-sm hover:border-gold/50
                          hover:bg-white/10 transition-all duration-300 text-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-white/60 text-sm"
            >
              Available 24/7 • Instant booking confirmation • No hidden fees
            </motion.p>
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
