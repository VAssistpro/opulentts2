import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Info, Briefcase, Car, Star, Mail, Calendar, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: <Home className="w-4 h-4" />, label: 'Home', section: 'home' },
    { icon: <Info className="w-4 h-4" />, label: 'About Us', section: 'about' },
    { icon: <Briefcase className="w-4 h-4" />, label: 'Services', section: 'services' },
    { icon: <Car className="w-4 h-4" />, label: 'Fleet', section: 'fleet' },
    { icon: <Star className="w-4 h-4" />, label: 'Reviews', section: 'testimonials' },
    { icon: <Mail className="w-4 h-4" />, label: 'Contact Us', section: 'contact' },
  ];

  const navButton = (icon: React.ReactNode, label: string, section: string, isSpecial = false) => (
    <motion.button
      onClick={() => {
        setActiveSection(section);
        setIsMobileMenuOpen(false);
      }}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`flex flex-col items-center space-y-1 px-4 py-3 rounded-xl transition-all duration-300 relative group ${
        isSpecial
          ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 shadow-lg hover:shadow-xl'
          : activeSection === section
          ? 'bg-white/20 text-yellow-400 shadow-lg'
          : 'text-white/70 hover:text-white hover:bg-white/10'
      }`}
    >
      {!isSpecial && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{ opacity: activeSection === section ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <div className="relative z-10">{icon}</div>
      <span className="text-xs font-semibold relative z-10">{label}</span>
    </motion.button>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav 
        className="fixed top-4 w-full z-50 hidden lg:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex justify-center">
          {/* Enhanced Navbar with Dynamic Glass Effect */}
          <motion.div 
            className="relative bg-white/10 backdrop-blur-3xl rounded-2xl px-6 py-3 
                       shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20
                       before:absolute before:inset-0 before:rounded-2xl 
                       before:bg-gradient-to-r before:from-white/10 before:via-white/5 before:to-transparent 
                       before:border-t before:border-white/30"
            animate={{
              backdropFilter: `blur(${Math.min(scrollY / 10 + 20, 40)}px)`,
              backgroundColor: `rgba(255, 255, 255, ${Math.min(scrollY / 1000 + 0.1, 0.2)})`
            }}
          >
            <div className="relative z-10 flex items-center gap-4">
              
              {/* Left Navigation - 4 buttons */}
              <div className="flex items-center space-x-2">
                {navItems.slice(0, 4).map((item) => (
                  <div key={item.section}>
                    {navButton(item.icon, item.label, item.section)}
                  </div>
                ))}
              </div>

              {/* Center Logo - Bigger and extending beyond borders */}
              <motion.div 
                className="mx-4 z-30 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setActiveSection('home')}
                  className="relative flex items-center justify-center w-28 h-28 rounded-2xl 
                         bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-3xl 
                         border-2 border-white/30 shadow-[0_12px_40px_rgba(0,0,0,0.5)]
                         hover:border-yellow-500/50 transition-all duration-300
                         before:absolute before:inset-0 before:rounded-2xl 
                         before:bg-gradient-to-br before:from-yellow-500/20 before:to-yellow-600/10
                         after:absolute after:inset-0 after:rounded-2xl 
                         after:border after:border-yellow-500/40 transform -translate-y-2"
                >
                  <motion.img
                    src="https://opulentts.com/bgvideo/otsnobg.png"
                    alt="Opulent Transport Solutions"
                    className="relative z-10 w-16 h-16 object-contain"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </button>
              </motion.div>

              {/* Right Navigation - 4 buttons */}
              <div className="flex items-center space-x-2">
                {navItems.slice(4).map((item) => (
                  <div key={item.section}>
                    {navButton(item.icon, item.label, item.section)}
                  </div>
                ))}
                {navButton(<Calendar className="w-4 h-4" />, 'Book Now', 'book', true)}
                <motion.button
                  onClick={() => setShowLoginModal(true)}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center space-y-1 px-4 py-3 rounded-xl
                           text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                >
                  <User className="w-4 h-4" />
                  <span className="text-xs font-semibold">Account</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav 
        className="fixed top-4 left-4 right-4 z-50 lg:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative bg-white/10 backdrop-blur-3xl rounded-2xl px-6 py-4 
                       shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => setActiveSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <img
                src="https://opulentts.com/bgvideo/otsnobg.png"
                alt="Opulent"
                className="w-10 h-10 object-contain"
              />
              <span className="text-yellow-500 font-bold text-lg">Opulent</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-3xl rounded-2xl 
                         shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 p-4"
            >
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.section}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {navButton(item.icon, item.label, item.section)}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                >
                  {navButton(<Calendar className="w-4 h-4" />, 'Book Now', 'book', true)}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navItems.length + 1) * 0.1, duration: 0.3 }}
                >
                  <motion.button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsMobileMenuOpen(false);
                    }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col items-center space-y-1 px-4 py-3 rounded-xl w-full
                             text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <User className="w-4 h-4" />
                    <span className="text-xs font-semibold">Account</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Enhanced Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl p-8 max-w-md w-full
                         shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative"
            >
              {/* Close button */}
              <motion.button
                onClick={() => setShowLoginModal(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 
                           text-white/70 hover:text-white transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <h2 className="text-3xl font-bold text-white mb-8 font-playfair">Account Login</h2>
              <div className="space-y-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:border-yellow-500 
                           focus:bg-white/15 transition-all duration-300"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="password"
                  placeholder="Password"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:border-yellow-500 
                           focus:bg-white/15 transition-all duration-300"
                />
                <motion.button 
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-xl 
                           font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300
                           shadow-[0_10px_30px_rgba(147,113,39,0.3)]"
                >
                  Sign In
                </motion.button>
                <motion.button
                  onClick={() => setShowLoginModal(false)}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border border-white/20 text-white py-4 rounded-xl font-semibold
                           hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;