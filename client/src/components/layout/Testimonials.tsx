import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import SocialIcons from './SocialIcons';

const TESTIMONIALS = [
  {
    text: "Opulent has completely changed my perception of private transport. Impeccable attention to detail, courteous drivers, and truly luxurious vehicles.",
    author: "Ava Richardson",
    role: "Venture Capitalist",
    rating: 5,
    location: "Manhattan Executive Travel"
  },
  {
    text: "The only car service I trust for my high-profile clients. Professional, punctual, and never a single issue.",
    author: "Jonathan Miles",
    role: "Investment Director",
    rating: 5,
    location: "Newark Airport Transfer"
  },
  { 
    text: "Exceptional service that truly understands the meaning of luxury. Every detail was perfect, from the vehicle to the driver's professionalism.", 
    author: "Dr. Emily Chen", 
    role: "Director of Operations", 
    rating: 5,
    location: "LaGuardia Business Trip"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = TESTIMONIALS[activeIndex];

  return (
    <div className="w-full max-w-sm">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-white mb-0.5">
          Client Experiences
        </h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
      </div>
      
      {/* Testimonial Card */}
      <div className="relative h-[350px] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-xl rounded-2xl border border-gold/20 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-gold/40 hover:shadow-[0_12px_40px_rgba(147,113,39,0.2)] transition-all duration-300 flex flex-col pl-[4px] pr-[4px] pt-[12px] pb-[1px] text-center mt-[4px] mb-[-1px] text-[15px]">
          {/* Quote Icon */}
          <div className="absolute top-4 right-4 text-gold/30">
            <Quote size={24} />
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-4 pl-[5px] pr-[5px] ml-[5px] mr-[5px]">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star 
                key={i} 
                className="w-4 h-4 fill-gold text-gold" 
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <div className="transition-opacity duration-300" key={activeIndex}>
            <blockquote className="text-white/90 text-sm leading-relaxed mb-4 italic flex-grow min-h-[80px] flex items-center pl-[5px] pr-[5px] ml-[5px] mr-[5px]">
              "{testimonial.text}"
            </blockquote>

            {/* Author */}
            <div className="mt-auto space-y-2 pl-[5px] pr-[5px] ml-[5px] mr-[5px]">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              <h4 className="font-semibold text-white text-sm">
                {testimonial.author}
              </h4>
              <p className="text-gold/80 text-xs">
                {testimonial.role}
              </p>
              <p className="text-white/60 text-xs">
                {testimonial.location}
              </p>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {TESTIMONIALS.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === activeIndex ? 'bg-gold' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-6">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Testimonials;