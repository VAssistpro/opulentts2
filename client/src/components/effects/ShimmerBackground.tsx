import React from 'react';

const ShimmerBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Simplified foundation layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000512] via-[#001224] to-[#000512]" />
      
      {/* Blue light beams - MUCH MORE PROMINENT - vertical on left and right, horizontal on top */}
      
      {/* Left vertical blue beam - ENHANCED */}
      <div 
        className="absolute left-0 top-0 h-full opacity-90"
        style={{
          width: '8px',
          background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,1), rgba(59,130,246,0.9), rgba(59,130,246,1), transparent)',
          filter: 'blur(1px)',
          boxShadow: '0 0 30px rgba(59,130,246,0.9), 0 0 60px rgba(59,130,246,0.6), 0 0 90px rgba(59,130,246,0.3)'
        }}
      />
      <div 
        className="absolute left-0 top-0 h-full opacity-70"
        style={{
          width: '16px',
          background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.8), rgba(59,130,246,0.6), rgba(59,130,246,0.8), transparent)',
          filter: 'blur(4px)'
        }}
      />
      <div 
        className="absolute left-0 top-0 h-full opacity-50"
        style={{
          width: '32px',
          background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.4), rgba(59,130,246,0.2), rgba(59,130,246,0.4), transparent)',
          filter: 'blur(8px)'
        }}
      />
      
      {/* Top horizontal blue beam - ENHANCED */}
      <div 
        className="absolute top-0 left-0 w-full opacity-90"
        style={{
          height: '8px',
          background: 'linear-gradient(to right, transparent, rgba(59,130,246,1), rgba(59,130,246,0.9), rgba(59,130,246,1), transparent)',
          filter: 'blur(1px)',
          boxShadow: '0 0 30px rgba(59,130,246,0.9), 0 0 60px rgba(59,130,246,0.6), 0 0 90px rgba(59,130,246,0.3)'
        }}
      />
      <div 
        className="absolute top-0 left-0 w-full opacity-70"
        style={{
          height: '16px',
          background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.8), rgba(59,130,246,0.6), rgba(59,130,246,0.8), transparent)',
          filter: 'blur(4px)'
        }}
      />
      <div 
        className="absolute top-0 left-0 w-full opacity-50"
        style={{
          height: '32px',
          background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.4), rgba(59,130,246,0.2), rgba(59,130,246,0.4), transparent)',
          filter: 'blur(8px)'
        }}
      />
      
      {/* Right vertical blue beam - ENHANCED */}
      <div 
        className="absolute right-0 top-0 h-full opacity-90"
        style={{
          width: '8px',
          background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,1), rgba(59,130,246,0.9), rgba(59,130,246,1), transparent)',
          filter: 'blur(1px)',
          boxShadow: '0 0 30px rgba(59,130,246,0.9), 0 0 60px rgba(59,130,246,0.6), 0 0 90px rgba(59,130,246,0.3)'
        }}
      />
      <div 
        className="absolute right-0 top-0 h-full opacity-70"
        style={{
          width: '16px',
          background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.8), rgba(59,130,246,0.6), rgba(59,130,246,0.8), transparent)',
          filter: 'blur(4px)'
        }}
      />
      <div 
        className="absolute right-0 top-0 h-full opacity-50"
        style={{
          width: '32px',
          background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.4), rgba(59,130,246,0.2), rgba(59,130,246,0.4), transparent)',
          filter: 'blur(8px)'
        }}
      />

      {/* Additional blue accent lighting to make it more visible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(59,130,246,0.4),rgba(59,130,246,0.15)_30%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.4),rgba(59,130,246,0.15)_30%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,rgba(59,130,246,0.4),rgba(59,130,246,0.15)_30%,transparent_60%)]" />

      {/* Gold accent lighting - simplified */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(147,113,39,0.20),rgba(147,113,39,0.08)_40%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(147,113,39,0.15),transparent_60%)]" />

      {/* Simplified shimmer effects */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(147,113,39,0.25)] to-transparent
                     translate-x-[-100%] animate-shimmer"
        />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-[rgba(59,130,246,0.15)] to-transparent
                     translate-x-[100%] animate-shimmer-reverse"
        />
      </div>

      {/* Simplified vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.8)_100%)]" />
      
      {/* Light film grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay" />
      
      {/* Edge shadows - simplified */}
      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-black/50 to-transparent" />
      <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-black/50 to-transparent" />
    </div>
  );
};

export default ShimmerBackground;
