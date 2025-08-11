import { useEffect, useState } from 'react';

interface ParallaxOptions {
  intensity?: number;
  reverse?: boolean;
}

export const useParallax = ({ intensity = 1, reverse = false }: ParallaxOptions = {}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate center offset (-1 to 1)
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
      setOffset({
        x: x * intensity * (reverse ? -1 : 1),
        y: y * intensity * (reverse ? -1 : 1)
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity, reverse]);

  return offset;
};