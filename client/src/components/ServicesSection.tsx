import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Building2, Map, Wine, Users, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8 text-yellow-500" />,
      title: "Airport Transfers",
      description: "Seamless airport transportation with flight tracking and meet & greet service",
      features: ["Flight Monitoring", "Meet & Greet", "Luggage Assistance", "Multiple Airports"],
      price: "From $85",
      popular: true
    },
    {
      icon: <Building2 className="w-8 h-8 text-yellow-500" />,
      title: "Corporate Travel",
      description: "Professional transportation solutions for business executives and teams",
      features: ["Executive Sedans", "Team Transport", "Flexible Billing", "24/7 Support"],
      price: "From $75",
      popular: false
    },
    {
      icon: <Map className="w-8 h-8 text-yellow-500" />,
      title: "City Tours",
      description: "Customized tours of New York City with knowledgeable chauffeurs",
      features: ["Custom Routes", "Local Expertise", "Photo Stops", "Flexible Duration"],
      price: "From $120/hr",
      popular: false
    },
    {
      icon: <Wine className="w-8 h-8 text-yellow-500" />,
      title: "Special Events",
      description: "Luxury transportation for weddings, galas, and special occasions",
      features: ["Event Coordination", "Premium Vehicles", "Red Carpet Service", "Photo Ready"],
      price: "From $150",
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Group Transportation",
      description: "Comfortable and efficient transport for groups of any size",
      features: ["Large Capacity", "Group Coordination", "Multiple Stops", "Event Sync"],
      price: "From $200",
      popular: false
    },
    {
      icon: <Calendar className="w-8 h-8 text-yellow-500" />,
      title: "Hourly Service",
      description: "Flexible hourly booking for meetings, events, or personal errands",
      features: ["Flexible Timing", "Wait Time Included", "Multiple Stops", "Personal Chauffeur"],
      price: "From $95/hr",
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 pt-24 pb-8">
      <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500/50 scrollbar-track-transparent">
        <div className="min-h-full flex items-start justify-center px-4 py-8">
          <div className="max-w-7xl w-full">
            {/* Enhanced Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 mb-6 rounded-full 
                           bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 
                           border border-yellow-500/30 backdrop-blur-sm"
              >
                <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                  Premium Services
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-playfair">
                Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Comprehensive luxury transportation solutions tailored to your needs, 
                delivered with unmatched professionalism and attention to detail.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative bg-gradient-to-br from-black/60 via-black/40 to-black/60 
                            backdrop-blur-2xl border rounded-3xl p-8 
                            hover:shadow-[0_20px_60px_rgba(147,113,39,0.2)]
                            transition-all duration-500 group overflow-hidden
                            ${service.popular 
                              ? 'border-yellow-500/50 ring-2 ring-yellow-500/20' 
                              : 'border-white/20 hover:border-yellow-500/30'
                            }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-yellow-600 
                               text-black text-xs font-bold px-3 py-1 rounded-full"
                    >
                      Most Popular
                    </motion.div>
                  )}

                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <div className="relative z-10">
                    {/* Icon and Price */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className="p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-2xl
                                 border border-yellow-500/30 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        {service.icon}
                      </motion.div>
                      <div className="text-right">
                        <div className="text-yellow-500 font-bold text-lg">{service.price}</div>
                        <div className="text-white/60 text-sm">per trip</div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-100 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.1, duration: 0.3 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span className="text-white/80 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center space-x-2 
                               bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 
                               hover:from-yellow-500/30 hover:to-yellow-600/30
                               border border-yellow-500/30 hover:border-yellow-500/50
                               text-white font-semibold py-3 rounded-xl
                               transition-all duration-300 group/btn"
                    >
                      <span>Book Now</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4 group-hover/btn:text-yellow-400 transition-colors" />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-center bg-gradient-to-r from-black/60 via-black/40 to-black/60 
                         backdrop-blur-2xl border border-white/20 rounded-3xl p-12 mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                We offer bespoke transportation services tailored to your specific requirements. 
                Contact our team to discuss your unique needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black 
                         px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-yellow-500
                         shadow-[0_10px_40px_rgba(147,113,39,0.3)] transition-all duration-300"
              >
                Get Custom Quote
              </motion.button>
            </motion.div>

            {/* Enhanced Footer */}
            <motion.footer 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="bg-black/60 backdrop-blur-2xl border-t border-white/20 rounded-t-3xl py-12"
            >
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                  <div className="text-white/60">
                    © 2024 Opulent Transport Solutions. All rights reserved.
                  </div>
                  <motion.div 
                    className="flex items-center space-x-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src="https://opulentts.com/bgvideo/otsnobg.png"
                      alt="Opulent"
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-yellow-500 font-bold text-lg">Opulent Transport</span>
                  </motion.div>
                  <div className="text-white/60 font-semibold">
                    (516) 324-5483
                  </div>
                </div>
              </div>
            </motion.footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;