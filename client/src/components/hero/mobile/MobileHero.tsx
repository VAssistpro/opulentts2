import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Crown, Sparkles, Phone } from 'lucide-react';
import MobileHeroBackground from './MobileHeroBackground';
import { useNavigationContext } from '../../../hooks/useNavigationContext';
import { useEnhancedParallax } from '../../../hooks/useEnhancedParallax';
import LuxuryText from '../../ui/LuxuryText';
import PremiumButton from '../../ui/PremiumButton';

const MobileHero = () => {
  const { setActiveSection } = useNavigationContext();
  const { getParallaxStyle } = useEnhancedParallax({
    factor: 0.03,
    smooth: true,
    enabled: true
  });

  const handleBookNow = () => {
    setActiveSection('book');
    setTimeout(() => {
      document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <MobileHeroBackground />

      {/* Enhanced texture overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Premium leather texture */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            ...getParallaxStyle(0.5),
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23937127' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Luxury fabric weave pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            ...getParallaxStyle(0.3),
            backgroundImage: `repeating-linear-gradient(45deg, rgba(147,113,39,0.1) 0px, transparent 2px, transparent 4px, rgba(147,113,39,0.1) 6px)`,
          }}
          animate={{
            backgroundPosition: ['0px 0px', '8px 8px'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Diamond plate texture */}
        <motion.div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            ...getParallaxStyle(0.7),
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23937127' fill-opacity='0.05'%3E%3Cpath d='M20 20L10 10h20l-10 10zm0 0L30 30H10l10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-[90vw] sm:max-w-lg mx-auto"
          style={getParallaxStyle(1)}
        >
          {/* Enhanced Brand Title */}
          <div className="relative">
            {/* Decorative crown icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
              style={getParallaxStyle(1.5)}
            >
              <Crown className="w-8 h-8 text-gold drop-shadow-[0_2px_8px_rgba(147,113,39,0.6)]" />
            </motion.div>

            <LuxuryText
              variant="hero"
              delay={0.3}
              className="text-3xl xs:text-4xl sm:text-5xl text-center leading-[1.05]"
            >
              <span className="block mb-2">
                <span className="relative inline-block">
                  <span className="text-gold font-black tracking-[0.1em]
                               drop-shadow-[0_2px_6px_rgba(147,113,39,0.6)]
                               [text-shadow:_1px_1px_2px_rgba(0,0,0,0.8)]">
                    OPULENT
                  </span>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-gold/15 via-gold/20 to-gold/15 rounded-lg blur-sm"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [0.98, 1.02, 0.98],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>{' '}
                <span className="text-white font-black tracking-[0.1em]
                               drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
                               [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8),_0_0_20px_rgba(255,255,255,0.1)]">
                  TRANSPORT
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
            {/* Subtle outer glow */}
            <motion.div
              className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-gold/10 via-gold/15 to-gold/10 blur-xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main badge container */}
            <motion.div
              className="relative px-8 py-4 mx-auto max-w-fit rounded-2xl
                        bg-gradient-to-r from-black/60 via-black/70 to-black/60
                        border border-gold/40 backdrop-blur-lg
                        shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.1)]"
              whileHover={{
                scale: 1.02,
                y: -1,
                boxShadow: "0_12px_40px_rgba(147,113,39,0.3), inset_0_2px_4px_rgba(255,255,255,0.15)"
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
                  <Star className="w-5 h-5 text-gold fill-gold drop-shadow-[0_2px_6px_rgba(147,113,39,0.6)]" />
                </motion.div>

                <LuxuryText
                  variant="subtitle"
                  animated={false}
                  className="text-lg xs:text-xl font-bold tracking-wider text-white
                           drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
                           [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)]"
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
                  <Star className="w-5 h-5 text-gold fill-gold drop-shadow-[0_2px_6px_rgba(147,113,39,0.6)]" />
                </motion.div>
              </div>

              {/* Subtle animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-gold/30"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.99, 1.01, 0.99],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Subtle shine effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 3,
                }}
              />
            </motion.div>

            {/* Enhanced floating sparkles with parallax */}
            <motion.div
              className="absolute -top-2 -left-2 w-2 h-2 bg-gold rounded-full"
              style={getParallaxStyle(2)}
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
              style={getParallaxStyle(1.8)}
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
              style={getParallaxStyle(2.2)}
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

            {/* Additional depth sparkles */}
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={`depth-sparkle-${i}`}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  ...getParallaxStyle(1.5 + i * 0.3),
                  left: `${10 + i * 20}%`,
                  top: `${5 + i * 15}%`,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 5 + i * 0.8,
                }}
              />
            ))}
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

          {/* Enhanced Service Areas - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.0, ease: "easeOut" }}
            className="mt-16 text-center px-4"
          >
            <LuxuryText
              variant="caption"
              animated={false}
              className="text-lg font-black mb-8 tracking-[0.2em] uppercase text-center
                       bg-gradient-to-r from-white/80 via-white/100 to-white/80 bg-clip-text text-transparent
                       drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              ✦ PREMIUM CHAUFFEUR SERVICES ✦
            </LuxuryText>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 max-w-md mx-auto">
              {[
                { name: 'Manhattan', icon: '🏙️' },
                { name: 'Brooklyn', icon: '🌉' },
                { name: 'Queens', icon: '🏘️' },
                { name: 'JFK • LGA • EWR', icon: '✈️' }
              ].map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.15, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-4 rounded-2xl font-bold text-white/95
                           bg-gradient-to-r from-gold/30 via-gold/25 to-gold/20
                           border-2 border-gold/50 backdrop-blur-lg
                           shadow-[0_6px_24px_rgba(147,113,39,0.3)]
                           hover:border-gold/70 hover:bg-gradient-to-r hover:from-gold/40 hover:to-gold/30
                           hover:shadow-[0_8px_32px_rgba(147,113,39,0.4)]
                           transform transition-all duration-300 cursor-pointer
                           touch-manipulation select-none
                           min-h-[70px] flex items-center justify-center
                           focus:outline-none focus:ring-4 focus:ring-gold/40"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-2xl">{area.icon}</span>
                    <span className="text-base font-black tracking-wide">
                      {area.name}
                    </span>
                  </div>

                  {/* Enhanced glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gold/30 opacity-0"
                    whileHover={{ opacity: 0.4 }}
                    animate={{
                      opacity: [0, 0.2, 0],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8,
                    }}
                  />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0"
                    whileHover={{ opacity: 1 }}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 3,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Additional service info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="mt-8 space-y-3"
            >
              <div className="flex items-center justify-center gap-2 text-gold/90">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-sm font-semibold tracking-wide">
                  Real-time GPS tracking & Flight monitoring
                </span>
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              </div>

              <div className="text-white/80 text-sm font-medium">
                Professional chauffeurs • Luxury fleet • 24/7 availability
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileHero;
