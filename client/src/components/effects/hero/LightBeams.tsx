import React from 'react';
import { useMouseParallax } from '../../../hooks/useMouseParallax';

const LightBeams = () => {
  const parallaxOffset = useMouseParallax(0.02);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Left Beam */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-[200%] opacity-20"
        style={{
          background: 'linear-gradient(to bottom, rgba(147, 113, 39, 0.3), transparent)',
          transform: `translate3d(${parallaxOffset.x * 20}px, -50%, 0) rotate(45deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Right Beam */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-[200%] opacity-20"
        style={{
          background: 'linear-gradient(to bottom, rgba(147, 113, 39, 0.3), transparent)',
          transform: `translate3d(${parallaxOffset.x * -20}px, -50%, 0) rotate(-45deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Shimmer Effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(147, 113, 39, 0.2), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s infinite',
        }}
      />
    </div>
  );
};

export default LightBeams;