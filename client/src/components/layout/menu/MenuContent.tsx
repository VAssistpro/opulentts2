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
                   rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-gold
                   shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                   hover:bg-white/[0.05] hover:border-gold/20 hover:text-white
                   transition-all duration-300 transform hover:scale-110"
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