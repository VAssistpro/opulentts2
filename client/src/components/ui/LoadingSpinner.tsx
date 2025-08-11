import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'gold' | 'white' | 'primary';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'gold',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    gold: 'border-gold-lighter border-t-transparent',
    white: 'border-white border-t-transparent',
    primary: 'border-primary border-t-transparent'
  };

  return (
    <motion.div
      className={`
        ${sizeClasses[size]}
        ${colorClasses[color]}
        border-2 rounded-full
        ${className}
      `}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
      data-testid="loading-spinner"
    />
  );
};

export default LoadingSpinner;