import React, { useState } from 'react';
import { Home, Info, Briefcase, Car, Star, Mail, Calendar, User } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const navButton = (icon: React.ReactNode, label: string, section: string, isSpecial = false) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-300 ${
        isSpecial
          ? 'bg-yellow-500 text-black hover:bg-yellow-400'
          : activeSection === section
          ? 'bg-white/20 text-yellow-400'
          : 'text-white/70 hover:text-white hover:bg-white/10'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative">
          {/* Main Navbar with Liquid Glass Effect */}
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-full px-6 py-2 
                         shadow-[0_8px_32px_rgba(0,0,0,0.3)] 
                         border border-white/20
                         before:absolute before:inset-0 before:rounded-full 
                         before:bg-gradient-to-r before:from-white/5 before:to-transparent 
                         before:border-t before:border-white/30
                         after:absolute after:inset-0 after:rounded-full 
                         after:bg-gradient-to-b after:from-transparent after:to-black/10">
            
            <div className="relative z-10 flex items-center justify-between gap-4">
              
              {/* Left Navigation */}
              <div className="flex items-center space-x-4">
                {navButton(<Home className="w-4 h-4" />, 'Home', 'home')}
                {navButton(<Info className="w-4 h-4" />, 'About Us', 'about')}
                {navButton(<Briefcase className="w-4 h-4" />, 'Services', 'services')}
                {navButton(<Car className="w-4 h-4" />, 'Fleet', 'fleet')}
              </div>

              {/* Spacer for center logo */}
              <div className="w-24"></div>

              {/* Right Navigation */}
              <div className="flex items-center space-x-4">
                {navButton(<Star className="w-4 h-4" />, 'Reviews', 'testimonials')}
                {navButton(<Mail className="w-4 h-4" />, 'Contact Us', 'contact')}
                {navButton(<Calendar className="w-4 h-4" />, 'Book Now', 'book', true)}
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="flex flex-col items-center space-y-1 px-3 py-2 rounded-lg
                           text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <User className="w-4 h-4" />
                  <span className="text-xs font-medium">Account</span>
                </button>
              </div>
            </div>
          </div>

          {/* Center Logo with Enhanced Glass Effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <button
              onClick={() => setActiveSection('home')}
              className="relative flex items-center justify-center w-20 h-20 rounded-full 
                       bg-white/15 backdrop-blur-2xl 
                       border-2 border-white/30
                       shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                       hover:scale-105 transition-all duration-300
                       before:absolute before:inset-0 before:rounded-full 
                       before:bg-gradient-to-r before:from-yellow-500/20 before:to-yellow-600/10
                       after:absolute after:inset-0 after:rounded-full 
                       after:border after:border-yellow-500/40
                       after:bg-gradient-to-b after:from-white/10 after:to-transparent"
            >
              <img
                src="https://opulentts.com/bgvideo/otsnobg.png"
                alt="Opulent Transport Solutions"
                className="relative z-10 w-12 h-12 object-contain"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Login Modal with Glass Effect */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl p-8 max-w-md w-full mx-4
                         shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-6">Account Login</h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-500"
              />
              <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Login
              </button>
              <button
                onClick={() => setShowLoginModal(false)}
                className="w-full border border-white/20 text-white py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;