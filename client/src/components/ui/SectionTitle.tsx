import React from 'react';

interface SectionTitleProps {
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  titleClassName = '',
  descriptionClassName = '',
  alignment = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const dividerClasses = {
    left: 'mx-0',
    center: 'mx-auto',
    right: 'ml-auto mr-0'
  };

  return (
    <div className={`mb-6 ${alignmentClasses[alignment]} relative`}>
      {/* Subtle background glow behind title */}
      <div className={`absolute inset-0 -z-10 ${alignmentClasses[alignment]}`}>
        <div className="w-full h-32 bg-gradient-radial from-gold/[0.02] via-gold/[0.01] to-transparent blur-3xl"></div>
      </div>
      
      <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4
                    tracking-tight text-white relative z-10
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]
                    text-shadow-[0_0_30px_rgba(147,113,39,0.3)]
                    ${titleClassName}`}>
        {title}
      </h2>

      <div className={`w-24 h-0.5 my-4 ${dividerClasses[alignment]} relative z-10
                    bg-gradient-to-r from-transparent via-gold to-transparent
                    shadow-[0_0_20px_rgba(147,113,39,0.6)]
                    after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-gold/50 after:to-transparent after:blur-sm`} />

      {description && (
        <p className={`font-montserrat text-lg md:text-xl max-w-3xl mt-4 relative z-10
                    text-white/90 font-light tracking-wide leading-relaxed
                    drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]
                    ${alignment === 'center' ? 'mx-auto' : 
                      alignment === 'right' ? 'ml-auto' : ''}
                    ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;