import React from 'react';
import AnimatedElement from '../ui/AnimatedElement'; // Adjust path
import HeroTitle from './HeroTitle'; // Adjust path
import HeroSubtext from './HeroSubtext'; // Adjust path

const HeroContent = () => {
  // Define RGBA for subtle gold shadow on panel
  const GOLD_DEFAULT_RGB = '147, 113, 39';
  const PANEL_SHADOW_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.15)`; // Very subtle shadow

  return (
    // Outer container still needs padding for fixed CTA below
    <div className="text-center px-4 sm:px-6 pb-36 md:pb-48">
      {/* --- FROSTED GLASS PANEL --- */}
      <AnimatedElement animation="fade-in" delay={200} duration={700}>
        <div
          className="max-w-3xl xl:max-w-4xl mx-auto
                   bg-black/40  /* Semi-transparent background */
                   backdrop-blur-md /* Blur effect */
                   rounded-xl
                   border border-white/10 /* Subtle border */
                   p-6 py-8 sm:p-8 md:p-10 /* Padding inside panel */
                   shadow-[0_8px_30px_var(--panel-shadow)]"
           style={
               { '--panel-shadow': PANEL_SHADOW_COLOR } as React.CSSProperties
           }
        >
          {/* Render Title and Subtext INSIDE */}
          {/* Ensure HeroTitle/HeroSubtext have NO drop-shadows if panel provides contrast */}
          <HeroTitle />

          {/* Divider */}
          <AnimatedElement animation="fade-in" delay={500}>
            <div className="w-24 md:w-32 h-0.5 mx-auto my-5 md:my-6 divider-glow" />
          </AnimatedElement>

          <HeroSubtext />

        </div>
      </AnimatedElement>

      {/* --- PRIMARY CTA BUTTON (Rendered Separately in Hero.tsx below this component) --- */}
      {/* The main gold button will be positioned after this panel in Hero.tsx */}

    </div>
  );
};

export default HeroContent;import React from 'react';
import AnimatedElement from '../ui/AnimatedElement'; // Adjust path
import HeroTitle from './HeroTitle'; // Adjust path
import HeroSubtext from './HeroSubtext'; // Adjust path

const HeroContent = () => {
  // Define RGBA for subtle gold shadow on panel
  const GOLD_DEFAULT_RGB = '147, 113, 39';
  const PANEL_SHADOW_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.15)`; // Very subtle shadow

  return (
    // Outer container still needs padding for fixed CTA below
    <div className="text-center px-4 sm:px-6 pb-36 md:pb-48">
      {/* --- FROSTED GLASS PANEL --- */}
      <AnimatedElement animation="fade-in" delay={200} duration={700}>
        <div
          className="max-w-3xl xl:max-w-4xl mx-auto
                   bg-black/40  /* Semi-transparent background */
                   backdrop-blur-md /* Blur effect */
                   rounded-xl
                   border border-white/10 /* Subtle border */
                   p-6 py-8 sm:p-8 md:p-10 /* Padding inside panel */
                   shadow-[0_8px_30px_var(--panel-shadow)]"
           style={
               { '--panel-shadow': PANEL_SHADOW_COLOR } as React.CSSProperties
           }
        >
          {/* Render Title and Subtext INSIDE */}
          {/* Ensure HeroTitle/HeroSubtext have NO drop-shadows if panel provides contrast */}
          <HeroTitle />

          {/* Divider */}
          <AnimatedElement animation="fade-in" delay={500}>
            <div className="w-24 md:w-32 h-0.5 mx-auto my-5 md:my-6 divider-glow" />
          </AnimatedElement>

          <HeroSubtext />

        </div>
      </AnimatedElement>

      {/* --- PRIMARY CTA BUTTON (Rendered Separately in Hero.tsx below this component) --- */}
      {/* The main gold button will be positioned after this panel in Hero.tsx */}

    </div>
  );
};

export default HeroContent;