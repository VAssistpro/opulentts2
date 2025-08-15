import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    text: "Absolutely transformative experience! Opulent redefined luxury transportation for our executive team. The attention to detail exceeded every expectation.",
    author: "Ava Richardson",
    role: "Venture Capitalist",
    company: "Goldman Sachs",
    rating: 5,
    location: "Manhattan",
    service: "Corporate Account"
  },
  {
    text: "Five years of flawless service. My high-profile clients demand perfection, and Opulent delivers every single time. Zero compromises.",
    author: "Jonathan Miles",
    role: "Investment Director", 
    company: "BlackRock",
    rating: 5,
    location: "Newark Airport",
    service: "VIP Service"
  },
  { 
    text: "Luxury isn't just about the vehicle—it's the entire experience. From booking to arrival, Opulent orchestrates perfection.", 
    author: "Dr. Emily Chen", 
    role: "Director of Operations",
    company: "McKinsey & Company", 
    rating: 5,
    location: "LaGuardia",
    service: "Executive Travel"
  }
];

const MobileTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[activeIndex];

  return (
    <div className="w-full px-4 py-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Client Testimonials</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
      </div>

      {/* Testimonial Card */}
      <div 
        className="relative min-h-[400px] rounded-2xl overflow-hidden"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-lg border border-gold/60 rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col text-center">
          {/* Quote Icon */}
          <div className="absolute top-4 right-4 text-gold/50">
            <Quote size={24} />
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-6 justify-center">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-gold text-gold"
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <div className="flex-grow flex flex-col justify-between" key={activeIndex}>
            <blockquote className="text-white/95 text-lg leading-relaxed mb-8 font-medium text-center">
              <span className="text-gold/80 text-2xl font-serif mr-1">"</span>
              {testimonial.text}
              <span className="text-gold/80 text-2xl font-serif ml-1">"</span>
            </blockquote>

            {/* Author */}
            <div className="space-y-3">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
              
              <div className="space-y-2">
                <h4 className="font-bold text-white text-lg">
                  {testimonial.author}
                </h4>
                <p className="text-gold/90 text-base font-medium">
                  {testimonial.role}
                </p>
                <p className="text-gold/70 text-base font-semibold">
                  {testimonial.company}
                </p>
                <div className="flex justify-between items-center text-sm text-white/70 pt-2">
                  <span>{testimonial.location}</span>
                  <span className="font-medium text-gold/60">{testimonial.service}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-white/10 rounded-full border border-gold/40 text-gold hover:bg-gold/20 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Progress Indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-gold shadow-[0_0_8px_rgba(255,215,0,0.6)] scale-110' 
                      : 'bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 bg-white/10 rounded-full border border-gold/40 text-gold hover:bg-gold/20 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTestimonials;
