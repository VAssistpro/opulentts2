import React from 'react';

const BackgroundEffects = () => {
  return (
    <>
      {/* Deep dramatic gradient layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-black pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-t from-black via-transparent to-slate-900/50 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />
      
      {/* Enhanced floating orbs with dramatic lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary golden light source */}
        <div className="absolute top-1/6 left-1/5 w-[500px] h-[500px] bg-gold/12 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/6 left-1/5 w-[300px] h-[300px] bg-gold/8 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        
        {/* Secondary ambient lights */}
        <div className="absolute top-2/3 right-1/6 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-[350px] h-[350px] bg-purple-500/4 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
        
        {/* Dramatic edge lighting */}
        <div className="absolute top-0 left-0 w-[600px] h-[200px] bg-gold/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[200px] bg-gold/4 rounded-full blur-3xl" />
      </div>
      
      {/* Enhanced particle system */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gold/30 rounded-full animate-float"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
              boxShadow: `0 0 ${2 + Math.random() * 4}px rgba(147,113,39,0.5)`
            }}
          />
        ))}
      </div>
      
      {/* Dramatic directional light rays */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-gold/20 via-gold/5 to-transparent transform -skew-x-12" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-gold/15 via-gold/3 to-transparent transform skew-x-6" />
        <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-gold/10 via-gold/2 to-transparent transform -skew-x-3" />
      </div>
      
      {/* Complex radial lighting system */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(147,113,39,0.15),transparent_40%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_80%_90%,rgba(147,113,39,0.08),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />
      
      {/* Enhanced depth shadows */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      
      {/* Subtle film grain texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-noise" />
      
      {/* Dynamic atmospheric fog */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/10 to-transparent animate-slow-drift" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-black/5 to-transparent animate-slow-drift-reverse" />
      </div>
    </>
  );
};

export default BackgroundEffects;