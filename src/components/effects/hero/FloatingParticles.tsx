import React from 'react';
import { useMouseParallax } from '../../../hooks/useMouseParallax';

const FloatingParticles = () => {
  const parallaxOffset = useMouseParallax(0.02);

  return (
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gold/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `translate3d(${parallaxOffset.x * 10}px, ${parallaxOffset.y * 10}px, 0)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;