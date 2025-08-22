import React, { useState, useEffect } from 'react';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { Home, Info, Briefcase, Car, Star, Mail, Calendar, User } from 'lucide-react';
import LoginModal from '../layout/LoginModal';

const DesktopNavbar: React.FC = () => {
  const { activeSection, setActiveSection } = useDesktopNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  const navButtonClass = (isActive: boolean) => `
    flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300
    ${isActive 
      ? 'bg-white/10 text-gold shadow-lg shadow-gold/20 scale-105' 
      : 'text-white/80 hover:text-white hover:bg-white/5 hover:scale-102'
    }
    focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black
    backdrop-blur-sm border border-white/10 hover:border-gold/20
  `;

  const leftNavItems = [
    { icon: Home, label: 'Home', section: 'home' },
    { icon: Info, label: 'About Us', section: 'about' },
    { icon: Briefcase, label: 'Services', section: 'services' },
    { icon: Car, label: 'Fleet', section: 'fleet' }
  ];

  const rightNavItems = [
    { icon: Star, label: 'Reviews', section: 'testimonials' },
    { icon: Mail, label: 'Contact Us', section: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
      scrolled
        ? 'py-2 bg-black/90 backdrop-blur-xl shadow-2xl border-b border-white/10'
        : 'py-3 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-md'
    }`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="bg-black/60 backdrop-blur-2xl rounded-3xl border-2 border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_100px_rgba(147,113,39,0.1)] mx-4 mt-6">
          <div className="flex items-center justify-between h-16 px-6">
          
            {/* Left Navigation */}
            <div className="flex items-center gap-2 rounded-2xl border-2 border-gold/20 bg-black/40 backdrop-blur-xl px-4 py-3 shadow-[0_8px_25px_rgba(0,0,0,0.3)]">
            {leftNavItems.map(({ icon: Icon, label, section }) => {
              const isActive = activeSection === section;
              return (
                <button
                  key={section}
                  onClick={() => handleNavItemClick(section)}
                  className={navButtonClass(isActive)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="text-sm font-medium whitespace-nowrap">{label}</span>
                </button>
              );
            })}
          </div>

            {/* Center Logo */}
            <div className="flex-shrink-0 rounded-[26px] bg-black/[0.92] mt-[19px] px-2 py-[1px] overflow-hidden border-2" style={{ borderColor: 'rgba(74, 74, 74, 0.54)' }}>
            <a 
              href="#home" 
              onClick={() => handleNavItemClick('home')} 
              className="flex items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://opulentts.com/bgvideo/otsnobg.png"
                alt="Opulent Logo"
                className="w-auto"
                style={{ height: '125px' }}
              />
            </a>
          </div>

            {/* Right Navigation */}
            <div className="flex items-center gap-2 rounded-2xl border-2 border-gold/20 bg-black/40 backdrop-blur-xl px-4 py-3 shadow-[0_8px_25px_rgba(0,0,0,0.3)]">
            {rightNavItems.map(({ icon: Icon, label, section }) => {
              const isActive = activeSection === section;
              return (
                <button
                  key={section}
                  onClick={() => handleNavItemClick(section)}
                  className={navButtonClass(isActive)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="text-sm font-medium whitespace-nowrap">{label}</span>
                </button>
              );
            })}
            
            {/* Book Now Button */}
            <button
              onClick={handleBookNowClick}
              className="flex items-center gap-2 px-4 py-3 rounded-lg
                       bg-gold/20 text-gold border border-gold/30 
                       hover:bg-gold/30 hover:border-gold/50 hover:scale-105
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                       transition-all duration-300 shadow-lg shadow-gold/20
                       backdrop-blur-sm font-medium"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm whitespace-nowrap">Book Now</span>
            </button>

            {/* Account Login Button */}
            <button
              onClick={handleAccountClick}
              className="flex items-center gap-2 px-4 py-3 rounded-lg
                       bg-white/5 text-white/80 border border-white/10
                       hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-105
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                       transition-all duration-300 backdrop-blur-sm font-medium"
            >
              <User className="w-4 h-4" />
              <span className="text-sm whitespace-nowrap">Account Login</span>
            </button>
            </div>
        </div>
      </div>
      </div>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </nav>
  );
};

export default DesktopNavbar;
