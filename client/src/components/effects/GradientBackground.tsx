import React from 'react';

// Define subtle colors - adjust opacity (last value) as needed
const SUBTLE_GLOW_COLOR = 'rgba(255, 245, 200, 0.08)'; // Pale warm white, 8% opacity
const SUBTLE_SHIMMER_COLOR = 'rgba(147, 113, 39, 0.04)'; // Your default gold, very low 4% opacity

const GradientBackground = () => {
  return (
    // Ensure this is behind main content (z-0) but potentially above a pure black body bg
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* Base dark gradient (optional, could be just body bg) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black" />

      {/* Subtle Glow Effect (Changed from blue to warm white/pale gold) */}
      {/* This creates a soft glow from the center. If you want the TOP spotlight instead, replace this line */}
      {/* with: <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,245,200,0.1),transparent_70%)]" /> */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${SUBTLE_GLOW_COLOR}, transparent 70%)`
        }}
      />

      {/* Animated overlay gradients (Changed from blue to subtle gold) */}
      <div className="absolute inset-0 opacity-70"> {/* Reduced opacity of shimmers */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[--shimmer-color] to-transparent
                     translate-x-[-100%] animate-shimmer"
           style={{ '--shimmer-color': SUBTLE_SHIMMER_COLOR } as React.CSSProperties}
        />
        {/* Consider if you need the vertical shimmer - remove if too much */}
        {/* <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[--shimmer-color] to-transparent
                     translate-y-[-100%] animate-shimmer-vertical" // Assuming you have shimmer-vertical animation
           style={{ '--shimmer-color': SUBTLE_SHIMMER_COLOR } as React.CSSProperties}
        /> */}
      </div>

      {/* Noise texture overlay (Kept as is, generally useful) */}
      {/* Ensure you have a 'bg-noise' utility or image defined in your CSS/Tailwind config */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-noise" />
    </div>
  );
};

// Add keyframes to index.css if shimmer-vertical is used and not defined
/*
@layer utilities {
  @keyframes shimmer-vertical {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  .animate-shimmer-vertical {
    animation: shimmer-vertical 3s linear infinite; // Adjust duration/timing
  }
}
*/


export default GradientBackground;