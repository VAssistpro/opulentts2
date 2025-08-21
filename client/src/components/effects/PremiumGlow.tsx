import React from 'react';
import { motion } from 'framer-motion';

const PremiumGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central luxury glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-96 h-96 rounded-full bg-gradient-radial from-gold/20 via-gold/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Corner accent glows */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-radial from-gold/15 to-transparent blur-2xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-radial from-gold/12 to-transparent blur-3xl"
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [0.9, 1.2, 0.9],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Ambient light strips */}
      <motion.div
        className="absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent blur-sm"
        animate={{
          opacity: [0, 0.6, 0],
          scaleX: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/25 to-transparent blur-sm"
        animate={{
          opacity: [0, 0.5, 0],
          scaleX: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Radial pulse from center */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [0, 2, 4],
          opacity: [0.4, 0.2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        <div className="w-32 h-32 rounded-full border border-gold/30 blur-[2px]" />
      </motion.div>
    </div>
  );
};

export default PremiumGlow;
