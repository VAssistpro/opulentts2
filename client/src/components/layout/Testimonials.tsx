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
    <div className="w-full px-2">
      {/* Header */}
      <div className="text-center mb-2">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
      </div>
      {/* Testimonial Card */}
      <div className="relative h-[280px] xl:h-[320px] rounded-xl overflow-hidden mx-1">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-gold/60 rounded-xl p-6 xl:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-gold/80 hover:shadow-[0_12px_40px_rgba(255,215,0,0.1)] transition-all duration-300 flex flex-col text-center text-sm xl:text-[15px]">
          {/* Quote Icon */}
          <div className="absolute top-4 right-4 xl:top-5 xl:right-5 text-gold/30">
            <Quote size={18} className="xl:w-5 xl:h-5" />
          </div>

          {/* Client Experiences Pill */}
          <div className="mb-4">
            <div className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-white/90 inline-block">
              <span className="text-xs font-medium tracking-wider">
                Client Experiences
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1.5 mb-4 justify-center">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 xl:w-4 xl:h-4 fill-gold text-gold"
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <div className="transition-opacity duration-300 flex-grow flex flex-col" key={activeIndex}>
            <blockquote className="text-white/90 text-sm xl:text-base leading-relaxed mb-4 xl:mb-5 italic flex-grow flex items-center justify-center px-3">
              "{testimonial.text}"
            </blockquote>

            {/* Author */}
            <div className="mt-auto space-y-2 px-3">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              <h4 className="font-semibold text-white text-sm xl:text-base">
                {testimonial.author}
              </h4>
              <p className="text-gold/80 text-sm">
                {testimonial.role}
              </p>
              <p className="text-white/60 text-sm">
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
      <div className="mt-3">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Testimonials;
