import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useDesktopNavigation } from "../../contexts/DesktopNavigationContext";

const Hero = () => {
  const { setActiveSection } = useDesktopNavigation();

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Video - Optimally fitted */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="http://opulentts.com/bgvideo/otsbgvido2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Professional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/69 via-black/39 to-black/69 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,0,0,0.4)_70%)] z-10 pointer-events-none" />
      </div>

      {/* Professional Hero Content - Fully Responsive */}
      <div className="relative z-20 text-center px-2 sm:px-4 md:px-6 lg:px-8 w-full max-w-none mx-auto">
        {/* Premium Badge - Responsive */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-full 
                     bg-black/70 backdrop-blur-xl border border-gold/50 
                     shadow-[0_0_30px_rgba(147,113,39,0.3)] mb-4 sm:mb-6 md:mb-8"
        >
          <span className="text-gold text-xs sm:text-sm md:text-sm font-bold tracking-wider uppercase">
            ★ NEW YORK'S PREMIER LUXURY SERVICE ★
          </span>
        </motion.div>

        {/* Main Title - Fully Responsive */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-3 sm:mb-4 md:mb-6"
        >
          <div
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 
                       font-black mb-2 sm:mb-3 md:mb-4
                       text-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.9)]
                       tracking-tight leading-[0.85]"
          >
            <span className="block">OPULENT</span>
            <span
              className="block bg-gradient-to-r from-gold-lighter via-gold to-gold-dark 
                             bg-clip-text text-transparent drop-shadow-none"
            >
              TRANSPORT
            </span>
          </div>
          <div
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
                       font-light tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em]
                       text-white/95 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            SOLUTIONS
          </div>
        </motion.h1>

        {/* Professional Tagline - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-6 sm:mb-8 md:mb-12"
        >
          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                       text-white font-light mb-3 sm:mb-4 md:mb-6
                       drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]"
          >
            Premium Chauffeur Services
          </h2>

          {/* Service Areas - Responsive */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 
                          text-white/90 text-sm sm:text-base md:text-lg">
            <span className="font-medium">Manhattan</span>
            <span className="text-gold text-xs">●</span>
            <span className="font-medium">Brooklyn</span>
            <span className="text-gold text-xs">●</span>
            <span className="font-medium">Queens</span>
            <span className="text-gold text-xs">●</span>
            <span className="font-medium">JFK • LGA • EWR</span>
          </div>
        </motion.div>

        {/* Call to Action - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="space-y-3 sm:space-y-4 md:space-y-6"
        >
          <p className="text-white/85 text-base sm:text-lg md:text-xl lg:text-2xl font-light">
            Experience luxury. Arrive in style.
          </p>

          <motion.button
            onClick={() => handleScrollToSection("book")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 sm:px-12 sm:py-4 md:px-16 md:py-5 rounded-full 
                       bg-gradient-to-r from-gold-dark via-gold to-gold-dark
                       hover:from-[#5c4718] hover:via-[#b8901f] hover:to-[#5c4718]
                       text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl 
                       tracking-wider border-2 border-gold/60 
                       shadow-[0_0_40px_rgba(147,113,39,0.6)]
                       hover:shadow-[0_0_60px_rgba(147,113,39,0.8)]
                       flex items-center justify-center gap-2 sm:gap-3 md:gap-4 group mx-auto
                       transition-all duration-300 uppercase"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-2" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator - Responsive */}
      <motion.button
        onClick={() => handleScrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20
                 flex flex-col items-center gap-1 sm:gap-2
                 text-white/70 hover:text-gold transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="text-xs sm:text-xs md:text-sm font-medium tracking-wider uppercase">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 animate-bounce" />
      </motion.button>
    </div>
  );
};

export default Hero;
