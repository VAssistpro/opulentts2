import React, { createContext, useContext, useState, useEffect } from 'react';

interface ParallaxContextType {
  offset: { x: number; y: number };
}

const ParallaxContext = createContext<ParallaxContextType>({ offset: { x: 0, y: 0 } });

export const ParallaxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Reduce sensitivity for smoother effect
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };

    // Also handle touch events for mobile
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const x = (touch.clientX / window.innerWidth - 0.5) * 20;
      const y = (touch.clientY / window.innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <ParallaxContext.Provider value={{ offset }}>
      {children}
    </ParallaxContext.Provider>
  );
};

export const useParallax = () => {
  const context = useContext(ParallaxContext);
  if (!context) {
    throw new Error('useParallax must be used within a ParallaxProvider');
  }
  return context;
};