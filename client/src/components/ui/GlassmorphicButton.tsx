import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import LuxuryButton from './LuxuryButton';

interface GlassmorphicButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const GlassmorphicButton: React.FC<GlassmorphicButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const bookSection = document.querySelector('#book');
      if (bookSection) {
        const rect = bookSection.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
      <LuxuryButton
        href={href}
        onClick={onClick}
        icon={ArrowRight}
        className={`px-12 py-4 text-lg ${className}`}
      >
        {children}
      </LuxuryButton>
    </div>
  );
};

export default GlassmorphicButton;