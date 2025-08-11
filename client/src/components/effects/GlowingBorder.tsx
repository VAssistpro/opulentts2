import React from 'react';

const GlowingBorder = () => {
  return (
    <div className="absolute inset-[20px] z-10 pointer-events-none">
      <div className="relative w-full h-full rounded-xl">
        <div className="absolute inset-0 border-2 border-[#937127] rounded-xl opacity-20" />
      </div>
    </div>
  );
};

export default GlowingBorder;