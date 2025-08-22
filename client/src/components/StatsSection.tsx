import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Star, Shield, Globe, Car, Zap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "1000+",
      label: "Satisfied Clients",
      description: "Professional executives, celebrities, and discerning travelers trust our service"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "5.0",
      label: "Star Rating",
      description: "Consistently rated as the top luxury transport service in New York"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "99.8%",
      label: "On-Time Rate",
      description: "Punctuality is our promise - we value your time as much as you do"
    },
    {
      icon: <Car className="w-8 h-8" />,
      number: "25+",
      label: "Premium Vehicles",
      description: "Meticulously maintained fleet of luxury sedans, SUVs, and specialty vehicles"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed & Insured",
      description: "Fully licensed with comprehensive insurance coverage for your peace of mind"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Chauffeurs",
      description: "Expertly trained, uniformed professionals with extensive NYC knowledge"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock service for all your transportation needs, any day of the year"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Booking",
      description: "Quick and easy booking process with immediate confirmation and updates"
    }
  ];

  const achievements = [
    "NYC's Premier Luxury Transport Service",
    "Trusted by Fortune 500 Companies",
    "Celebrity & VIP Transportation Specialist",
    "Wedding & Event Transportation Expert",
    "Airport Transfer Professionals",
    "Corporate Travel Solutions Provider"
  ];

  return (
    <div className="fixed inset-0 pt-24 pb-8">
      <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500/50 scrollbar-track-transparent">
        <div className="min-h-full flex items-start justify-center px-4 py-8">
          <div className="max-w-7xl w-full">
            {/* Header */}
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
                  About Us
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-playfair">
                Excellence in <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Numbers</span>
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Since our inception, Opulent Transport Solutions has set the gold standard 
                for luxury transportation in New York City. Our commitment to excellence 
                speaks through our achievements and the trust of our valued clients.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center bg-gradient-to-br from-black/60 via-black/40 to-black/60 
                           backdrop-blur-2xl border border-white/20 rounded-3xl p-8
                           hover:border-yellow-500/30 hover:shadow-[0_20px_60px_rgba(147,113,39,0.2)]
                           transition-all duration-500 group"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 mb-6
                             bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 
                             rounded-2xl border border-yellow-500/30 text-yellow-500
                             group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-4xl font-bold text-yellow-500 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <h3 className="text-white font-bold text-lg mb-3">{stat.label}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-white mb-4 font-playfair">
                  Why Choose <span className="text-yellow-500">Opulent Transport?</span>
                </h3>
                <p className="text-white/70 max-w-3xl mx-auto">
                  Our commitment to excellence goes beyond transportation - we deliver experiences 
                  that exceed expectations through unmatched service quality and attention to detail.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start space-x-4 bg-gradient-to-br from-black/60 via-black/40 to-black/60 
                             backdrop-blur-2xl border border-white/20 rounded-2xl p-6
                             hover:border-yellow-500/30 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 
                                  rounded-xl border border-yellow-500/30 text-yellow-500 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                      <p className="text-white/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 
                         backdrop-blur-2xl border border-white/20 rounded-3xl p-12 mb-16"
            >
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold text-white mb-4 font-playfair">
                  Our <span className="text-yellow-500">Recognition</span>
                </h3>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Industry recognition and client testimonials that validate our position 
                  as New York's premier luxury transportation service.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm 
                             border border-white/10 rounded-xl p-4 hover:bg-white/10 
                             hover:border-yellow-500/30 transition-all duration-300"
                  >
                    <Award className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-white font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="text-center bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 
                         border border-yellow-500/30 rounded-3xl p-12 mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Experience the Opulent Difference
              </h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Join the ranks of satisfied clients who have experienced the pinnacle 
                of luxury transportation. Your journey of excellence begins with a single click.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black 
                         px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-yellow-500
                         shadow-[0_10px_40px_rgba(147,113,39,0.3)] transition-all duration-300"
              >
                Start Your Luxury Journey
              </motion.button>
            </motion.div>

            {/* Enhanced Footer */}
            <motion.footer 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
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

export default StatsSection;