import React from 'react';
import { motion } from 'framer-motion';

const LuxuryParticles = () => {
  // Generate enhanced particles with varied properties
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 1, // 1-7px
    x: Math.random() * 100, // 0-100%
    y: Math.random() * 100, // 0-100%
    delay: Math.random() * 15, // 0-15s delay
    duration: Math.random() * 25 + 20, // 20-45s duration
    opacity: Math.random() * 0.4 + 0.2, // 0.2-0.6 opacity
    type: Math.random() > 0.7 ? 'star' : 'dust', // 30% stars, 70% dust
    rotation: Math.random() * 360, // Random initial rotation
  }));
  
  // Generate floating light orbs
  const lightOrbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40, // 40-120px
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 30 + 25,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced floating light orbs */}
      {lightOrbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute rounded-full bg-gradient-radial from-gold/40 via-gold/20 to-transparent blur-2xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -80, 40, 0],
            scale: [0.8, 1.3, 0.9, 0.8],
            opacity: [0, orb.opacity, orb.opacity * 0.7, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Enhanced particles with different types */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${
            particle.type === 'star' 
              ? 'bg-gold/80 blur-[0.5px]' 
              : 'bg-gold/60 blur-[1px]'
          } rounded-full`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            clipPath: particle.type === 'star' 
              ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
              : 'circle(50%)',
          }}
          animate={{
            y: [0, -150, -300, -450],
            x: [0, Math.sin(particle.id) * 50, Math.cos(particle.id) * 30, 0],
            opacity: [0, particle.opacity, particle.opacity * 0.8, 0],
            scale: [0.3, 1, 1.4, 0.6],
            rotate: particle.type === 'star' ? [particle.rotation, particle.rotation + 360] : [0, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Enhanced atmospheric lighting effects */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 25% 35%, rgba(147,113,39,0.15) 0%, transparent 60%)",
            "radial-gradient(ellipse at 75% 65%, rgba(147,113,39,0.2) 0%, transparent 60%)",
            "radial-gradient(ellipse at 50% 80%, rgba(147,113,39,0.12) 0%, transparent 60%)",
            "radial-gradient(ellipse at 30% 20%, rgba(147,113,39,0.18) 0%, transparent 60%)",
            "radial-gradient(ellipse at 25% 35%, rgba(147,113,39,0.15) 0%, transparent 60%)",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Dynamic light rays */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "conic-gradient(from 0deg at 30% 70%, transparent 0deg, rgba(147,113,39,0.08) 60deg, transparent 120deg)",
            "conic-gradient(from 60deg at 70% 30%, transparent 0deg, rgba(147,113,39,0.1) 60deg, transparent 120deg)",
            "conic-gradient(from 120deg at 50% 50%, transparent 0deg, rgba(147,113,39,0.06) 60deg, transparent 120deg)",
            "conic-gradient(from 180deg at 20% 80%, transparent 0deg, rgba(147,113,39,0.09) 60deg, transparent 120deg)",
            "conic-gradient(from 0deg at 30% 70%, transparent 0deg, rgba(147,113,39,0.08) 60deg, transparent 120deg)",
          ],
          opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Shimmering overlay */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            "repeating-linear-gradient(45deg, transparent 0px, rgba(147,113,39,0.03) 2px, transparent 4px)",
            "repeating-linear-gradient(135deg, transparent 0px, rgba(147,113,39,0.05) 2px, transparent 4px)",
            "repeating-linear-gradient(225deg, transparent 0px, rgba(147,113,39,0.02) 2px, transparent 4px)",
            "repeating-linear-gradient(315deg, transparent 0px, rgba(147,113,39,0.04) 2px, transparent 4px)",
            "repeating-linear-gradient(45deg, transparent 0px, rgba(147,113,39,0.03) 2px, transparent 4px)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Sparkling highlights */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default LuxuryParticles;
