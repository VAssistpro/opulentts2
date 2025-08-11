import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ParticlesBackground = () => {
  const { theme } = useTheme();
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Animated particles using CSS */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full
                     ${theme === 'dark' ? 'bg-gold/20' : 'bg-gold/10'}
                     animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10" />
    </div>
  );
};

export default ParticlesBackground;