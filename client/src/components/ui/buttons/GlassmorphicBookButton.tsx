import React from 'react';
import { Calendar } from 'lucide-react';

interface GlassmorphicBookButtonProps {
  onClick: () => void;
}

const GlassmorphicBookButton: React.FC<GlassmorphicBookButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gold/80 via-amber-600/90 to-gold/80 backdrop-blur-xl border border-gold/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_1px_3px_rgba(0,0,0,0.4),0_8px_32px_rgba(147,113,39,0.5)] hover:from-gold/90 hover:via-amber-500/90 hover:to-gold/90 hover:border-gold/60 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.5),0_12px_40px_rgba(147,113,39,0.7)] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/15 before:to-transparent before:pointer-events-none before:rounded-full pl-[37px] pr-[37px] pt-[14px] pb-[14px] font-bold"
    >
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-3">
        <Calendar className="w-4 h-4 text-white" />
        <span className="text-white font-semibold text-sm tracking-wide">
          Book Now
        </span>
      </div>
    </button>
  );
};

export default GlassmorphicBookButton;
