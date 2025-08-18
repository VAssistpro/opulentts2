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
                className="group"
              >
                <div className="relative rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 md:p-8 h-full
                              shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                              hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300
                              before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex flex-col items-center">
                      <service.icon className="w-7 h-7 text-black/60 dark:text-gray-400 group-hover:text-gold transition-colors duration-200 mb-4" />
                      <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-300 ease-out mb-4" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-black/80 dark:text-white/80 leading-relaxed">
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
