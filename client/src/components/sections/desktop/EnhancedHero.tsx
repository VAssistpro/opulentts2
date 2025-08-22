import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, Calendar, Users, Award, Clock } from 'lucide-react';
import { useDesktopNavigation } from '../../../contexts/DesktopNavigationContext';
import GlassmorphicBookButton from '../../ui/buttons/GlassmorphicBookButton';

const EnhancedHero = () => {
  const { setActiveSection } = useDesktopNavigation();

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleBookNow = () => {
    handleScrollToSection('book');
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background Video */}
      <div className="absolute inset-0 -z-10">
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
        
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_70%)] z-10" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen max-w-[1400px] mx-auto" style={{ paddingTop: '2rem', paddingBottom: '26px' }}>

          {/* Left Content - Main Hero Text */}
          <div className="lg:col-span-7 text-left w-full overflow-hidden">

            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 rounded-full
                         bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-xl border border-gold/40"
              style={{ marginBottom: '9px' }}
            >
              <Award className="w-3 h-3 lg:w-4 lg:h-4 mr-2 text-gold" />
              <span className="text-gold text-xs lg:text-sm font-semibold tracking-wider uppercase">
                New York's Premier Luxury Service
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-bold mb-6 lg:mb-8 leading-[0.9] w-full"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            >
              <span className="block text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] w-full">
                OPULENT
              </span>
              <span className="block bg-gradient-to-r from-gold-lighter via-gold to-gold-dark
                               bg-clip-text text-transparent drop-shadow-none w-full">
                TRANSPORT
              </span>
              <span className="block font-light text-white/90 mt-2 lg:mt-4 w-full"
                    style={{ fontSize: 'clamp(1.5rem, 5vw, 4rem)', letterSpacing: '0.1em' }}>
                SOLUTIONS
              </span>
            </motion.h1>

            {/* Sophisticated Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mb-12"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl text-gold font-semibold
                           drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-wide"
                 style={{ marginBottom: '16px' }}>
                Where Excellence Meets Luxury
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/95 font-light
                           drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-3xl leading-relaxed">
                Experience unparalleled sophistication with our fleet of premium vehicles,
                professional chauffeurs, and white-glove service that sets the standard
                for luxury transportation in New York City.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
              style={{ marginBottom: '33px' }}
            >
              <GlassmorphicBookButton 
                onClick={handleBookNow}
                className="transform hover:scale-105 transition-all duration-300"
              />
              <a
                href="tel:+15163245483"
                className="group flex items-center justify-center gap-3 px-8 py-4 
                          bg-transparent border-2 border-white/30 text-white font-semibold 
                          rounded-xl backdrop-blur-sm hover:border-gold/60 hover:bg-white/10 
                          transition-all duration-300 text-lg min-w-[200px]"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (516) 324-5483
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap items-center gap-8 text-white/80"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">Professional Chauffeurs</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">5-Star Service</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Key Statistics & Features */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-8"
            >
              
              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-gold/30">
                  <div className="text-gold text-4xl font-bold mb-2">10+</div>
                  <div className="text-white/80 text-sm">Years of Excellence</div>
                </div>
                <div className="text-center p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-gold/30">
                  <div className="text-gold text-4xl font-bold mb-2">5★</div>
                  <div className="text-white/80 text-sm">Average Rating</div>
                </div>
                <div className="text-center p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-gold/30">
                  <div className="text-gold text-4xl font-bold mb-2">24/7</div>
                  <div className="text-white/80 text-sm">Service Available</div>
                </div>
                <div className="text-center p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-gold/30">
                  <div className="text-gold text-4xl font-bold mb-2">100%</div>
                  <div className="text-white/80 text-sm">Satisfaction Rate</div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-gold/30">
                <h3 className="text-gold text-lg font-semibold mb-4 text-center">Service Coverage</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Manhattan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Brooklyn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Queens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Bronx</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>JFK • LGA • EWR</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Long Island</span>
                  </div>
                </div>
              </div>

              {/* Call to Action Note */}
              <div className="text-center p-4 bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl border border-gold/20">
                <p className="text-white/90 text-sm">
                  <strong>Available 24/7</strong> • Instant booking confirmation • No hidden fees
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={() => handleScrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30
                   flex flex-col items-center gap-2
                   text-white/80 hover:text-gold transition-colors duration-300
                   group"
        aria-label="Scroll to learn more"
      >
        <span className="text-sm font-medium tracking-wider uppercase">Discover More</span>
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-current rounded-full mt-2"
          />
        </div>
      </motion.button>
    </div>
  );
};

export default EnhancedHero;
