import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar, User, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "(516) 324-5483",
      subtext: "Available 24/7 for immediate bookings"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@opulentts.com",
      subtext: "We respond within 30 minutes"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Service Area",
      details: "New York Metro",
      subtext: "NYC, JFK, LGA, Newark & Surrounding Areas"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Operating Hours",
      details: "24/7 Service",
      subtext: "Round-the-clock luxury transportation"
    }
  ];

  const services = [
    "Airport Transfer",
    "Corporate Travel",
    "Wedding Transportation",
    "Special Events",
    "City Tours",
    "Group Transportation",
    "Hourly Service",
    "Other"
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
                  Get In Touch
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-playfair">
                Contact <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Us</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Ready to experience luxury transportation? Get in touch with our team 
                to book your journey or discuss your specific requirements.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-bold text-white mb-8 font-playfair">
                    Get In Touch
                  </h3>
                  <p className="text-white/70 mb-8 text-lg">
                    Our dedicated team is available around the clock to ensure your luxury 
                    transportation needs are met with precision and elegance.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start space-x-4 bg-gradient-to-br from-black/60 via-black/40 to-black/60 
                               backdrop-blur-2xl border border-white/20 rounded-2xl p-6
                               hover:border-yellow-500/30 transition-all duration-300"
                    >
                      <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 
                                    rounded-xl border border-yellow-500/30 text-yellow-500">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{info.title}</h4>
                        <p className="text-yellow-400 font-semibold mb-1">{info.details}</p>
                        <p className="text-white/60 text-sm">{info.subtext}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 
                           border border-yellow-500/30 rounded-2xl p-6"
                >
                  <h4 className="text-white font-bold text-lg mb-3">
                    Need Immediate Service?
                  </h4>
                  <p className="text-white/70 mb-4">
                    For urgent bookings or last-minute requests, call us directly.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 
                             text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-400 hover:to-yellow-500
                             transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call (516) 324-5483</span>
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Booking Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 
                         backdrop-blur-2xl border border-white/20 rounded-3xl p-8"
              >
                {!isSubmitted ? (
                  <>
                    <h3 className="text-3xl font-bold text-white mb-8 font-playfair">
                      Book Your Journey
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white font-semibold mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Full Name *
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 
                                     rounded-xl text-white placeholder-white/50 focus:outline-none 
                                     focus:border-yellow-500 focus:bg-white/15 transition-all duration-300"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-white font-semibold mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email Address *
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 
                                     rounded-xl text-white placeholder-white/50 focus:outline-none 
                                     focus:border-yellow-500 focus:bg-white/15 transition-all duration-300"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white font-semibold mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Phone Number *
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 
                                     rounded-xl text-white placeholder-white/50 focus:outline-none 
                                     focus:border-yellow-500 focus:bg-white/15 transition-all duration-300"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <label className="block text-white font-semibold mb-2">Service Type *</label>
                          <motion.select
                            whileFocus={{ scale: 1.02 }}
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 
                                     rounded-xl text-white focus:outline-none focus:border-yellow-500 
                                     focus:bg-white/15 transition-all duration-300"
                          >
                            <option value="" className="bg-black">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service} className="bg-black">
                                {service}
                              </option>
                            ))}
                          </motion.select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white font-semibold mb-2">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Preferred Date
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 
                                     rounded-xl text-white focus:outline-none focus:border-yellow-500 
                                     focus:bg-white/15 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-white font-semibold mb-2">
                            <Clock className="w-4 h-4 inline mr-2" />
                            Preferred Time
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 
                                     rounded-xl text-white focus:outline-none focus:border-yellow-500 
                                     focus:bg-white/15 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Additional Details
                        </label>
                        <motion.textarea
                          whileFocus={{ scale: 1.02 }}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 
                                   rounded-xl text-white placeholder-white/50 focus:outline-none 
                                   focus:border-yellow-500 focus:bg-white/15 transition-all duration-300 resize-none"
                          placeholder="Please provide pickup/drop-off locations, special requirements, or any other details..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center space-x-3 
                                 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black 
                                 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-yellow-500
                                 shadow-[0_10px_40px_rgba(147,113,39,0.3)] transition-all duration-300"
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Booking Request</span>
                      </motion.button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Thank You!
                    </h3>
                    <p className="text-white/70 mb-6">
                      Your booking request has been received. Our team will contact you within 
                      30 minutes to confirm your reservation and provide further details.
                    </p>
                    <p className="text-yellow-400 font-semibold">
                      Reference: OTS-{Date.now().toString().slice(-6)}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Enhanced Footer */}
            <motion.footer 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
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

export default ContactSection;