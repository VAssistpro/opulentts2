import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import SectionBackground from '../ui/SectionBackground';
import FleetShowcase from '../fleet/FleetShowcase';
import AnimatedSection from '../ui/AnimatedSection';
import LuxuryButton from '../ui/design-system/LuxuryButton';
import { Calendar } from 'lucide-react';
import { useNavigationContext } from '../../hooks/useNavigationContext';

const Fleet = () => {
  const { setActiveSection } = useNavigationContext();

  return (
    <SectionBackground>
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
    </SectionBackground>
  );
};

export default Fleet;