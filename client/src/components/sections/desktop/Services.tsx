import React from 'react';
import { SERVICES } from '../../../utils/constants';
import AnimatedSection from '../../ui/AnimatedSection';
import SectionTitle from '../../ui/SectionTitle';

const Services = () => {
  return (
    <div className="h-full flex items-center justify-center relative py-16 md:py-20">
      <div className="relative z-10 container mx-auto px-6 md:px-8">
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
                  className="relative rounded-xl bg-black/40 p-6 md:p-8 backdrop-blur-sm h-full
                             text-center
                             transition-all duration-500 group-hover:-translate-y-1
                             before:pointer-events-none before:absolute before:inset-0 before:rounded-xl
                             before:border before:border-gray-500/30
                             before:shadow-[0_0_15px_rgba(128,128,128,0.2)]
                             before:transition-all before:duration-500
                             group-hover:before:border-gold/30
                             group-hover:before:shadow-[0_0_25px_rgba(147,113,39,0.4)]"
                >
                  <div className="relative z-10 flex flex-col items-center h-full">
                    <service.icon
                      className="w-7 h-7 md:w-8 md:h-8 mb-5 md:mb-6
                                text-gray-400 group-hover:text-gold
                                transition-colors duration-300"
                    />
                    <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-3 md:mb-4 text-text-primary tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-base text-text-secondary leading-relaxed font-light tracking-wide flex-grow">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;