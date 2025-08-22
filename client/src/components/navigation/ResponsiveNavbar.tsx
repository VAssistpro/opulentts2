import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { Home, Info, Briefcase, Car, Star, Mail, Calendar, User, Crown, Diamond } from 'lucide-react';
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

  const navButtonClass = (isActive: boolean) => `
    group relative flex items-center gap-2 lg:gap-3 px-3 lg:px-4 xl:px-6 py-2 lg:py-3 xl:py-4 rounded-lg lg:rounded-xl transition-all duration-300
    ${isActive 
      ? 'bg-gradient-to-r from-gold/30 via-gold/20 to-gold/30 text-gold border-2 border-gold/60 shadow-[0_0_20px_rgba(147,113,39,0.4)] scale-105' 
      : 'text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-gold/20 hover:to-transparent hover:border-gold/40 hover:scale-105'
    }
    focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black
    backdrop-blur-xl border-2 border-white/20 hover:border-gold/40
    shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_20px_rgba(147,113,39,0.3)]
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
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'py-2 lg:py-3 bg-black/95 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border-b border-gold/20'
          : 'py-3 lg:py-4 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-xl'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-7xl mt-9">
        <div className="bg-gradient-to-r from-black/70 via-black/50 to-black/70 
                       backdrop-blur-2xl rounded-xl lg:rounded-2xl xl:rounded-3xl border-2 border-gold/30 
                       shadow-[0_15px_40px_rgba(0,0,0,0.4),0_0_60px_rgba(147,113,39,0.1)]
                       hover:shadow-[0_20px_50px_rgba(147,113,39,0.2)]
                       transition-all duration-500 mx-2 lg:mx-4 mt-3 lg:mt-4 xl:mt-6">
          
          <div className="flex items-center justify-between h-12 lg:h-13 xl:h-14">
            
            {/* Left Navigation */}
            <motion.div 
              className="flex items-center gap-1 lg:gap-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 rounded-lg lg:rounded-xl xl:rounded-2xl border border-gold/20
                             bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-xl px-3 py-0 text-xs leading-tight">
                <Crown className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gold animate-pulse" />
                {leftNavItems.map(({ icon: Icon, label, section }) => {
                  const isActive = activeSection === section;
                  return (
                    <button
                      key={section}
                      onClick={() => handleNavItemClick(section)}
                      className={navButtonClass(isActive)}
                      style={section === 'fleet' ? {padding: '0 12px'} : undefined}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <Icon className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 shrink-0" />
                      <span className="text-xs lg:text-sm xl:text-base font-semibold whitespace-nowrap hidden md:inline">
                        {label}
                      </span>
                    </button>
                  );
                })}
                <Diamond className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gold animate-spin-slow" />
              </div>
            </motion.div>

            {/* Center Logo */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <a 
                href="#home" 
                onClick={() => handleNavItemClick('home')} 
                className="group flex items-center hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/30 via-gold/15 to-gold/30 
                                rounded-xl lg:rounded-2xl xl:rounded-3xl blur-lg group-hover:blur-xl 
                                transition-all duration-300 opacity-60 group-hover:opacity-80" />
                  <div className="relative flex items-center justify-center
                                bg-gradient-to-br from-black/80 via-black/60 to-black/80 
                                rounded-xl lg:rounded-2xl xl:rounded-3xl border-2 border-gold/40 
                                px-2 lg:px-3 xl:px-4 py-1 lg:py-2 backdrop-blur-xl
                                shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)]
                                group-hover:shadow-[0_15px_40px_rgba(147,113,39,0.3)]
                                transition-all duration-300">
                    <img
                      src="https://opulentts.com/bgvideo/otsnobg.png"
                      alt="Opulent Logo"
                      className="w-auto group-hover:scale-105 transition-transform duration-300
                               filter drop-shadow-[0_0_15px_rgba(147,113,39,0.5)]
                               h-8 lg:h-12 xl:h-16"
                    />
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Right Navigation */}
            <motion.div
              className="flex items-center gap-1 lg:gap-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 rounded-lg lg:rounded-xl xl:rounded-2xl border border-gold/20
                             bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-xl px-3 py-0 text-xs leading-tight">
                {rightNavItems.map(({ icon: Icon, label, section }) => {
                  const isActive = activeSection === section;
                  return (
                    <button
                      key={section}
                      onClick={() => handleNavItemClick(section)}
                      className={navButtonClass(isActive)}
                      style={{gap: '10px', padding: '9px 10px', lineHeight: '16px'}}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <Icon className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 shrink-0" />
                      <span className="text-xs font-semibold whitespace-nowrap hidden md:inline" style={{fontSize: '12px', lineHeight: '10px'}}>
                        {label}
                      </span>
                    </button>
                  );
                })}
                
                {/* Book Now Button */}
                <button
                  onClick={handleBookNowClick}
                  className="group relative overflow-hidden flex items-center gap-2 px-2 py-2 rounded-lg
                           bg-gradient-to-r from-gold via-gold-lighter to-gold
                           hover:from-gold-lighter hover:via-gold hover:to-gold-dark
                           text-black font-medium text-xs tracking-wide
                           transform hover:scale-105 transition-all duration-300
                           shadow-[0_8px_20px_rgba(147,113,39,0.4)] hover:shadow-[0_12px_30px_rgba(147,113,39,0.6)]
                           border border-gold-lighter"
                  style={{fontSize: '12px', fontWeight: '500', gap: '10px', lineHeight: '12px', padding: '9px 10px'}}
                >
                  <Calendar className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                  <span className="hidden sm:inline" style={{fontWeight: '500', textAlign: 'left', letterSpacing: 'normal'}}>Book Now</span>
                  <span className="sm:hidden">Book</span>
                </button>

                {/* Account Login Button */}
                <button
                  onClick={handleAccountClick}
                  className="group flex items-center gap-2 px-2 py-2 rounded-lg
                           bg-transparent border border-white/30 text-white font-medium text-xs
                           backdrop-blur-xl hover:border-gold/50 hover:bg-gold/10
                           transition-all duration-300 hover:scale-105"
                >
                  <User className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                  <span className="hidden lg:inline" style={{fontWeight: '500', fontSize: '12px', lineHeight: '10px'}}>Account</span>
                </button>

                <Diamond className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gold animate-spin-slow" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

      <style>{`
        @keyframes animate-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: animate-spin-slow 8s linear infinite;
        }
      `}</style>
    </motion.nav>
  );
};

export default ResponsiveNavbar;
