import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Tooltip from './Tooltip';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // Show earlier
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <Tooltip content="Back to top" position="left">
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-4 z-50 p-4 rounded-xl
                 bg-black/90 backdrop-blur-md border border-gold/30
                 text-gold transition-all duration-300
                 shadow-[0_0_20px_rgba(147,113,39,0.3)]
                 hover:shadow-[0_0_30px_rgba(147,113,39,0.5)]
                 hover:border-gold hover:scale-105
                 active:scale-95"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </Tooltip>
  );
};

export default ScrollToTop;