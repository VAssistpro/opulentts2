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
        {/* Premium Badge - Luxurious */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mb-6"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/40 via-yellow-300/20 to-gold/40 rounded-full blur-sm animate-pulse" />
          <div className="relative px-8 py-3 bg-gradient-to-r from-gold/90 via-gold to-gold/90 
                        backdrop-blur-xl border border-gold/50 rounded-full shadow-xl
                        hover:shadow-[0_0_30px_rgba(147,113,39,0.5)] transition-all duration-300">
            <span className="text-sm tracking-[0.2em] uppercase font-bold text-black/90 
                           drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]">
              ✦ NEW YORK'S PREMIER LUXURY SERVICE ✦
            </span>
          </div>
        </motion.div>

        {/* Main Title - Properly Sized */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-4"
        >
          <div className="relative">
            <div className="md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-[0_10px_30px_rgba(0,0,0,1)] [text-shadow:0_0_60px_rgba(0,0,0,1),_0_10px_30px_rgba(0,0,0,1)] tracking-tight font-extrabold text-[50px]">
              <span className="text-white">OPULENT </span>
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-pulse">
                LUXURY
              </span>
              <span className="text-white"> TRANSPORT</span>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 blur-xl opacity-50 animate-pulse" />
          </div>
        </motion.h1>

        {/* Service Areas - Premium Glass Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['Manhattan', 'Brooklyn', 'Queens', 'JFK • LGA • EWR', 'Westchester • Long Island'].map((location, index) => (
              <motion.span
                key={location}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="relative px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl 
                         border border-gold/30 rounded-full shadow-lg
                         hover:from-gold/20 hover:to-gold/10 hover:border-gold/50 hover:shadow-gold/20
                         transition-all duration-300 font-medium text-white cursor-pointer
                         shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(147,113,39,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{location}</span>
              </motion.span>
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
          

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-blue-400/10 to-gold/20 rounded-2xl blur-lg opacity-60" />
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl 
                          border border-gold/20 rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
              <div className="text-lg text-white/90 text-center leading-relaxed space-y-4">
                <p className="font-light">
                  Experience unparalleled sophistication with our fleet of <span className="text-gold font-medium">premium vehicles</span>,
                  professional chauffeurs, and white-glove service that sets the standard for luxury transportation.
                </p>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto" />
                <p className="font-light">
                  Join NYC's elite who trust <span className="text-gold font-medium">Opulent Transport</span> for their most important journeys.
                  <br />
                  <span className="text-gold/80 text-base">Discretion, punctuality, and unmatched comfort guaranteed.</span>
                </p>
              </div>
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

        {/* Premium Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '24/7', label: 'Available', icon: '🕐' },
              { value: '5.0★', label: 'Rating', icon: '⭐' },
              { value: '10+', label: 'Years', icon: '🏆' },
              { value: '100%', label: 'Satisfaction', icon: '✨' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/30 via-gold/10 to-gold/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center p-6 bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                              backdrop-blur-xl border border-gold/20 rounded-xl
                              shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(147,113,39,0.15)]
                              transition-all duration-300 hover:scale-105">
                  <div className="text-3xl mb-2 opacity-60">{stat.icon}</div>
                  <div className="text-gold text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
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
