import React from 'react';

interface MenuIconProps {
  isOpen: boolean;
  className?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({ isOpen, className = '' }) => {
  return (
    <div className={`relative w-7 h-7 transform transition-all duration-300 ${className}`}>
      <span
        className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out
                   ${isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'}`}
      />
      <span
        className={`absolute h-0.5 w-4 bg-white transform transition-all duration-300 ease-in-out translate-y-2.5
                   ${isOpen ? 'opacity-0 translate-x-3' : 'opacity-100'}`}
      />
      <span
        className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out
                   ${isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`}
      />
    </div>
  );
};

export default MenuIcon;