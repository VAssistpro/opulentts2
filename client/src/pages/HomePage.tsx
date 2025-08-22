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