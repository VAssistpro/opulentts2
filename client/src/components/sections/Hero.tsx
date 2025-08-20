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
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_5%,rgba(0,0,0,0.7)_30%,rgba(0,0,0,0.9)_70%)] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
        {/* Strong text backdrop for central content area */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-black/60 blur-2xl z-10 pointer-events-none" />
      </div>
      {/* Professional Hero Content - Properly Scaled */}
      <div className="relative z-20 text-center px-3 py-2 w-full max-w-[906px] mx-auto mt-[8px] mb-[8px]">
        {/* Premium Badge - Enhanced */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="px-6 backdrop-blur-xl border border-gold/40 rounded-full mb-1.5 inline-block shadow-[0_8px_32px_rgba(0,0,0,0.8)] hover:bg-black/80 transition-all duration-300 bg-[#ebebe4a6] text-[#0d0b0b] pt-[7px] pb-[7px]"
          style={{paddingTop: "7px", paddingBottom: "7px"}}
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
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
            className="md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-[0_10px_30px_rgba(0,0,0,1)] [text-shadow:0_0_60px_rgba(0,0,0,1),_0_10px_30px_rgba(0,0,0,1)] tracking-tight font-bold text-[38px] text-white"
          >
            OPULENT SOLUTIONS
          </div>
        </motion.h1>

        {/* Service Areas - Enhanced Pills - Right Under Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-6"
        >
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)] hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 dark:text-white before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none font-bold text-[#f2ebeb]">
              Manhattan
            </span>
            <span className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)] hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 dark:text-white before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none text-[#f2ebeb] font-bold">
              Brooklyn
            </span>
            <span className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)] hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 dark:text-white before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none text-[#f2ebeb] font-bold">
              Queens
            </span>
            <span className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)] hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 dark:text-white before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none text-[#f2ebeb] font-bold">
              JFK • LGA • EWR
            </span>
            <span className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)] hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 dark:text-white before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none text-[#f2ebeb] font-bold">
              Westchester • Long Island
            </span>
          </div>
        </motion.div>

        {/* Enhanced Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-[#69656500] mt-[6px] mb-[6px] pt-[1px] pb-[1px]"
        >
          

          <div className="md:text-lg text-white max-w-2xl mx-auto drop-shadow-[0_4px_15px_rgba(0,0,0,1)] [text-shadow:0_0_30px_rgba(0,0,0,1),_0_4px_15px_rgba(0,0,0,1)] text-center text-[18px] font-medium leading-relaxed bg-black/20 backdrop-blur-sm rounded-xl border border-white/10" style={{padding: "6px 5px 6px 4px"}}>
            <p>
              Experience unparalleled sophistication with our fleet of premium vehicles,
              professional chauffeurs, and white-glove service that sets the standard for luxury transportation.
            </p>
            <div>
              <br />
            </div>
            <p>
              Join NYC's elite who trust Opulent Transport for their most important journeys.
              Discretion, punctuality, and unmatched comfort guaranteed.
            </p>
          </div>



          {/* Enhanced Call to Action - Moved Up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="space-y-5"
          >
            <div />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
              style={{marginTop: "8px"}}
            >
              <GlassmorphicBookButton onClick={() => handleScrollToSection("book")} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="text-white/60 text-xs"
              style={{marginTop: "8px"}}
            >
              Available 24/7 • Instant confirmation • No hidden fees
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Trust Cards - Liquid Glass Effect - Moved Down */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[18px] max-w-2xl mx-auto mt-[7px] mb-[7px] ml-[114.5px] mr-[114.5px]">
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
              <div className="text-black/70 dark:text-white/70 text-[16px]">Rating</div>
            </div>
            <div className="text-center p-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg
                          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                          hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 overflow-hidden
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
              <div className="text-gold text-lg font-bold">10+</div>
              <div className="text-black/70 dark:text-white/70 text-[16px]">Years</div>
            </div>
            <div className="text-center p-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg
                          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                          hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300 overflow-hidden
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
              <div className="text-gold text-lg font-bold">100%</div>
              <div className="text-black/70 dark:text-white/70 text-[16px]">Satisfaction</div>
            </div>
          </div>
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
