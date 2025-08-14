import React from 'react';
import Logo from './Logo';
import { Phone, MessageSquare } from 'lucide-react';
import GlowingIcon from '../ui/GlowingIcon';

const HeaderLayout = () => {
  return (
    <div className="fixed z-50 w-full px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-4">
          <Logo
            className="w-32 h-auto transform scale-[0.85] hover:scale-[0.88] transition-transform duration-300 ease-out hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] will-change-transform"
          />
        </div>

        {/* Contact Icons */}
        <div className="flex items-center space-x-4 pt-2">
          <GlowingIcon
            icon={Phone}
            href="tel:+15163245483"
            label="Call us"
            className="transition-all duration-300 ease-out hover:scale-105
                     hover:shadow-[0_0_15px_rgba(147,113,39,0.4)] will-change-transform"
          />
          <GlowingIcon
            icon={MessageSquare}
            href="sms:+15163245483"
            label="Send SMS"
            className="transition-all duration-300 ease-out hover:scale-105
                     hover:shadow-[0_0_15px_rgba(147,113,39,0.4)] will-change-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
