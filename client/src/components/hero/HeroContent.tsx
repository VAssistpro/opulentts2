import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Professional Hero Content with Modern Design */}
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
                     bg-gradient-to-r from-gold/20 to-gold-lighter/20 
                     border border-gold/30 backdrop-blur-sm"
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase">
            ★ Premium Luxury Service ★
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
          <span className="block">New York's</span>
          <span className="block bg-gradient-to-r from-gold-lighter via-gold to-gold-dark 
                           bg-clip-text text-transparent">
            Premier Chauffeur
          </span>
          <span className="block">Experience</span>
        </motion.h1>

        {/* Elegant Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center justify-center my-8"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32"></div>
          <div className="mx-4 text-gold">✦</div>
          <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32"></div>
        </motion.div>

        {/* Refined Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 
                     max-w-4xl mx-auto leading-relaxed font-light"
        >
          Elevate your journey with{' '}
          <span className="font-semibold text-gold">Opulent Transport Solutions</span>
          {' – '}where luxury meets reliability across Manhattan, Brooklyn, Queens, 
          and all major airports including JFK, LGA, and Newark.
        </motion.p>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/70"
        >
          <div className="flex items-center space-x-2">
            <span className="text-gold">●</span>
            <span>24/7 Availability</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gold">●</span>
            <span>Professional Chauffeurs</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gold">●</span>
            <span>Luxury Fleet</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gold">●</span>
            <span>Airport Specialists</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;