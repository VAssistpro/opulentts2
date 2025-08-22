import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { Home, Info, Briefcase, Car, Star, Mail, Calendar, User } from 'lucide-react';
import LoginModal from '../layout/LoginModal';

const ResponsiveNavbar: React.FC = () => {
  const { activeSection, setActiveSection } = useDesktopNavigation();
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <motion.nav 
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
          <div className="flex items-center justify-center px-6 py-3">
            
            {/* Left Navigation */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all ${
                  activeSection === 'home' ? 'bg-white/20 text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="text-xs">Home</span>
              </button>

              <button
                onClick={() => setActiveSection('about')}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all ${
                  activeSection === 'about' ? 'bg-white/20 text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                <Info className="w-5 h-5" />
                <span className="text-xs">About Us</span>
              </button>

              <button
                onClick={() => setActiveSection('services')}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all ${
                  activeSection === 'services' ? 'bg-white/20 text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span className="text-xs">Services</span>
              </button>

              <button
                onClick={() => setActiveSection('fleet')}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all ${
                  activeSection === 'fleet' ? 'bg-white/20 text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                <Car className="w-5 h-5" />
                <span className="text-xs">Fleet</span>
              </button>
            </div>

            {/* Center Logo */}
            <div className="mx-8">
              <button
                onClick={() => setActiveSection('home')}
                className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border-2 border-gold/40 hover:scale-105 transition-all"
              >
                <img
                  src="https://opulentts.com/bgvideo/otsnobg.png"
                  alt="Opulent"
                  className="w-10 h-10 object-contain"
                />
              </button>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setActiveSection('testimonials')}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all ${
                  activeSection === 'testimonials' ? 'bg-white/20 text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                <Star className="w-5 h-5" />
                <span className="text-xs">Reviews</span>
              </button>

              <button
                onClick={() => setActiveSection('contact')}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all ${
                  activeSection === 'contact' ? 'bg-white/20 text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                <Mail className="w-5 h-5" />
                <span className="text-xs">Contact Us</span>
              </button>

              <button
                onClick={() => setActiveSection('book')}
                className="flex flex-col items-center space-y-1 px-3 py-2 rounded-lg bg-gold text-black hover:bg-gold/90 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-xs">Book Now</span>
              </button>

              <button
                onClick={() => setShowLoginModal(true)}
                className="flex flex-col items-center space-y-1 px-3 py-2 rounded-lg text-white/70 hover:text-white transition-all"
              >
                <User className="w-5 h-5" />
                <span className="text-xs">Account</span>
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
};

export default ResponsiveNavbar;