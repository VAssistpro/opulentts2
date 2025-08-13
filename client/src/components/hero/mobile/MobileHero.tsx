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

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 flex flex-col xs:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleBookNow}
              className="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark
                       text-black font-bold py-4 px-8 rounded-xl
                       shadow-[0_8px_32px_rgba(147,113,39,0.4)]
                       hover:shadow-[0_12px_40px_rgba(147,113,39,0.6)]
                       transform transition-all duration-300 ease-out
                       min-w-[180px] border border-gold/30 will-change-transform
                       hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 will-change-transform">
                Book Now
                <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            </button>

            <a
              href="tel:+15163245483"
              className="group relative overflow-hidden bg-transparent border-2 border-white/30
                       text-white font-bold py-4 px-8 rounded-xl
                       backdrop-blur-md hover:border-gold/50
                       transform hover:scale-105 transition-all duration-300
                       min-w-[180px] hover:bg-white/10"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Call Now
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" 
                     fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-white/70 text-sm font-medium mb-3 tracking-wider uppercase">
              Premium Chauffeur Services
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-white/80">
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                Manhattan
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                Brooklyn
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                Queens
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                JFK • LGA • EWR
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileHero;
