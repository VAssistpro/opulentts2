import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { Home, Info, Briefcase, Car, Star, Mail, Calendar, User } from 'lucide-react';
import LoginModal from '../layout/LoginModal';

const ResponsiveNavbar: React.FC = () => {
  const { activeSection, setActiveSection } = useDesktopNavigation();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleNavItemClick = (section: string) => {
    setActiveSection(section as any);
  };

  const handleBookNowClick = () => {
    setActiveSection('book');
  };

  // Left navigation items
  const leftNavItems = [
    { icon: Home, label: 'Home', section: 'home' },
    { icon: Info, label: 'About Us', section: 'about' },
    { icon: Briefcase, label: 'Services', section: 'services' },
    { icon: Car, label: 'Fleet', section: 'fleet' }
  ];

  // Right navigation items  
  const rightNavItems = [
    { icon: Star, label: 'Reviews', section: 'testimonials' },
    { icon: Mail, label: 'Contact Us', section: 'contact' }
  ];

  return (
    <>
      <motion.nav 
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-[95vw]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-full px-3 py-2 
                       shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          
          <div className="flex items-center justify-between gap-2 lg:gap-4">
            
            {/* Left Navigation - 4 items */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {leftNavItems.map(({ icon: Icon, label, section }) => {
                const isActive = activeSection === section;
                return (
                  <button
                    key={section}
                    onClick={() => handleNavItemClick(section)}
                    className={`flex flex-col items-center space-y-1 px-2 py-1.5 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20 text-gold' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-medium hidden lg:block">{label}</span>
                  </button>
                );
              })}
            </div>

            {/* Center Logo */}
            <div className="flex-shrink-0 mx-2">
              <button
                onClick={() => handleNavItemClick('home')}
                className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full
                         bg-gradient-to-br from-gold/20 to-gold/10 border-2 border-gold/40
                         hover:scale-105 transition-all duration-300"
              >
                <img
                  src="https://opulentts.com/bgvideo/otsnobg.png"
                  alt="Opulent"
                  className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                />
              </button>
            </div>

            {/* Right Navigation - 4 items */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {rightNavItems.map(({ icon: Icon, label, section }) => {
                const isActive = activeSection === section;
                return (
                  <button
                    key={section}
                    onClick={() => handleNavItemClick(section)}
                    className={`flex flex-col items-center space-y-1 px-2 py-1.5 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20 text-gold' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-medium hidden lg:block">{label}</span>
                  </button>
                );
              })}

              {/* Book Now Button */}
              <button
                onClick={handleBookNowClick}
                className="flex flex-col items-center space-y-1 px-2 py-1.5 rounded-lg
                         bg-gold text-black hover:bg-gold/90 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-medium hidden lg:block">Book Now</span>
              </button>

              {/* Account Login Button */}
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex flex-col items-center space-y-1 px-2 py-1.5 rounded-lg
                         text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <User className="w-4 h-4" />
                <span className="text-xs font-medium hidden lg:block">Account</span>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
};

export default ResponsiveNavbar;