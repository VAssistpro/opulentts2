import React from 'react';

const MobileHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo - Increased size */}
        <img
          src="https://opulentts.com/bgvideo/otsnobg.png"
          alt="Opulent Logo"
          className="h-20 w-auto" /* Increased from h-16 to h-20 */
        />

        {/* Removed action buttons - now handled by FloatingActionButton */}
      </div>

      {/* Bottom Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </header>
  );
};

export default MobileHeader;