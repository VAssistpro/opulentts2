import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import FleetSection from '../components/FleetSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{ objectFit: 'cover' }}
      >
        <source src="https://opulentts.com/bgvideo/otsbgvido2.mp4" type="video/mp4" />
      </video>
      
      {/* Video Overlay */}
      <div className="fixed inset-0 bg-black/40 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Premium Badge under navbar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="fixed top-32 w-full z-40 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-6 py-3 rounded-full 
                       bg-gradient-to-r from-yellow-500/20 via-yellow-400/15 to-yellow-500/20 
                       border border-yellow-500/40 backdrop-blur-lg shadow-2xl
                       hover:border-yellow-400/60 transition-all duration-300"
          >
            <Star className="w-4 h-4 text-yellow-400 mr-2 animate-pulse" />
            <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">
              NEW YORK'S PREMIER LUXURY SERVICE
            </span>
            <Star className="w-4 h-4 text-yellow-400 ml-2 animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Main Title under badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="fixed top-52 w-full z-30 flex justify-center"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold
                       tracking-tight leading-[0.9] text-center"
          >
            <motion.span 
              className="block bg-gradient-to-r from-white via-gray-100 to-white 
                         bg-clip-text text-transparent font-playfair mb-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              OPULENT
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                         bg-clip-text text-transparent font-playfair relative mb-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              TRANSPORT
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 blur-xl -z-10"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-white via-gray-100 to-white 
                         bg-clip-text text-transparent font-playfair"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              SOLUTIONS
            </motion.span>
          </motion.h1>
        </motion.div>
        
        {activeSection === 'home' && <HeroSection />}
        {activeSection === 'about' && <StatsSection />}
        {activeSection === 'services' && <ServicesSection />}
        {activeSection === 'fleet' && <FleetSection />}
        {activeSection === 'testimonials' && <TestimonialsSection />}
        {activeSection === 'contact' && <ContactSection />}
        {activeSection === 'book' && <ContactSection />}
      </div>
    </div>
  );
};

export default HomePage;