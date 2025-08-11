import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigationContext } from '../../hooks/useNavigationContext';
import LuxuryButton from '../ui/design-system/LuxuryButton';

const HeroCallToAction = () => {
  const { setActiveSection } = useNavigationContext();

  return (
    <div className="flex justify-center mt-6 md:mt-8">
      <div
        className="flex items-center justify-between gap-3 sm:gap-4 px-4 py-2.5 rounded-lg
                   bg-black/60 backdrop-blur-md
                   border border-[--border-color]
                   shadow-[0_0_15px_var(--shadow-color)]"
        style={{
          '--border-color': 'rgba(147, 113, 39, 0.4)',
          '--shadow-color': 'rgba(147, 113, 39, 0.2)',
        } as React.CSSProperties}
      >
        <p className="text-text-secondary text-sm sm:text-base font-medium shrink">
          Ready to elevate your travel?
        </p>

        <LuxuryButton
          onClick={() => setActiveSection('book')}
          icon={ArrowRight}
          iconPosition="right"
          variant="secondary"
          size="md"
        >
          Book Now
        </LuxuryButton>
      </div>
    </div>
  );
};

export default HeroCallToAction;