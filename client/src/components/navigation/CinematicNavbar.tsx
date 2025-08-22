import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { Home, Info, Briefcase, Car, Star, Mail, Calendar, User, Crown, Diamond, Zap } from 'lucide-react';
import LoginModal from '../layout/LoginModal';

const CinematicNavbar: React.FC = () => {
  const { activeSection, setActiveSection } = useDesktopNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
    group relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-500
    ${isActive 
      ? 'bg-gradient-to-r from-gold/30 via-gold/20 to-gold/30 text-gold border-2 border-gold/60 shadow-[0_0_40px_rgba(147,113,39,0.6)] scale-110' 
      : 'text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-gold/20 hover:to-transparent hover:border-gold/40 hover:scale-105'
    }
    focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black
    backdrop-blur-3xl border-2 border-white/20 hover:border-gold/40
    shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(147,113,39,0.3)]
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent 
    before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:rounded-2xl
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
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ease-in-out ${
        scrolled
          ? 'py-3 bg-black/95 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-b-2 border-gold/30'
          : 'py-4 bg-gradient-to-b from-black/90 via-black/70 to-transparent backdrop-blur-2xl'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Interactive Mouse-Following Light Effect */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 100,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div className="w-[400px] h-[200px] bg-gradient-radial from-gold/10 via-gold/5 to-transparent rounded-full blur-3xl opacity-60" />
      </motion.div>

      <div className="container mx-auto max-w-[1800px] px-8">
        <div className="bg-gradient-to-r from-black/80 via-black/60 to-black/80 
                       backdrop-blur-3xl rounded-[2rem] border-3 border-gold/40 
                       shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_120px_rgba(147,113,39,0.2)]
                       hover:shadow-[0_40px_100px_rgba(147,113,39,0.3)]
                       transition-all duration-700 mx-6 mt-6
                       relative overflow-hidden">
          
          {/* Luxury Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,113,39,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(147,113,39,0.1)_0%,transparent_50%)]" />
          
          <div className="relative flex items-center justify-between h-20 px-8">
            
            {/* Left Navigation */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 rounded-3xl border-3 border-gold/30 
                             bg-gradient-to-r from-black/60 via-black/40 to-black/60 
                             backdrop-blur-3xl px-6 py-4 
                             shadow-[0_15px_35px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                <Crown className="w-6 h-6 text-gold animate-pulse" />
                {leftNavItems.map(({ icon: Icon, label, section }) => {
                  const isActive = activeSection === section;
                  return (
                    <motion.button
                      key={section}
                      onClick={() => handleNavItemClick(section)}
                      className={navButtonClass(isActive)}
                      aria-current={isActive ? 'page' : undefined}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg font-bold whitespace-nowrap">{label}</span>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent rounded-2xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
                <Diamond className="w-6 h-6 text-gold animate-spin-slow" />
              </div>
            </motion.div>

            {/* Center Logo */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <a 
                href="#home" 
                onClick={() => handleNavItemClick('home')} 
                className="group flex items-center hover:scale-110 transition-all duration-500"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/40 via-gold/20 to-gold/40 
                                rounded-[2rem] blur-2xl group-hover:blur-3xl 
                                transition-all duration-500 opacity-80 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-center
                                bg-gradient-to-br from-black/90 via-black/70 to-black/90 
                                rounded-[2rem] border-3 border-gold/50 
                                px-6 py-2 backdrop-blur-3xl
                                shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]
                                group-hover:shadow-[0_25px_60px_rgba(147,113,39,0.4)]
                                transition-all duration-500">
                    <img
                      src="https://opulentts.com/bgvideo/otsnobg.png"
                      alt="Opulent Logo"
                      className="w-auto group-hover:scale-105 transition-transform duration-500
                               filter drop-shadow-[0_0_25px_rgba(147,113,39,0.6)]"
                      style={{ height: '120px' }}
                    />
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Right Navigation */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 rounded-3xl border-3 border-gold/30 
                             bg-gradient-to-r from-black/60 via-black/40 to-black/60 
                             backdrop-blur-3xl px-6 py-4 
                             shadow-[0_15px_35px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                <Zap className="w-6 h-6 text-gold animate-pulse" />
                {rightNavItems.map(({ icon: Icon, label, section }) => {
                  const isActive = activeSection === section;
                  return (
                    <motion.button
                      key={section}
                      onClick={() => handleNavItemClick(section)}
                      className={navButtonClass(isActive)}
                      aria-current={isActive ? 'page' : undefined}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg font-bold whitespace-nowrap">{label}</span>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent rounded-2xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
                
                {/* Epic Book Now Button */}
                <motion.button
                  onClick={handleBookNowClick}
                  className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 rounded-2xl
                           bg-gradient-to-r from-gold via-gold-lighter to-gold
                           hover:from-gold-lighter hover:via-gold hover:to-gold-dark
                           text-black font-black text-lg tracking-wide
                           transform hover:scale-110 transition-all duration-500
                           shadow-[0_15px_40px_rgba(147,113,39,0.6),inset_0_1px_0_rgba(255,255,255,0.3)]
                           hover:shadow-[0_20px_50px_rgba(147,113,39,0.8)]
                           border-2 border-gold-lighter
                           before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:to-transparent 
                           before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:rounded-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                  <span className="relative z-10">Book Now</span>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </motion.button>

                {/* Epic Account Login Button */}
                <motion.button
                  onClick={handleAccountClick}
                  className="group flex items-center gap-3 px-8 py-4 rounded-2xl
                           bg-transparent border-3 border-white/40 text-white font-bold text-lg
                           backdrop-blur-3xl hover:border-gold/60 hover:bg-gold/10 
                           transition-all duration-500 hover:scale-110
                           shadow-[0_15px_30px_rgba(0,0,0,0.3)]
                           hover:shadow-[0_20px_40px_rgba(147,113,39,0.3)]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                  <span>Account Login</span>
                </motion.button>

                <Diamond className="w-6 h-6 text-gold animate-spin-slow" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

      {/* Ultra-Premium Custom Animations */}
      <style jsx>{`
        @keyframes animate-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: animate-spin-slow 8s linear infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </motion.nav>
  );
};

export default CinematicNavbar;
