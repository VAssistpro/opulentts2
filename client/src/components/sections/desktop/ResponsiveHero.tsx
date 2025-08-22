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
    <div className="relative w-full min-h-screen flex items-center pt-20">
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-[80vh]">

          {/* Left Content - Main Hero */}
          <div className="lg:col-span-2 space-y-8">

            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                         bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-xl border border-gold/40"
            >
              <Crown className="w-5 h-5 text-gold" />
              <span className="text-gold font-bold tracking-wider">
                ★ NEW YORK'S PREMIER LUXURY SERVICE ★
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="space-y-2">
                <div className="text-6xl lg:text-8xl font-bold text-white leading-none">
                  OPULENT
                </div>
                <div className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gold via-gold-lighter to-gold 
                               bg-clip-text text-transparent leading-none">
                  TRANSPORT
                </div>
                <div className="text-4xl lg:text-6xl font-light text-white/95 tracking-wide leading-none">
                  SOLUTIONS
                </div>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl text-gold font-bold">
                Where Excellence Meets Luxury
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full"></div>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Experience unparalleled sophistication with our curated fleet of ultra-premium vehicles,
                elite professional chauffeurs, and white-glove concierge service that defines luxury
                transportation throughout New York.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button
                onClick={handleBookNow}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gold text-black font-bold text-lg
                         rounded-lg hover:bg-gold/90 transform hover:scale-105 transition-all duration-300
                         shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Journey</span>
              </button>

              <a
                href="tel:+15163245483"
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/50 text-white font-bold text-lg
                         rounded-lg backdrop-blur-xl hover:border-gold hover:bg-white/10 
                         transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Call (516) 324-5483</span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Clock, text: "24/7 Service" },
                { icon: Award, text: "Elite Service" }
              ].map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl rounded-lg border border-white/20"
                >
                  <item.icon className="w-5 h-5 text-gold" />
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Sidebar - Stats Panel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-8"
            >
              
              {/* Excellence by Numbers */}
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-gold/30 p-6">
                <div className="text-center mb-6">
                  <h3 className="text-gold text-xl font-bold flex items-center justify-center gap-2 mb-2">
                    <Diamond className="w-5 h-5" />
                    Excellence by Numbers
                  </h3>
                  <div className="w-12 h-0.5 bg-gold mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "10+", label: "Years of\nExcellence", icon: Crown },
                    { value: "5.0★", label: "Perfect\nRating", icon: Star },
                    { value: "24/7", label: "Always\nAvailable", icon: Clock },
                    { value: "100%", label: "Client\nSatisfaction", icon: Diamond }
                  ].map((stat, index) => (
                    <div key={stat.label} className="text-center group">
                      <stat.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gold mb-1">{stat.value}</div>
                      <div className="text-white/80 text-xs font-medium whitespace-pre-line leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-gold/30 p-6">
                <div className="text-center mb-6">
                  <h3 className="text-gold text-xl font-bold flex items-center justify-center gap-2 mb-2">
                    <MapPin className="w-5 h-5" />
                    Service Areas
                  </h3>
                  <div className="w-12 h-0.5 bg-gold mx-auto"></div>
                </div>
                
                <div className="space-y-3">
                  {[
                    'Manhattan',
                    'Brooklyn & Queens', 
                    'JFK • LGA • EWR',
                    'Westchester',
                    'Long Island'
                  ].map((location) => (
                    <div key={location} className="flex items-center justify-between py-2 px-3 rounded-lg bg-black/20 border border-gold/20">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                        <span className="text-white font-medium">{location}</span>
                      </div>
                      <span className="text-gold text-xs font-semibold bg-gold/10 px-2 py-1 rounded">
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

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => handleScrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                   flex flex-col items-center gap-2 text-white/60 hover:text-gold transition-colors duration-300"
      >
        <span className="text-sm font-medium">Discover More</span>
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

export default ResponsiveHero;