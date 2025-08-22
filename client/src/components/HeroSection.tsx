import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Phone, MapPin, Clock, Star, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const quickStats = [
    { icon: <Clock className="w-5 h-5" />, label: "24/7 Service", value: "Always Available" },
    { icon: <Star className="w-5 h-5" />, label: "5-Star Rating", value: "Premium Quality" },
    { icon: <MapPin className="w-5 h-5" />, label: "NYC Coverage", value: "All Boroughs" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 113, 39, 0.15) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating Decorative Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 blur-xl animate-pulse-slow"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gradient-to-l from-yellow-500/8 to-transparent blur-2xl animate-float"
      />

      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Enhanced Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Enhanced Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8
                       tracking-tight leading-[0.9]"
          >
            <motion.span 
              className="block bg-gradient-to-r from-white via-gray-100 to-white 
                         bg-clip-text text-transparent font-playfair"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              OPULENT
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                         bg-clip-text text-transparent font-playfair relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              TRANSPORT
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 blur-xl -z-10"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-white via-gray-100 to-white 
                         bg-clip-text text-transparent font-playfair"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              SOLUTIONS
            </motion.span>
          </motion.h1>

          {/* Elegant Divider with Animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex items-center justify-center my-10"
          >
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-24"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="mx-6 text-yellow-500 text-2xl"
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              ✦
            </motion.div>
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-24"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 
                       max-w-5xl mx-auto leading-relaxed font-light mb-10"
          >
            Experience unparalleled luxury with{' '}
            <motion.span 
              className="font-semibold text-yellow-400 relative"
              whileHover={{ scale: 1.05 }}
            >
              Opulent Transport Solutions
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              />
            </motion.span>
            {' – '}where sophistication meets reliability across Manhattan, Brooklyn, Queens, 
            and all major airports including JFK, LGA, and Newark.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 
                           rounded-xl px-6 py-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-yellow-500">{stat.icon}</div>
                <div>
                  <div className="text-white font-semibold text-sm">{stat.label}</div>
                  <div className="text-white/70 text-xs">{stat.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center space-x-3 bg-gradient-to-r from-yellow-500 to-yellow-600 
                         text-black px-10 py-5 rounded-xl font-bold text-lg 
                         shadow-[0_10px_40px_rgba(147,113,39,0.3)] hover:shadow-[0_20px_60px_rgba(147,113,39,0.4)]
                         transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300"
              />
              <Calendar className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Reserve Your Journey</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center space-x-3 bg-white/10 backdrop-blur-xl text-white 
                         px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/20 
                         hover:bg-white/20 hover:border-white/40 transition-all duration-300
                         shadow-[0_10px_40px_rgba(255,255,255,0.1)]"
            >
              <Phone className="w-6 h-6" />
              <span>Call (516) 324-5483</span>
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>

          {/* Service Highlights with better spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-white/70"
          >
            {[
              "24/7 Availability",
              "Professional Chauffeurs", 
              "Luxury Fleet",
              "Airport Specialists"
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-white/5 
                           backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <motion.span 
                  className="text-yellow-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  ●
                </motion.span>
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="bg-black/60 backdrop-blur-2xl border-t border-white/20 rounded-t-3xl py-12 mt-20"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <motion.div 
                className="text-white/60"
                whileHover={{ scale: 1.02 }}
              >
                © 2024 Opulent Transport Solutions. All rights reserved.
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://opulentts.com/bgvideo/otsnobg.png"
                  alt="Opulent"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-yellow-500 font-bold text-lg">Opulent Transport</span>
              </motion.div>
              <motion.div 
                className="text-white/60 font-semibold"
                whileHover={{ scale: 1.02, color: "#f59e0b" }}
              >
                (516) 324-5483
              </motion.div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default HeroSection;