import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import FleetShowcase from '../fleet/FleetShowcase';
import AnimatedSection from '../ui/AnimatedSection';
import LuxuryButton from '../ui/design-system/LuxuryButton';
import { Calendar } from 'lucide-react';
import { useNavigationContext } from '../../hooks/useNavigationContext';

const Fleet = () => {
  const { setActiveSection } = useNavigationContext();

  return (
    <section className="relative py-0.5 overflow-auto">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      <div className="relative z-10">
        <AnimatedSection>
          <SectionTitle
            title="Our Fleet"
            description="Discover our collection of meticulously maintained luxury vehicles"
          />
        </AnimatedSection>

        <FleetShowcase />

        <div className="flex justify-center mt-4">
          <LuxuryButton
            onClick={() => setActiveSection('book')}
            icon={Calendar}
            iconPosition="right"
            variant="secondary"
            size="lg"
          >
            Book Your Journey
          </LuxuryButton>
        </div>
      </div>
    </section>
  );
};

export default Fleet;