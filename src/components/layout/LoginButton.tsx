import React from 'react';
import { User } from 'lucide-react';

interface LoginButtonProps {
  onClick: () => void;
  className?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-6 py-2.5 rounded-full
        bg-gradient-to-r from-[#937127]/90 to-[#826022]/90
        hover:from-[#937127] hover:to-[#826022]
        text-white
        backdrop-blur-sm
        transition-all duration-300 transform hover:scale-105
        border border-gold/30
        shadow-[0_4px_12px_rgba(147,113,39,0.3)]
        hover:shadow-[0_8px_20px_rgba(147,113,39,0.4)]
        ${className}
      `}
    >
      <User className="w-5 h-5" />
      <span className="text-sm font-medium">Account Login</span>
    </button>
  );
};

export default LoginButton;