import React from 'react';

const AtmosphericEnhancement = () => {
  return (
    <div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
      {/* Dramatic sweeping light rays */}
      <div 
        className="absolute opacity-30 animate-light-ray-sweep"
        style={{
          width: '300px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(147,113,39,0.8), transparent)',
          filter: 'blur(2px)',
          top: '25%',
          left: '-300px',
          transform: 'rotate(-5deg)',
          animationDuration: '20s'
        }}
      />
      
      <div 
        className="absolute opacity-25 animate-light-ray-sweep"
        style={{
          width: '400px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.7), transparent)',
          filter: 'blur(1px)',
          top: '60%',
          left: '-400px',
          transform: 'rotate(3deg)',
          animationDuration: '25s',
          animationDelay: '8s'
        }}
      />
      
      <div 
        className="absolute opacity-20 animate-light-ray-sweep"
        style={{
          width: '250px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent)',
          filter: 'blur(1px)',
          top: '45%',
          left: '-250px',
          transform: 'rotate(-2deg)',
          animationDuration: '30s',
          animationDelay: '15s'
        }}
      />

      {/* Enhanced atmospheric particles with movement */}
      <div className="absolute inset-0 opacity-60">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-atmospheric-flow"
            style={{
              background: `rgba(147,113,39,${0.3 + Math.random() * 0.4})`,
              filter: 'blur(0.5px)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${30 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Dramatic color washes */}
      <div 
        className="absolute inset-0 opacity-20 animate-atmospheric-flow"
        style={{
          background: 'radial-gradient(ellipse at 30% 70%, rgba(147,113,39,0.3) 0%, transparent 50%)',
          animationDuration: '60s'
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-15 animate-atmospheric-flow"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(59,130,246,0.25) 0%, transparent 40%)',
          animationDuration: '45s',
          animationDelay: '20s'
        }}
      />

      {/* Enhanced edge lighting */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[rgba(147,113,39,0.4)] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[rgba(147,113,39,0.5)] to-transparent opacity-70" />
      <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-[rgba(59,130,246,0.3)] to-transparent opacity-50" />
      <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-[rgba(168,85,247,0.3)] to-transparent opacity-50" />

      {/* Pulsing ambient zones */}
      <div 
        className="absolute opacity-40 animate-depth-pulse"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(147,113,39,0.4) 0%, transparent 70%)',
          filter: 'blur(30px)',
          top: '10%',
          right: '10%',
          animationDuration: '12s'
        }}
      />
      
      <div 
        className="absolute opacity-30 animate-depth-pulse"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 60%)',
          filter: 'blur(40px)',
          bottom: '15%',
          left: '15%',
          animationDuration: '16s',
          animationDelay: '6s'
        }}
      />
    </div>
  );
};

export default AtmosphericEnhancement;
