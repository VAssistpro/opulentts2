import React from 'react';
import LuxuryButton from '../../ui/design-system/LuxuryButton';

interface MenuNavigationProps {
  onClose: () => void;
}

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet Gallery', href: '#fleet' },
  { label: 'Book Now', href: '#book' },
  { label: 'Contact', href: '#contact' },
];

const MenuNavigation: React.FC<MenuNavigationProps> = ({ onClose }) => {
  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <nav className="space-y-4">
      {menuItems.map((item, index) => (
        <LuxuryButton
          key={index}
          onClick={(e) => handleClick(e as any, item.href)}
          variant="ghost"
          size="sm"
          className="w-full text-left justify-start"
        >
          {item.label}
        </LuxuryButton>
      ))}
    </nav>
  );
};

export default MenuNavigation;