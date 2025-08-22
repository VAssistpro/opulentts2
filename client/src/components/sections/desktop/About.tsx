import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../../../data/fleet/features';
import { Award, Users, Clock, Shield, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const companyStats = [
    { icon: Award, value: "10+", label: "Years of Excellence" },
    { icon: Users, value: "1000+", label: "Satisfied Clients" },
    { icon: Clock, value: "24/7", label: "Service Available" },
    { icon: Shield, value: "100%", label: "Insured & Licensed" },
  ];

  const aboutPoints = [
    "Professional chauffeurs with extensive training",
    "Meticulously maintained luxury vehicle fleet",
    "Comprehensive insurance and licensing",
    "24/7 customer support and availability",
    "Competitive pricing with no hidden fees",
    "Real-time tracking and communication"
  ];

  return (
    <div id="about" className="relative w-full py-8 px-4 min-h-screen">

      {/* Background Elements - Non-fixed for scrollable container */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,113,39,0.1)_0%,transparent_50%)] -z-10" />

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
            About <span className="text-gold">Opulent Transport</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-8"></div>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Since our establishment, Opulent Transport Solutions has been setting the standard
            for luxury transportation in New York City, delivering unparalleled service with
            elegance, reliability, and sophistication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our <span className="text-gold">Commitment</span>
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                At Opulent Transport Solutions, we understand that luxury is in the details.
                Every journey with us is crafted to exceed expectations, from the moment you
                book until you reach your destination.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Our team of professional chauffeurs and pristine fleet of luxury vehicles
                ensure that every client experiences the finest in comfort, safety, and style.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gold mb-4">Why Choose Us:</h4>
              <div className="grid grid-cols-1 gap-3">
                {aboutPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-white/90">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Statistics and Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Company Statistics */}
            <div className="grid grid-cols-2 gap-6">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-gold/30
                           hover:bg-black/60 hover:border-gold/50 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Core Features */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-gold">Our Core Values</h4>
              <div className="grid grid-cols-1 gap-4">
                {(FEATURES && FEATURES.length > 0 ? FEATURES : [
                  { icon: Shield, title: 'Safety First', description: 'Professional chauffeurs with extensive safety training and background checks' },
                  { icon: Clock, title: 'Punctuality', description: 'Guaranteed on-time service with real-time flight tracking' },
                  { icon: Award, title: 'Excellence', description: 'Committed to delivering the highest standards of luxury service' },
                  { icon: Star, title: '24/7 Support', description: 'Round-the-clock customer support and meticulous attention to every detail' }
                ]).slice(0, 4).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-black/30 backdrop-blur-xl rounded-xl border border-white/10
                             hover:bg-black/50 hover:border-gold/30 transition-all duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="text-white font-semibold mb-1">{feature.title}</h5>
                      <p className="text-white/80 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-8 bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl border border-gold/20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Experience Luxury Transportation?
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Join our distinguished clientele and discover why Opulent Transport Solutions
            is New York's premier choice for luxury travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15163245483"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold text-black
                       font-semibold rounded-xl hover:bg-gold-dark transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (516) 324-5483
            </a>
            <button
              onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-gold
                       text-gold font-semibold rounded-xl hover:bg-gold hover:text-black transition-all duration-300"
            >
              Book Online Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
