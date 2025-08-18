import React from 'react';

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary'; // Now primary = gold, secondary = outlined gold
}

// Define Gold RGBA for shadows
const GOLD_DEFAULT_RGB = '147, 113, 39';
const PRIMARY_SHADOW_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.5)`;
const PRIMARY_SHADOW_HOVER_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.7)`;
const SECONDARY_SHADOW_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.3)`;
const SECONDARY_SHADOW_HOVER_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.4)`;

const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  href,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2 /* Center content */
    text-base md:text-lg font-semibold rounded-full /* Responsive text */
    transition-all duration-300 transform hover:scale-105 active:scale-95
    overflow-hidden group backdrop-blur-xl
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    px-8 py-3 tracking-wider /* Added tracking */
    bg-white/[0.03] border border-white/10 
    shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
    before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none
  `;

  // Define styles using CSS variables for cleaner templates
  const variantStyles = {
    primary: `
      bg-gold text-black /* Gold background, black text */
      shadow-[0_0_25px_var(--shadow-color),0_0_40px_var(--shadow-color)]
      hover:shadow-[0_0_35px_var(--shadow-hover-color),0_0_50px_var(--shadow-hover-color)]
      active:shadow-[0_0_15px_var(--shadow-color)]
      /* Subtle shimmer effect */
      before:absolute before:inset-0 before:bg-gradient-to-r
      before:from-transparent before:via-white/20 before:to-transparent /* White shimmer */
      before:translate-x-[-150%] before:transition-transform before:duration-[1.5s]
      hover:before:translate-x-[150%]
    `,
    secondary: `
      bg-black/80 text-gold border border-gold/60 /* Outlined gold */
      shadow-[0_0_20px_var(--shadow-color)]
      hover:shadow-[0_0_30px_var(--shadow-hover-color)]
      hover:border-gold hover:bg-gold hover:text-black /* Fill on hover */
      active:shadow-[0_0_10px_var(--shadow-color)]
    `
  };

  // Determine variables based on variant
  const style = {
    '--shadow-color': variant === 'primary' ? PRIMARY_SHADOW_COLOR : SECONDARY_SHADOW_COLOR,
    '--shadow-hover-color': variant === 'primary' ? PRIMARY_SHADOW_HOVER_COLOR : SECONDARY_SHADOW_HOVER_COLOR,
  } as React.CSSProperties;

  const ButtonContent = () => (
    // Ensure content is above pseudo-elements
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        style={style}
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
      {...props}
    >
      <ButtonContent />
    </button>
  );
};

export default GlowingButton;