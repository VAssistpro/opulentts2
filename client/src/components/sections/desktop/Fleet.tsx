import React from 'react';
import FleetShowcase from '../../fleet/FleetShowcase'; // Assuming path is correct
import AnimatedSection from '../../ui/AnimatedSection';
import SectionTitle from '../../ui/SectionTitle'; // Assuming SectionTitle is fixed

const Fleet = () => {
  // Define Subtle Gold RGBA for border/shadow
  const GOLD_DEFAULT_RGB = '147, 113, 39';
  const SUBTLE_BORDER_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.2)`;
  const SUBTLE_SHADOW_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.15)`; // Even fainter shadow

  return (
    // Adjust padding as needed
    <div className="h-full flex items-center justify-center relative py-12 md:py-16">
      {/* Optional background overlay */}
      {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-md" /> */}

      <div className="relative z-10 container mx-auto px-4 md:px-6"> {/* Adjusted padding */}
        <AnimatedSection>
          {/* Use the updated SectionTitle component */}
          <SectionTitle title="Our Fleet" />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          {/* Apply subtle gold border/shadow to the FleetShowcase container */}
          <div
            className="relative rounded-xl overflow-hidden mt-8 md:mt-10 /* Added margin */
                       before:pointer-events-none before:absolute before:inset-0 before:rounded-xl
                       before:border before:border-[--border-color]
                       before:shadow-[0_0_15px_var(--shadow-color)]"
            style={
              {
                '--border-color': SUBTLE_BORDER_COLOR,
                '--shadow-color': SUBTLE_SHADOW_COLOR,
              } as React.CSSProperties
            }
           >
            <FleetShowcase />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Fleet;