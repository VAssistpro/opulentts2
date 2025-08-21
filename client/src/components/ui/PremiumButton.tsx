import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useEnhancedHapticFeedback } from '../../hooks/useEnhancedHapticFeedback';

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
  const { hapticClick, hapticHover } = useEnhancedHapticFeedback();
  const baseClasses = "group relative overflow-hidden font-black rounded-2xl transition-all duration-500 ease-out will-change-transform flex items-center justify-center gap-3 min-w-[180px] touch-manipulation active:transition-none";
  
  const variants = {
    primary: `
      bg-gradient-to-r from-gold via-gold-lighter to-gold text-black font-black
      shadow-[0_12px_48px_rgba(147,113,39,0.6),0_4px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.2)]
      hover:shadow-[0_16px_64px_rgba(147,113,39,0.8),0_8px_32px_rgba(147,113,39,0.4),inset_0_2px_6px_rgba(255,255,255,0.5),inset_0_-2px_6px_rgba(0,0,0,0.3)]
      hover:scale-[1.05] active:scale-[0.95]
      border-2 border-gold-lighter/50 backdrop-blur-sm
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-gold-lighter before:via-gold before:to-gold-dark
      before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100
      after:absolute after:inset-0 after:bg-gradient-to-t after:from-transparent after:via-white/10 after:to-white/20
      after:opacity-60 hover:after:opacity-80 after:transition-opacity after:duration-300
    `,
    secondary: `
      bg-gradient-to-r from-white/5 via-white/10 to-white/5 border-2 border-white/40 text-white backdrop-blur-lg font-black
      hover:border-gold/70 hover:bg-gradient-to-r hover:from-gold/15 hover:via-gold/20 hover:to-gold/15 hover:scale-[1.05] active:scale-[0.95]
      shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_48px_rgba(147,113,39,0.3),0_4px_16px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.3)]
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-gold/20 before:via-gold-lighter/15 before:to-gold/20
      before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100
      after:absolute after:inset-0 after:bg-gradient-to-t after:from-transparent after:via-white/5 after:to-white/10
      after:opacity-40 hover:after:opacity-70 after:transition-opacity after:duration-300
    `,
    ghost: `
      bg-white/5 border border-white/20 text-white backdrop-blur-md
      hover:bg-white/10 hover:border-gold/30 hover:scale-[1.02] active:scale-[0.98]
      shadow-[0_2px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_24px_rgba(147,113,39,0.15)]
    `,
  };

  const sizes = {
    sm: "py-3 px-6 text-sm min-w-[140px] h-12",
    md: "py-4 px-8 text-base min-w-[200px] h-14",
    lg: "py-5 px-12 text-lg min-w-[240px] h-16",
  };

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return;
    hapticClick();
    if (onClick) onClick();
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    hapticHover();
  };

  const Component = href ? 'a' : motion.button;
  const props = href
    ? {
        href,
        onMouseEnter: handleMouseEnter,
        onTouchStart: hapticHover,
      }
    : {
        onClick: handleClick,
        disabled,
        onMouseEnter: handleMouseEnter,
        onTouchStart: hapticHover,
      };

  const motionProps = {
    whileHover: {
      scale: 1.05,
      y: -3,
      boxShadow: variant === 'primary'
        ? "0_20px_80px_rgba(147,113,39,0.8), 0_8px_32px_rgba(147,113,39,0.4)"
        : "0_16px_64px_rgba(147,113,39,0.3), 0_6px_24px_rgba(0,0,0,0.2)"
    },
    whileTap: {
      scale: 0.92,
      y: 2,
      transition: { duration: 0.1, ease: "easeOut" }
    },
    whileFocus: {
      scale: 1.02,
      boxShadow: variant === 'primary'
        ? "0_0_0_4px_rgba(147,113,39,0.3), 0_16px_64px_rgba(147,113,39,0.6)"
        : "0_0_0_4px_rgba(255,255,255,0.2), 0_12px_48px_rgba(147,113,39,0.2)"
    },
    transition: { duration: 0.3, ease: "easeOut" }
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

      {/* Enhanced Shine effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:translate-x-full"
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Secondary shine */}
      <motion.div
        className="absolute inset-0 translate-x-full bg-gradient-to-r from-transparent via-gold-lighter/30 to-transparent -skew-x-12 group-hover:-translate-x-full"
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
      />

      {/* Enhanced Ripple effects */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-2xl border border-gold/40 opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Enhanced Glow effects */}
      {variant === 'primary' && (
        <>
          <motion.div
            className="absolute -inset-2 rounded-3xl bg-gold/40 blur-2xl opacity-0 group-hover:opacity-60"
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute -inset-1 rounded-2xl bg-gold-lighter/30 blur-lg opacity-0 group-hover:opacity-80"
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </>
      )}

      {variant === 'secondary' && (
        <motion.div
          className="absolute -inset-1 rounded-2xl bg-white/20 blur-lg opacity-0 group-hover:opacity-40"
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      )}
    </Component>
  );
};

export default PremiumButton;
