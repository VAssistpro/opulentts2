import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6d0b9c6?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Absolutely exceptional service! The chauffeur was professional, the vehicle was immaculate, and the experience was seamless from booking to drop-off. Opulent Transport truly delivers on their promise of luxury.",
      service: "Corporate Executive Travel",
      date: "December 2024"
    },
    {
      name: "Michael Chen",
      role: "Wedding Planner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "We've used Opulent Transport for multiple high-profile weddings. Their attention to detail and reliability is unmatched. The bridal party always arrives in style and on time. Highly recommend!",
      service: "Wedding Transportation",
      date: "November 2024"
    },
    {
      name: "Emily Rodriguez",
      role: "International Traveler",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Flying into JFK late at night, I needed reliable transportation to Manhattan. The service was incredible - flight tracking, meet & greet, and a smooth ride to my hotel. Will definitely use again!",
      service: "Airport Transfer",
      date: "December 2024"
    },
    {
      name: "David Thompson",
      role: "Investment Banker",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "I use Opulent Transport regularly for client meetings across NYC. The consistency in service quality is remarkable. Professional chauffeurs, luxury vehicles, and always punctual. A true business asset.",
      service: "Corporate Transportation",
      date: "October 2024"
    },
    {
      name: "Lisa Park",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Coordinated group transportation for a major corporate event. Opulent Transport handled 50+ executives flawlessly. Every detail was managed perfectly, making my job so much easier. Exceptional service!",
      service: "Group Transportation",
      date: "September 2024"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
      >
        <Star
          className={`w-5 h-5 ${
            index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-white/30'
          }`}
        />
      </motion.div>
    ));
  };

  return (
    <div className="fixed inset-0 pt-24 pb-8">
      <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500/50 scrollbar-track-transparent">
        <div className="min-h-full flex items-center justify-center px-4 py-8">
          <div className="max-w-6xl w-full">
            {/* Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 mb-6 rounded-full 
                           bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 
                           border border-yellow-500/30 backdrop-blur-sm"
              >
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                  Client Reviews
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-playfair">
                What Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Clients</span> Say
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Hear from our valued clients who have experienced 
                the pinnacle of luxury transportation service.
              </p>
            </motion.div>

            {/* Main Testimonial Display */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative mb-12"
            >
              <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 
                             backdrop-blur-2xl border border-white/20 rounded-3xl p-12 relative overflow-hidden">
                
                {/* Background Quote */}
                <Quote className="absolute top-8 right-8 w-20 h-20 text-yellow-500/10" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      <div className="flex space-x-1">
                        {renderStars(testimonials[activeTestimonial].rating)}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed 
                                         text-center mb-8 max-w-4xl mx-auto">
                      "{testimonials[activeTestimonial].text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500/50"
                        >
                          <img
                            src={testimonials[activeTestimonial].image}
                            alt={testimonials[activeTestimonial].name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div className="text-left">
                          <h4 className="text-xl font-bold text-white">
                            {testimonials[activeTestimonial].name}
                          </h4>
                          <p className="text-white/70">
                            {testimonials[activeTestimonial].role}
                          </p>
                        </div>
                      </div>

                      <div className="hidden md:block w-px h-12 bg-white/20"></div>

                      <div className="text-center md:text-left">
                        <p className="text-yellow-400 font-semibold">
                          {testimonials[activeTestimonial].service}
                        </p>
                        <p className="text-white/60 text-sm">
                          {testimonials[activeTestimonial].date}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center space-x-6 mt-8">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-500/50 
                           rounded-full text-white hover:text-yellow-400 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <div className="flex space-x-3">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setActiveTestimonial(index);
                        setIsAutoPlaying(false);
                      }}
                      whileHover={{ scale: 1.3 }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial 
                          ? 'bg-yellow-500 scale-125' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-500/50 
                           rounded-full text-white hover:text-yellow-400 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {[
                { number: "1000+", label: "Happy Clients" },
                { number: "5★", label: "Average Rating" },
                { number: "24/7", label: "Service Hours" },
                { number: "100%", label: "On-Time Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center bg-gradient-to-br from-black/60 via-black/40 to-black/60 
                           backdrop-blur-2xl border border-white/20 rounded-2xl p-6
                           hover:border-yellow-500/30 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-center bg-gradient-to-r from-black/60 via-black/40 to-black/60 
                         backdrop-blur-2xl border border-white/20 rounded-3xl p-12 mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Experience Luxury?
              </h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied clients who trust Opulent Transport Solutions 
                for their luxury transportation needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black 
                         px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-yellow-500
                         shadow-[0_10px_40px_rgba(147,113,39,0.3)] transition-all duration-300"
              >
                Book Your Journey Today
              </motion.button>
            </motion.div>

            {/* Enhanced Footer */}
            <motion.footer 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="bg-black/60 backdrop-blur-2xl border-t border-white/20 rounded-t-3xl py-12"
            >
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                  <div className="text-white/60">
                    © 2024 Opulent Transport Solutions. All rights reserved.
                  </div>
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
                  <div className="text-white/60 font-semibold">
                    (516) 324-5483
                  </div>
                </div>
              </div>
            </motion.footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;