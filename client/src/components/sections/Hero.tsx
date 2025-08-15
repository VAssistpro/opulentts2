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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_10%,rgba(0,0,0,0.5)_40%,rgba(0,0,0,0.7)_80%)] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
      </div>
      {/* Professional Hero Content - Properly Scaled */}
      <div className="relative z-20 text-center p-4 w-full max-w-[906px] mx-auto">
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
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                       font-black mb-2
                       text-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.9)]
                       tracking-tight leading-[0.9]"
          >
            OPULENT{' '}
            <span
              className="bg-gradient-to-r from-gold-lighter via-gold to-gold-dark
                             bg-clip-text text-transparent drop-shadow-none"
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
          className="mt-[13px] mb-[13px] bg-[#69656512]"
        >
          <h2
            className="text-xl md:text-2xl lg:text-3xl text-gold font-semibold drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] tracking-wide mt-[4px] mb-[4px]"
          >
            Where Excellence Meets Luxury
          </h2>

          <p className="text-base md:text-lg text-white/95 font-light mb-4 max-w-2xl mx-auto leading-relaxed
                     drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Experience unparalleled sophistication with our fleet of premium vehicles,
            professional chauffeurs, and white-glove service that sets the standard for luxury transportation.
          </p>

          {/* Stats Grid - Compact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5 max-w-2xl mx-auto">
            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-gold/30">
              <div className="text-gold text-lg font-bold">24/7</div>
              <div className="text-white/70 text-xs">Available</div>
            </div>
            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-gold/30">
              <div className="text-gold text-lg font-bold">5⭐</div>
              <div className="text-white/70 text-xs">Rating</div>
            </div>
            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-gold/30">
              <div className="text-gold text-lg font-bold">10+</div>
              <div className="text-white/70 text-xs">Years</div>
            </div>
            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-gold/30">
              <div className="text-gold text-lg font-bold">100%</div>
              <div className="text-white/70 text-xs">Satisfaction</div>
            </div>
          </div>

          {/* Service Areas - Enhanced Pills */}
          <div className="mb-4">
            <p className="text-white/70 text-sm mb-2 tracking-wider uppercase bg-[#bfbbbb33] font-semibold">
              Serving All of NYC Metro Area
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm bg-[#9692923b]">
              <span className="px-3 py-1.5 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full backdrop-blur-sm border border-gold/40 text-white/95 font-medium">
                Manhattan
              </span>
              <span className="px-3 py-1.5 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full backdrop-blur-sm border border-gold/40 text-white/95 font-medium">
                Brooklyn
              </span>
              <span className="px-3 py-1.5 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full backdrop-blur-sm border border-gold/40 text-white/95 font-medium">
                Queens
              </span>
              <span className="px-3 py-1.5 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full backdrop-blur-sm border border-gold/40 text-white/95 font-medium">
                JFK • LGA • EWR
              </span>
              <span className="px-3 py-1.5 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full backdrop-blur-sm border border-gold/40 text-white/95 font-medium">
                Westchester • Long Island
              </span>
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
            <p className="text-white text-lg md:text-xl font-medium">
              Ready to Experience True Luxury?
            </p>
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
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
            <a
              href="tel:+15163245483"
              className="flex items-center gap-2 px-5 py-2.5 bg-transparent border-2 border-white/30
                        text-white font-semibold rounded-lg backdrop-blur-sm hover:border-gold/50
                        hover:bg-white/10 transition-all duration-300 text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
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
