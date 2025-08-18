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
        bg-white/[0.03] backdrop-blur-xl border border-white/10
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
        hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none
        group
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
