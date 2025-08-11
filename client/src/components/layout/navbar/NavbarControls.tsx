import React from 'react';
import { Menu } from 'lucide-react';
import ThemeToggle from '../../ui/ThemeToggle';
import LuxuryButton from '../../ui/design-system/LuxuryButton';
import Tooltip from '../../ui/Tooltip';

interface NavbarControlsProps {
  onMenuClick: () => void;
}

const NavbarControls = ({ onMenuClick }: NavbarControlsProps) => {
  return (
    <div className="flex items-center gap-4 p-2">
      <Tooltip content="Switch Theme" position="bottom">
        <ThemeToggle />
      </Tooltip>

      <Tooltip content="Open Menu" position="bottom">
        <LuxuryButton
          onClick={onMenuClick}
          icon={Menu}
          iconPosition="left"
          variant="secondary"
          size="md"
          className="!min-w-[120px] xs:!min-w-[140px] sm:!min-w-[160px]"
        >
          <span className="text-base">Menu</span>
        </LuxuryButton>
      </Tooltip>
    </div>
  );
};

export default NavbarControls;