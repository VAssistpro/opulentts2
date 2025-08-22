import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { Home, Info, Briefcase, Car, Star, Mail, Calendar, User } from 'lucide-react';
import LoginModal from '../layout/LoginModal';

const ResponsiveNavbar: React.FC = () => {
  const { activeSection, setActiveSection } = useDesktopNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (section: string) => {
    setActiveSection(section as any);
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleBookNowClick = () => {
    setActiveSection('book');
    setTimeout(() => {
      document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleAccountClick = () => {
    setShowLoginModal(true);
  };

  const navItems = [
    { icon: Home, label: 'Home', section: 'home' },
    { icon: Info, label: 'About Us', section: 'about' },
    { icon: Briefcase, label: 'Services', section: 'services' },
    { icon: Car, label: 'Fleet', section: 'fleet' },
    { icon: Star, label: 'Reviews', section: 'testimonials' },
    { icon: Mail, label: 'Contact Us', section: 'contact' }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl shadow-xl'
          : 'bg-gradient-to-b from-black/80 to-transparent backdrop-blur-lg'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            {navItems.map(({ icon: Icon, label, section }) => {
              const isActive = activeSection === section;
              return (
                <button
                  key={section}
                  onClick={() => handleNavItemClick(section)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-gold text-black shadow-lg' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden lg:inline">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Center Logo */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a 
              href="#home" 
              onClick={() => handleNavItemClick('home')} 
              className="flex items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://opulentts.com/bgvideo/otsnobg.png"
                alt="Opulent Transport Solutions"
                className="h-12 w-auto"
              />
            </a>
          </motion.div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBookNowClick}
              className="flex items-center gap-2 px-6 py-3 bg-gold text-black font-semibold rounded-lg
                       hover:bg-gold/90 transform hover:scale-105 transition-all duration-300
                       shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>

            <button
              onClick={handleAccountClick}
              className="flex items-center gap-2 px-4 py-3 border border-white/30 text-white font-medium rounded-lg
                       hover:border-gold/50 hover:bg-white/10 transition-all duration-300"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Account</span>
            </button>
          </div>
        </div>
      </div>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </motion.nav>
  );
};

export default ResponsiveNavbar;