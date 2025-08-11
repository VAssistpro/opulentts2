import React from 'react';
import { Home, Info, Briefcase, Car, Mail, Calendar, User } from 'lucide-react';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import LuxuryButton from '../ui/design-system/LuxuryButton';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Items */}
          <div className="flex items-center gap-8">
            {NAV_ITEMS.map(({ icon: Icon, label, section }) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                         ${activeSection === section 
                           ? 'bg-gold/20 text-gold' 
                           : 'text-gold hover:bg-gold/10'}`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <LuxuryButton
              onClick={() => setActiveSection('book')}
              icon={Calendar}
              iconPosition="left"
              variant="primary"
              size="md"
            >
              Book Now
            </LuxuryButton>

            <LuxuryButton
              onClick={() => {/* Handle login */}}
              icon={User}
              iconPosition="left"
              variant="secondary"
              size="md"
            >
              Account
            </LuxuryButton>
          </div>
        </div>
      </div>

      {/* Gold border line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent 
                    shadow-[0_0_9px_rgba(147,113,39,0.3)]" />
    </nav>
  );
};

export default DesktopNavigation;