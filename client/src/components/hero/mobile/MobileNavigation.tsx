import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Info, Briefcase, Car, Mail, Calendar, User } from 'lucide-react';
import { useMobileNavigation } from '../../../contexts/MobileNavigationContext';
import LoginModal from '../../layout/LoginModal';

const NAV_ITEMS = [
  { icon: Home, label: 'Home', section: 'home' },
  { icon: Info, label: 'About', section: 'about' },
  { icon: Briefcase, label: 'Services', section: 'services' },
  { icon: Car, label: 'Fleet', section: 'fleet' },
  { icon: Mail, label: 'Contact', section: 'contact' }
] as const;

const MobileNavigation = () => {
  const { activeSection, setActiveSection } = useMobileNavigation();
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent 
                    shadow-[0_0_9px_rgba(147,113,39,0.3)]" />
                    
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="bg-gradient-to-t from-black/90 via-black/80 to-transparent backdrop-blur-xl"
      >
        <div className="flex flex-col gap-1 py-3 px-4">
          <div className="grid grid-cols-6 gap-1">
            {NAV_ITEMS.map(({ icon: Icon, label, section }) => {
              const isActive = activeSection === section;
              return (
                <motion.button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center"
                >
                  <motion.div 
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      backgroundColor: isActive ? "rgba(147, 113, 39, 0.2)" : "rgba(0, 0, 0, 0.8)"
                    }}
                    className={`p-3.5 rounded-xl transition-all duration-300
                             border border-gold/50 
                             shadow-[0_4px_12px_rgba(147,113,39,0.2)]`}
                  >
                    <Icon className={`w-6 h-6 ${isActive ? 'text-gold' : 'text-gold/60'}`} />
                  </motion.div>
                  <span className={`mt-1.5 text-xs font-medium transition-colors duration-300
                                ${isActive ? 'text-gold' : 'text-gold/60'}`}>
                    {label}
                  </span>
                </motion.button>
              );
            })}

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLoginModal(true)}
              className="group flex flex-col items-center"
            >
              <div className="p-3.5 rounded-xl transition-all duration-300
                           bg-black/80 backdrop-blur-xl border border-gold/50 text-gold
                           shadow-[0_4px_12px_rgba(147,113,39,0.2)]">
                <User className="w-6 h-6" />
              </div>
              <span className="mt-1.5 text-xs font-medium text-gold/60">Account</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </nav>
  );
};

export default MobileNavigation;