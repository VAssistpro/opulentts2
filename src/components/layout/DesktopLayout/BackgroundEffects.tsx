import React from 'react';

const BackgroundEffects = () => {
  return (
    <>
      {/* Animated gradient overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,113,39,0.1),transparent_50%)] animate-pulse-slow pointer-events-none" />
      
      {/* Subtle noise texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-noise" />
    </>
  );
};

export default BackgroundEffects;