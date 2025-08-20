import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/constants';

interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className,
  icon,
  disabled = false,
}) => {
  const baseClasses = "group relative overflow-hidden font-bold rounded-xl transition-all duration-300 ease-out will-change-transform flex items-center justify-center gap-2 min-w-[180px]";
  
  const variants = {
    primary: `
      bg-gradient-to-r from-gold via-gold-lighter to-gold-dark text-black
      shadow-[0_8px_32px_rgba(147,113,39,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]
      hover:shadow-[0_12px_40px_rgba(147,113,39,0.6),inset_0_1px_0_rgba(255,255,255,0.4)]
      hover:scale-[1.02] active:scale-[0.98]
      border border-gold/30 backdrop-blur-sm
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-gold-dark before:to-gold 
      before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
    `,
    secondary: `
      bg-transparent border-2 border-white/30 text-white backdrop-blur-md
      hover:border-gold/50 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]
      shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(147,113,39,0.2)]
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-gold/10 before:to-gold/5
      before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
    `,
    ghost: `
      bg-white/5 border border-white/20 text-white backdrop-blur-md
      hover:bg-white/10 hover:border-gold/30 hover:scale-[1.02] active:scale-[0.98]
      shadow-[0_2px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_24px_rgba(147,113,39,0.15)]
    `,
  };

  const sizes = {
    sm: "py-2 px-4 text-sm min-w-[120px]",
    md: "py-4 px-8 text-base min-w-[180px]",
    lg: "py-5 px-10 text-lg min-w-[220px]",
  };

  const Component = href ? 'a' : motion.button;
  const props = href ? { href } : { onClick, disabled };

  const motionProps = href ? {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: "easeOut" }
  } : {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: "easeOut" }
  };

  return (
    <Component
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
      {...motionProps}
    >
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 group-hover:translate-x-full"
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow effect for primary variant */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gold/30 blur-xl opacity-0 group-hover:opacity-50"
          transition={{ duration: 0.3 }}
        />
      )}
    </Component>
  );
};

export default PremiumButton;
