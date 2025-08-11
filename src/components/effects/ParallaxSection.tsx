import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.5,
  className = '' 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    let ticking = false;
    let initialOffset = 0;

    const onScroll = () => {
      if (!ticking && section) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const yPos = -(scrolled * speed);
          section.style.transform = `translate3d(0, ${yPos}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxSection;