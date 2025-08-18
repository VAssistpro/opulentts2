import React from 'react';
import { X } from 'lucide-react';
import Portal from '../ui/Portal';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* Darkened backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[12px]" />

        <div className="relative w-full max-w-2xl bg-white/10 rounded-2xl border border-white/30 
                     backdrop-blur-[20px] backdrop-saturate-[250%] 
                     shadow-[0_12px_40px_rgba(255,255,255,0.3),_0_0_20px_rgba(255,255,255,0.3)]
                     menu-fade-in overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-12 h-10 flex items-center justify-center
                     rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 text-white hover:text-gold
                     shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                     hover:bg-white/[0.05] hover:border-gold/20
                     transition-all duration-300 transform hover:scale-110"
            aria-label="Close login modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Login Frame */}
          <iframe
            src="https://book.mylimobiz.com/v4/(S(aaw2hltkmhx0rh14vaga52q0))/virk/account/loginnow"
            className="w-full h-[600px] border-none custom-scrollbar"
            title="Login"
          />
        </div>
      </div>
    </Portal>
  );
};

export default LoginModal;