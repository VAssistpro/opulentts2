import React from 'react';
import { Calendar } from 'lucide-react';
import { FEATURES } from '../../../data/fleet';
import AnimatedSection from '../../ui/AnimatedSection';
import SectionTitle from '../../ui/SectionTitle';
import LuxuryButton from '../../ui/design-system/LuxuryButton';
import { useDesktopNavigation } from '../../../contexts/DesktopNavigationContext';

const About = () => {
  const { setActiveSection } = useDesktopNavigation();
  return (
    <div className="h-full flex items-center justify-center relative py-2">
      <div className="relative z-10 container mx-auto px-2">
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
                  className="relative rounded-xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 p-6 md:p-8 h-full
                             text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                             transition-all duration-500 group-hover:-translate-y-1 hover:bg-white/[0.12] hover:border-gold/30
                             before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent before:pointer-events-none"
                >
                  <div className="relative z-10 flex flex-col items-center h-full">
                    <feature.icon
                      className="w-7 h-7 md:w-8 md:h-8 mb-5 md:mb-6
                                text-black/60 dark:text-gray-400 group-hover:text-gold
                                transition-colors duration-300"
                    />
                    <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-3 md:mb-4 text-black dark:text-white tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-base text-black/80 dark:text-white/80 leading-relaxed font-light tracking-wide flex-grow">
                      {feature.description}
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

export default About;