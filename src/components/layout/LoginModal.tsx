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
                     rounded-full bg-gradient-to-r from-[#ffffff60] via-[#ffffff30] to-[#ffffff60]
                     border border-white/20 text-white hover:text-gold
                     hover:bg-gradient-to-r hover:from-[#FFD70080] hover:via-[#FFD70060] hover:to-[#FFD70080]
                     transition-all duration-300 transform hover:scale-110
                     shadow-[0_8px_30px_rgba(255,255,255,0.25),_0_0_20px_rgba(255,223,0,0.8)]
                     hover:shadow-[0_12px_50px_rgba(255,223,0,0.9),_0_4px_15px_rgba(255,255,255,0.4)]"
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