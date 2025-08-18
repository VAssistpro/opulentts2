import React from 'react';
import { Calendar } from 'lucide-react';
import { SERVICES } from '../../../utils/constants';
import AnimatedSection from '../../ui/AnimatedSection';
import SectionTitle from '../../ui/SectionTitle';
import LuxuryButton from '../../ui/design-system/LuxuryButton';
import { useDesktopNavigation } from '../../../contexts/DesktopNavigationContext';

const Services = () => {
  const { setActiveSection } = useDesktopNavigation();
  return (
    <div className="h-full flex items-center justify-center relative py-2">
      <div className="relative z-10 container mx-auto px-2">
        <AnimatedSection>
          <SectionTitle
            title="Our Services"
            description="Experience the finest in luxury transportation with our comprehensive range of services."
          />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10 md:mt-12">
            {SERVICES.map((service, index) => (
              <div key={index} className="group">
                <div
                  className="relative rounded-xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 p-6 md:p-8 h-full
                             text-center shadow-[inset_0_2px_0_0_rgba(255,255,255,0.2),0_2px_6px_rgba(0,0,0,0.2),0_16px_48px_rgba(0,0,0,0.3)]
                             transition-all duration-500 group-hover:-translate-y-1 hover:bg-white/[0.12] hover:border-gold/30
                             before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent before:pointer-events-none before:rounded-xl"
                >
                  <div className="relative z-10 flex flex-col items-center h-full">
                    <service.icon
                      className="w-7 h-7 md:w-8 md:h-8 mb-5 md:mb-6
                                text-black/60 dark:text-gray-400 group-hover:text-gold
                                transition-colors duration-300"
                    />
                    <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-3 md:mb-4 text-black dark:text-white tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-base text-black/80 dark:text-white/80 leading-relaxed font-light tracking-wide flex-grow">
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
      </div>
    </div>
  );
};

export default Services;