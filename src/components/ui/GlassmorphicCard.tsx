import React from 'react';
import { motion } from 'framer-motion';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  glowIntensity?: 'light' | 'medium' | 'strong';
  hoverEffect?: boolean;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  className = '',
  glowIntensity = 'medium',
  hoverEffect = true
}) => {
  const glowStyles = {
    light: 'shadow-[0_0_30px_rgba(147,113,39,0.15)]',
    medium: 'shadow-[0_0_40px_rgba(147,113,39,0.2)]',
    strong: 'shadow-[0_0_50px_rgba(147,113,39,0.25)]'
  };

  const hoverStyles = hoverEffect ? `
    hover:-translate-y-1
    hover:border-gold/40
    hover:shadow-[0_0_60px_rgba(147,113,39,0.3)]
    hover:bg-gradient-to-br hover:from-black/70 hover:via-black/50 hover:to-black/70
  ` : '';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        relative overflow-hidden rounded-xl
        bg-gradient-to-br from-black/60 via-black/40 to-black/60
        backdrop-blur-xl
        border border-gold/20
        transition-all duration-500
        group
        ${glowStyles[glowIntensity]}
        ${hoverStyles}
        ${className}
      `}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Animated glow effect */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 rounded-xl"
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassmorphicCard;