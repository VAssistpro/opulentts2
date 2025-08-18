import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className="relative z-[50] w-full flex-shrink-0 mt-1 mx-auto max-w-full overflow-hidden">
      {/* Console-style footer with golden accent */}
      <div className="max-w-[95vw] mx-auto px-2">
        <div className="relative bg-black/80 backdrop-blur-xl rounded-lg border border-white/20 p-3 pt-[0px] pb-[0px]
                     shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),inset_0_-1px_0_0_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.4),0_8px_32px_rgba(0,0,0,0.3)]
                     before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/8 before:via-white/3 before:to-transparent before:pointer-events-none before:rounded-lg
                     after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent after:pointer-events-none
                     hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),inset_0_-1px_0_0_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.5)] hover:border-white/25 transition-all duration-500">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-2 text-center lg:text-left">
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
                 relative bg-black/80 backdrop-blur-xl border border-white/20 text-white/90
                 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),inset_0_-1px_0_0_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.4)]
                 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/8 before:via-white/3 before:to-transparent before:pointer-events-none before:rounded-lg
                 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),inset_0_-1px_0_0_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.5)] hover:border-white/25 hover:text-white
                 transition-all duration-500 group focus:outline-none focus:ring-2 focus:ring-white/30"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
