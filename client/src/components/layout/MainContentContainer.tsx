import React from 'react';

interface MainContentContainerProps {
  children: React.ReactNode;
}

const MainContentContainer = ({ children }: MainContentContainerProps) => {
  return (
    <div className="relative h-[calc(100vh-9rem)] rounded-xl border border-[#937127] overflow-hidden">
      {/* Border Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 rounded-xl border border-[#937127] opacity-50" />
        <div className="absolute inset-[-1px] rounded-xl bg-[#937127] opacity-10 blur-sm" />
      </div>

      {/* Scrollable Content */}
      <div className="relative h-full w-full overflow-y-auto custom-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default MainContentContainer;