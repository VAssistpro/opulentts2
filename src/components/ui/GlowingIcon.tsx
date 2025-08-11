import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react'; // Replace DivideIcon if placeholder

interface GlowingIconProps {
  icon: LucideIcon; // Use correct Icon type
  href?: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

// Define Gold RGBA for shadows
const GOLD_DEFAULT_RGB = '147, 113, 39';
const GOLD_SHADOW_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.3)`;
const GOLD_SHADOW_HOVER_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.4)`;
const GOLD_SHIMMER_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.2)`; // Subtle gold shimmer

const GlowingIcon: React.FC<GlowingIconProps> = ({
  icon: Icon,
  href,
  label,
  onClick,
  className = ''
}) => {
  const baseStyles = `
    relative flex items-center justify-center
    w-12 h-12 rounded-full
    bg-black/70 backdrop-blur-sm /* Slightly less opaque bg */
    border border-gold/40 /* Gold border */
    shadow-[0_0_15px_var(--shadow-color)]
    hover:shadow-[0_0_25px_var(--shadow-hover-color)]
    transition-all duration-300 transform hover:scale-110
    group overflow-hidden
    hover:bg-gold hover:border-gold/70 /* Gold background on hover */
  `;

  // Use CSS variables for dynamic colors
  const style = {
      '--shadow-color': GOLD_SHADOW_COLOR,
      '--shadow-hover-color': GOLD_SHADOW_HOVER_COLOR,
      '--shimmer-color': GOLD_SHIMMER_COLOR
  } as React.CSSProperties;

  const IconWrapper = () => (
    <>
      {/* Icon uses gold, changes to black on hover (when bg turns gold) */}
      <Icon className="w-5 h-5 text-gold group-hover:text-black relative z-10
                    transition-all duration-300 group-hover:scale-110" />
      {/* Shimmer effect using subtle gold */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[--shimmer-color] to-transparent
                    translate-x-[-150%] group-hover:translate-x-[150%]
                    transition-transform duration-[1.5s]" />
    </>
  );

  return href ? (
    <a
      href={href}
      className={`${baseStyles} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={style}
    >
      <IconWrapper />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`${baseStyles} ${className}`}
      aria-label={label}
      style={style}
    >
      <IconWrapper />
    </button>
  );
};

export default GlowingIcon;