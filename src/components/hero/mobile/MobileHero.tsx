import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MobileHeroBackground from './MobileHeroBackground';
import { useNavigationContext } from '../../../hooks/useNavigationContext';

const MobileHero = () => {
  const { setActiveSection } = useNavigationContext();

  const handleBookNow = () => {
    setActiveSection('book');
    setTimeout(() => {
      document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <MobileHeroBackground />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-[90vw] sm:max-w-lg mx-auto"
        >
          <h1 className="font-playfair text-white">
            <div className="block space-y-2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block text-4xl xs:text-5xl sm:text-6xl font-bold tracking-wide leading-tight
                         drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              >
                New York's Premier
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block text-4xl xs:text-5xl sm:text-6xl font-bold tracking-wide leading-tight
                         drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              >
                Chauffeur Service
              </motion.span>
            </div>
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="w-24 h-0.5 mx-auto my-8 bg-gradient-to-r from-transparent via-gold to-transparent
                     shadow-[0_0_10px_rgba(147,113,39,0.5)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 text-lg xs:text-xl sm:text-2xl text-white/90 font-medium leading-relaxed
                     tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Travel in comfort and style with{' '}
            <span className="text-gold font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Opulent Transport Solutions
            </span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookNow}
            className="mt-12 relative group overflow-hidden
                     px-8 py-4 rounded-full
                     bg-black/40 backdrop-blur-md
                     border border-gold/30
                     text-white font-bold text-lg tracking-wider
                     flex items-center gap-3 mx-auto
                     transition-all duration-300
                     hover:border-gold/50
                     hover:bg-black/50
                     shadow-[0_0_20px_rgba(147,113,39,0.3)]
                     hover:shadow-[0_0_30px_rgba(147,113,39,0.5)]"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Content */}
            <span className="relative z-10">Book Your Journey</span>
            <ArrowRight className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileHero;