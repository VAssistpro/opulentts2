import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'service' | 'fleet';
}

const Card: React.FC<CardProps> = ({ children, className = '', variant = 'default' }) => {
  const baseStyles = 'rounded-lg transition-all duration-500';
  
  const variantStyles = {
    default: 'bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)] hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none',
    service: 'service-card luxury-card bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)] hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none',
    fleet: 'fleet-card luxury-card group bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)] hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;