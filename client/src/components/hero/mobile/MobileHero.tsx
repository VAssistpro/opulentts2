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
              className="text-3xl xs:text-4xl sm:text-5xl text-center leading-[1.05]"
            >
              <span className="block mb-2">
                <span className="text-white font-black tracking-[0.1em]
                               drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
                               [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8),_0_0_20px_rgba(255,255,255,0.1)]">
                  OPULENT
                </span>{' '}
                <span className="relative inline-block">
                  <span className="text-gold bg-gradient-to-r from-gold via-gold-lighter to-gold bg-clip-text text-transparent
                               font-black tracking-[0.1em]
                               drop-shadow-[0_4px_16px_rgba(147,113,39,1.0)]
                               [text-shadow:_3px_3px_6px_rgba(0,0,0,0.9),_0_0_30px_rgba(147,113,39,0.8)]">
                    TRANSPORT
                  </span>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-gold/30 via-gold-lighter/40 to-gold/30 rounded-xl blur-xl"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-lg blur-sm"
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </span>
              </span>
              <span className="block text-2xl xs:text-3xl sm:text-4xl font-bold tracking-[0.25em] mt-3
                             text-white/95 drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]
                             [text-shadow:_2px_2px_4px_rgba(0,0,0,0.7),_0_0_15px_rgba(255,255,255,0.1)]">
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

          {/* Enhanced Premium Service Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: 45 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: "easeOut" }}
            className="mt-8 relative"
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-gold/20 via-gold-lighter/30 to-gold/20 blur-2xl"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.9, 1.1, 0.9],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main badge container */}
            <motion.div
              className="relative px-8 py-4 mx-auto max-w-fit rounded-3xl
                        bg-gradient-to-r from-gold/30 via-gold-lighter/40 to-gold/30
                        border-2 border-gold/60 backdrop-blur-lg
                        shadow-[0_12px_48px_rgba(147,113,39,0.5),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)]"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0_16px_64px_rgba(147,113,39,0.7), inset_0_3px_6px_rgba(255,255,255,0.4), inset_0_-3px_6px_rgba(0,0,0,0.3)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center space-x-3">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Star className="w-6 h-6 text-gold fill-gold drop-shadow-[0_2px_8px_rgba(147,113,39,0.8)]" />
                </motion.div>

                <LuxuryText
                  variant="subtitle"
                  animated={false}
                  className="text-xl xs:text-2xl font-black tracking-wider bg-gradient-to-r from-gold via-gold-lighter to-gold bg-clip-text text-transparent
                           drop-shadow-[0_3px_12px_rgba(147,113,39,1.0)]
                           [text-shadow:_2px_2px_4px_rgba(0,0,0,0.9)]"
                >
                  NEW YORK'S PREMIER LUXURY SERVICE
                </LuxuryText>

                <motion.div
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Star className="w-6 h-6 text-gold fill-gold drop-shadow-[0_2px_8px_rgba(147,113,39,0.8)]" />
                </motion.div>
              </div>

              {/* Multiple animated border effects */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-gold/80"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-3xl border border-white/40"
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.96, 1.04, 0.96],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                }}
              />
            </motion.div>

            {/* Additional floating sparkles */}
            <motion.div
              className="absolute -top-2 -left-2 w-2 h-2 bg-gold rounded-full"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />

            <motion.div
              className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-gold-lighter rounded-full"
              animate={{
                scale: [0, 1.8, 0],
                opacity: [0, 1, 0],
                rotate: [0, -180],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            />

            <motion.div
              className="absolute -bottom-2 right-4 w-1 h-1 bg-gold rounded-full"
              animate={{
                scale: [0, 2, 0],
                opacity: [0, 1, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
            />
          </motion.div>

          <LuxuryText
            variant="body"
            delay={1.1}
            className="mt-6 text-base xs:text-lg leading-relaxed text-center max-w-md mx-auto"
          >
            <span className="block mb-3 text-white font-semibold text-lg xs:text-xl
                           drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                           [text-shadow:_1px_1px_3px_rgba(0,0,0,0.7)]">
              Experience unparalleled sophistication
            </span>
            <span className="text-gold font-medium italic text-base xs:text-lg
                           drop-shadow-[0_2px_6px_rgba(147,113,39,0.7)]
                           [text-shadow:_1px_1px_2px_rgba(0,0,0,0.6)]">
              — where luxury meets excellence —
            </span>
          </LuxuryText>

          {/* Enhanced Call to Action Buttons - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1.0, ease: "easeOut" }}
            className="mt-12 flex flex-col gap-6 justify-center items-center px-4"
          >
            <PremiumButton
              variant="primary"
              size="lg"
              onClick={handleBookNow}
              icon={<ArrowRight className="w-6 h-6" />}
              className="w-full max-w-sm min-h-[60px] text-xl font-black
                       transform hover:scale-[1.02] active:scale-[0.98]
                       transition-all duration-300 ease-out
                       touch-manipulation select-none
                       focus:outline-none focus:ring-4 focus:ring-gold/50
                       shadow-[0_8px_32px_rgba(147,113,39,0.4)]
                       hover:shadow-[0_12px_48px_rgba(147,113,39,0.6)]"
            >
              <span className="flex items-center justify-center gap-3">
                Reserve Now
                <motion.span
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.span>
              </span>
            </PremiumButton>

            <PremiumButton
              variant="secondary"
              size="lg"
              href="tel:+15163245483"
              icon={<Phone className="w-6 h-6" />}
              className="w-full max-w-sm min-h-[60px] text-xl font-black
                       transform hover:scale-[1.02] active:scale-[0.98]
                       transition-all duration-300 ease-out
                       touch-manipulation select-none
                       focus:outline-none focus:ring-4 focus:ring-white/30
                       shadow-[0_6px_24px_rgba(0,0,0,0.3)]
                       hover:shadow-[0_10px_40px_rgba(147,113,39,0.2)]"
            >
              <span className="flex items-center justify-center gap-3">
                <motion.span
                  animate={{
                    rotate: [0, 15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Phone className="w-6 h-6" />
                </motion.span>
                Call Immediately
              </span>
            </PremiumButton>

            {/* Quick contact info for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="mt-4 text-center"
            >
              <p className="text-white/80 text-sm font-medium mb-2">
                24/7 Premium Service Available
              </p>
              <a
                href="tel:+15163245483"
                className="inline-flex items-center gap-2 text-gold font-bold text-lg
                         hover:text-gold-lighter transition-colors duration-300
                         touch-manipulation active:scale-95"
              >
                <Phone className="w-5 h-5" />
                (516) 324-5483
              </a>
            </motion.div>
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
