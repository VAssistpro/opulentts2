import React from 'react';
import { useMouseParallax } from '../../hooks/useMouseParallax';

const SectionLightBeams = () => {
  const parallaxOffset = useMouseParallax(0.02);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left Beam */}
      <div 
        className="light-beam light-beam-left animate-beam"
        style={{
          transform: `translate3d(${parallaxOffset.x * 20}px, -50%, 0) rotate(45deg)`,
        }}
      />

      {/* Right Beam */}
      <div 
        className="light-beam light-beam-right animate-beam-delayed"
        style={{
          transform: `translate3d(${parallaxOffset.x * -20}px, -50%, 0) rotate(-45deg)`,
        }}
      />
    </div>
  );
};

export default SectionLightBeams;