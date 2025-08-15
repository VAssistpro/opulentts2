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
        <h3 className="text-lg font-semibold text-white mb-0.5">
          Client Experiences
        </h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
      </motion.div>
      {/* Testimonial Card */}
      <div className="relative h-[350px] rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -50, rotateY: -10 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-xl rounded-2xl border border-gold/20 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-gold/40 hover:shadow-[0_12px_40px_rgba(147,113,39,0.2)] transition-all duration-500 flex flex-col pl-[4px] pr-[4px] pt-[6px] pb-[12px] text-center mt-[1px] mb-[4px] text-[15px]"
          >
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 text-gold/30">
              <Quote size={24} />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4 pl-[5px] pr-[5px] ml-[5px] mr-[5px]">
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

            {/* Testimonial Text - Flex grow to take available space */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/90 text-sm leading-relaxed italic font-light flex-grow px-1 mb-4"
            >
              "{TESTIMONIALS[activeIndex].text}"
            </motion.p>

            {/* Bottom Section - Fixed at bottom */}
            <div className="flex justify-between items-end pl-[4px] pr-[4px] pt-[4px] pb-[4px] ml-[2px] mr-[2px] mt-[0px] mb-[2px] text-left">
              {/* Author Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex-1 mr-4"
              >
                <h4 className="text-white font-semibold text-sm">
                  {TESTIMONIALS[activeIndex].author}
                </h4>
                <p className="text-gold/80 text-xs font-medium">
                  {TESTIMONIALS[activeIndex].role}
                </p>
                <p className="text-white/60 text-xs mt-1">
                  {TESTIMONIALS[activeIndex].location}
                </p>
              </motion.div>

              {/* Navigation Dots */}
              <div className="flex gap-2 flex-shrink-0">
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
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-4 flex justify-center"
      >
        <SocialIcons />
      </motion.div>
    </div>
  );
};

export default Testimonials;
