import React from 'react';

const HeroOverlay = () => {
  return (
    <div className="absolute inset-0 z-10">
      {/* Dark gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />
      
      {/* Additional vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/40" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-noise" />
    </div>
  );
};

export default HeroOverlay;