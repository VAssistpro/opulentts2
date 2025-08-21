import React, { useState, useEffect } from 'react';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { Home, Info, Briefcase, Car, Star, Mail, User, Calendar, Menu } from 'lucide-react';
import LoginModal from '../layout/LoginModal';

const NAV_ITEMS = [
  { icon: Home, label: 'Home', section: 'home' },
  { icon: Info, label: 'About', section: 'about' },
  { icon: Briefcase, label: 'Services', section: 'services' },
  { icon: Car, label: 'Fleet', section: 'fleet' },
  { icon: Star, label: 'Reviews', section: 'testimonials' },
  { icon: Mail, label: 'Contact', section: 'contact' }
] as const;

const GOLD_DEFAULT_RGB = '147, 113, 39';
const GLOW_BASE_SHADOW_STYLE = `0 0 25px rgba(${GOLD_DEFAULT_RGB}, 0.7)`;
const GLOW_STRONGER_SHADOW_STYLE = `0 0 35px rgba(${GOLD_DEFAULT_RGB}, 0.8)`;

const LuxuryNavbar: React.FC = () => {
  const { activeSection, setActiveSection } = useDesktopNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const focusVisibleStyles = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

  const handleNavItemClick = (section: string) => { setActiveSection(section as any); setIsMobileMenuOpen(false); setTimeout(() => {document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });}, 100); };
  const handleBookNowClick = () => { setActiveSection('book'); setIsMobileMenuOpen(false); setTimeout(() => {document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' });}, 100); };
  const handleAccountClick = () => { setShowLoginModal(true); setIsMobileMenuOpen(false); };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled
          ? 'py-2 bg-black/80 backdrop-blur-lg shadow-lg border-b border-white/10'
          : 'py-3 lg:py-4 bg-gradient-to-b from-black/70 via-black/40 to-transparent'
        }`}>
      <div className="container mx-auto max-w-4xl pl-2 w-full">
        <div className="flex items-center justify-end h-12 md:h-14">
           <div className="hidden lg:flex items-center gap-x-4">
             {NAV_ITEMS.map(({ icon: Icon, label, section }) => {
               const isActive = activeSection === section;
               const activeStyle = isActive ? { boxShadow: GLOW_STRONGER_SHADOW_STYLE } : {};
               return (
                 <button
                   key={section}
                   onClick={() => handleNavItemClick(section)}
                   style={activeStyle}
                   className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${focusVisibleStyles}
                            ${isActive
                              ? `bg-gold/20 text-gold scale-105`
                              : `text-white/80 hover:text-gold hover:bg-white/5`
                            }
                            hover:[box-shadow:${GLOW_BASE_SHADOW_STYLE}]
                            focus-visible:[box-shadow:${GLOW_BASE_SHADOW_STYLE}] `}
                   aria-current={isActive ? 'page' : undefined}
                 >
                   <Icon className="w-4 h-4 shrink-0" />
                   <span className="text-sm font-medium whitespace-nowrap">{label}</span>
                 </button>
               );
              })}
             <div className="flex items-center gap-4 ml-4">
                <button
                  onClick={handleBookNowClick}
                  className="hidden lg:inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm whitespace-nowrap 
                           bg-white/[0.03] backdrop-blur-xl border border-white/10 text-black dark:text-white font-medium
                           shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                           hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300
                           transform hover:scale-[1.03] active:scale-[0.97] relative
                           before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none before:rounded-full
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </button>

                <button
                  onClick={handleAccountClick}
                  className={`hidden lg:inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap relative
                           bg-white/[0.03] backdrop-blur-xl border border-white/10 text-black dark:text-white
                           shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                           hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300
                           transform hover:scale-[1.03] active:scale-[0.97]
                           before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none before:rounded-full
                           ${focusVisibleStyles}`}
                >
                  <User className="w-4 h-4" />
                  <span>Account</span>
                </button>
             </div>
           </div>

           <div className="lg:hidden">
             <button
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className={`p-2 text-gold hover:bg-gold/10 rounded-lg transition-colors ${focusVisibleStyles}`}
               aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}
             >
               <Menu className="w-6 h-6" />
             </button>
           </div>
        </div>
      </div>
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black/95 shadow-lg border-t border-gold/20 backdrop-blur-xl overflow-y-auto transition-all duration-300 ease-in-out ${ isMobileMenuOpen ? 'max-h-[80vh] opacity-100 visible py-4' : 'max-h-0 opacity-0 invisible py-0' }`}>
      </div>
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </nav>
  );
};

export default LuxuryNavbar;
