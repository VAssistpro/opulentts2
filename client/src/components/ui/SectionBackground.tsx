import React from 'react';

interface SectionBackgroundProps {
  variant?: 'default' | 'transparent' | 'dark';
  children: React.ReactNode;
  className?: string;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ 
  variant = 'default', 
  children, 
  className = '' 
}) => {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'transparent':
        return 'bg-transparent';
      case 'dark':
        return 'bg-black/60 backdrop-blur-lg';
      default:
        return 'bg-black/40 backdrop-blur-md';
    }
  };

  return (
    <section className={`relative py-1 overflow-auto ${className}`}>
      <div className={`absolute inset-0 ${getBackgroundClass()}`} />
      <div className="relative z-10 container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionBackground;