import React, { useState, useCallback } from 'react';
import { FLEET_DATA } from '../../data/fleet/vehicles';
import { ChevronLeft, ChevronRight, Users, Briefcase, CalendarDays } from 'lucide-react';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import AnimatedElement from '../ui/AnimatedElement';
import type { VehicleImage } from '../../types/fleet';

// Removed unused import: import { useRef } from 'react';

const TRANSITION_DURATION_MS = 500;
// Removed GOLD_ACCENT constant - will use Tailwind 'gold' class instead

const FleetShowcase = () => {
  const [activeVehicleIndex, setActiveVehicleIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageTransitionClass, setImageTransitionClass] = useState('opacity-100 scale-100');
  const [isNavigating, setIsNavigating] = useState(false);

  const parallaxOffset = useMouseParallax(0.03);

  const vehicle = FLEET_DATA[activeVehicleIndex];
  // Check if vehicle and images exist before accessing
  const backgroundImageUrl = vehicle?.images?.[0]?.url;
  const currentImage = vehicle?.images?.[activeImageIndex];

  // Ensure data exists before calculating indices
  const totalVehicles = FLEET_DATA.length;
  // Added check for empty fleet data before calculating indices
  const prevVehicleIndex = totalVehicles === 0 ? 0 : (activeVehicleIndex - 1 + totalVehicles) % totalVehicles;
  const nextVehicleIndex = totalVehicles === 0 ? 0 : (activeVehicleIndex + 1) % totalVehicles;

  const prevVehicle = FLEET_DATA[prevVehicleIndex];
  const nextVehicle = FLEET_DATA[nextVehicleIndex];


  const triggerTransition = useCallback((stateUpdateCallback: () => void) => {
    if (isNavigating) return;
    setIsNavigating(true);
    setImageTransitionClass('opacity-0 scale-95');
    const changeTimer = setTimeout(() => stateUpdateCallback(), TRANSITION_DURATION_MS / 2);
    const endTimer = setTimeout(() => {
      setImageTransitionClass('opacity-100 scale-100');
      setIsNavigating(false);
    }, TRANSITION_DURATION_MS);
    return () => { clearTimeout(changeTimer); clearTimeout(endTimer); };
  }, [isNavigating]);

  const handleImageChange = useCallback((newIndex: number) => {
    // Added checks for vehicle and image count
    if (!vehicle || !vehicle.images || vehicle.images.length <= 1 || newIndex === activeImageIndex) return;
    const totalImages = vehicle.images.length;
    const wrappedIndex = (newIndex + totalImages) % totalImages;
    triggerTransition(() => setActiveImageIndex(wrappedIndex));
  }, [activeImageIndex, vehicle, triggerTransition]);

  const handleNextImage = useCallback(() => handleImageChange(activeImageIndex + 1), [activeImageIndex, handleImageChange]);
  const handlePrevImage = useCallback(() => handleImageChange(activeImageIndex - 1), [activeImageIndex, handleImageChange]);

  const handleVehicleChange = useCallback((direction: 'next' | 'prev') => {
     // Added check for empty fleet data
     if (FLEET_DATA.length === 0) return;

    triggerTransition(() => {
      setActiveImageIndex(0); // Reset image index when changing vehicle
      setActiveVehicleIndex(prev => {
        const totalVehicles = FLEET_DATA.length;
        return direction === 'next'
          ? (prev + 1) % totalVehicles
          : (prev - 1 + totalVehicles) % totalVehicles;
      });
    });
  }, [triggerTransition]); // No dependencies needed here related to index change

  // Added a check for FLEET_DATA being empty or vehicle/currentImage being null/undefined
  if (!FLEET_DATA || FLEET_DATA.length === 0 || !vehicle || !currentImage) {
     // Improved loading/empty state message
    return (
        <div className="container mx-auto px-3 py-10 text-white text-center">
            {(!FLEET_DATA || FLEET_DATA.length === 0) ? "No fleet data available." : "Loading fleet..."}
        </div>
    );
  }


  return (
    <div className="container mx-auto px-3 py-0">
      {/* Vehicle Counter */}
      {/* Only show counter if there is more than 1 vehicle */}
      {totalVehicles > 1 && (
         <div className="text-center mb-4">
           <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 rounded-full text-white/90 text-sm">
             Vehicle {activeVehicleIndex + 1} of {totalVehicles}
           </span>
         </div>
      )}


      <div className="relative bg-black/50 rounded-xl overflow-hidden min-h-[490px] md:min-h-[510px] lg:min-h-[530px] flex flex-col shadow-lg border border-white/10"> {/* Kept flex-col here to stack top content, bottom nav/dots, and button */}
        {/* Background Image */}
        {/* Only render if backgroundImageUrl exists */}
        {backgroundImageUrl && (
           <div
             className="absolute inset-0 transition-transform duration-75 ease-out pointer-events-none"
             style={{ transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)` }}
             aria-hidden="true"
           >
             <div
               className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
               style={{
                 backgroundImage: `url(${backgroundImageUrl})`,
                 transform: 'scale(1.15)',
                 opacity: isNavigating ? 0.15 : 0.25,
                 filter: 'blur(3px)',
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10" />
           </div>
        )}


        {/* --- TOP CONTENT AREA (INFO + MAIN IMAGE + IMAGE THUMBNAILS) --- */}
        {/* Adjusted padding to control space above bottom nav/dots */}
        <div className="relative z-10 flex flex-grow flex-col md:flex-row items-center gap-4 md:gap-6 p-3 md:p-6 pb-2"> {/* Kept flex-grow here */}
          {/* Vehicle Info (Left Column) */}
          <div className="w-full md:w-5/12 text-white space-y-3 md:space-y-4 order-2 md:order-1 self-center md:self-auto">
            <AnimatedElement key={vehicle.name}>
              <h3 className="text-3xl md:text-4xl font-bodoni font-bold">
                {vehicle.name}
              </h3>
              <p className="text-base md:text-lg text-white/80 mt-1 md:mt-2">
                {vehicle.description}
              </p>
              <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-1 md:gap-y-2 mt-3 md:mt-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-gold" /> {/* Using text-gold */}
                  <span className='text-sm md:text-base'>{vehicle.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-gold" /> {/* Using text-gold */}
                  <span className='text-sm md:text-base'>{vehicle.luggage} Bags</span>
                </div>
              </div>

              {/* Features */}
              {vehicle.features && vehicle.features.length > 0 && (
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/10">
                  <h4 className="text-lg md:text-xl font-bodoni font-bold text-gold"> {/* Using text-gold */}
                    Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 md:gap-y-1.5">
                    {vehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-1.5 md:gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> {/* Using bg-gold */}
                        <span className="text-xs md:text-sm text-white/90">{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </AnimatedElement>
          </div>

          {/* Image Display Area (Right Column) - Contains main image and image thumbnails */}
          {/* Changed to flex-col to stack items vertically */}
          <div className="w-full md:w-7/12 relative aspect-video rounded-lg overflow-hidden order-1 md:order-2 flex flex-col"> {/* ADDED flex-col */}
            {/* Main Image & Controls - REMOVED aspect-video HERE, flex item will size it*/}
             <div className="relative w-full flex-grow rounded-lg overflow-hidden"> {/* ADDED flex-grow, rounded-lg overflow-hidden */}
                {/* Parallax container for the main image */}
                <div
                  className="absolute inset-0 transition-transform duration-75 ease-out"
                  style={{ transform: `translate3d(${parallaxOffset.x * 1.5}px, ${parallaxOffset.y * 1.5}px, 0)` }}
                >
                  <img
                    key={currentImage.url}
                    src={currentImage.url}
                    alt={currentImage.alt || `${vehicle.name} ${currentImage.type}`}
                    // Removed redundant inline style { { maxWidth: 'none', maxHeight: 'none', objectFit: 'contain' } }
                    className={`w-full h-full object-contain transition-all duration-${TRANSITION_DURATION_MS} ease-in-out ${imageTransitionClass}`}
                    loading="eager"
                  />
                </div>

                {/* Image Navigation */}
                {vehicle.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      disabled={isNavigating}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-gold hover:text-black disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      disabled={isNavigating}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-gold hover:text-black disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {vehicle.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/80 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                    {activeImageIndex + 1} / {vehicle.images.length}
                  </div>
                )}
             </div> {/* End of relative w-full flex-grow container */}


            {/* --- Image Thumbnails - Moved under the active image area --- */}
            {/* Adjusted padding/margin to fit below the main image */}
            {/* Added mt-3 to provide some space between main image container and thumbnails */}
            {vehicle.images.length > 1 && (
               <div className="relative z-10 px-0 md:px-0 pt-0 pb-0 mt-3"> {/* Adjusted padding/margin, ADDED mt-3 */}
                 <div className="flex gap-2 justify-center">
                   {vehicle.images.map((image: VehicleImage, index: number) => (
                     <button
                       key={image.url + index} // Using url + index as key, assuming it's unique enough
                       onClick={() => handleImageChange(index)}
                       disabled={isNavigating} // Disable clicking thumbnails during transition
                       className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-300
                                 ${activeImageIndex === index
                                   ? 'ring-2 ring-gold scale-110 opacity-100' // Using ring-gold
                                   : 'ring-1 ring-white/20 opacity-60 hover:opacity-100 hover:ring-gold/50'}`}
                       aria-label={`View ${vehicle.name} ${image.type} (${index + 1} of ${vehicle.images.length})`}
                       aria-current={activeImageIndex === index ? "true" : "false"}
                     >
                       {/* Use object-cover here as thumbnails should fill their small container */}
                       <img
                         src={image.url}
                         alt={`Thumbnail for ${image.alt || vehicle.name + ' ' + image.type}`}
                         className="w-full h-full object-cover"
                         loading="lazy"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                       <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-medium text-white px-1.5 py-0.5 rounded bg-black/70">
                         {image.type === 'exterior' ? 'Ext' : 'Int'}
                       </span>
                     </button>
                   ))}
                 </div>
               </div>
            )}

          </div>{/* End of w-full md:w-7/12 flex flex-col */}
        </div> {/* End of relative z-10 flex ... pb-2 */}


        {/* --- BOTTOM NAVIGATION AREA (PREV/NEXT VEHICLE + DOTS) --- */}
        {/* Only show if more than 1 vehicle */}
        {totalVehicles > 1 && (
             // Adjusted padding/margin to create space from content above
             // REMOVED THE INCORRECT STANDARD JAVASCRIPT COMMENT HERE
            <div className="relative z-10 flex items-center justify-between px-3 md:px-6 lg:px-10 pt-4 pb-4">
                 {/* Left Navigation Group (Previous Vehicle) */}
                 <div className="flex items-center gap-4">
                   <button
                     onClick={() => handleVehicleChange('prev')}
                     className="flex items-center gap-4 group"
                     disabled={isNavigating}
                     aria-label="Previous Vehicle"
                   >
                     <div className="w-12 h-24 flex items-center justify-center bg-black/50 hover:bg-black/70 text-gold hover:text-white rounded-full transition-all duration-300">
                       <ChevronLeft className="w-8 h-8 transform group-hover:scale-110 transition-transform" />
                     </div>
                     {/* Ensure prevVehicle exists and has images before rendering thumbnail/text */}
                     {prevVehicle && prevVehicle.images?.[0] && (
                        <div className="hidden md:flex items-center gap-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden border border-gold/20">
                            <img
                              src={prevVehicle.images[0].url}
                              alt={prevVehicle.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-white/80 text-sm font-semibold">Previous Vehicle</span>
                        </div>
                     )}
                   </button>
                 </div>

                 {/* Vehicle Navigation Dots - Moved here */}
                 {/* Added flex-grow to center them, and reduced margin */}
                <div className="flex justify-center gap-2 flex-grow"> {/* flex-grow added */}
                  {FLEET_DATA.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => !isNavigating && setActiveVehicleIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300
                            ${activeVehicleIndex === index
                              ? 'w-8 bg-gold'
                              : 'bg-white/30 hover:bg-white/50'}`}
                      aria-label={`Go to vehicle ${index + 1}`}
                      aria-current={activeVehicleIndex === index ? "true" : "false"}
                    />
                  ))}
                </div>


                 {/* Right Navigation Group (Next Vehicle) */}
                 <div className="flex items-center gap-4">
                   <button
                     onClick={() => handleVehicleChange('next')}
                     className="flex items-center gap-4 group"
                     disabled={isNavigating}
                     aria-label="Next Vehicle"
                   >
                      {/* Ensure nextVehicle exists and has images before rendering thumbnail/text */}
                     {nextVehicle && nextVehicle.images?.[0] && (
                        <div className="hidden md:flex items-center gap-4">
                          <span className="text-white/80 text-sm font-semibold">Next Vehicle</span>
                          <div className="w-20 h-20 rounded-lg overflow-hidden border border-gold/20">
                            <img
                              src={nextVehicle.images[0].url}
                              alt={nextVehicle.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                     )}
                     <div className="w-12 h-24 flex items-center justify-center bg-black/50 hover:bg-black/70 text-gold hover:text-white rounded-full transition-all duration-300">
                       <ChevronRight className="w-8 h-8 transform group-hover:scale-110 transition-transform" />
                     </div>
                   </button>
                 </div>
            </div> 
        )}
        {/* BOOK YOUR JOURNEY Button - Positioned below the bottom navigation area */}
        {/* Adjusted padding/margin */}
        <div className="relative z-10 flex justify-center px-3 md:px-6 py-4 md:py-6 mt-0">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-lg font-semibold
                               bg-gradient-to-r from-yellow-800 to-yellow-600
                               hover:from-yellow-900 hover:to-yellow-700
                               text-black transform transition-all duration-300
                               hover:scale-[1.02] active:scale-[0.98]
                               border border-white/10
                               shadow-[0_0_12px_rgba(234,179,67,0.5)]
                               hover:shadow-[0_0_20px_rgba(234,179,67,0.7)]
                               ">
                BOOK YOUR JOURNEY <CalendarDays className="w-5 h-5" />
            </button>
        </div>

      </div> 
      {/* End of relative bg-black/50 rounded-xl container */}
       {/* --- REMOVED DUPLICATE BOOK YOUR JOURNEY BUTTON HERE --- */}
      {/* The original button outside the main container was here */}

    </div>
  );
};

export default FleetShowcase;