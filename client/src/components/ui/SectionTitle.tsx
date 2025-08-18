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
    <div className={`mb-6 ${alignmentClasses[alignment]}`}>
      {/* Title with liquid glass background */}
      <div className="relative inline-block group">
        <div className="relative rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 px-6 py-4
                       shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                       hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300
                       before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none before:rounded-xl">
          <h2 className={`relative z-10 font-playfair text-3xl md:text-4xl lg:text-5xl font-bold
                        tracking-tight text-black dark:text-white
                        ${titleClassName}`}>
            {title}
          </h2>
        </div>
      </div>

      <div className={`w-20 h-0.5 my-4 ${dividerClasses[alignment]}
                    bg-gradient-to-r from-transparent via-gold to-transparent
                    shadow-[0_0_15px_rgba(147,113,39,0.4)]`} />

      {description && (
        <div className="relative inline-block group">
          <div className="relative rounded-lg bg-white/[0.02] backdrop-blur-lg border border-white/5 px-4 py-3
                         shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_1px_2px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.2)]
                         hover:bg-white/[0.03] hover:border-gold/10 transition-all duration-300
                         before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/3 before:to-transparent before:pointer-events-none before:rounded-lg">
            <p className={`relative z-10 font-montserrat text-lg md:text-xl max-w-3xl
                        text-black/80 dark:text-white/90 font-light tracking-wide leading-relaxed
                        ${alignment === 'center' ? 'mx-auto' : 
                          alignment === 'right' ? 'ml-auto' : ''}
                        ${descriptionClassName}`}>
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;