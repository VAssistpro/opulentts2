import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 200
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-1',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-1',
    left: 'right-full top-1/2 -translate-y-1/2 mr-1',
    right: 'left-full top-1/2 -translate-y-1/2 ml-1'
  };

  const handleMouseEnter = () => {
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsVisible(false);
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div 
          className={`absolute ${positions[position]} z-50 px-2 py-1 
                     bg-black/90 backdrop-blur-sm text-white text-[10px] rounded-md
                     border border-gold/20 whitespace-nowrap
                     shadow-lg shadow-black/20
                     animate-fade-in pointer-events-none`}
        >
          {content}
          <div 
            className={`absolute w-1.5 h-1.5 bg-black/90 transform rotate-45
                       ${position === 'top' ? 'bottom-[-3px] left-1/2 -translate-x-1/2' : ''}
                       ${position === 'bottom' ? 'top-[-3px] left-1/2 -translate-x-1/2' : ''}
                       ${position === 'left' ? 'right-[-3px] top-1/2 -translate-y-1/2' : ''}
                       ${position === 'right' ? 'left-[-3px] top-1/2 -translate-y-1/2' : ''}`}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;