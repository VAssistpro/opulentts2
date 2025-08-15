import React from 'react';

const FloatingLightOrbs = () => {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Large floating orbs with slow movement */}
      <div 
        className="absolute w-32 h-32 rounded-full opacity-20 animate-slow-drift"
        style={{
          background: 'radial-gradient(circle, rgba(147,113,39,0.8) 0%, rgba(147,113,39,0.2) 40%, transparent 70%)',
          filter: 'blur(20px)',
          top: '10%',
          left: '20%',
          animationDuration: '45s'
        }}
      />
      
      <div 
        className="absolute w-24 h-24 rounded-full opacity-15 animate-slow-drift-reverse"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.7) 0%, rgba(59,130,246,0.2) 40%, transparent 70%)',
          filter: 'blur(15px)',
          top: '60%',
          right: '15%',
          animationDuration: '50s'
        }}
      />
      
      <div 
        className="absolute w-20 h-20 rounded-full opacity-25 animate-slow-drift"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(168,85,247,0.2) 40%, transparent 70%)',
          filter: 'blur(12px)',
          bottom: '20%',
          left: '70%',
          animationDuration: '40s',
          animationDelay: '15s'
        }}
      />
      
      <div 
        className="absolute w-16 h-16 rounded-full opacity-30 animate-slow-drift-reverse"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.8) 0%, rgba(16,185,129,0.3) 40%, transparent 70%)',
          filter: 'blur(8px)',
          top: '30%',
          left: '5%',
          animationDuration: '55s',
          animationDelay: '25s'
        }}
      />

      {/* Smaller floating particles */}
      <div 
        className="absolute w-8 h-8 rounded-full opacity-40 animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(147,113,39,0.9) 0%, transparent 60%)',
          filter: 'blur(4px)',
          top: '15%',
          right: '30%',
          animationDuration: '20s'
        }}
      />
      
      <div 
        className="absolute w-6 h-6 rounded-full opacity-35 animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.8) 0%, transparent 60%)',
          filter: 'blur(3px)',
          bottom: '35%',
          right: '45%',
          animationDuration: '25s',
          animationDelay: '10s'
        }}
      />
      
      <div 
        className="absolute w-4 h-4 rounded-full opacity-50 animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.9) 0%, transparent 60%)',
          filter: 'blur(2px)',
          top: '70%',
          left: '85%',
          animationDuration: '18s',
          animationDelay: '5s'
        }}
      />

      {/* Pulsing light beams */}
      <div 
        className="absolute opacity-20 animate-depth-pulse"
        style={{
          width: '2px',
          height: '40%',
          background: 'linear-gradient(to bottom, rgba(147,113,39,0.8), transparent)',
          filter: 'blur(1px)',
          top: '10%',
          left: '60%',
          animationDuration: '8s'
        }}
      />
      
      <div 
        className="absolute opacity-15 animate-depth-pulse"
        style={{
          width: '1px',
          height: '60%',
          background: 'linear-gradient(to bottom, rgba(59,130,246,0.7), transparent)',
          filter: 'blur(0.5px)',
          top: '20%',
          right: '70%',
          animationDuration: '12s',
          animationDelay: '4s'
        }}
      />
    </div>
  );
};

export default FloatingLightOrbs;
