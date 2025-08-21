import React from 'react';
import { motion } from 'framer-motion';
import LuxuryParticles from '../../effects/LuxuryParticles';
import PremiumGlow from '../../effects/PremiumGlow';

const MobileHeroBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Background Video - Same as desktop */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          loading="lazy"
          poster="https://opulentts.com/mobbgimg/ts1656.jpg"
          className="w-full h-full object-cover scale-110"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            transform: 'scale(1.1)'
          }}
        >
          <source src="https://opulentts.com/bgvideo/otsbgvido2.mp4" type="video/mp4" />
          {/* Fallback image for devices that can't play video */}
          <img 
            src="https://opulentts.com/mobbgimg/ts1656.jpg"
            alt="Luxury Transportation"
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>
      
      {/* Enhanced gradient overlays - Consistent with desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),rgba(0,0,0,0.8))]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/30" />

      {/* Premium visual effects */}
      <PremiumGlow />
      <LuxuryParticles />
      
      {/* Enhanced Floating Golden Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-radial from-gold/25 to-transparent blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -35, 0],
            scale: [0.8, 1.4, 0.8],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-gradient-radial from-gold/20 to-transparent blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 25, 0],
            scale: [1.2, 0.9, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-1/3 left-1/2 w-32 h-32 rounded-full bg-gradient-radial from-gold/30 to-transparent blur-lg"
        />

        {/* Additional ambient orbs */}
        <motion.div
          animate={{
            y: [0, 60, 0],
            x: [0, -20, 0],
            scale: [0.5, 1.1, 0.5],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute top-3/4 right-1/4 w-56 h-56 rounded-full bg-gradient-radial from-gold/15 to-transparent blur-3xl"
        />
      </div>
      
      {/* Enhanced texture and film grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise" />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "repeating-linear-gradient(0deg, transparent 0px, rgba(147,113,39,0.02) 1px, transparent 2px)",
            "repeating-linear-gradient(90deg, transparent 0px, rgba(147,113,39,0.03) 1px, transparent 2px)",
            "repeating-linear-gradient(45deg, transparent 0px, rgba(147,113,39,0.015) 1px, transparent 2px)",
            "repeating-linear-gradient(0deg, transparent 0px, rgba(147,113,39,0.02) 1px, transparent 2px)",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default MobileHeroBackground;
