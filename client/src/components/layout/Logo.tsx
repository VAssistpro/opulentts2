import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className="flex items-center justify-start">
      <img
        src="https://opulentts.com/bgvideo/otsnobg.png"
        alt="Opulent Transport Solutions"
        className={`w-auto h-28 transform transition-all duration-300 hover:scale-110 ${className}`}
        style={{
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

export default Logo;