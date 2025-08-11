import React, { useState, useEffect, useRef } from 'react';

// Define the types of animations supported
type AnimationType = 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';

interface AnimatedElementProps {
  children: React.ReactNode;
  /** Type of animation to apply */
  animation?: AnimationType;
  /** Delay in milliseconds before animation starts */
  delay?: number;
  /** Duration of the animation transition in milliseconds */
  duration?: number;
  /** Intersection Observer threshold (0 to 1) */
  threshold?: number;
  /** If true, animation only triggers once */
  triggerOnce?: boolean;
  /** Additional CSS classes for the wrapper element */
  className?: string;
  /** HTML tag or React component to use as the wrapper */
  as?: React.ElementType;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-in', // Default animation
  delay = 0,             // Default delay
  duration = 700,        // Default duration (ms)
  threshold = 0.1,       // Trigger when 10% is visible
  triggerOnce = true,    // Only animate once by default
  className = '',
  as: Component = 'div', // Default wrapper is a div
}) => {
  const [isVisible, setIsVisible] = useState(false);
  // Use generic Element type for the ref to work with the 'as' prop
  const domRef = useRef<Element>(null);

  useEffect(() => {
    const element = domRef.current; // Capture the current ref value
    if (!element) return; // Exit if ref is not attached yet

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the element is intersecting according to the threshold
          if (entry.isIntersecting) {
            setIsVisible(true); // Element is visible, trigger animation
            // If triggerOnce is true, stop observing after the first time
            if (triggerOnce && observer) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            // If triggerOnce is false, allow animation to reset when element scrolls out
            setIsVisible(false);
          }
        });
      },
      { threshold } // Use the specified threshold
    );

    observer.observe(element); // Start observing the element

    // Cleanup function to unobserve when the component unmounts
    return () => {
      if (observer && element) {
        observer.unobserve(element);
      }
    };
    // Dependencies for the effect
  }, [threshold, triggerOnce]);

  // Define base transition classes and animation-specific initial/final states
  const baseTransitionClasses = `transition-all ease-out`; // Base transition properties

  const animationStates: Record<AnimationType, { initial: string; final: string }> = {
    'fade-in':    { initial: 'opacity-0', final: 'opacity-100' },
    'slide-up':   { initial: 'opacity-0 translate-y-6', final: 'opacity-100 translate-y-0' },
    'slide-down': { initial: 'opacity-0 -translate-y-6', final: 'opacity-100 translate-y-0' },
    'slide-left': { initial: 'opacity-0 translate-x-6', final: 'opacity-100 translate-x-0' },
    'slide-right':{ initial: 'opacity-0 -translate-x-6', final: 'opacity-100 translate-x-0' },
  };

  // Get the specific initial and final classes for the selected animation
  const selectedAnimation = animationStates[animation] || animationStates['fade-in'];

  // Determine which classes to apply based on visibility
  const currentAnimationClasses = isVisible ? selectedAnimation.final : selectedAnimation.initial;

  // Construct the style object for dynamic duration and delay
  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  // Render the wrapper component with dynamic classes and styles
  return (
    <Component
      ref={domRef as any} // Cast ref type if necessary based on 'as' prop
      className={`${className} ${baseTransitionClasses} ${currentAnimationClasses}`}
      style={style}
    >
      {children}
    </Component>
  );
};

export default AnimatedElement;