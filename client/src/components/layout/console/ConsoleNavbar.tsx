import React, { useState, useEffect } from 'react';
import { useDesktopNavigation } from '../../../contexts/DesktopNavigationContext';
import { Home, Info, Briefcase, Car, Mail, User, Calendar, Power, Phone } from 'lucide-react';
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
    <div className="flex items-center justify-between p-3 backdrop-blur-xl border-b border-gold/20 
                    bg-gradient-to-r from-black/80 via-black/60 to-black/80 shadow-lg"
         style={{ borderRadius: '0 0 8px 8px' }}>
      {/* Left Side - Phone Number */}
      <div className="flex items-center">
        <div className="flex items-center gap-2 px-3 py-2 text-white/70 text-sm font-medium">
          <Phone className="w-4 h-4" />
          <span>(516) 324-5483</span>
        </div>
      </div>
      {/* Center - Streamlined Navigation */}
      <div className="flex items-center gap-2">
        {NAV_ITEMS.map(({ icon: Icon, label, section }) => {
          const isActive = activeSection === section;
          return (
            <button
              key={section}
              onClick={() => handleNavItemClick(section)}
              className={`relative flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                         ${isActive 
                           ? 'bg-gold/20 text-gold border border-gold/40 shadow-lg' 
                           : 'text-white/70 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                         }`}
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
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold to-gold/90
                     text-black font-medium text-sm rounded-lg
                     hover:from-gold/90 hover:to-gold hover:shadow-lg hover:scale-105
                     transition-all duration-300 shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>BOOK NOW</span>
        </button>

        <button
          onClick={() => setShowLoginModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20
                     text-white/80 font-medium text-sm rounded-lg
                     hover:bg-white/20 hover:text-white hover:border-white/30
                     transition-all duration-300"
        >
          <User className="w-4 h-4" />
          <span className="hidden lg:inline">Account Login</span>
        </button>
      </div>
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default ConsoleNavbar;
