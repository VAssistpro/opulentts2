import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className="relative z-[50] w-full flex-shrink-0 mt-1 mx-auto max-w-full overflow-hidden">
      {/* Console-style footer with golden accent */}
      <div className="max-w-[95vw] mx-auto px-2">
        <div className="bg-black/80 backdrop-blur-xl rounded-lg border border-gold/30 shadow-[0_0_20px_rgba(147,113,39,0.2)] p-3">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 text-center lg:text-left">
            {/* Left - Copyright with console styling */}
            <div className="text-xs text-gold/80 font-mono flex-shrink-0 flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span>© {new Date().getFullYear()} OPULENT TRANSPORT SOLUTIONS</span>
            </div>

            {/* Center - Developer credits with console aesthetic */}
            <div className="order-first lg:order-none mb-1 lg:mb-0 flex-shrink-0">
              <div className="flex items-center justify-center gap-2 bg-black/60 rounded px-3 py-1 border border-gold/20">
                <span className="text-xs text-white/70 font-mono">POWERED BY</span>
                <a
                  href="https://www.virtualassistancepro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://opulentts.com/00.%20Logo%20V%20Assist%20Pro%20-Black.png"
                    alt="V Assist Pro Inc"
                    className="h-5 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  />
                </a>
                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Right - Contact with console styling */}
            <div className="text-xs text-gold/80 font-mono flex-shrink-0 flex items-center gap-2">
              <span>(516) 324-5483 • 24/7 AVAILABLE</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Console-style back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="lg:hidden absolute right-4 top-0 -translate-y-1/2 p-2 rounded-lg 
                 bg-black/80 border border-gold/30 text-gold
                 hover:bg-gold/20 hover:border-gold/50
                 transition-all duration-300 group
                 shadow-[0_0_15px_rgba(147,113,39,0.3)]
                 hover:shadow-[0_0_25px_rgba(147,113,39,0.5)]
                 focus:outline-none focus:ring-2 focus:ring-gold/50 backdrop-blur-sm"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
