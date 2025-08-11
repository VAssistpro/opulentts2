import React from 'react';
import { VehicleImage } from '../../types/fleet';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: VehicleImage[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  currentIndex,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="relative aspect-w-16 aspect-h-9">
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Navigation arrows */}
      <button
        onClick={onPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image counter */}
      <div className="absolute bottom-2 right-2 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageGallery;