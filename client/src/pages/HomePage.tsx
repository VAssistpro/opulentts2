import React, { useState } from 'react';
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