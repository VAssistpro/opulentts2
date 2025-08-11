import React from 'react';

interface MenuContainerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const MenuContainer: React.FC<MenuContainerProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 ease-in-out" />
      <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm menu-slide-in">
        {children}
      </div>
    </div>
  );
};

export default MenuContainer;