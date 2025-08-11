import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';

const HeroTitle = () => {
  return (
    <AnimatedElement 
      animation="slide-down" 
      delay={300}
      as="h1"
      className="font-playfair text-[2rem] xs:text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl
                 font-bold tracking-wide leading-[1.1] mb-0
                 text-white relative"
    >
      {/* Responsive line breaks */}
      <div className="block sm:hidden space-y-1">
        <span className="block neon-text">New York's</span>
        <span className="block neon-text">Premier</span>
        <span className="block neon-text">Chauffeur</span>
        <span className="block neon-text">Service</span>
      </div>
      <div className="hidden sm:block space-y-1 md:space-y-2">
        <span className="block neon-text">New York's Premier</span>
        <span className="block neon-text">Chauffeur Service</span>
      </div>
    </AnimatedElement>
  );
};

export default HeroTitle;