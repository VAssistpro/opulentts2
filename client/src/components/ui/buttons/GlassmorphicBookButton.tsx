import React from 'react';
import { Calendar } from 'lucide-react';

interface GlassmorphicBookButtonProps {
  onClick: () => void;
}

const GlassmorphicBookButton: React.FC<GlassmorphicBookButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-2 px-8 py-3 rounded-xl
                 overflow-hidden transform transition-all duration-500
                 hover:scale-105 active:scale-100"
    >
      {/* Base layer with gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/40 via-gold-lighter/50 to-gold/40
                    backdrop-blur-xl" />
      {/* Animated border glow */}
      <div className="absolute inset-0 border border-gold/50 rounded-xl
                    shadow-[0_0_30px_rgba(147,113,39,0.4),inset_0_0_20px_rgba(147,113,39,0.4)]
                    group-hover:shadow-[0_0_50px_rgba(147,113,39,0.6),inset_0_0_30px_rgba(147,113,39,0.6)]
                    transition-all duration-500" />
      {/* Inner light effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold-lighter/30 to-gold/20
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    blur-md" />
      {/* Animated shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
                    -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      {/* Pulsing glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    animate-pulse">
        <div className="absolute inset-0 bg-gold/30 blur-xl" />
        <div className="absolute inset-0 from-gold/20 via-gold-lighter/30 to-gold/20 bg-[#15e65ad4]" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-white" />
        <span className="text-white font-semibold tracking-wide
                      drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          Book Now
        </span>
      </div>
    </button>
  );
};

export default GlassmorphicBookButton;
