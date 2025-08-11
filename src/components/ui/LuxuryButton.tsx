import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react'; // Note: DivideIcon seems like a placeholder? Replace if needed.

interface LuxuryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: LucideIcon; // Make sure this is the correct type for your icons
  className?: string;
  iconPosition?: 'left' | 'right';
  floating?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

// Define Gold RGBA for shadows, using your theme's default gold #937127
const GOLD_DEFAULT_RGB = '147, 113, 39';
const GOLD_SHADOW_BASE = `rgba(${GOLD_DEFAULT_RGB}, 0.3)`;
const GOLD_SHADOW_HOVER = `rgba(${GOLD_DEFAULT_RGB}, 0.4)`;

const LuxuryButton: React.FC<LuxuryButtonProps> = ({
  children,
  onClick,
  href,
  icon: Icon,
  className = '',
  iconPosition = 'right',
  floating = false,
  size = 'md'
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base'
  };

  const baseStyles = `
    inline-flex items-center justify-center gap-2
    ${sizeStyles[size]}
    rounded-full bg-black/80 text-gold border border-gold/50 /* Gold text/border */
    shadow-[0_0_20px_var(--shadow-color)]                  /* Gold shadow */
    hover:shadow-[0_0_30px_var(--shadow-hover-color)]      /* Gold shadow hover */
    hover:border-gold hover:bg-gold hover:text-black       /* Gold background on hover */
    transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] /* Adjusted scaling */
    backdrop-blur-sm ${floating ? 'animate-float' : ''}
    tracking-wider uppercase font-medium                 /* Adjusted tracking/case */
    group whitespace-nowrap
  `;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        // Icon inherits text color (gold, black on hover)
        <Icon className="w-4 h-4 shrink-0 transition-colors duration-300" />
      )}
      <span className="truncate">{children}</span>
      {Icon && iconPosition === 'right' && (
         // Icon inherits text color (gold, black on hover)
        <Icon className="w-4 h-4 shrink-0 transition-colors duration-300" />
      )}
    </>
  );

  // Use CSS variables for dynamic shadow colors
  const style = {
      '--shadow-color': GOLD_SHADOW_BASE,
      '--shadow-hover-color': GOLD_SHADOW_HOVER
  } as React.CSSProperties;

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`} style={style}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${className}`} style={style}>
      {content}
    </button>
  );
};

export default LuxuryButton;