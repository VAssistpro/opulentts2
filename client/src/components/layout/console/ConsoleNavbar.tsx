import React, { useState, useEffect } from 'react';
import { useDesktopNavigation } from '../../../contexts/DesktopNavigationContext';
import { Home, Info, Briefcase, Car, Mail, User, Calendar, Power } from 'lucide-react';
import LoginModal from '../LoginModal';

const NAV_ITEMS = [
  { icon: Home, label: 'Home', section: 'home' },
  { icon: Info, label: 'About', section: 'about' },
  { icon: Briefcase, label: 'Services', section: 'services' },
  { icon: Car, label: 'Fleet', section: 'fleet' },
  { icon: Mail, label: 'Contact', section: 'contact' }
] as const;

const ConsoleNavbar: React.FC = () => {
  const { activeSection, setActiveSection } = useDesktopNavigation();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNavItemClick = (section: 'home' | 'about' | 'services' | 'fleet' | 'contact') => {
    setActiveSection(section);
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

  return (
    <div className="flex items-center justify-between p-2 bg-black/60 backdrop-blur-sm mt-[2px] mb-[2px]">
      {/* Left Side - Expanded for Logo */}
      <div className="w-56 flex items-center">
        {/* Logo will be placed in the left panel instead */}
      </div>
      {/* Center - Streamlined Navigation */}
      <div className="flex items-center gap-1">
        {NAV_ITEMS.map(({ icon: Icon, label, section }) => {
          const isActive = activeSection === section;
          return (
            <button
              key={section}
              onClick={() => handleNavItemClick(section)}
              className="flex items-center px-2 py-1 rounded text-xs font-mono transition-all duration-150 text-white/60 hover:text-gold/80 hover:bg-white/5 pt-[6px] pb-[6px] pl-[9px] pr-[9px]"
              title={label}
            >
              <Icon className="w-3 h-3" />
              <span className="hidden lg:inline ml-1">{label}</span>
            </button>
          );
        })}
      </div>
      {/* Right Side - Action Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleBookNowClick}
          className="flex items-center gap-1 px-2 py-1 bg-gold/90 text-black rounded text-xs font-mono font-semibold hover:bg-gold transition-all duration-150 pt-[6px] pb-[6px] pl-[12px] pr-[12px]"
        >
          <Calendar className="w-3 h-3" />
          <span className="text-[#ede8e8]">BOOK NOW</span>
        </button>

        <button
          onClick={() => setShowLoginModal(true)}
          className="flex items-center gap-1 px-2 py-1 bg-black/80 border border-white/20 text-white/90 rounded text-xs font-mono hover:border-gold/40 transition-all duration-150 pt-[6px] pb-[6px]"
        >
          <User className="w-3 h-3" />
          <span>Account Login</span>
        </button>
      </div>
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default ConsoleNavbar;
