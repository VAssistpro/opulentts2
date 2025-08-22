import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-xl border-t border-white/20 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div className="text-white/60">
            © 2024 Opulent Transport Solutions. All rights reserved.
          </div>
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://opulentts.com/bgvideo/otsnobg.png"
              alt="Opulent"
              className="w-8 h-8 object-contain"
            />
            <span className="text-yellow-500 font-semibold">Opulent Transport</span>
          </div>
          
          {/* Contact */}
          <div className="text-white/60">
            (516) 324-5483
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;