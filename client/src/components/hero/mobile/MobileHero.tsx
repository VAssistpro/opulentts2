import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Crown, Sparkles, Phone } from 'lucide-react';
import MobileHeroBackground from './MobileHeroBackground';
import { useNavigationContext } from '../../../hooks/useNavigationContext';
import LuxuryText from '../../ui/LuxuryText';
import PremiumButton from '../../ui/PremiumButton';

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
          {/* Enhanced Brand Title */}
          <div className="relative">
            {/* Decorative crown icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            >
              <Crown className="w-8 h-8 text-gold drop-shadow-[0_2px_8px_rgba(147,113,39,0.6)]" />
            </motion.div>

            <LuxuryText
              variant="hero"
              delay={0.3}
              className="text-2xl xs:text-3xl sm:text-4xl text-center leading-[1.1]"
            >
              <span className="block mb-1">
                OPULENT{' '}
                <span className="relative inline-block">
                  <span className="text-gold bg-gradient-to-r from-gold via-gold-lighter to-gold bg-clip-text text-transparent
                               drop-shadow-[0_2px_8px_rgba(147,113,39,0.8)]">
                    TRANSPORT
                  </span>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-transparent rounded-lg blur-lg"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </span>
              <span className="block text-xl xs:text-2xl sm:text-3xl font-semibold tracking-[0.2em] mt-2">
                SOLUTIONS
              </span>
            </LuxuryText>
          </div>

          {/* Enhanced Decorative Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
            className="relative mx-auto my-8 flex items-center justify-center"
          >
            <div className="flex items-center space-x-3">
              <Sparkles className="w-4 h-4 text-gold/80" />
              <div className="relative">
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent
                             shadow-[0_0_15px_rgba(147,113,39,0.7)]" />
                <motion.div
                  className="absolute inset-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-lighter to-transparent"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scaleX: [0.8, 1.1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <Sparkles className="w-4 h-4 text-gold/80" />
            </div>
          </motion.div>

          {/* Premium Service Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-6 relative"
          >
            <div className="relative px-6 py-3 mx-auto max-w-fit rounded-2xl
                          bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20
                          border border-gold/40 backdrop-blur-md
                          shadow-[0_8px_32px_rgba(147,113,39,0.3)]"
            >
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-5 h-5 text-gold fill-gold" />
                <LuxuryText
                  variant="subtitle"
                  animated={false}
                  className="text-lg xs:text-xl font-bold tracking-wider bg-gradient-to-r from-gold via-gold-lighter to-gold bg-clip-text text-transparent"
                >
                  NEW YORK'S PREMIER LUXURY SERVICE
                </LuxuryText>
                <Star className="w-5 h-5 text-gold fill-gold" />
              </div>

              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-gold/60"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <LuxuryText
            variant="body"
            delay={1.1}
            className="mt-6 text-base xs:text-lg leading-relaxed text-center max-w-md mx-auto"
          >
            <span className="block mb-2 text-white/95 font-medium">
              Experience unparalleled sophistication
            </span>
            <span className="text-gold/90 font-light italic">
              — where luxury meets excellence —
            </span>
          </LuxuryText>

          {/* Enhanced Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-10 flex flex-col xs:flex-row gap-5 justify-center items-center"
          >
            <PremiumButton
              variant="primary"
              size="lg"
              onClick={handleBookNow}
              icon={<ArrowRight className="w-5 h-5" />}
              className="transform hover:scale-[1.03] transition-all duration-300"
            >
              Book Now
            </PremiumButton>

            <PremiumButton
              variant="secondary"
              size="lg"
              href="tel:+15163245483"
              icon={<Phone className="w-5 h-5" />}
              className="transform hover:scale-[1.03] transition-all duration-300"
            >
              Call Now
            </PremiumButton>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <LuxuryText
              variant="caption"
              animated={false}
              className="text-sm font-bold mb-4 tracking-[0.15em] uppercase text-center
                       bg-gradient-to-r from-white/70 via-white/90 to-white/70 bg-clip-text text-transparent"
            >
              ✦ Premium Chauffeur Services ✦
            </LuxuryText>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {['Manhattan', 'Brooklyn', 'Queens', 'JFK • LGA • EWR'].map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                  className="relative px-5 py-2.5 rounded-full font-medium text-white/95
                           bg-gradient-to-r from-gold/25 via-gold/20 to-gold/15
                           border border-gold/40 backdrop-blur-sm
                           shadow-[0_4px_16px_rgba(147,113,39,0.2)]
                           hover:border-gold/60 hover:bg-gradient-to-r hover:from-gold/35 hover:to-gold/25
                           transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {area}

                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gold/20 opacity-0 hover:opacity-100"
                    animate={{
                      opacity: [0, 0.3, 0],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileHero;
