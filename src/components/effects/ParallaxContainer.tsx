import React, { ReactNode } from 'react';
import { useParallax } from '../../hooks/useParallax';

interface ParallaxContainerProps {
  children: ReactNode;
  intensity?: number;
  reverse?: boolean;
  className?: string;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  intensity = 1,
  reverse = false,
  className = ''
}) => {
  const offset = useParallax({ intensity, reverse });

  return (
    <div
      className={`transform transition-transform duration-75 ease-out will-change-transform ${className}`}
      style={{
        transform: `translate3d(${offset.x * 20}px, ${offset.y * 20}px, 0)`
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxContainer;