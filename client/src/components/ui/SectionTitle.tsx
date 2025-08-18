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
    <div className={`mb-4 ${alignmentClasses[alignment]}`}>
      <h2 className="font-playfair md:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-[38px] mt-[0px] mb-[0px] pt-[0px] pb-[0px]">
        {title}
      </h2>
      <div className={`w-20 h-0.5 my-4 ${dividerClasses[alignment]}
                    bg-gradient-to-r from-transparent via-gold to-transparent
                    shadow-[0_0_15px_rgba(147,113,39,0.4)]`} />
      {description && (
        <p className="font-montserrat text-lg md:text-xl max-w-3xl text-white/90 font-light tracking-wide leading-relaxed mx-auto mt-[0px] mb-[0px]">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;