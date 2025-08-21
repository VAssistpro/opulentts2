import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface LuxuryTextProps {
  children: React.ReactNode;
  variant?: 'hero' | 'subtitle' | 'body' | 'caption';
  className?: string;
  animated?: boolean;
  delay?: number;
}

const LuxuryText: React.FC<LuxuryTextProps> = ({
  children,
  variant = 'body',
  className,
  animated = true,
  delay = 0,
}) => {
  const baseClasses = {
    hero: "font-playfair text-white font-bold tracking-wide leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]",
    subtitle: "font-inter text-white/95 font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]",
    body: "font-inter text-white/90 font-normal tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]",
    caption: "font-inter text-white/80 font-light tracking-wider drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]",
  };

  const Component = animated ? motion.div : 'div';

  const animationProps = animated ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.8, 
      delay,
      ease: "easeOut" 
    },
  } : {};

  return (
    <Component
      className={cn(baseClasses[variant], className)}
      {...animationProps}
    >
      {children}
    </Component>
  );
};

export default LuxuryText;
