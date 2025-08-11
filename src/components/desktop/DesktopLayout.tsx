import React from 'react';
// import { motion } from 'framer-motion'; // Keep if used elsewhere
import ErrorBoundary from '../error/ErrorBoundary';
import LuxuryNavbar from '../navigation/LuxuryNavbar';
// Import components for the sidebar
import Logo from './Logo'; // Adjust path
import ContactIcons from './ContactIcons'; // Adjust path
import Testimonials from './Testimonials'; // Adjust path
import SocialIcons from '../common/SocialIcons'; // Adjust path
// Import content renderer
import MainContent from './MainContent';
import Footer from './Footer';
import BackgroundEffects from './DesktopLayout/BackgroundEffects';

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarWidth = "w-60 md:w-64 lg:w-72"; // Define sidebar width classes
  const mainPadding = "pl-60 md:pl-64 lg:pl-72"; // Define corresponding padding

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-background-primary text-text-primary">
        <BackgroundEffects />

        {/* --- FIXED LEFT SIDEBAR --- */}
        <aside
          className={`fixed top-0 left-0 h-screen ${sidebarWidth} z-30
                    flex flex-col items-center justify-between // CHANGED: justify-between
                    pt-8 pb-8 px-4 // Adjusted vertical padding
                    bg-black/70 backdrop-blur-lg
                    border-r border-gold/10
                    overflow-y-auto custom-scrollbar
                  `}
          // REMOVED gap-y-* (justify-between handles main spacing)
        >
          {/* Group Logo and Contact Icons together at the top */}
          <div className="flex flex-col items-center gap-y-5 flex-shrink-0 w-full"> {/* Added w-full */}
            {/* 1. Logo */}
            <div className="w-36 md:w-44">
              <a href="#home" aria-label="Home">
                 <Logo />
              </a>
            </div>
            {/* 2. Contact Icons */}
            <ContactIcons />
          </div>

          {/* 3. Testimonials - Will now sit between top/bottom groups */}
          {/* REMOVED flex-grow, let its natural height flow */}
          <div className="w-full px-1 my-4"> {/* Added my-4 for breathing room */}
            <Testimonials />
          </div>

          {/* 4. Social Icons (Pushed to bottom by justify-between) */}
          {/* REMOVED mt-auto */}
          <div className="flex-shrink-0">
              <SocialIcons />
          </div>
        </aside>
        {/* --- END LEFT SIDEBAR --- */}

        {/* --- TOP NAVIGATION BAR --- */}
         <LuxuryNavbar />

        {/* --- MAIN CONTENT AREA --- */}
        <div className={`relative ${mainPadding}`}>
           <main className="pt-20 md:pt-24 pb-10 min-h-[calc(100vh-80px)]">
              <MainContent />
           </main>
           <Footer className={`${mainPadding}`} /> {/* Ensure Footer gets padding */}
        </div>

        {/* Fixed Bottom CTA (Optional) */}
        {/* ... */}

      </div>
    </ErrorBoundary>
  );
};

export default DesktopLayout;