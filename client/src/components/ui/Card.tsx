import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'service' | 'fleet';
}

const Card: React.FC<CardProps> = ({ children, className = '', variant = 'default' }) => {
  const baseStyles = 'rounded-lg transition-all duration-500';
  
  const variantStyles = {
    default: 'bg-white dark:bg-dark-bg p-6',
    service: 'service-card luxury-card bg-white dark:bg-dark-bg p-6',
    fleet: 'fleet-card luxury-card group'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;