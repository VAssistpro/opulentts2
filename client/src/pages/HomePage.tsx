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
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://opulentts.com/bgvideo/NYC-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

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
        
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;