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
    <div className="flex items-center justify-between p-3">
      {/* Left Side - Logo/Brand */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">OT</span>
          </div>
          <div className="text-gold font-semibold text-sm">CONSOLE</div>
        </div>
        
        
      </div>

      {/* Center - Navigation Controls */}
      <div className="flex items-center gap-1 bg-black/50 rounded-lg p-1">
        {NAV_ITEMS.map(({ icon: Icon, label, section }) => {
          const isActive = activeSection === section;
          return (
            <button
              key={section}
              onClick={() => handleNavItemClick(section)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 text-xs font-medium
                       ${isActive
                         ? 'bg-gold/20 text-gold border border-gold/30 shadow-[0_0_10px_rgba(147,113,39,0.5)]'
                         : 'text-white/70 hover:text-gold hover:bg-white/5 border border-transparent'
                       }`}
              title={label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden xl:inline">{label}</span>
            </button>
          );
        })}
      </div>

      {/* Right Side - System Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleBookNowClick}
          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gold/80 to-gold-dark/80 text-black rounded-lg text-xs font-semibold hover:from-gold to-gold-dark transition-all duration-200 shadow-[0_0_15px_rgba(147,113,39,0.4)]"
        >
          <Calendar className="w-4 h-4" />
          <span className="hidden lg:inline">BOOK</span>
        </button>

        <button
          onClick={() => setShowLoginModal(true)}
          className="flex items-center gap-2 px-3 py-2 bg-black/60 border border-white/20 text-white/90 rounded-lg text-xs font-medium hover:bg-black/80 hover:border-white/40 transition-all duration-200"
        >
          <User className="w-4 h-4" />
          <span className="hidden lg:inline">USER</span>
        </button>


      </div>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default ConsoleNavbar;
