import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Professional Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 mb-6 rounded-full 
                       bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 
                       border border-yellow-500/30 backdrop-blur-sm"
          >
            <span className="text-yellow-400 text-sm font-medium tracking-wider uppercase">
              ★ NEW YORK'S PREMIER LUXURY SERVICE ★
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6
                       bg-gradient-to-b from-white via-white to-gray-200 
                       bg-clip-text text-transparent
                       tracking-tight leading-tight"
          >
            <span className="block">OPULENT</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                             bg-clip-text text-transparent">
              TRANSPORT
            </span>
            <span className="block">SOLUTIONS</span>
          </motion.h1>

          {/* Elegant Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center justify-center my-8"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-32"></div>
            <div className="mx-4 text-yellow-500">✦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-32"></div>
          </motion.div>

          {/* Refined Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 
                       max-w-4xl mx-auto leading-relaxed font-light mb-8"
          >
            Elevate your journey with{' '}
            <span className="font-semibold text-yellow-500">Opulent Transport Solutions</span>
            {' – '}where luxury meets reliability across Manhattan, Brooklyn, Queens, 
            and all major airports including JFK, LGA, and Newark.
          </motion.p>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-white/70"
          >
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">●</span>
              <span>24/7 Availability</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">●</span>
              <span>Professional Chauffeurs</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">●</span>
              <span>Luxury Fleet</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">●</span>
              <span>Airport Specialists</span>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="flex items-center space-x-3 bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
              <Calendar className="w-6 h-6" />
              <span>Book Your Journey</span>
            </button>
            
            <button className="flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Phone className="w-6 h-6" />
              <span>Call (516) 324-5483</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;