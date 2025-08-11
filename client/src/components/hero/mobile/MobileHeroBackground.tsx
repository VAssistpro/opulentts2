import React from 'react';
import { motion } from 'framer-motion';

const MobileHeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <img 
          src="https://opulentts.com/mobbgimg/ts1656.jpg"
          alt="Luxury Transportation"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.3),rgba(0,0,0,0.6))]" />
      
      {/* Animated light beams */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-1/4 w-96 h-[200%] opacity-20 transform rotate-45
                     bg-gradient-to-b from-gold/30 to-transparent" />
        <div className="absolute top-0 right-1/4 w-96 h-[200%] opacity-20 transform -rotate-45
                     bg-gradient-to-b from-gold/30 to-transparent" />
      </motion.div>
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-noise" />
    </div>
  );
};

export default MobileHeroBackground;