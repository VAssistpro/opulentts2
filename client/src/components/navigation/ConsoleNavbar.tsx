import React from 'react';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { Home, Info, Briefcase, Car, Star, Mail, User, Calendar } from 'lucide-react';

const NAV_ITEMS = [
  { icon: Home, label: 'Home', section: 'home' },
  { icon: Info, label: 'About', section: 'about' },
  { icon: Briefcase, label: 'Services', section: 'services' },
  { icon: Car, label: 'Fleet', section: 'fleet' },
  { icon: Star, label: 'Reviews', section: 'testimonials' },
  { icon: Mail, label: 'Contact', section: 'contact' }
] as const;

const ConsoleNavbar: React.FC = () => {
  const { activeSection, setActiveSection } = useDesktopNavigation();

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

  return (
    <div className="flex items-center justify-center gap-6 py-4">
      
      {/* Navigation Items */}
      <div className="flex items-center gap-3">
        {NAV_ITEMS.map(({ icon: Icon, label, section }) => {
          const isActive = activeSection === section;
          return (
            <button
              key={section}
              onClick={() => handleNavItemClick(section)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 
                        ${isActive
                          ? 'bg-gold/20 text-gold border border-gold/40 shadow-[0_0_12px_rgba(147,113,39,0.4)]'
                          : 'text-white/80 hover:text-gold hover:bg-white/5 border border-transparent hover:border-gold/20'
                        }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 ml-6">
        <button
          onClick={handleBookNowClick}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-semibold
                   bg-gradient-to-r from-gold/80 to-gold text-black
                   hover:from-gold hover:to-gold-dark transition-all duration-300
                   transform hover:scale-105 active:scale-95
                   shadow-[0_0_15px_rgba(147,113,39,0.4)] hover:shadow-[0_0_20px_rgba(147,113,39,0.6)]"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </button>

        <button
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                   bg-white/5 backdrop-blur-xl border border-white/20 text-white
                   hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
        >
          <User className="w-4 h-4" />
          <span>Account</span>
        </button>
      </div>
    </div>
  );
};

export default ConsoleNavbar;
