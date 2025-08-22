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
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-full px-8 py-3 
                       shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          
          <div className="flex items-center gap-12">
            
            {/* Left Navigation - 4 items */}
            <div className="flex items-center space-x-8">
              {leftNavItems.map(({ icon: Icon, label, section }) => {
                const isActive = activeSection === section;
                return (
                  <button
                    key={section}
                    onClick={() => handleNavItemClick(section)}
                    className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20 text-gold' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{label}</span>
                  </button>
                );
              })}
            </div>

            {/* Center Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavItemClick('home')}
                className="flex items-center justify-center w-16 h-16 rounded-full
                         bg-gradient-to-br from-gold/20 to-gold/10 border-2 border-gold/40
                         hover:scale-105 transition-all duration-300"
              >
                <img
                  src="https://opulentts.com/bgvideo/otsnobg.png"
                  alt="Opulent"
                  className="w-10 h-10 object-contain"
                />
              </button>
            </div>

            {/* Right Navigation - 4 items */}
            <div className="flex items-center space-x-8">
              {rightNavItems.map(({ icon: Icon, label, section }) => {
                const isActive = activeSection === section;
                return (
                  <button
                    key={section}
                    onClick={() => handleNavItemClick(section)}
                    className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20 text-gold' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{label}</span>
                  </button>
                );
              })}

              {/* Book Now Button */}
              <button
                onClick={handleBookNowClick}
                className="flex flex-col items-center space-y-1 px-3 py-2 rounded-xl
                         bg-gold text-black hover:bg-gold/90 transition-all duration-300
                         transform hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-xs font-medium">Book Now</span>
              </button>

              {/* Account Login Button */}
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex flex-col items-center space-y-1 px-3 py-2 rounded-xl
                         text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <User className="w-5 h-5" />
                <span className="text-xs font-medium">Account</span>
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