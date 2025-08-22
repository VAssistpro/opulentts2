import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Phone, Shield, Award, Clock, Star, MapPin } from 'lucide-react';
import { useDesktopNavigation } from '../../../contexts/DesktopNavigationContext';

const ImpressiveHero = () => {
  const { setActiveSection } = useDesktopNavigation();

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
      {/* Enhanced Background Video with Multiple Overlays */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        >
          <source src="http://opulentts.com/bgvideo/otsbgvido2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Premium Multi-Layer Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.7)_100%)] z-10" />
        
        {/* Atmospheric Light Effects */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-radial from-gold/15 to-transparent rounded-full blur-3xl animate-pulse-slow opacity-70" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-blue-400/10 to-transparent rounded-full blur-3xl animate-float opacity-60" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-radial from-purple-400/8 to-transparent rounded-full blur-2xl animate-pulse-slow opacity-50" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start min-h-screen max-w-[1600px] mx-auto pt-32 pb-20">

          {/* Left Content - Enhanced Main Hero Text */}
          <div className="lg:col-span-2 text-left">

            {/* Luxury Service Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center px-8 py-4 rounded-full mb-12
                         bg-gradient-to-r from-gold/25 via-gold/15 to-gold/25 
                         backdrop-blur-2xl border-2 border-gold/50 
                         shadow-[0_0_40px_rgba(147,113,39,0.3)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                <Award className="w-5 h-5 text-gold" />
                <span className="text-gold text-lg font-bold tracking-wider uppercase">
                  New York's Premier Luxury Service
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16"
            >
              <h1 className="leading-[0.85] mb-8">
                <motion.span 
                  className="block text-white font-bold drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]"
                  style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  OPULENT
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-gold-lighter via-gold to-gold-dark 
                             bg-clip-text text-transparent font-bold"
                  style={{ 
                    fontSize: 'clamp(2.5rem, 8vw, 6.5rem)',
                    textShadow: '0 0 50px rgba(147,113,39,0.5)'
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  TRANSPORT
                </motion.span>
                <motion.span 
                  className="block text-white/95 font-light mt-4"
                  style={{ 
                    fontSize: 'clamp(1.75rem, 6vw, 4.5rem)', 
                    letterSpacing: '0.15em' 
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  SOLUTIONS
                </motion.span>
              </h1>

              {/* Luxury Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <p className="text-4xl lg:text-5xl text-gold font-bold mb-6
                             drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] tracking-wide">
                  Where Excellence Meets Luxury
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-gold via-gold-lighter to-gold-dark rounded-full mb-8"></div>
                <p className="text-xl lg:text-2xl text-white/95 font-light leading-relaxed max-w-4xl
                             drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Experience unparalleled sophistication with our curated fleet of ultra-premium vehicles,
                  elite professional chauffeurs, and white-glove concierge service that defines the gold standard
                  for luxury transportation throughout the New York metropolitan area.
                </p>
              </motion.div>
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 mb-16"
            >
              <button
                onClick={handleBookNow}
                className="group relative overflow-hidden px-12 py-5 rounded-2xl 
                          bg-gradient-to-r from-gold via-gold-lighter to-gold
                          hover:from-gold-lighter hover:via-gold hover:to-gold-dark
                          text-black font-bold text-xl tracking-wide
                          transform hover:scale-105 transition-all duration-300
                          shadow-[0_10px_40px_rgba(147,113,39,0.4)] hover:shadow-[0_15px_50px_rgba(147,113,39,0.6)]
                          border-2 border-gold-lighter"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <span>Book Your Journey</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <a
                href="tel:+15163245483"
                className="group flex items-center justify-center gap-4 px-12 py-5 
                          bg-transparent border-3 border-white/40 text-white font-bold text-xl
                          rounded-2xl backdrop-blur-xl hover:border-gold/60 hover:bg-white/10 
                          transition-all duration-300 hover:scale-105
                          shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              >
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Call (516) 324-5483</span>
              </a>
            </motion.div>

            {/* Trust & Luxury Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex flex-wrap items-center gap-8 text-white/90"
            >
              <div className="flex items-center gap-3 px-6 py-3 bg-black/30 backdrop-blur-xl rounded-xl border border-white/20">
                <Shield className="w-6 h-6 text-gold" />
                <span className="text-lg font-semibold">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-black/30 backdrop-blur-xl rounded-xl border border-white/20">
                <Clock className="w-6 h-6 text-gold" />
                <span className="text-lg font-semibold">24/7 Concierge Service</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-black/30 backdrop-blur-xl rounded-xl border border-white/20">
                <Award className="w-6 h-6 text-gold" />
                <span className="text-lg font-semibold">Elite Professional Chauffeurs</span>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar - Enhanced Statistics & Features */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8 sticky top-40"
            >
              
              {/* Premium Statistics */}
              <div className="bg-black/50 backdrop-blur-2xl rounded-3xl border-2 border-gold/30 p-8
                             shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(147,113,39,0.2)]
                             transition-all duration-500">
                <h3 className="text-gold text-2xl font-bold mb-8 text-center tracking-wide">
                  Excellence by Numbers
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group">
                    <div className="text-5xl font-bold text-gold mb-3 group-hover:scale-110 transition-transform">
                      10+
                    </div>
                    <div className="text-white/80 text-sm font-medium tracking-wider uppercase">
                      Years of<br />Excellence
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-5xl font-bold text-gold mb-3 group-hover:scale-110 transition-transform flex items-center justify-center gap-1">
                      5.0<Star className="w-6 h-6 fill-current" />
                    </div>
                    <div className="text-white/80 text-sm font-medium tracking-wider uppercase">
                      Perfect<br />Rating
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-5xl font-bold text-gold mb-3 group-hover:scale-110 transition-transform">
                      24/7
                    </div>
                    <div className="text-white/80 text-sm font-medium tracking-wider uppercase">
                      Always<br />Available
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-5xl font-bold text-gold mb-3 group-hover:scale-110 transition-transform">
                      100%
                    </div>
                    <div className="text-white/80 text-sm font-medium tracking-wider uppercase">
                      Client<br />Satisfaction
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Coverage Map */}
              <div className="bg-black/50 backdrop-blur-2xl rounded-3xl border-2 border-gold/30 p-8
                             shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <h3 className="text-gold text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Premium Service Areas
                </h3>
                <div className="space-y-4">
                  {[
                    { area: 'Manhattan', status: 'Premium Coverage' },
                    { area: 'Brooklyn & Queens', status: 'Full Service' },
                    { area: 'Bronx & Staten Island', status: 'Available' },
                    { area: 'JFK • LGA • EWR', status: 'Airport Specialist' },
                    { area: 'Westchester County', status: 'Extended Service' },
                    { area: 'Long Island', status: 'Luxury Routes' }
                  ].map((location, index) => (
                    <div key={location.area} className="flex items-center justify-between py-2 border-b border-gold/20 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                        <span className="text-white/90 font-medium">{location.area}</span>
                      </div>
                      <span className="text-gold/80 text-sm">{location.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Card */}
              <div className="bg-gradient-to-br from-gold/20 via-gold/10 to-gold/20 
                             backdrop-blur-2xl rounded-3xl border-2 border-gold/40 p-8
                             shadow-[0_20px_50px_rgba(147,113,39,0.3)]">
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold mb-4">Ready for Luxury?</h3>
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    Join NYC's elite who trust Opulent Transport for their most important journeys.
                    Experience the difference that true luxury makes.
                  </p>
                  <div className="space-y-2 text-white/80 text-xs">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Instant booking confirmation</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>No hidden fees • Transparent pricing</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Professional chauffeurs • Premium fleet</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.button
        onClick={() => handleScrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30
                   flex flex-col items-center gap-3
                   text-white/80 hover:text-gold transition-all duration-300
                   group transform hover:scale-110"
        aria-label="Discover more about our services"
      >
        <span className="text-sm font-medium tracking-widest uppercase opacity-80 group-hover:opacity-100">
          Discover More
        </span>
        <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center group-hover:border-gold transition-colors">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-4 bg-current rounded-full mt-2 group-hover:bg-gold"
          />
        </div>
      </motion.button>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.05); }
          50% { transform: translateY(-10px) translateX(-5px) scale(0.95); }
          75% { transform: translateY(-30px) translateX(15px) scale(1.1); }
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default ImpressiveHero;
