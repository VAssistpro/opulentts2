import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../../utils/constants';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  return (
    <div id="services" className="relative w-full py-8 px-4 min-h-screen">

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,113,39,0.1)_0%,transparent_50%)] -z-10" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-gold">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-8"></div>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Experience the finest in luxury transportation with our comprehensive range of
            premium services, tailored to meet your every need.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className="relative h-full p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10
                           hover:bg-black/60 hover:border-gold/30 transition-all duration-500
                           hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/20"
              >
                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl
                                flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-gold" />
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Benefits */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>Professional chauffeurs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>Luxury vehicles</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>24/7 availability</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-6 h-6 text-gold" />
                </div>

                {/* Bottom Border Effect */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gold to-gold-dark
                              group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl border border-gold/20 p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Service <span className="text-gold">Guarantee</span>
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              We stand behind every ride with our commitment to excellence and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-gold" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">On-Time Guarantee</h4>
              <p className="text-white/80">Your chauffeur will arrive 15 minutes early, every time.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-gold fill-gold" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">5-Star Service</h4>
              <p className="text-white/80">Professional, courteous, and immaculately dressed chauffeurs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">100% Satisfaction</h4>
              <p className="text-white/80">Your satisfaction is guaranteed, or we'll make it right.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black font-semibold
                       rounded-xl hover:bg-gold-dark transition-all duration-300 hover:scale-105"
            >
              Book Your Service Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
