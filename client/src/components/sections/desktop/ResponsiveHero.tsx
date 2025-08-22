import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Phone, Shield, Award, Clock, Star, MapPin, Crown, Diamond } from 'lucide-react';
import { useDesktopNavigation } from '../../../contexts/DesktopNavigationContext';

const ResponsiveHero = () => {
  const { setActiveSection } = useDesktopNavigation();

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId as any);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleBookNow = () => {
    handleScrollToSection('book');
  };

  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
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
        
        {/* Premium Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.7)_100%)] z-10" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/60 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-screen py-20">

            {/* Left Content - Main Hero */}
            <div className="lg:col-span-2 text-left space-y-6 lg:space-y-8">

              {/* Luxury Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full
                           bg-gradient-to-r from-gold/25 via-gold/15 to-gold/25 
                           backdrop-blur-xl border-2 border-gold/50 
                           shadow-[0_0_30px_rgba(147,113,39,0.3)]"
              >
                <div className="flex items-center gap-2 lg:gap-3">
                  <Crown className="w-4 h-4 lg:w-5 lg:h-5 text-gold" />
                  <span className="text-gold text-sm lg:text-base xl:text-lg font-bold tracking-wider uppercase">
                    New York's Premier Luxury Service
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 text-gold fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Main Title - Properly Responsive */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="space-y-2 lg:space-y-4"
              >
                <h1 className="leading-[0.85]">
                  <motion.div 
                    className="text-white font-bold drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]
                               text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    OPULENT
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-gold-lighter via-gold to-gold-dark 
                               bg-clip-text text-transparent font-bold
                               text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                    style={{ 
                      textShadow: '0 0 30px rgba(147,113,39,0.5)'
                    }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    TRANSPORT
                  </motion.div>
                  
                  <motion.div 
                    className="text-white/95 font-light tracking-[0.1em]
                               text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    SOLUTIONS
                  </motion.div>
                </h1>

                {/* Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="space-y-4 lg:space-y-6"
                >
                  <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gold font-bold
                               drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] tracking-wide">
                    Where Excellence Meets Luxury
                  </p>
                  
                  <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-gold via-gold-lighter to-gold-dark rounded-full"></div>
                  
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 font-light leading-relaxed max-w-4xl
                               drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    Experience unparalleled sophistication with our curated fleet of ultra-premium vehicles,
                    elite professional chauffeurs, and white-glove concierge service that defines luxury
                    transportation throughout New York.
                  </p>
                </motion.div>
              </motion.div>

              {/* Action Buttons - Responsive */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6"
              >
                <button
                  onClick={handleBookNow}
                  className="group relative overflow-hidden px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl lg:rounded-2xl 
                            bg-gradient-to-r from-gold via-gold-lighter to-gold
                            hover:from-gold-lighter hover:via-gold hover:to-gold-dark
                            text-black font-bold text-base sm:text-lg lg:text-xl tracking-wide
                            transform hover:scale-105 transition-all duration-300
                            shadow-[0_10px_30px_rgba(147,113,39,0.4)] hover:shadow-[0_15px_40px_rgba(147,113,39,0.6)]
                            border-2 border-gold-lighter"
                >
                  <span className="relative z-10 flex items-center gap-2 lg:gap-3">
                    <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span>Book Your Journey</span>
                  </span>
                </button>

                <a
                  href="tel:+15163245483"
                  className="group flex items-center justify-center gap-2 lg:gap-3 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 
                            bg-transparent border-2 lg:border-3 border-white/40 text-white font-bold text-base sm:text-lg lg:text-xl
                            rounded-xl lg:rounded-2xl backdrop-blur-xl hover:border-gold/60 hover:bg-white/10 
                            transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Call (516) 324-5483</span>
                  <span className="sm:hidden">Call Now</span>
                </a>
              </motion.div>

              {/* Trust Indicators - Responsive */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="flex flex-wrap gap-3 lg:gap-4"
              >
                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Clock, text: "24/7 Service" },
                  { icon: Award, text: "Elite Service" }
                ].map((item, index) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 
                               bg-black/30 backdrop-blur-xl rounded-lg lg:rounded-xl border border-white/20
                               hover:scale-105 transition-all duration-300"
                  >
                    <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-gold" />
                    <span className="text-white text-sm lg:text-base font-semibold">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Sidebar - Responsive Stats */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="space-y-6 lg:space-y-8"
              >
                
                {/* Statistics */}
                <div className="bg-black/50 backdrop-blur-xl rounded-2xl lg:rounded-3xl border-2 border-gold/30 p-4 lg:p-6 xl:p-8
                               shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                  <h3 className="text-gold text-lg lg:text-xl xl:text-2xl font-bold mb-4 lg:mb-6 text-center tracking-wide">
                    Excellence by Numbers
                  </h3>
                  <div className="grid grid-cols-2 gap-3 lg:gap-4 xl:gap-6">
                    {[
                      { value: "10+", label: "Years of\nExcellence", icon: Crown },
                      { value: "5.0★", label: "Perfect\nRating", icon: Star },
                      { value: "24/7", label: "Always\nAvailable", icon: Clock },
                      { value: "100%", label: "Client\nSatisfaction", icon: Diamond }
                    ].map((stat, index) => (
                      <div key={stat.label} className="text-center group">
                        <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-gold mx-auto mb-2 lg:mb-3 
                                            group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gold mb-1 lg:mb-2 
                                      group-hover:scale-105 transition-transform duration-300">
                          {stat.value}
                        </div>
                        <div className="text-white/80 text-xs lg:text-sm font-medium tracking-wider uppercase
                                      whitespace-pre-line">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Coverage */}
                <div className="bg-black/50 backdrop-blur-xl rounded-2xl lg:rounded-3xl border-2 border-gold/30 p-4 lg:p-6 xl:p-8
                               shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                  <h3 className="text-gold text-base lg:text-lg xl:text-xl font-bold mb-4 lg:mb-6 text-center flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
                    Service Areas
                  </h3>
                  <div className="space-y-3 lg:space-y-4">
                    {[
                      'Manhattan',
                      'Brooklyn & Queens', 
                      'JFK • LGA • EWR',
                      'Westchester',
                      'Long Island'
                    ].map((location, index) => (
                      <div key={location} className="flex items-center justify-between py-2 border-b border-gold/20 last:border-0">
                        <div className="flex items-center gap-2 lg:gap-3">
                          <div className="w-2 h-2 lg:w-3 lg:h-3 bg-gold rounded-full animate-pulse"></div>
                          <span className="text-white/90 text-sm lg:text-base font-medium">{location}</span>
                        </div>
                        <span className="text-gold/80 text-xs lg:text-sm">Premium</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => handleScrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-30
                   flex flex-col items-center gap-2 lg:gap-3
                   text-white/80 hover:text-gold transition-all duration-300
                   group transform hover:scale-110"
      >
        <span className="text-xs lg:text-sm font-medium tracking-widest uppercase opacity-80 group-hover:opacity-100">
          Discover More
        </span>
        <div className="w-6 lg:w-8 h-10 lg:h-12 border-2 border-current rounded-full flex justify-center group-hover:border-gold transition-colors">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 lg:w-1.5 h-3 lg:h-4 bg-current rounded-full mt-2 group-hover:bg-gold"
          />
        </div>
      </motion.button>
    </div>
  );
};

export default ResponsiveHero;
