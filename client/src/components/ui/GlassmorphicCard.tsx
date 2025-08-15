import React from 'react';

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
    hover:border-gold/30
    hover:shadow-[0_0_50px_rgba(147,113,39,0.25)]
  ` : '';

  return (
    <div 
      className={`
        relative overflow-hidden rounded-xl
        bg-gradient-to-br from-black/60 via-black/40 to-black/60
        backdrop-blur-xl
        border border-gold/20
        transition-all duration-200 ease-out
        group
        ${glowStyles[glowIntensity]}
        ${hoverStyles}
        ${className}
      `}
    >
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassmorphicCard;
