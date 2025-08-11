import React from 'react';
import AnimatedElement from '../ui/AnimatedElement'; // Adjust path if needed

const HeroSubtext = () => {
  // Enhanced shadow values - slightly more blur and opacity
  const textShadowStyle = "[text-shadow:0_2px_6px_rgba(0,0,0,0.95)]"; // Darker, slightly larger shadow

  return (
    <AnimatedElement animation="slide-up" delay={600}>
      <p className={`font-montserrat text-base sm:text-lg md:text-xl lg:text-xl /* Keep text sizes */
                     text-white /* Use pure white for max brightness */
                     mt-4 md:mt-6 /* Keep margin */
                     max-w-xs sm:max-w-xl lg:max-w-3xl mx-auto /* Keep max widths */
                     font-semibold /* Increased weight from normal */
                     tracking-wider /* Slightly wider spacing */
                     leading-relaxed sm:leading-loose /* Good line height */
                     ${textShadowStyle} /* Apply enhanced shadow */ `}
      >
        {/* Mobile Version */}
        <span className="sm:hidden">
          Premium chauffeured services for NYC, Airports, & Charter needs with{' '}
          {/* Apply same shadow to gold text */}
          <span className={`text-gold font-semibold tracking-wider ${textShadowStyle}`}>
            Opulent Transport Solutions
          </span>.
        </span>

        {/* Desktop Version */}
        <span className="hidden sm:inline">
          Travel in comfort and style with{' '}
           {/* Apply same shadow to gold text */}
          <span className={`text-gold font-semibold tracking-wider ${textShadowStyle}`}>
            Opulent Transport Solutions
          </span>
          {' – '}Premium chauffeured services across New York City, JFK, LGA, EWR Airports, and Charter/As directed luxury transportation.
        </span>
      </p>
    </AnimatedElement>
  );
};

export default HeroSubtext;