import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-[40] w-full flex-shrink-0 mt-2">
      {/* Burgundy divider line with glow effect */}
      <div className="h-px bg-gradient-to-r from-transparent via-burgundy/60 to-transparent 
                    shadow-[0_0_9px_rgba(128,0,32,0.4)]"></div>
      
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left aligned text with glow effect */}
          <div className="text-center md:text-left text-xs text-gray-300 drop-shadow-[0_0_8px_rgba(128,0,32,0.3)]">
            © {new Date().getFullYear()} Opulent Transport Solutions
          </div>

          {/* Center aligned text with logo and glow effect */}
          <div className="text-center order-first md:order-none mb-1 md:mb-0 ml-6">
            <div className="flex items-center justify-center gap-1">
              <span className="text-xs text-gray-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                Website made with
              </span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span className="text-xs text-gray-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                by
              </span>
              <a
                href="https://www.virtualassistancepro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://opulentts.com/00.%20Logo%20V%20Assist%20Pro%20-Black.png"
                  alt="V Assist Pro Inc"
                  className="h-6 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                />
              </a>
            </div>
          </div>

          {/* Right aligned text with glow effect */}
          <div className="text-center md:text-right text-xs text-gray-300 drop-shadow-[0_0_8px_rgba(128,0,32,0.3)]">
            (516) 324-5483 Available 24/7
          </div>
        </div>
      </div>
      
      {/* Back to top button with glow effect */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="lg:hidden absolute right-4 top-0 -translate-y-1/2 p-2 rounded-full 
                 bg-black border border-burgundy/30 text-burgundy
                 hover:bg-burgundy hover:text-black
                 transition-all duration-300 group
                 shadow-[0_0_15px_rgba(128,0,32,0.3)]
                 hover:shadow-[0_0_25px_rgba(128,0,32,0.5)]
                 focus:outline-none focus:ring-2 focus:ring-burgundy/50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;