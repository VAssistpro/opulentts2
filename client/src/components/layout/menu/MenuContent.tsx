import React from 'react';
import { X, User } from 'lucide-react';
import MenuNavigation from './MenuNavigation';
import MenuSocialIcons from './MenuSocialIcons';
import LuxuryButton from '../../ui/design-system/LuxuryButton';

interface MenuContentProps {
  onClose: () => void;
}

const MenuContent: React.FC<MenuContentProps> = ({ onClose }) => {
  return (
    <div className="relative h-full bg-black/60 backdrop-blur-2xl border-l border-gold/10">
      {/* Glassmorphic gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/15" />
      </div>

      <div className="relative h-full px-6 xs:px-8 py-14 flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center
                   rounded-xl bg-black/80 backdrop-blur-xl border border-gold/30 text-gold
                   hover:text-white hover:bg-gold/40
                   transition-all duration-300 transform hover:scale-110
                   shadow-[0_0_15px_rgba(147,113,39,0.2)]"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation */}
        <div className="flex-1 mt-8">
          <MenuNavigation onClose={onClose} />
        </div>

        {/* Account Login Button */}
        <div className="mt-auto">
          <LuxuryButton
            icon={User}
            iconPosition="left"
            variant="primary"
            size="lg"
            className="w-full mb-8"
            onClick={() => {
              // Handle login
            }}
          >
            Account Login
          </LuxuryButton>

          {/* Social Icons */}
          <div className="flex justify-center border-t border-white/10 pt-8">
            <MenuSocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuContent;