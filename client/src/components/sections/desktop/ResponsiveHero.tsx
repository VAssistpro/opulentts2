import React from 'react';
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
      {/* Enhanced Background Video */}
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
        
        {/* Enhanced Readability Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/85 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/75 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0.8)_100%)] z-10" />
        
        {/* Luxury Light Effects */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-radial from-gold/15 to-transparent rounded-full blur-3xl animate-pulse-slow opacity-60" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-gold/10 to-transparent rounded-full blur-3xl animate-float opacity-50" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-screen py-12">

            {/* Left Content - Main Hero (3/5 width) */}
            <div className="lg:col-span-3 text-left space-y-6 lg:space-y-8">

              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center px-6 py-3 rounded-full
                           bg-gradient-to-r from-gold/30 via-gold/20 to-gold/30 
                           backdrop-blur-xl border-2 border-gold/60 
                           shadow-[0_0_40px_rgba(147,113,39,0.4)]"
              >
                <div className="flex items-center gap-3">
                  <Crown className="w-5 h-5 text-gold" />
                  <span className="text-gold text-sm lg:text-base font-bold tracking-wider uppercase">
                    ★ NEW YORK'S PREMIER LUXURY SERVICE ★
                  </span>
                </div>
              </motion.div>

              {/* Main Title - Enhanced Readability */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="space-y-4"
              >
                <h1 className="leading-[0.85]">
                  <motion.div 
                    className="text-white font-bold
                               text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                               drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]
                               [text-shadow:_0_0_40px_rgba(255,255,255,0.3)]"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    OPULENT
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-gold-lighter via-gold to-gold-dark
                               bg-clip-text text-transparent font-bold
                               text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                               drop-shadow-[0_0_50px_rgba(147,113,39,0.8)]"
                    style={{ 
                      filter: 'drop-shadow(0 0 20px rgba(147,113,39,0.6))'
                    }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    TRANSPORT
                  </motion.div>
                  
                  <motion.div 
                    className="text-white/95 font-light tracking-[0.15em]
                               text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                               drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    SOLUTIONS
                  </motion.div>
                </h1>
              </motion.div>

              {/* Enhanced Tagline and Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <p className="text-2xl sm:text-3xl lg:text-4xl text-gold font-bold
                               drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]
                               [text-shadow:_0_0_30px_rgba(147,113,39,0.5)]
                               tracking-wide">
                    Where Excellence Meets Luxury
                  </p>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-gold via-gold-lighter to-gold-dark rounded-full"></div>
                </div>
                
                <p className="text-base sm:text-lg lg:text-xl text-white font-light leading-relaxed max-w-3xl mt-1
                             drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]
                             [text-shadow:_0_0_20px_rgba(255,255,255,0.1)]">
                  Experience unparalleled sophistication with our curated fleet of ultra-premium vehicles,
                  elite professional chauffeurs, and white-glove concierge service that defines luxury
                  transportation throughout New York.
                </p>
              </motion.div>

              {/* Enhanced Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 pt-4"
              >
                <button
                  onClick={handleBookNow}
                  className="group relative overflow-hidden px-8 py-5 rounded-2xl 
                            bg-gradient-to-r from-gold via-gold-lighter to-gold
                            hover:from-gold-lighter hover:via-gold hover:to-gold-dark
                            text-black font-bold text-xl tracking-wide
                            transform hover:scale-105 transition-all duration-300
                            shadow-[0_15px_40px_rgba(147,113,39,0.5)] hover:shadow-[0_20px_50px_rgba(147,113,39,0.7)]
                            border-2 border-gold-lighter
                            min-w-[240px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Calendar className="w-6 h-6" />
                    <span>Book Your Journey</span>
                  </span>
                </button>

                <a
                  href="tel:+15163245483"
                  className="group flex items-center justify-center gap-3 px-8 py-5 
                            bg-black/40 border-3 border-white/50 text-white font-bold text-xl
                            rounded-2xl backdrop-blur-xl hover:border-gold/70 hover:bg-white/10 
                            transition-all duration-300 hover:scale-105
                            shadow-[0_10px_30px_rgba(0,0,0,0.5)]
                            min-w-[240px]"
                >
                  <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>Call (516) 324-5483</span>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="flex flex-wrap gap-4 pt-1"
              >
                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Clock, text: "24/7 Service" },
                  { icon: Award, text: "Elite Service" }
                ].map((item, index) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 px-5 py-3 
                               bg-black/40 backdrop-blur-xl rounded-xl border border-white/30
                               hover:scale-105 hover:bg-black/50 transition-all duration-300
                               shadow-[0_5px_20px_rgba(0,0,0,0.3)]"
                  >
                    <item.icon className="w-5 h-5 text-gold" />
                    <span className="text-white text-base font-semibold">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Sidebar - Refined Stats (2/5 width) */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="space-y-8"
              >
                
                {/* Excellence Statistics */}
                <div className="bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-2xl
                               rounded-3xl border-2 border-gold/40 p-5
                               shadow-[0_25px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <div className="text-center mb-5">
                    <h3 className="text-gold text-2xl font-bold tracking-wide flex items-center justify-center gap-2">
                      <Diamond className="w-6 h-6" />
                      Excellence by Numbers
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 leading-4">
                    {[
                      { value: "10+", label: "Years of\nExcellence", icon: Crown },
                      { value: "5.0★", label: "Perfect\nRating", icon: Star },
                      { value: "24/7", label: "Always\nAvailable", icon: Clock },
                      { value: "100%", label: "Client\nSatisfaction", icon: Diamond }
                    ].map((stat, index) => (
                      <div key={stat.label} className="text-center group hover:scale-105 transition-all duration-300">
                        <div className="mb-4">
                          <stat.icon className="w-10 h-10 text-gold mx-auto mb-3 
                                              group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-4xl font-bold text-gold mb-2 
                                      group-hover:text-gold-lighter transition-colors duration-300">
                          {stat.value}
                        </div>
                        <div className="text-white/90 text-sm font-medium tracking-wider uppercase
                                      whitespace-pre-line leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Coverage */}
                <div className="bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-2xl
                               rounded-3xl border-2 border-gold/40 p-5
                               shadow-[0_25px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <div className="text-center mb-6">
                    <h3 className="text-gold text-xl font-bold tracking-wide flex items-center justify-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Service Areas
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      'Manhattan',
                      'Brooklyn & Queens', 
                      'JFK • LGA • EWR',
                      'Westchester',
                      'Long Island'
                    ].map((location, index) => (
                      <div key={location} 
                           className="flex items-center justify-between py-3 px-4 rounded-xl
                                     bg-black/30 border border-gold/20 hover:border-gold/40
                                     hover:bg-black/40 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                          <span className="text-white font-medium">{location}</span>
                        </div>
                        <span className="text-gold/90 text-sm font-semibold bg-gold/10 px-3 py-1 rounded-full">
                          Premium
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.button
        onClick={() => handleScrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30
                   flex flex-col items-center gap-3
                   text-white/80 hover:text-gold transition-all duration-300
                   group transform hover:scale-110"
      >
        <span className="text-sm font-medium tracking-widest uppercase opacity-80 group-hover:opacity-100">
          Discover More
        </span>
        <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center 
                       group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(147,113,39,0.5)] 
                       transition-all duration-300">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-4 bg-current rounded-full mt-2 group-hover:bg-gold transition-colors"
          />
        </div>
      </motion.button>

      {/* Custom Styles for Animations */}
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
    </div>
  );
};

export default ResponsiveHero;
