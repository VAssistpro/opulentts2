import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, User, MapPin } from 'lucide-react';

const TESTIMONIALS = [
  {
    text: "Exceptional service that truly understands the meaning of luxury. Every detail was perfect, from the vehicle to the driver's professionalism.",
    author: "Dr. Emily Chen",
    role: "Director of Operations",
    rating: 5,
    location: "LaGuardia Business Trip",
    id: "REV_003"
  },
  {
    text: "Opulent has completely changed my perception of private transport. Impeccable attention to detail, courteous drivers, and truly luxurious vehicles.",
    author: "Ava Richardson",
    role: "Venture Capitalist",
    rating: 5,
    location: "Manhattan Executive Travel",
    id: "REV_002"
  },
  {
    text: "Professional, punctual, and absolutely pristine vehicles. This is how luxury transportation should be done. Highly recommend for any important occasion.",
    author: "Marcus Thompson",
    role: "Investment Banker",
    rating: 5,
    location: "JFK Airport Transfer",
    id: "REV_001"
  },
  {
    text: "From booking to arrival, everything was seamless. The chauffeur was courteous and the vehicle was immaculate. Will definitely use again.",
    author: "Sarah Williams",
    role: "Corporate Executive",
    rating: 5,
    location: "Brooklyn Corporate Event",
    id: "REV_004"
  }
];

const LuxuryTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setIsAutoPlay(false);
  };

  return (
    <div id="testimonials" className="relative w-full py-20 px-4">
      
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-900 opacity-90 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,113,39,0.1)_0%,transparent_50%)] -z-10" />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Client <span className="text-gold">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-8"></div>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Hear from our distinguished clientele about their exceptional experiences 
            with Opulent Transport Solutions.
          </p>
        </motion.div>

        {/* Main Testimonials Display */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Testimonial Cards Container */}
          <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-gold/20 p-8 lg:p-12 min-h-[400px]">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center h-full"
              >
                
                {/* Left Side - Testimonial Content */}
                <div className="flex-1 space-y-6">
                  
                  {/* Rating */}
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="text-gold font-semibold">5.0 Rating</span>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-12 h-12 text-gold/30 absolute -top-2 -left-2" />
                    <blockquote className="text-xl lg:text-2xl text-white leading-relaxed pl-8 font-light">
                      {TESTIMONIALS[activeIndex].text}
                    </blockquote>
                  </div>

                  {/* Author Info */}
                  <div className="space-y-3 pt-6 border-t border-gold/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {TESTIMONIALS[activeIndex].author}
                        </h4>
                        <p className="text-gold/80">{TESTIMONIALS[activeIndex].role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <MapPin className="w-4 h-4 text-gold/60" />
                      <span>{TESTIMONIALS[activeIndex].location}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Service Stats */}
                <div className="w-full lg:w-80 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-6 bg-black/30 backdrop-blur-xl rounded-xl border border-gold/20">
                      <div className="text-3xl font-bold text-gold mb-2">500+</div>
                      <div className="text-white/80 text-sm">Happy Clients</div>
                    </div>
                    <div className="text-center p-6 bg-black/30 backdrop-blur-xl rounded-xl border border-gold/20">
                      <div className="text-3xl font-bold text-gold mb-2">5.0★</div>
                      <div className="text-white/80 text-sm">Average Rating</div>
                    </div>
                    <div className="text-center p-6 bg-black/30 backdrop-blur-xl rounded-xl border border-gold/20">
                      <div className="text-3xl font-bold text-gold mb-2">100%</div>
                      <div className="text-white/80 text-sm">Satisfaction</div>
                    </div>
                    <div className="text-center p-6 bg-black/30 backdrop-blur-xl rounded-xl border border-gold/20">
                      <div className="text-3xl font-bold text-gold mb-2">24/7</div>
                      <div className="text-white/80 text-sm">Available</div>
                    </div>
                  </div>

                  {/* Review ID */}
                  <div className="text-center p-4 bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl border border-gold/20">
                    <span className="text-white/70 text-sm">Review ID: {TESTIMONIALS[activeIndex].id}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-gold hover:text-black 
                       text-white rounded-full flex items-center justify-center transition-all duration-300 
                       hover:scale-110 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-gold hover:text-black 
                       text-white rounded-full flex items-center justify-center transition-all duration-300 
                       hover:scale-110 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => { setActiveIndex(index); setIsAutoPlay(false); }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-gold shadow-lg shadow-gold/40 scale-125'
                    : 'bg-white/20 hover:bg-white/40 hover:scale-110'
                }`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          {isAutoPlay && (
            <div className="text-center mt-4">
              <span className="text-white/50 text-sm">Auto-play enabled • Click arrows to pause</span>
            </div>
          )}
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-lg text-white/90 mb-6">
            Ready to join our satisfied clientele?
          </p>
          <button
            onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black font-semibold 
                     rounded-xl hover:bg-gold-dark transition-all duration-300 hover:scale-105"
          >
            Book Your Luxury Experience
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LuxuryTestimonials;
