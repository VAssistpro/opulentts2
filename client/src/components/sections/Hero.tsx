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
        {/* Elegant Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-md 
                        border border-white/20 rounded-full text-white/80 text-sm font-light tracking-wider">
            <div className="w-2 h-2 bg-gold rounded-full mr-3 opacity-80" />
            NEW YORK'S PREMIER LUXURY SERVICE
            <div className="w-2 h-2 bg-gold rounded-full ml-3 opacity-80" />
          </div>
        </motion.div>

        {/* Main Title - Properly Sized */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-4"
        >
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-wide text-white 
                          drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              OPULENT
            </div>
            <div className="text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em] text-gold/90 
                          drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              TRANSPORT SOLUTIONS
            </div>
          </div>
        </motion.h1>

        {/* Service Areas - Minimal Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {['Manhattan', 'Brooklyn', 'Queens', 'JFK • LGA • EWR', 'Westchester • Long Island'].map((location, index) => (
              <span
                key={location}
                className="px-4 py-1.5 bg-white/5 border border-white/20 rounded-full 
                         text-white/70 font-light tracking-wide
                         hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                {location}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-[#69656500] mt-[6px] mb-[6px] pt-[1px] pb-[1px]"
        >
          

          <div className="max-w-3xl mx-auto">
            <div className="text-center text-white/80 text-lg font-light leading-relaxed space-y-6">
              <p>
                Experience unparalleled sophistication with our fleet of premium vehicles,
                professional chauffeurs, and white-glove service that sets the standard for luxury transportation.
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto" />
              <p>
                Join NYC's elite who trust Opulent Transport for their most important journeys.
                <br />
                <span className="text-gold/70 text-base">Discretion, punctuality, and unmatched comfort guaranteed.</span>
              </p>
            </div>
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

        {/* Clean Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: '24/7', label: 'Available' },
              { value: '5.0★', label: 'Rating' },
              { value: '10+', label: 'Years' },
              { value: '100%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-thin text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/60 font-light tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
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
