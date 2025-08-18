import React from 'react';
import { Calendar } from 'lucide-react';

interface GlassmorphicBookButtonProps {
  onClick: () => void;
}

const GlassmorphicBookButton: React.FC<GlassmorphicBookButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-3 px-6 py-3 rounded-full
                 bg-gradient-to-r from-gold/90 via-gold to-gold/90 backdrop-blur-xl border border-gold/30
                 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(147,113,39,0.4)]
                 hover:from-gold hover:via-gold-lighter hover:to-gold hover:border-gold/50 transition-all duration-300
                 transform hover:scale-[1.03] active:scale-[0.97]
                 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none before:rounded-full"
    >
      {/* Content */}
      <div className="relative z-10 flex items-center gap-3">
        <Calendar className="w-4 h-4 text-black" />
        <span className="text-black font-semibold text-sm tracking-wide">
          Book Now
        </span>
      </div>
    </button>
  );
};

export default GlassmorphicBookButton;
