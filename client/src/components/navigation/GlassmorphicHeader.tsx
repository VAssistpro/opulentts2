import React, { useState, useEffect } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import Logo from '../layout/Logo';
import ContactIcons from '../layout/ContactIcons';
import LuxuryNavbar from './LuxuryNavbar';

const GlassmorphicHeader = () => {
  const isScrolled = useScrollPosition();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                ${isScrolled ? 'bg-black/80 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}
    >
      {/* Glassmorphic Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent opacity-80" />
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 bg-noise opacity-[0.15]" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        
        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r 
                     from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Logo className="h-16 w-auto" />

          {/* Navigation */}
          <div className="flex-1 ml-20">
            <LuxuryNavbar />
          </div>

          {/* Contact Icons */}
          <div className="ml-8">
            <ContactIcons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlassmorphicHeader;