import React from 'react';
import { User } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const AccountSection = () => {
  return (
    <div className="absolute top-4 right-4 z-50 flex items-center gap-4">
      <button
        onClick={() => {}}
        className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors duration-300"
        aria-label="Account login"
      >
        <User className="w-5 h-5" />
        <span className="text-sm font-medium">Account</span>
      </button>
      <ThemeToggle />
    </div>
  );
};

export default AccountSection;