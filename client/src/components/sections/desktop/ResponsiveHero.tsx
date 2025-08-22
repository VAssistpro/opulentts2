import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Shield, Award, Clock, Star, MapPin, Crown, Diamond } from 'lucide-react';
import { useDesktopNavigation } from '../../../contexts/DesktopNavigationContext';

const ResponsiveHero = () => {
  const { setActiveSection } = useDesktopNavigation();

  const handleBookNow = () => {
    setActiveSection('book');
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

          {/* Left Content - Main Hero (3/5 width) */}
          <div className="lg:col-span-3 space-y-8">

            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                         bg-black/40 backdrop-blur-xl border border-gold/40"
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
              <h1>
                <div className="text-6xl lg:text-8xl font-bold text-white leading-none mb-2">
                  OPULENT
                </div>
                <div className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gold via-gold-lighter to-gold 
                               bg-clip-text text-transparent leading-none mb-2">
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
                         rounded-xl hover:bg-gold/90 transform hover:scale-105 transition-all duration-300
                         shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Journey</span>
              </button>

              <a
                href="tel:+15163245483"
                className="flex items-center justify-center gap-3 px-8 py-4 
                         bg-black/40 backdrop-blur-xl border border-white/40 text-white font-bold text-lg
                         rounded-xl hover:border-gold hover:bg-white/10 
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
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 px-4 py-2 
                           bg-black/40 backdrop-blur-xl rounded-lg border border-white/20"
                >
                  <item.icon className="w-5 h-5 text-gold" />
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Sidebar - Stats Panel (2/5 width) */}
          <div className="lg:col-span-2">
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
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "10+", label: "Years of\nExcellence", icon: Crown },
                    { value: "5.0★", label: "Perfect\nRating", icon: Star },
                    { value: "24/7", label: "Always\nAvailable", icon: Clock },
                    { value: "100%", label: "Client\nSatisfaction", icon: Diamond }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <stat.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gold mb-2">{stat.value}</div>
                      <div className="text-white/80 text-sm font-medium whitespace-pre-line">
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
                    <div key={location} className="flex items-center justify-between py-2 px-4 rounded-lg bg-black/20 border border-gold/20">
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
    </div>
  );
};

export default ResponsiveHero;