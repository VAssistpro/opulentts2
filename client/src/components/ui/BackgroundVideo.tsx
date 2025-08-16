import React, { useState, useEffect } from 'react';
import { VIDEO_CONFIG } from '../../config/video';

const BackgroundVideo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="relative w-full h-full">
        {/* Loading placeholder */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
            <div className="text-center text-white/70">
              <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-sm">Loading experience...</p>
            </div>
          </div>
        )}

        {/* Error fallback */}
        {hasError && (
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        )}

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleLoadedData}
          onError={handleError}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            opacity: isLoading ? 0 : 1
          }}
        >
          <source src={VIDEO_CONFIG.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/30" />
      </div>
    </div>
  );
};

export default BackgroundVideo;
