import React from 'react';
import type { LucideProps } from 'lucide-react';

interface LuxuryIconProps {
  icon: React.ComponentType<LucideProps>;
  href?: string;
  label: string;
  variant?: 'primary' | 'ghost';
  className?: string;
}

const LuxuryIcon: React.FC<LuxuryIconProps> = ({
  icon: Icon,
  href,
  label,
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = `
    relative group flex items-center justify-center
    bg-black/50 backdrop-blur-sm
    border border-gold/30
    shadow-[0_0_20px_rgba(147,113,39,0.2)]
    hover:shadow-[0_0_30px_rgba(147,113,39,0.3)]
    hover:border-gold/50 hover:bg-gold/10
    transition-all duration-300
  `;

  const variantStyles = {
    primary: 'bg-black/80 text-gold hover:bg-gold hover:text-black',
    ghost: 'bg-black/50 text-gold hover:bg-gold/10'
  };

  const content = (
    <>
      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 rounded-full bg-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </>
  );

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} aria-label={label}>
      {content}
    </button>
  );
};

export default LuxuryIcon;