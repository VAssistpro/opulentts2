import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import SectionBackground from '../ui/SectionBackground';
import { SERVICES } from '../../utils/constants';
import AnimatedSection from '../ui/AnimatedSection';
import LuxuryButton from '../ui/design-system/LuxuryButton';
import { Calendar } from 'lucide-react';
import { useNavigationContext } from '../../hooks/useNavigationContext';

const Services = () => {
  const { setActiveSection } = useNavigationContext();

  return (
    <SectionBackground>
        <AnimatedSection>
          <SectionTitle
            title="Our Services"
            description="Experience the finest in luxury transportation with our comprehensive range of services."
          />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="group hover:translate-x-2 transition-all duration-300 ease-out will-change-transform"
              >
                <div className="relative rounded-xl bg-black/40 p-6 md:p-8 backdrop-blur-sm h-full glassmorphic-panel border border-gold/5 shadow-[0_0_15px_rgba(128,128,128,0.2)] transition-all duration-300 ease-out group-hover:border-gold/30 group-hover:shadow-[0_0_25px_rgba(147,113,39,0.3)] will-change-auto">
                  <div className="flex flex-col items-center text-center transition-all duration-500">
                    <div className="flex flex-col items-center group-hover:items-start group-hover:text-left transition-all duration-300 ease-out">
                      <service.icon className="w-7 h-7 text-gray-400 group-hover:text-gold transition-colors duration-300 ease-out mb-4" />
                      <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-300 ease-out mb-4" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="flex justify-center mt-6">
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

export default Services;
