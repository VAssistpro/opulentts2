import React from 'react';

const BorderOverlay = () => {
  return (
    <div className="absolute inset-[10px] z-10 pointer-events-none">
      <div className="relative w-full h-full">
        {/* Main Border */}
        <div className="absolute inset-0 border-[1px] border-[#937127] opacity-[0.6] rounded-lg" />
      </div>
    </div>
  );
};

export default BorderOverlay;