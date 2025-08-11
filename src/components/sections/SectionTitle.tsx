// src/components/ui/SectionTitle.tsx (or similar path)

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

  // Map alignment to appropriate divider class using the utility glow effect
  const dividerAlignmentClasses = {
    left: 'mx-0',       // Aligns left edge to container edge
    center: 'mx-auto',   // Centers the divider
    right: 'ml-auto mr-0' // Aligns right edge to container edge
  };

  return (
    <div className={`mb-4 md:mb-6 ${alignmentClasses[alignment]}`}>
      {/* Apply gold gradient and glow utility classes */}
      <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-3
                    tracking-wider text-gradient-gold text-glow ${titleClassName}`}>
        {title}
      </h2>

      {/* Use the .divider-glow utility class for the effect */}
      {/* Control width and alignment here */}
      <div className={`w-24 h-0.5 my-4 md:my-5 divider-glow ${dividerAlignmentClasses[alignment]}`}></div>

      {/* Description styling looks okay, ensure text color matches theme */ }
      {description && (
        <p className={`font-montserrat text-lg md:text-xl max-w-3xl mt-4
                    text-text-secondary  /* Use theme text color */
                    font-light          /* Adjusted font-weight for better readability */
                    tracking-wide leading-relaxed ${
                      alignment === 'center' ? 'mx-auto' :
                      alignment === 'right' ? 'ml-auto mr-0' : // Ensure right aligns correctly
                      'mx-0' // Default to left align margin
                    } ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;