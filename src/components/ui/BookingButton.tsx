import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const BookingButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const bookSection = document.getElementById('book');
      if (bookSection) {
        const rect = bookSection.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-0 right-0 px-6 z-50">
      <button
        onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 
                 bg-gradient-to-r from-gold via-[#ffd700] to-gold
                 text-black font-semibold rounded-xl
                 transform hover:scale-105 active:scale-95
                 transition-all duration-300
                 shadow-[0_0_30px_rgba(147,113,39,0.4)]
                 hover:shadow-[0_0_40px_rgba(147,113,39,0.6)]"
      >
        <span>Book Your Journey</span>
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default BookingButton;