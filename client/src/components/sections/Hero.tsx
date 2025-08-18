import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useDesktopNavigation } from "../../contexts/DesktopNavigationContext";
import GlassmorphicBookButton from "../ui/buttons/GlassmorphicBookButton";

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
      {/* Background Video - Force Full Fill */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 scale-110"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        >
          <source
            src="http://opulentts.com/bgvideo/otsbgvido2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Enhanced overlay for optimal text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_5%,rgba(0,0,0,0.6)_30%,rgba(0,0,0,0.8)_70%)] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
        {/* Additional text backdrop for central content area */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-black/40 blur-xl z-10 pointer-events-none" />
      </div>
      {/* Professional Hero Content - Properly Scaled */}
      <div className="relative z-20 text-center p-4 pb-12 w-full max-w-[906px] mx-auto mt-[17px] mb-[17px]">
        {/* Premium Badge - Compact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-white/90 mb-4 inline-block"
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            ★ NEW YORK'S PREMIER LUXURY SERVICE ★
          </span>
        </motion.div>

        {/* Main Title - Properly Sized */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-4"
        >
          <div
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white drop-shadow-[0_8px_20px_rgba(0,0,0,1)] [text-shadow:0_0_40px_rgba(0,0,0,0.8),_0_8px_20px_rgba(0,0,0,1)] tracking-tight leading-[0.9] font-extrabold mt-[4px] mb-[4px]"
          >
            OPULENT{' '}
            <span
              className="bg-gradient-to-r from-gold-lighter via-gold to-gold-dark bg-clip-text drop-shadow-none text-[#fcfcfcf7]"
            >
              TRANSPORT
            </span>{' '}
            SOLUTIONS
          </div>
        </motion.h1>

        {/* Enhanced Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-[#69656500] mt-[10px] mb-[10px] pt-[1px] pb-[1px]"
        >
          

          <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed 
                 drop-shadow-[0_3px_10px_rgba(0,0,0,1)]
                 [text-shadow:0_0_20px_rgba(0,0,0,0.8),_0_3px_10px_rgba(0,0,0,1)]
                 font-medium mt-[2px] mb-[2px]">
            Experience unparalleled sophistication with our fleet of premium vehicles,
            professional chauffeurs, and white-glove service that sets the standard for luxury transportation.
          </p>

          {/* Service Areas - Enhanced Pills - Moved Above */}
          <div className="mb-6">
            <div className="flex flex-wrap justify-center gap-2 text-sm mt-[5px] mb-[5px]">
              <span className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full
                              shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                              hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 text-black dark:text-white font-medium
                              before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
                Manhattan
              </span>
              <span className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full
                              shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                              hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 text-black dark:text-white font-medium
                              before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
                Brooklyn
              </span>
              <span className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full
                              shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                              hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 text-black dark:text-white font-medium
                              before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
                Queens
              </span>
              <span className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full
                              shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                              hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 text-black dark:text-white font-medium
                              before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
                JFK • LGA • EWR
              </span>
              <span className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full
                              shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                              hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 text-black dark:text-white font-medium
                              before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
                Westchester • Long Island
              </span>
            </div>
          </div>

          {/* Trust Cards - Liquid Glass Effect - Moved Below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-2.5 max-w-2xl mx-auto">
            <div className="text-center p-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg
                          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                          hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 overflow-hidden
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
              <div className="text-gold text-lg font-bold">24/7</div>
              <div className="text-black/70 dark:text-white/70 text-[16px]">Available</div>
            </div>
            <div className="text-center p-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg
                          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                          hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 overflow-hidden
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
              <div className="text-gold text-lg font-bold">5 ⭐</div>
              <div className="text-black/70 dark:text-white/70 text-xs">Rating</div>
            </div>
            <div className="text-center p-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg
                          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                          hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 overflow-hidden
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
              <div className="text-gold text-lg font-bold">10+</div>
              <div className="text-black/70 dark:text-white/70 text-xs">Years</div>
            </div>
            <div className="text-center p-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg
                          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                          hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 overflow-hidden
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
              <div className="text-gold text-lg font-bold">100%</div>
              <div className="text-black/70 dark:text-white/70 text-xs">Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="space-y-5"
        >
          <div className="space-y-2">
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed mt-[2px] mb-[2px] bg-[#a6a2a200]">
              Join NYC's elite who trust Opulent Transport for their most important journeys.
              Discretion, punctuality, and unmatched comfort guaranteed.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <GlassmorphicBookButton onClick={() => handleScrollToSection("book")} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-white/60 text-xs"
          >
            Available 24/7 • Instant confirmation • No hidden fees
          </motion.p>
        </motion.div>
      </div>
      {/* Scroll Indicator - Compact */}
      <motion.button
        onClick={() => handleScrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20
                 flex flex-col items-center gap-1
                 text-white/70 hover:text-gold transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.button>
    </div>
  );
};

export default Hero;
