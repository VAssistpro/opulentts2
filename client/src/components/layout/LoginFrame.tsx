import React from 'react';

interface LoginFrameProps {
  className?: string;
}

const LoginFrame: React.FC<LoginFrameProps> = ({ className = '' }) => {
  return (
    <iframe 
      name="oresframe"
      src="https://book.mylimobiz.com/v4/(S(aaw2hltkmhx0rh14vaga52q0))/virk/account/loginnow"
      className={`w-full border-none ${className}`}
      width="100%"
      height="650"
      scrolling="yes"
      frameBorder="0"
      title="Login Frame"
    />
  );
};

export default LoginFrame;