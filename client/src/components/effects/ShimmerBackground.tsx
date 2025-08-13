import React from 'react';

const ShimmerBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep foundation layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000308] via-[#000814] to-[#000308]" />
      
      {/* Enhanced depth layers */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#020B1A] via-transparent to-[#010612]" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#000B1F] to-transparent" />

      {/* Dramatic directional lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(147,113,39,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.04),transparent_60%)]" />

      {/* Enhanced shimmer effects */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(147,113,39,0.15)] to-transparent
                     translate-x-[-100%] animate-shimmer"
        />
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-[rgba(59,130,246,0.08)] to-transparent
                     translate-x-[100%] animate-shimmer-reverse"
        />
      </div>

      {/* Multi-layered vignette for dramatic depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_15%,rgba(0,0,0,0.3)_60%,rgba(0,0,0,0.8)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
      
      {/* Enhanced noise texture for film-like quality */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-noise" />
      
      {/* Atmospheric shadow casting */}
      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-black/30 to-transparent" />
      <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-black/30 to-transparent" />
    </div>
  );
};

export default ShimmerBackground;