import React from 'react';
import AnimatedElement from '../../ui/AnimatedElement'; // Assuming path is correct

const HeroContent = () => {
  return (
    // --- INCREASED BOTTOM PADDING ON OUTER CONTAINER ---
    <div className="text-center px-2 sm:px-4 pb-36 md:pb-48">
      {/* Inner container for max-width */}
      <div className="max-w-4xl xl:max-w-5xl mx-auto">
        <AnimatedElement animation="slide-down" delay={300}>
          <h1 className="font-playfair text-white
                       /* Added text shadow for readability */
                       [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
            <div className="block space-y-1 md:space-y-2">
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide"> {/* Slightly wider tracking */}
                New York's Premier
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide"> {/* Slightly wider tracking */}
                Chauffeur Service
              </span>
            </div>
          </h1>
        </AnimatedElement>

        {/* Optional Divider */}
        {/* <AnimatedElement animation="fade-in" delay={500}>
           <div className="w-24 md:w-32 h-0.5 mx-auto my-6 md:my-8 divider-glow" />
         </AnimatedElement> */}

        <AnimatedElement animation="slide-up" delay={600}>
          {/* --- REMOVED incorrect padding from <p> tag --- */}
          <p className="mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl text-white/90 /* Changed back to white/90 for better contrast */
                     max-w-3xl mx-auto leading-relaxed md:leading-loose /* Increased line height */
                     tracking-wide /* Added tracking */
                     [text-shadow:0_1px_4px_rgba(0,0,0,0.6)] /* Subtle shadow for description */">
            Travel in comfort with{' '}
            <span className="text-gold font-semibold tracking-normal"> {/* Reset tracking for gold text */}
              Opulent Transport Solutions
            </span>
            {' – '}premium chauffeured services across New York City, JFK, LGA, EWR Airports,
            and Hourly/As directed service.
          </p>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default HeroContent;