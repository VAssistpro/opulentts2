import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface LuxuryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const LuxuryButton: React.FC<LuxuryButtonProps> = ({
  children,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
}) => {
  const baseStyles = `
    relative group flex items-center justify-center gap-2
    font-medium tracking-wider uppercase
    transition-all duration-500
    rounded-xl overflow-hidden
    hover:scale-[1.02] active:scale-[0.98]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `;

  const sizeStyles = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4'
  };

  const variants = {
    primary: `
      bg-gradient-to-r from-gold to-gold-dark
      text-white
      border border-gold/30
      shadow-[0_4px_20px_rgba(147,113,39,0.3)]
      hover:shadow-[0_8px_30px_rgba(147,113,39,0.5)]
      hover:border-gold/50
      backdrop-blur-lg
      hover:from-gold-lighter hover:to-gold
      transform hover:scale-[1.02] active:scale-[0.98]
    `,
    secondary: `
      bg-black/80
      text-gold
      border border-gold/20
      shadow-[0_0_20px_rgba(147,113,39,0.2)]
      hover:shadow-[0_0_30px_rgba(147,113,39,0.4)]
      hover:border-gold/40
      backdrop-blur-lg
    `,
    ghost: `
      bg-transparent
      text-gold
      border border-gold/20
      hover:bg-gold/10
      hover:border-gold/40
      backdrop-blur-lg
    `
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variants[variant]}
        ${className}
      `}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Content */}
      <div className="relative flex items-center gap-2">
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
      </div>
    </button>
  );
};

export default LuxuryButton;
