import React, { useState, useRef } from 'react';
import { CONTACT_INFO } from '../../../utils/constants';
import AnimatedSection from '../../ui/AnimatedSection';
import SectionTitle from '../../ui/SectionTitle';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const GOLD_DEFAULT_RGB = '147, 113, 39';
  const GOLD_SHADOW_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.3)`;
  const GOLD_SHADOW_HOVER_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.5)`;
  const SUBTLE_BORDER_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.2)`;
  const SUBTLE_BORDER_HOVER_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.4)`;
  const INPUT_BORDER_COLOR = `rgba(255, 255, 255, 0.15)`;
  const INPUT_FOCUS_BORDER_COLOR = `rgba(${GOLD_DEFAULT_RGB}, 0.5)`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error("Placeholder error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  return (
    <div className="w-full relative py-8 px-4 min-h-screen bg-gradient-to-br from-gray-800 via-black to-gray-900">
      <div className="relative z-10 container mx-auto px-6 md:px-8">
        <AnimatedSection>
           <SectionTitle title="Contact Us" />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mt-10 md:mt-12">
            <div className="group">
              <div
                className="relative rounded-xl bg-black/40 p-6 md:p-8 backdrop-blur-sm h-full
                           before:pointer-events-none before:absolute before:inset-0 before:rounded-xl
                           before:border before:border-[--border-color]
                           before:shadow-[0_0_15px_var(--shadow-color)]
                           before:transition-all before:duration-500
                           group-hover:before:border-[--border-hover-color]
                           group-hover:before:shadow-[0_0_25px_var(--shadow-hover-color)]"
                 style={{
                    '--border-color': SUBTLE_BORDER_COLOR,
                    '--border-hover-color': SUBTLE_BORDER_HOVER_COLOR,
                    '--shadow-color': GOLD_SHADOW_COLOR,
                    '--shadow-hover-color': GOLD_SHADOW_HOVER_COLOR,
                  } as React.CSSProperties}
               >
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {CONTACT_INFO.map((info, index) => (
                    <div key={index} className="flex items-start gap-3 group/item">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0
                                  group-hover/item:bg-gold/20 transition-colors duration-300">
                        <info.icon className="w-4 h-4 text-text-secondary group-hover/item:text-gold transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold mb-1 text-text-primary">
                          {info.title}
                        </h3>
                        <div className="text-sm text-text-secondary" dangerouslySetInnerHTML={{ __html: info.content }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group">
               <div
                className="relative rounded-xl bg-black/40 p-6 md:p-8 backdrop-blur-sm h-full
                           before:pointer-events-none before:absolute before:inset-0 before:rounded-xl
                           before:border before:border-[--border-color]
                           before:shadow-[0_0_15px_var(--shadow-color)]
                           before:transition-all before:duration-500
                           group-hover:before:border-[--border-hover-color]
                           group-hover:before:shadow-[0_0_25px_var(--shadow-hover-color)]"
                 style={{
                    '--border-color': SUBTLE_BORDER_COLOR,
                    '--border-hover-color': SUBTLE_BORDER_HOVER_COLOR,
                    '--shadow-color': GOLD_SHADOW_COLOR,
                    '--shadow-hover-color': GOLD_SHADOW_HOVER_COLOR,
                  } as React.CSSProperties}
               >
                <div className="relative z-10">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text" name="name" placeholder="Your Name" required
                      className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-[--input-border] text-text-primary placeholder-text-secondary/70 focus:border-[--input-focus] focus:ring-0 transition-colors duration-300 outline-none"
                      style={{ '--input-border': INPUT_BORDER_COLOR, '--input-focus': INPUT_FOCUS_BORDER_COLOR } as React.CSSProperties}
                    />
                    <input
                      type="email" name="email" placeholder="Your Email" required
                      className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-[--input-border] text-text-primary placeholder-text-secondary/70 focus:border-[--input-focus] focus:ring-0 transition-colors duration-300 outline-none"
                       style={{ '--input-border': INPUT_BORDER_COLOR, '--input-focus': INPUT_FOCUS_BORDER_COLOR } as React.CSSProperties}
                   />
                    <textarea
                      name="message" placeholder="Your Message" rows={4} required
                      className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-[--input-border] text-text-primary placeholder-text-secondary/70 focus:border-[--input-focus] focus:ring-0 transition-colors duration-300 resize-none outline-none"
                      style={{ '--input-border': INPUT_BORDER_COLOR, '--input-focus': INPUT_FOCUS_BORDER_COLOR } as React.CSSProperties}
                    />
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 rounded-lg
                                 bg-gradient-to-r from-blue-800 to-indigo-500
                                 hover:from-blue-900 hover:to-indigo-600
                                 text-white font-semibold text-base tracking-wider
                                 transform transition-all duration-300
                                 hover:scale-[1.02] active:scale-[0.98]
                                 border border-white/10
                                 shadow-[0_0_12px_rgba(59,130,246,0.5)]
                                 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]
                                 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
                                 flex items-center justify-center gap-2"
                      >
                         {isSubmitting ? ( <>...</> ) : ( 'Send Message' )}
                      </button>

                      {submitStatus === 'success' && ( <p className="text-center text-sm text-green-400 mt-3">Message sent successfully!</p> )}
                      {submitStatus === 'error' && ( <p className="text-center text-sm text-red-400 mt-3">Failed to send message. Please try again.</p> )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
