import React from 'react';

interface SidebarContainerProps {
  children: React.ReactNode;
}

const SidebarContainer = ({ children }: SidebarContainerProps) => {
  return (
    <div className="fixed left-8 top-[35%] z-20 w-64">
      {children}
    </div>
  );
};

export default SidebarContainer;