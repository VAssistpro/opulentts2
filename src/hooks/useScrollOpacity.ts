import { useEffect, useRef } from 'react';

export const useScrollOpacity = (fadeDistance: number = 500) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      const scrolled = window.scrollY;
      const opacity = Math.max(0, Math.min(1, 1 - scrolled / fadeDistance));
      elementRef.current.style.opacity = opacity.toString();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fadeDistance]);

  return elementRef;
};