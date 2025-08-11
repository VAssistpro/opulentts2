import React from 'react';

const BackgroundEffects = () => {
  return (
    <>
      {/* Dynamic animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black pointer-events-none" />
      
      {/* Floating orbs for depth */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gold/8 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Subtle moving particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Radial golden glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,113,39,0.08),transparent_40%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,113,39,0.06),transparent_50%)] pointer-events-none" />
      
      {/* Noise texture for premium feel */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none bg-noise" />
    </>
  );
};

export default BackgroundEffects;