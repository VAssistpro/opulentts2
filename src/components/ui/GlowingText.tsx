import React from 'react';

interface GlowingTextProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ children, className = '' }) => {
  return (
    <span 
      className={`relative ${className}`}
      style={{
        textShadow: `
          0 2px 4px rgba(0, 0, 0, 0.5),
          0 4px 8px rgba(0, 0, 0, 0.4),
          0 8px 16px rgba(0, 0, 0, 0.3),
          0 0 20px rgba(255, 255, 255, 0.15),
          0 0 30px rgba(255, 255, 255, 0.1)
        `
      }}
    >
      {children}
    </span>
  );
};

export default GlowingText;