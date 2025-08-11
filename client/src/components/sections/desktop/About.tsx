import React from 'react';
import { FEATURES } from '../../../data/fleet';
import AnimatedSection from '../../ui/AnimatedSection';
import SectionTitle from '../../ui/SectionTitle';

const About = () => {
  return (
    <div className="h-full flex items-center justify-center relative py-16 md:py-20">
      <div className="relative z-10 container mx-auto px-6 md:px-8">
        <AnimatedSection>
          <SectionTitle
            title="About Opulent Transport Solutions"
            description="Since our establishment, Opulent Transport Solutions has been setting the standard for luxury transportation in New York City."
          />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mt-10 md:mt-12">
            {FEATURES.map((feature, index) => (
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
                             group-hover:before:shadow-[0_0_30px_rgba(147,113,39,0.4)]"
                >
                  <div className="relative z-10 flex flex-col items-center h-full">
                    <feature.icon
                      className="w-7 h-7 md:w-8 md:h-8 mb-5 md:mb-6
                                text-gray-400 group-hover:text-gold
                                transition-colors duration-300"
                    />
                    <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-3 md:mb-4 text-text-primary tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-base text-text-secondary leading-relaxed font-light tracking-wide flex-grow">
                      {feature.description}
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

export default About;