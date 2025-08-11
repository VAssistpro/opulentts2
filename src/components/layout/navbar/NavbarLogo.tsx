import React from 'react';
import Logo from '../Logo';

const NavbarLogo = () => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 -m-3 sm:-m-4
                   bg-black/80 backdrop-blur-xl rounded-xl
                   border border-gold/20
                   shadow-[0_0_20px_rgba(147,113,39,0.2)]
                   group-hover:shadow-[0_0_30px_rgba(147,113,39,0.4)]
                   group-hover:border-gold/40
                   transition-all duration-500">
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      <Logo className="w-16 xs:w-20 sm:w-24 h-auto relative z-10 transform hover:scale-105 transition-transform duration-300 p-1" />
    </div>
  );
};

export default NavbarLogo;