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
        onError={(e) => {
          console.log('Video failed to load:', e);
          // Try alternative sources
          const video = e.target as HTMLVideoElement;
          if (video.children.length === 1) {
            const source = document.createElement('source');
            source.src = 'https://opulentts.com/bgvideo/otsnobg.mp4';
            source.type = 'video/mp4';
            video.appendChild(source);
          }
        }}
      >
        <source src="https://opulentts.com/bgvideo/otsnobg.mp4" type="video/mp4" />
        <source src="https://opulentts.com/bgvideo/NYC-bg.mp4" type="video/mp4" />
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
        
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;