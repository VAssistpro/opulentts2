import React from 'react';
import { motion } from 'framer-motion';

const LuxuryParticles = () => {
  // Generate random particles with varied sizes and animations
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2, // 2-6px
    x: Math.random() * 100, // 0-100%
    y: Math.random() * 100, // 0-100%
    delay: Math.random() * 10, // 0-10s delay
    duration: Math.random() * 20 + 15, // 15-35s duration
    opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4 opacity
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gold/60 blur-[1px]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, -200, -300],
            opacity: [0, particle.opacity, particle.opacity, 0],
            scale: [0.5, 1, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating golden dust effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(147,113,39,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(147,113,39,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 90%, rgba(147,113,39,0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(147,113,39,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default LuxuryParticles;
