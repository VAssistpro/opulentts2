import React from 'react';
import { User } from 'lucide-react';

interface AccountButtonProps {
  onClick: () => void;
}

const AccountButton = ({ onClick }: AccountButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center"
    >
      <div className="p-3.5 rounded-xl transition-all duration-300
                   bg-black/80 backdrop-blur-xl border border-gold/50 text-gold
                   shadow-[0_4px_12px_rgba(147,113,39,0.2)]
                   hover:shadow-[0_4px_16px_rgba(147,113,39,0.3)]">
        <User className="w-6 h-6" />
      </div>
      <span className="mt-1.5 text-xs font-medium text-gold/60">Account</span>
    </button>
  );
};

export default AccountButton;