import React, { useEffect } from 'react';
import MenuContainer from './menu/MenuContainer';
import MenuContent from './menu/MenuContent';

interface GlassmorphicMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlassmorphicMenu: React.FC<GlassmorphicMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <MenuContainer isOpen={isOpen} onClose={onClose}>
      <MenuContent onClose={onClose} />
    </MenuContainer>
  );
};

export default GlassmorphicMenu;