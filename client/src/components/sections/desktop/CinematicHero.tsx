import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Calendar, Phone, Shield, Award, Clock, Star, MapPin, Crown, Zap, Users, Diamond } from 'lucide-react';
import { useDesktopNavigation } from '../../../contexts/DesktopNavigationContext';

const CinematicHero = () => {
  const { setActiveSection } = useDesktopNavigation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId as any);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleBookNow = () => {
    handleScrollToSection('book');
  };

  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Cinematic Background with Parallax */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        >
          <source src="http://opulentts.com/bgvideo/otsbgvido2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dramatic Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/60 to-black/95 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_40%,rgba(0,0,0,0.8)_100%)] z-10" />
        
        {/* Interactive Mouse-Following Light */}
        <motion.div
          className="absolute pointer-events-none z-10"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <div className="w-[600px] h-[600px] bg-gradient-radial from-gold/20 via-gold/5 to-transparent rounded-full blur-3xl opacity-60" />
        </motion.div>

        {/* Floating Luxury Particles */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold/60 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Dramatic Lighting Effects */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-gold/25 to-transparent rounded-full blur-3xl animate-pulse-slow opacity-80" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-blue-400/15 to-transparent rounded-full blur-3xl animate-float opacity-70" />
          <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-gradient-radial from-purple-400/10 to-transparent rounded-full blur-2xl animate-pulse-slow opacity-60" />
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-20 w-full px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center min-h-screen pt-32 pb-20">

            {/* Left Content - Cinematic Main Hero */}
            <div className="lg:col-span-3 text-left space-y-12">

              {/* Epic Luxury Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center px-12 py-6 rounded-full
                           bg-gradient-to-r from-gold/30 via-gold/20 to-gold/30 
                           backdrop-blur-3xl border-3 border-gold/60 
                           shadow-[0_0_80px_rgba(147,113,39,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]
                           hover:shadow-[0_0_120px_rgba(147,113,39,0.7)] transition-all duration-500"
              >
                <div className="flex items-center gap-6">
                  <Crown className="w-8 h-8 text-gold animate-pulse" />
                  <span className="text-gold text-2xl font-black tracking-wider uppercase">
                    New York's Crown Jewel
                  </span>
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      >
                        <Star className="w-6 h-6 text-gold fill-current drop-shadow-glow" />
                      </motion.div>
                    ))}
                  </div>
                  <Diamond className="w-8 h-8 text-gold animate-spin-slow" />
                </div>
              </motion.div>

              {/* Massive Cinematic Title */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.h1 
                    className="text-white font-black leading-[0.8]"
                    style={{ 
                      fontSize: 'clamp(4rem, 15vw, 12rem)',
                      textShadow: '0 20px 50px rgba(0,0,0,0.9), 0 0 100px rgba(147,113,39,0.3)'
                    }}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                  >
                    OPULENT
                  </motion.h1>
                  
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                  >
                    <h1 
                      className="font-black leading-[0.8]"
                      style={{ 
                        fontSize: 'clamp(3rem, 12vw, 9rem)',
                        background: 'linear-gradient(135deg, #FFD700 0%, #B8923A 25%, #937127 50%, #B8923A 75%, #FFD700 100%)',
                        backgroundSize: '300% 300%',
                        animation: 'gradientShift 4s ease infinite',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: 'none'
                      }}
                    >
                      TRANSPORT
                    </h1>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/40 to-transparent blur-3xl -z-10" />
                  </motion.div>

                  <motion.h1 
                    className="text-white/95 font-light"
                    style={{ 
                      fontSize: 'clamp(2rem, 8vw, 6rem)', 
                      letterSpacing: '0.2em',
                      textShadow: '0 10px 30px rgba(0,0,0,0.8)'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                  >
                    SOLUTIONS
                  </motion.h1>
                </div>

                {/* Epic Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 1 }}
                  className="space-y-8"
                >
                  <div className="relative">
                    <p className="text-6xl lg:text-7xl text-gold font-black italic
                                 drop-shadow-[0_8px_25px_rgba(0,0,0,0.8)] tracking-wide mb-8">
                      "Where Legends Are Driven"
                    </p>
                    <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 blur-2xl -z-10" />
                  </div>
                  
                  <div className="w-32 h-2 bg-gradient-to-r from-gold via-gold-lighter to-gold-dark rounded-full mb-12
                                shadow-[0_0_30px_rgba(147,113,39,0.8)]" />
                  
                  <p className="text-3xl lg:text-4xl text-white/95 font-light leading-relaxed max-w-5xl
                               drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
                    Experience the absolute pinnacle of luxury transportation. Our bespoke fleet of ultra-premium vehicles,
                    elite chauffeurs, and concierge-level service redefine what it means to travel in New York City.
                  </p>
                </motion.div>
              </motion.div>

              {/* Epic Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="flex flex-col sm:flex-row gap-8"
              >
                <motion.button
                  onClick={handleBookNow}
                  className="group relative overflow-hidden px-16 py-8 rounded-3xl 
                            bg-gradient-to-r from-gold via-gold-lighter to-gold
                            hover:from-gold-lighter hover:via-gold hover:to-gold-dark
                            text-black font-black text-2xl tracking-wide
                            transform hover:scale-110 transition-all duration-500
                            shadow-[0_20px_60px_rgba(147,113,39,0.6),inset_0_1px_0_rgba(255,255,255,0.3)]
                            hover:shadow-[0_30px_80px_rgba(147,113,39,0.8)]
                            border-4 border-gold-lighter
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
                  whileHover={{ 
                    boxShadow: "0 30px 80px rgba(147,113,39,0.8), 0 0 100px rgba(255,215,0,0.5)",
                    scale: 1.1 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-4">
                    <Calendar className="w-8 h-8" />
                    <span>Reserve Your Journey</span>
                    <Zap className="w-8 h-8" />
                  </span>
                </motion.button>

                <motion.a
                  href="tel:+15163245483"
                  className="group flex items-center justify-center gap-6 px-16 py-8 
                            bg-transparent border-4 border-white/50 text-white font-black text-2xl
                            rounded-3xl backdrop-blur-2xl hover:border-gold/80 hover:bg-gold/10 
                            transition-all duration-500 hover:scale-110
                            shadow-[0_20px_50px_rgba(0,0,0,0.4)]
                            hover:shadow-[0_30px_70px_rgba(147,113,39,0.3)]"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 30px 70px rgba(147,113,39,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-8 h-8 group-hover:scale-125 transition-transform duration-300" />
                  <span>Call (516) 324-5483</span>
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                </motion.a>
              </motion.div>

              {/* Epic Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="flex flex-wrap gap-6"
              >
                {[
                  { icon: Shield, text: "Fully Licensed & Insured", color: "from-emerald-500 to-green-400" },
                  { icon: Clock, text: "24/7 Elite Concierge", color: "from-blue-500 to-cyan-400" },
                  { icon: Award, text: "World-Class Service", color: "from-purple-500 to-pink-400" },
                  { icon: Users, text: "Celebrity-Trusted", color: "from-orange-500 to-red-400" }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
                    className={`flex items-center gap-4 px-8 py-4 
                               bg-gradient-to-r ${item.color} bg-opacity-10 backdrop-blur-2xl 
                               rounded-2xl border-2 border-white/20
                               hover:scale-105 transition-all duration-300
                               shadow-[0_10px_30px_rgba(0,0,0,0.3)]`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                    <span className="text-white text-xl font-bold">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Sidebar - Epic Stats Dashboard */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8 sticky top-40"
              >
                
                {/* Epic Statistics */}
                <div className="bg-gradient-to-br from-black/70 via-black/50 to-black/70 
                               backdrop-blur-3xl rounded-[2rem] border-3 border-gold/40 p-12
                               shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_120px_rgba(147,113,39,0.2)]
                               hover:shadow-[0_40px_100px_rgba(147,113,39,0.4)]
                               transition-all duration-700">
                  <h3 className="text-gold text-4xl font-black mb-12 text-center tracking-wide
                                drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
                    Excellence by Numbers
                  </h3>
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { value: "10+", label: "Years of\nPerfection", icon: Crown },
                      { value: "5.0", label: "Perfect\nRating", icon: Star },
                      { value: "24/7", label: "Always\nAvailable", icon: Clock },
                      { value: "100%", label: "Client\nSatisfaction", icon: Diamond }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + index * 0.2, duration: 0.8 }}
                        className="text-center group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent 
                                      rounded-2xl blur-xl opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-500" />
                        <div className="relative p-6 rounded-2xl border border-gold/30 
                                      group-hover:border-gold/60 transition-all duration-300">
                          <stat.icon className="w-12 h-12 text-gold mx-auto mb-4 
                                              group-hover:scale-125 transition-transform duration-300" />
                          <div className="text-6xl font-black text-gold mb-4 
                                        group-hover:scale-110 transition-transform duration-300
                                        drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
                            {stat.value}
                          </div>
                          <div className="text-white/90 text-lg font-bold tracking-wider uppercase
                                        whitespace-pre-line">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Epic Service Coverage */}
                <div className="bg-gradient-to-br from-black/70 via-black/50 to-black/70 
                               backdrop-blur-3xl rounded-[2rem] border-3 border-gold/40 p-12
                               shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                  <h3 className="text-gold text-2xl font-black mb-8 text-center flex items-center justify-center gap-3">
                    <MapPin className="w-8 h-8" />
                    Elite Service Coverage
                  </h3>
                  <div className="space-y-6">
                    {[
                      { area: 'Manhattan', status: 'Premium Coverage', level: 100 },
                      { area: 'Brooklyn & Queens', status: 'Full Service', level: 95 },
                      { area: 'JFK • LGA • EWR', status: 'Airport Specialist', level: 100 },
                      { area: 'Westchester', status: 'Extended Service', level: 90 },
                      { area: 'Long Island', status: 'Luxury Routes', level: 85 },
                      { area: 'Hamptons', status: 'Seasonal Elite', level: 80 }
                    ].map((location, index) => (
                      <motion.div
                        key={location.area}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2 + index * 0.1, duration: 0.6 }}
                        className="relative"
                      >
                        <div className="flex items-center justify-between py-4 px-6 rounded-xl
                                      bg-gradient-to-r from-gold/10 to-transparent
                                      border border-gold/30 hover:border-gold/60
                                      transition-all duration-300 group">
                          <div className="flex items-center gap-4">
                            <div className="w-4 h-4 bg-gold rounded-full animate-pulse
                                          shadow-[0_0_15px_rgba(147,113,39,0.8)]" />
                            <span className="text-white/95 font-bold text-lg">{location.area}</span>
                          </div>
                          <span className="text-gold/90 text-sm font-semibold">{location.status}</span>
                        </div>
                        <div className="mt-2 h-1 bg-black/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-gold to-gold-lighter"
                            initial={{ width: 0 }}
                            animate={{ width: `${location.level}%` }}
                            transition={{ delay: 2.5 + index * 0.1, duration: 1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Epic Scroll Indicator */}
      <motion.button
        onClick={() => handleScrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30
                   flex flex-col items-center gap-4
                   text-white/80 hover:text-gold transition-all duration-500
                   group transform hover:scale-125"
        whileHover={{ scale: 1.25 }}
      >
        <span className="text-lg font-black tracking-widest uppercase opacity-80 group-hover:opacity-100">
          Discover Excellence
        </span>
        <div className="w-12 h-20 border-3 border-current rounded-full flex justify-center 
                      group-hover:border-gold transition-colors shadow-[0_0_30px_rgba(147,113,39,0.5)]">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-3 h-6 bg-current rounded-full mt-3 group-hover:bg-gold
                      shadow-[0_0_15px_rgba(147,113,39,0.8)]"
          />
        </div>
      </motion.button>

      {/* Epic Custom Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes animate-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: animate-spin-slow 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }
        .animate-float {
          animation: float 25s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
          25% { transform: translateY(-30px) translateX(15px) scale(1.1) rotate(5deg); }
          50% { transform: translateY(-15px) translateX(-10px) scale(0.9) rotate(-3deg); }
          75% { transform: translateY(-40px) translateX(20px) scale(1.15) rotate(7deg); }
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 10px rgba(147, 113, 39, 0.8));
        }
      `}</style>
    </div>
  );
};

export default CinematicHero;
