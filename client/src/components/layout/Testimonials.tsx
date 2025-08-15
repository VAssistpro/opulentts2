import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import SocialIcons from './SocialIcons';

const TESTIMONIALS = [
  {
    text: "Absolutely transformative experience! Opulent redefined luxury transportation for our executive team. The attention to detail, from vehicle presentation to driver professionalism, exceeded every expectation.",
    author: "Ava Richardson",
    role: "Venture Capitalist",
    company: "Goldman Sachs",
    rating: 5,
    location: "Manhattan Executive Travel",
    service: "Corporate Account"
  },
  {
    text: "Five years of flawless service. My high-profile clients demand perfection, and Opulent delivers every single time. Zero compromises, zero disappointments.",
    author: "Jonathan Miles",
    role: "Investment Director",
    company: "BlackRock",
    rating: 5,
    location: "Newark Airport Transfer",
    service: "VIP Airport Service"
  },
  {
    text: "Luxury isn't just about the vehicle—it's the entire experience. From booking to arrival, Opulent orchestrates perfection. Our board members are consistently impressed.",
    author: "Dr. Emily Chen",
    role: "Director of Operations",
    company: "McKinsey & Company",
    rating: 5,
    location: "LaGuardia Business Trip",
    service: "Executive Travel"
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
      <div className="testimonial-container mx-1">
        <div className="testimonial-card absolute inset-0 p-4 sm:p-5 lg:p-6 xl:p-7 flex flex-col text-center group">
          {/* Quote Icon */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gold/40 group-hover:text-gold/60 transition-colors duration-300">
            <Quote size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </div>

          {/* Client Experiences Pill */}
          <div className="mb-3 sm:mb-4">
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full backdrop-blur-sm border border-gold/30 text-white/95 inline-block group-hover:from-gold/30 group-hover:to-gold/15 group-hover:border-gold/40 transition-all duration-300">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Client Testimonials
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1 sm:gap-1.5 mb-3 sm:mb-4 justify-center">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="testimonial-star w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <div className="transition-all duration-500 flex-grow flex flex-col justify-between" key={activeIndex}>
            <blockquote className="testimonial-text mb-4 sm:mb-6 px-1 sm:px-2">
              <span className="testimonial-quote mr-1">"</span>
              {testimonial.text}
              <span className="testimonial-quote ml-1">"</span>
            </blockquote>

            {/* Author */}
            <div className="space-y-2 sm:space-y-3 px-1 sm:px-2">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent group-hover:via-gold/60 transition-colors duration-300"></div>

              <div className="space-y-1 sm:space-y-1.5">
                <h4 className="testimonial-author">
                  {testimonial.author}
                </h4>
                <p className="testimonial-role">
                  {testimonial.role}
                </p>
                <p className="testimonial-company">
                  {testimonial.company}
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 testimonial-meta">
                  <span>{testimonial.location}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="font-medium text-gold/60">{testimonial.service}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {TESTIMONIALS.map((_, index) => (
            <div
              key={index}
              className={`testimonial-indicator ${
                index === activeIndex ? 'active' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
