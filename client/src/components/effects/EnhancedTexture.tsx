import React from 'react';

const EnhancedTexture = () => {
  return (
    <div className="fixed inset-0 z-1 pointer-events-none overflow-hidden">
      {/* Enhanced noise patterns */}
      <div className="absolute inset-0 opacity-[0.08] bg-noise mix-blend-overlay" />
      
      {/* Film grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.12] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='filmGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0.3 0.3 0.3 0 0 0.3 0.3 0.3 0 0 0.3 0.3 0.3 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23filmGrain)'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Subtle paper/canvas texture */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.04' numOctaves='5' result='noise' seed='1'/%3E%3CfeDiffuseLighting in='noise' lighting-color='white' surfaceScale='1'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23paperTexture)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }}
      />

      {/* Scratched metal texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 98%, rgba(147,113,39,0.1) 100%),
            linear-gradient(180deg, transparent 98%, rgba(147,113,39,0.08) 100%),
            linear-gradient(45deg, transparent 97%, rgba(147,113,39,0.06) 100%)
          `,
          backgroundSize: '20px 20px, 15px 15px, 25px 25px',
        }}
      />

      {/* Organic texture variations */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-color-burn"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='organic'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='6' result='turbulence'/%3E%3CfeColorMatrix in='turbulence' values='0 0 0 0 0.1 0 0 0 0 0.05 0 0 0 0 0.15 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23organic)'/%3E%3C/svg%3E")`,
          backgroundSize: '250px 250px',
        }}
      />

      {/* Subtle dust particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: `${0.5 + Math.random() * 1}px`,
              height: `${0.5 + Math.random() * 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Scratches and wear marks */}
      <div className="absolute inset-0 opacity-[0.03]">
        {/* Vertical scratches */}
        <div 
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
          style={{ transform: 'rotate(1deg)' }}
        />
        <div 
          className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
          style={{ transform: 'rotate(-0.5deg)' }}
        />
        
        {/* Horizontal wear lines */}
        <div 
          className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          style={{ transform: 'rotate(0.2deg)' }}
        />
        <div 
          className="absolute left-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          style={{ transform: 'rotate(-0.3deg)' }}
        />
      </div>
    </div>
  );
};

export default EnhancedTexture;
