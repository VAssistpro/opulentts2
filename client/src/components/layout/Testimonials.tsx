import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SocialIcons from './SocialIcons';

const TESTIMONIALS = [
  { 
    text: "Absolutely flawless service. From the moment they arrived to the final destination, everything was executed with precision and elegance.", 
    author: "James Wilson", 
    role: "CEO, Manhattan Financial Group", 
    rating: 5,
    location: "Manhattan to JFK Airport"
  },
  { 
    text: "I've used many car services, but Opulent Transport is in a league of their own. Professional, punctual, and luxurious.", 
    author: "Sarah Mitchell", 
    role: "Senior Event Coordinator", 
    rating: 5,
    location: "Brooklyn Corporate Event"
  },
  { 
    text: "The attention to detail and level of service exceeded my expectations. This is how luxury transportation should be done.", 
    author: "Michael Brown", 
    role: "Investment Director", 
    rating: 5,
    location: "Newark Airport Transfer"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h3 className="text-lg font-semibold text-white mb-2">
          Client Experiences
        </h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
      </motion.div>

      {/* Testimonial Card */}
      <div className="relative h-[280px] rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -50, rotateY: -10 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/80 
                       backdrop-blur-xl rounded-2xl border border-gold/20 p-6
                       shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                       hover:border-gold/40 hover:shadow-[0_12px_40px_rgba(147,113,39,0.2)]
                       transition-all duration-500"
          >
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 text-gold/30">
              <Quote size={24} />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Star className="w-4 h-4 text-gold fill-gold" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/90 text-sm leading-relaxed mb-16 italic font-light"
            >
              "{TESTIMONIALS[activeIndex].text}"
            </motion.p>

            {/* Author Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-6 left-6 right-16"
            >
              <div>
                <h4 className="text-white font-semibold text-sm">
                  {TESTIMONIALS[activeIndex].author}
                </h4>
                <p className="text-gold/80 text-xs font-medium">
                  {TESTIMONIALS[activeIndex].role}
                </p>
                <p className="text-white/60 text-xs mt-1">
                  {TESTIMONIALS[activeIndex].location}
                </p>
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-6 bg-gold shadow-[0_0_8px_rgba(147,113,39,0.6)]'
                      : 'bg-gold/30 hover:bg-gold/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 flex justify-center"
      >
        <SocialIcons />
      </motion.div>
    </div>
  );
};

export default Testimonials;