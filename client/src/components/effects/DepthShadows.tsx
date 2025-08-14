import React from 'react';

const DepthShadows = () => {
  return (
    <div className="fixed inset-0 z-1 pointer-events-none overflow-hidden">
      {/* Multi-layered depth system */}
      
      {/* Primary depth layer - closest */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_20%,rgba(0,0,0,0.1)_40%,rgba(0,0,0,0.3)_70%,rgba(0,0,0,0.6)_100%)]" />
      
      {/* Secondary depth layer - mid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,transparent_30%,rgba(0,0,0,0.15)_60%,rgba(0,0,0,0.4)_90%)]" />
      
      {/* Tertiary depth layer - far */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_70%,transparent_40%,rgba(0,0,0,0.2)_80%)]" />

      {/* Atmospheric perspective layers */}
      <div className="absolute inset-0">
        {/* Top atmospheric fade */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/40 via-black/15 to-transparent" />
        
        {/* Bottom atmospheric fade */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
        
        {/* Left side fade */}
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
        
        {/* Right side fade */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-black/35 via-black/10 to-transparent" />
      </div>

      {/* Dynamic shadow casting elements */}
      <div className="absolute inset-0">
        {/* Simulated building/structure shadows */}
        <div 
          className="absolute opacity-20"
          style={{
            top: '10%',
            left: '15%',
            width: '200px',
            height: '300px',
            background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
            transform: 'skewX(-10deg) skewY(2deg)',
            borderRadius: '0 0 20px 5px',
          }}
        />
        
        <div 
          className="absolute opacity-15"
          style={{
            top: '20%',
            right: '20%',
            width: '150px',
            height: '250px',
            background: 'linear-gradient(225deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
            transform: 'skewX(8deg) skewY(-1deg)',
            borderRadius: '5px 0 15px 0',
          }}
        />
      </div>

      {/* Volumetric shadow rays */}
      <div className="absolute inset-0">
        {/* Diagonal shadow beams */}
        <div className="absolute top-0 left-1/4 w-2 h-full opacity-10 transform rotate-12 origin-top bg-gradient-to-b from-black/40 to-transparent blur-sm" />
        <div className="absolute top-0 right-1/3 w-3 h-full opacity-8 transform -rotate-8 origin-top bg-gradient-to-b from-black/35 to-transparent blur-sm" />
        
        {/* Intersecting shadow planes */}
        <div 
          className="absolute opacity-12 blur-sm"
          style={{
            top: '30%',
            left: '10%',
            width: '80%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.3) 80%, transparent 100%)',
            transform: 'rotate(-2deg)',
          }}
        />
      </div>

      {/* Ambient occlusion simulation */}
      <div className="absolute inset-0">
        {/* Corner occlusion */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-black/50 to-transparent rounded-br-full" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-black/50 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-black/60 to-transparent rounded-tr-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-black/60 to-transparent rounded-tl-full" />
        
        {/* Edge darkening */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />
      </div>

      {/* Contact shadows - where surfaces meet */}
      <div className="absolute inset-0">
        {/* Floor contact shadows */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-8 bg-gradient-to-t from-black/40 to-transparent blur-md rounded-full" />
        <div className="absolute bottom-0 right-1/6 w-1/3 h-6 bg-gradient-to-t from-black/30 to-transparent blur-lg rounded-full" />
        
        {/* Wall contact shadows */}
        <div className="absolute left-0 top-1/3 w-4 h-1/3 bg-gradient-to-r from-black/35 to-transparent blur-sm" />
        <div className="absolute right-0 top-1/4 w-6 h-1/2 bg-gradient-to-l from-black/30 to-transparent blur-sm" />
      </div>
    </div>
  );
};

export default DepthShadows;
