import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import SocialIcons from './SocialIcons'; 

// Testimonial data (keep as is)
const TESTIMONIALS = [
  // ... your testimonial objects
  { text: "Exceptional service, always on time", author: "James Wilson", role: "Business Executive", rating: 5 },
  { text: "The epitome of luxury travel", author: "Sarah Mitchell", role: "Event Planner", rating: 5 },
  { text: "Best chauffeur service in NYC", author: "Michael Brown", role: "Corporate Client", rating: 5 }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 6000); // Slightly longer interval
    return () => clearInterval(interval);
  }, []);

  // Define Gold RGBA for shadow
  const GOLD_DEFAULT_RGB = '147, 113, 39';
  const GOLD_SHADOW_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.3)`;
  const GOLD_SHADOW_HOVER_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.5)`; // Slightly increased hover shadow

  return (
    // Removed hover scale from outer container, apply to inner card if needed
    <div className="flex flex-col gap-4">
      <div className="relative">
        {/* Section Heading */}
        <h3 className="text-base font-medium text-text-primary text-center mb-4 tracking-wide"> {/* Use text-primary */}
          What Our Clients Love About Us!
        </h3>

        {/* Testimonial Container */}
        <div className="relative h-[220px] md:h-[200px] rounded-xl overflow-hidden group"> {/* Added group */}
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform
                       ${index === activeIndex
                         ? 'opacity-100 translate-y-0'
                         : 'opacity-0 translate-y-6 pointer-events-none'}
                       bg-black/50 backdrop-blur-lg rounded-xl p-5 /* Adjusted bg/blur */
                       border border-gold/20 /* Subtle gold border */
                       shadow-[0_0_15px_var(--shadow-color)]
                       group-hover:shadow-[0_0_25px_var(--shadow-hover-color)] /* Hover shadow on card */
                       group-hover:border-gold/40 /* Increased border opacity on hover */ `}
              style={{ '--shadow-color': GOLD_SHADOW_COLOR, '--shadow-hover-color': GOLD_SHADOW_HOVER_COLOR } as React.CSSProperties}
            >
              {/* Stars - Changed to Gold */}
              <div className="flex gap-1 mb-3"> {/* Increased margin */}
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" /> /* Gold color/fill */
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-text-secondary text-sm italic mb-4 leading-relaxed"> {/* Use text-secondary */}
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="absolute bottom-4 left-5"> {/* Position author bottom left */}
                 <span className="block text-text-primary font-medium text-xs"> {/* Use text-primary */}
                  {testimonial.author}
                </span>
                <span className="block text-text-secondary/80 text-[11px]"> {/* Use text-secondary */}
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}

          {/* Testimonial Dots - Changed to Gold */}
          <div className="absolute bottom-3 right-4 flex gap-1.5"> {/* Position dots bottom right */}
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300
                         ${activeIndex === index
                           ? 'w-3 bg-gold shadow-[0_0_6px_var(--shadow-color)]' /* Active dot is gold */
                           : 'bg-gold/30 hover:bg-gold/60' /* Inactive uses gold opacity */} `}
                aria-label={`Go to testimonial ${index + 1}`}
                style={{ '--shadow-color': GOLD_SHADOW_COLOR } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Social Icons (Ensure SocialIcons component is styled appropriately) */}
      <div className="mt-6 flex justify-center">
        <SocialIcons /> {/* Assuming this uses GlowingIcon or similar */}
      </div>
    </div>
  );
};

export default Testimonials;