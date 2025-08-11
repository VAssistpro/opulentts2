import React from 'react';

const BorderGlow = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 rounded-xl border border-[#937127] opacity-50" />
      <div className="absolute inset-[-1px] rounded-xl bg-[#937127] opacity-10 blur-sm" />
    </div>
  );
};

export default BorderGlow;