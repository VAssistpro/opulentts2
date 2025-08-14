import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useDesktopNavigation } from "../../contexts/DesktopNavigationContext";

const Hero = () => {
  const { setActiveSection } = useDesktopNavigation();

  const handleScrollToSection = (
    sectionId: "home" | "about" | "services" | "fleet" | "contact" | "book",
  ) => {
    setActiveSection(sectionId);
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mt-[157px] mb-[157px] bg-[#e0d1d100]"
        >
          <h1 className="text-6xl md:text-7xl text-white mb-6 leading-tight font-extrabold drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] font-playfair">
            Opulent Transport
            <span className="block text-gold drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"> Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-semibold pl-[49px] pr-[49px] mt-[14px] mb-[14px] pt-[4px] pb-[4px] bg-[#8f6f6f00] drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)] font-inter">
            Travel in comfort and style with{' '}
            <span className="text-gold font-bold tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Opulent Transport Solutions
            </span>
            {' – '}premium chauffeured services across New York City, JFK, LGA, EWR Airports, and Charter/As directed luxury transportation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollToSection("book")}
              className="group px-8 py-4 bg-gold text-black font-semibold rounded-lg shadow-xl hover:bg-gold/90 transition-all duration-300 ease-out flex items-center gap-2 drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] font-inter will-change-transform"
            >
              Book Your Ride
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/70 hover:text-white transition-colors cursor-pointer"
            onClick={() => handleScrollToSection("about")}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
