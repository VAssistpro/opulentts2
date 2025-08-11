import React, { useEffect, useRef } from 'react';
import LightBeams from './hero/LightBeams';
import FloatingParticles from './hero/FloatingParticles';

const ParallaxHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.scrollY;
      const opacity = Math.max(0, Math.min(1, 1 - scrolled / 500));
      containerRef.current.style.opacity = opacity.toString();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <LightBeams />
      <FloatingParticles />
    </div>
  );
};

export default ParallaxHero;