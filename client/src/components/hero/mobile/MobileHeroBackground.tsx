import React from 'react';
import { motion } from 'framer-motion';

const MobileHeroBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Background Video - Same as desktop */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        >
          <source src="http://opulentts.com/bgvideo/otsbgvido2.mp4" type="video/mp4" />
          {/* Fallback image for devices that can't play video */}
          <img 
            src="https://opulentts.com/mobbgimg/ts1656.jpg"
            alt="Luxury Transportation"
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>
      
      {/* Enhanced gradient overlays - Consistent with desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.3),rgba(0,0,0,0.6))]" />
      
      {/* Floating Golden Orbs - Same as desktop */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-radial from-gold/20 to-transparent blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-gradient-radial from-gold/15 to-transparent blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/3 left-1/2 w-24 h-24 rounded-full bg-gradient-radial from-gold/25 to-transparent blur-lg"
        />
      </div>
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-noise" />
    </div>
  );
};

export default MobileHeroBackground;