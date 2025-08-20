import React, { useState, useEffect } from 'react';
import { Star, Quote, User, MapPin } from 'lucide-react';

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
    text: "Exceptional service that truly understands the meaning of luxury. Every detail was perfect, from the vehicle to the driver's professionalism.",
    author: "Dr. Emily Chen",
    role: "Director of Operations", 
    rating: 5,
    location: "LaGuardia Business Trip",
    id: "REV_001"
  }
];

const ConsoleTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        setIsTransitioning(false);
      }, 50);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = TESTIMONIALS[activeIndex];

  return (
    <div className="space-y-3">
      {/* Console Display Header */}
      <div className="rounded-lg p-3 border border-gold/20 pt-[6px] pb-[6px]" style={{ background: 'rgba(10, 15, 26, 0.6)' }}>
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs text-gold/80 font-mono">CUSTOMER TESTIMONIALS</div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
        
        
      </div>
      {/* Main Testimonial Display */}
      <div className="rounded-lg p-4 border border-gold/30 shadow-inner min-h-[280px] flex flex-col"
           style={{ background: 'linear-gradient(to bottom right, rgba(10, 15, 26, 0.8) 0%, rgba(10, 15, 26, 0.6) 100%)' }}>
        {/* Rating Display */}
        <div className="flex items-center gap-2 mb-3 bg-[#ede6e600]">
          <div className="flex gap-1 bg-[#ede4e400]">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 fill-white text-white"
              />
            ))}
          </div>
          <div className="text-xs text-gold/80 font-mono">
            RATING: {testimonial.rating}.0
          </div>
        </div>

        {/* Quote */}
        <div className={`flex-1 flex flex-col transition-opacity duration-100 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
          <Quote className="w-4 h-4 text-gold/40 mb-2" />
          <div className="flex-1 flex items-start">
            <p className="text-xs text-white/90 leading-relaxed font-light min-h-[100px]">
              {testimonial.text}
            </p>
          </div>
        </div>

        {/* Client Info */}
        <div className="space-y-2 pt-3 border-t border-gold/20 mt-auto">
          <div className="flex items-center gap-2">
            <User className="w-3 h-3 text-gold/60" />
            <span className="text-xs text-white font-medium">{testimonial.author}</span>
          </div>
          <div className="text-xs text-gold/70">{testimonial.role}</div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-gold/60" />
            <span className="text-xs text-white/60">{testimonial.location}</span>
          </div>
        </div>
      </div>
      {/* Navigation Indicators */}
      <div className="flex justify-center gap-2 py-2">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 backdrop-blur-xl
                      shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)] ${
              index === activeIndex 
                ? 'bg-gold border border-gold/20 shadow-[0_0_6px_rgba(147,113,39,0.4)]' 
                : 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-gold/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ConsoleTestimonials;
