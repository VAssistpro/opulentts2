import React, { useState, useRef } from 'react';
import { CONTACT_INFO } from '../../utils/constants';
import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';

// You will need to replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key
// from Google Cloud Platform. Maps Embed API must be enabled.
// https://developers.google.com/maps/documentation/embed/get-api-key
const GOOGLE_MAPS_API_KEY = 'AIzaSyBk4NlerXRKS-RGvCjEr2xLJH7iiyycnD8';
const LOCATION_ADDRESS = '59 John St Plainview NY'; // Corrected address
const encodedAddress = encodeURIComponent(LOCATION_ADDRESS);
const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodedAddress}&zoom=15`; // Added zoom level

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

  // RGB for a warm yellow/gold shadow, similar to Tailwind yellow-500/amber-500
  const BUTTON_GOLD_SHADOW_RGB = '234, 179, 67'; // Example: RGB for a gold color
  const BUTTON_GOLD_SHADOW_COLOR = `rgba(${BUTTON_GOLD_SHADOW_RGB}, 0.5)`;
  const BUTTON_GOLD_SHADOW_HOVER_COLOR = `rgba(${BUTTON_GOLD_SHADOW_RGB}, 0.7)`;


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // In a real application, you would send the form data (name, email, phone, message)
    // to your backend API here using fetch or a library like axios.
    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone'); // Get the phone field value
    const message = formData.get('message');

    console.log('Simulating form submission:', { name, email, phone, message }); // Log the data including phone

    try {
      // Replace this simulation with your actual API call
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request time
      // const response = await fetch('/your-api-endpoint', { method: 'POST', body: formData });
      // if (!response.ok) throw new Error('Network response was not ok.');
      setSubmitStatus('success');
      formRef.current.reset(); // Reset form only on success
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4000); // Hide status message after 4 seconds
    }
  };

  return (
    <div className="h-full flex flex-col items-center relative py-1 md:py-2">
      <div className="relative z-10 container mx-auto px-2 md:px-4">
        <AnimatedSection>
           <SectionTitle title="Contact Us" />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          {/* Container for Contact Info and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mt-2 md:mt-4">
            {/* Contact Info Column */}
            <div className="group">
              <div
                className="relative rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 md:p-8 h-full
                           shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                           hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300
                           before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none"
               >
                <div className="relative z-10 grid grid-cols-1 gap-4 md:gap-6">
                  {CONTACT_INFO.map((info, index) => (
                    <div key={index} className="flex items-start gap-3 group/item mb-4 last:mb-0">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0
                                  group-hover/item:bg-gold/20 transition-colors duration-300">
                        <info.icon className="w-4 h-4 text-black/60 dark:text-white/60 group-hover/item:text-gold transition-colors" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-semibold mb-1 text-black dark:text-white">
                          {info.title}
                        </h3>
                        <div className="text-sm text-black/80 dark:text-white/80 break-words" dangerouslySetInnerHTML={{ __html: info.content }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="group">
               <div
                className="relative rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 md:p-8 h-full
                           shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                           hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-300
                           before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none"
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
                    <input
                      type="tel" name="phone" placeholder="Your Phone Number" required
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
                                 bg-gradient-to-r from-yellow-800 to-yellow-600 {/* <-- Changed to gold gradient */}
                                 hover:from-yellow-900 hover:to-yellow-700 {/* <-- Changed to darker gold on hover */}
                                 text-black font-semibold text-base tracking-wider {/* <-- Changed text color to black for contrast */}
                                 transform transition-all duration-300
                                 hover:scale-[1.02] active:scale-[0.98]
                                 border border-white/10
                                 shadow-[0_0_12px_var(--button-shadow-color)] {/* <-- Using variable for shadow */}
                                 hover:shadow-[0_0_20px_var(--button-shadow-hover-color)] {/* <-- Using variable for hover shadow */}
                                 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
                                 flex items-center justify-center gap-2"
                        style={{
                           '--button-shadow-color': BUTTON_GOLD_SHADOW_COLOR,
                           '--button-shadow-hover-color': BUTTON_GOLD_SHADOW_HOVER_COLOR,
                        } as React.CSSProperties}
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

          {/* --- ADDED GOOGLE MAP SECTION --- */}
          <div className="max-w-6xl mx-auto mt-6 md:mt-8 w-full">
             <div
                className="group relative rounded-xl bg-black/40 p-4 md:p-6 backdrop-blur-sm h-full
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
                <div className="relative z-10 w-full h-96 md:h-[450px] rounded-lg overflow-hidden">
                  <iframe
                    src={googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Map of ${LOCATION_ADDRESS}`}
                  ></iframe>
                </div>
              </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;