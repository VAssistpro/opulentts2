import React from 'react';
import { Calendar } from 'lucide-react';

interface GlassmorphicBookButtonProps {
  onClick: () => void;
}

const GlassmorphicBookButton: React.FC<GlassmorphicBookButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center gap-3 px-6 py-3 rounded-full
                 bg-gradient-to-r from-emerald-600/90 via-emerald-500 to-emerald-600/90 backdrop-blur-xl border border-emerald-500/30
                 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(34,197,94,0.4)]
                 hover:from-emerald-500 hover:via-emerald-400 hover:to-emerald-500 hover:border-emerald-400/50 transition-all duration-300
                 transform hover:scale-[1.03] active:scale-[0.97]
                 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none before:rounded-full"
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
