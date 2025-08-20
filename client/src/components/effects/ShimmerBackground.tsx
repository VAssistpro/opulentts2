import React from 'react';

const ShimmerBackground = () => {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Simplified foundation layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000205] via-[#000814] to-[#000205]" />
      
      {/* Blue light beams - MUCH MORE PROMINENT - vertical on left and right, horizontal on top */}
      
      
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
      

    </div>
  );
};

export default ShimmerBackground;
