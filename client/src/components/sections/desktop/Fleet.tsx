import React, { useState } from 'react';
import { FLEET_DATA } from '../../../data/fleet/vehicles';
import AnimatedSection from '../../ui/AnimatedSection';
import SectionTitle from '../../ui/SectionTitle';
import FleetShowcase from '../../fleet/FleetShowcase';
import { ChevronLeft, ChevronRight, Users, Briefcase, Star } from 'lucide-react';

const Fleet = () => {
  return (
    <div className="w-full relative py-8 px-4 min-h-screen bg-gradient-to-br from-black via-gray-800 to-black">
      <div className="relative z-10 container mx-auto px-6 md:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Our Fleet"
            description="Discover our collection of meticulously maintained luxury vehicles"
          />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <FleetShowcase />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Fleet;
