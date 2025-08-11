import React from 'react';

interface NavbarContainerProps {
  children: React.ReactNode;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ children }) => {
  return (
    <nav className="relative w-full">
      {children}
    </nav>
  );
};

export default NavbarContainer;