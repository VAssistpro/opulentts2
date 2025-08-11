import React from 'react';

const ShimmerBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base dark gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#010B14] via-[#01111F] to-[#010B14]" />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(2,13,46,0.5),transparent_70%)]" />

      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(2,13,46,0.2)] to-transparent
                     translate-x-[-100%] animate-shimmer"
        />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-noise" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};

export default ShimmerBackground;