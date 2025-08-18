import React from 'react';
import { Home, Info, Briefcase, Car, Mail, Calendar } from 'lucide-react';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';

const NAV_ITEMS = [
  { icon: Home, label: 'Home', section: 'home' },
  { icon: Info, label: 'About', section: 'about' },
  { icon: Briefcase, label: 'Services', section: 'services' },
  { icon: Car, label: 'Fleet', section: 'fleet' },
  { icon: Mail, label: 'Contact', section: 'contact' }
] as const;

const DesktopNavigation = () => {
  const { activeSection, setActiveSection } = useDesktopNavigation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* Glowing border line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent 
                    shadow-[0_0_9px_rgba(147,113,39,0.3)]" />
                    
      <div className="bg-gradient-to-t from-black/90 via-black/80 to-transparent 
                    backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-8 py-4">
          {/* Navigation Items */}
          <div className="flex items-center gap-8">
            {NAV_ITEMS.map(({ icon: Icon, label, section }) => {
              const isActive = activeSection === section;
              return (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className="group flex flex-col items-center"
                >
                  <div className={`p-3 rounded-xl transition-all duration-300 backdrop-blur-xl
                               shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                               ${isActive 
                                 ? 'bg-gradient-to-r from-[#937127] via-[#FFD700] to-[#937127] text-black border border-gold/20' 
                                 : 'bg-white/[0.03] border border-white/10 text-gold hover:bg-white/[0.05] hover:border-gold/20'}
                               hover:shadow-[0_4px_16px_rgba(147,113,39,0.3)]`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`mt-1 text-sm font-medium transition-colors duration-300
                                ${isActive ? 'text-gold' : 'text-gold/60'}`}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Book Now Button */}
          <button
            onClick={() => setActiveSection('book')}
            className={`px-8 py-3 rounded-xl
                     ${activeSection === 'book'
                       ? 'bg-black text-gold border-2 border-gold'
                       : 'bg-gradient-to-r from-[#937127] via-[#FFD700] to-[#937127] text-black'}
                     font-semibold text-lg
                     transform transition-all duration-300 active:scale-95
                     shadow-[0_0_30px_rgba(147,113,39,0.4)]
                     hover:shadow-[0_0_40px_rgba(147,113,39,0.5)]
                     flex items-center gap-2`}
          >
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavigation;