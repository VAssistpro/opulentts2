import React from 'react';

const DramaticLighting = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary dramatic spotlights */}
      <div className="absolute inset-0">
        {/* Main spotlight from top-left */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(147,113,39,0.25) 0%, rgba(147,113,39,0.08) 40%, transparent 70%)',
            top: '-20%',
            left: '-10%',
            animationDuration: '8s'
          }}
        />
        
        {/* Secondary spotlight from bottom-right */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 40%, transparent 70%)',
            bottom: '-15%',
            right: '-15%',
            animationDelay: '2s',
            animationDuration: '12s'
          }}
        />
        
        {/* Ambient rim lighting */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, rgba(168,85,247,0.04) 40%, transparent 70%)',
            top: '60%',
            left: '50%',
            transform: 'translateX(-50%)',
            animationDelay: '4s',
            animationDuration: '10s'
          }}
        />
      </div>

      {/* Volumetric light rays */}
      <div className="absolute inset-0">
        {/* God rays from top-left */}
        <div className="absolute top-0 left-0 w-2 h-full opacity-40 transform rotate-12 origin-top">
          <div className="w-full h-full bg-gradient-to-b from-gold/30 via-gold/10 to-transparent blur-sm" />
        </div>
        <div className="absolute top-0 left-16 w-1 h-full opacity-30 transform rotate-6 origin-top">
          <div className="w-full h-full bg-gradient-to-b from-gold/25 via-gold/8 to-transparent blur-sm" />
        </div>
        <div className="absolute top-0 left-32 w-1 h-full opacity-25 transform -rotate-3 origin-top">
          <div className="w-full h-full bg-gradient-to-b from-gold/20 via-gold/6 to-transparent blur-sm" />
        </div>
        
        {/* Horizontal light beams */}
        <div className="absolute left-0 top-1/4 w-full h-1 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-gold/40 to-transparent blur-sm" />
        </div>
        <div className="absolute left-0 top-3/4 w-full h-0.5 opacity-15">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-sm" />
        </div>
      </div>

      {/* Dynamic shadow layers for depth */}
      <div className="absolute inset-0">
        {/* Corner shadows */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-black/60 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-black/80 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-black/80 to-transparent" />
        
        {/* Central depth enhancement */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Atmospheric fog layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(45deg, transparent 0%, rgba(0,0,0,0.2) 25%, transparent 50%, rgba(0,0,0,0.15) 75%, transparent 100%)',
            animation: 'float 30s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(-45deg, transparent 0%, rgba(0,0,0,0.15) 25%, transparent 50%, rgba(0,0,0,0.1) 75%, transparent 100%)',
            animation: 'float 25s ease-in-out infinite reverse',
            animationDelay: '5s'
          }}
        />
      </div>
    </div>
  );
};

export default DramaticLighting;
