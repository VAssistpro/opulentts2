import React, { useState } from 'react';
import { User, X } from 'lucide-react';
import Portal from '../ui/Portal';

const MobileLoginButton: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 w-full text-white hover:text-gold 
                 transition-colors duration-300 text-left px-2"
        aria-label="Open login modal"
      >
        <User className="w-5 h-5" />
        <span className="text-base">Account Login</span>
      </button>

      {isOpen && (
        <Portal>
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center"
            onClick={handleOverlayClick}
          >
            <div className="bg-white dark:bg-dark-bg rounded-lg shadow-xl shadow-[#937127]/20 
                         w-[95%] max-w-md p-6 relative mx-4"
                 onClick={e => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 
                         dark:text-gray-400 dark:hover:text-gray-200
                         w-8 h-8 flex items-center justify-center rounded-full
                         hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300
                         z-50"
                aria-label="Close login modal"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src="https://book.mylimobiz.com/v4/virk/widget/login"
                className="w-full h-[400px] border-none mt-4"
                title="Login"
              />
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default MobileLoginButton;