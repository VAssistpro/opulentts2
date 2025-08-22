import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-yellow-500" />,
      title: "Phone",
      content: "(516) 324-5483"
    },
    {
      icon: <Mail className="w-6 h-6 text-yellow-500" />,
      title: "Email", 
      content: "reservations@opulentts.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-yellow-500" />,
      title: "Address",
      content: "59 John St Plainview, NY 11803"
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-500" />,
      title: "Hours",
      content: "24/7 Service Available"
    }
  ];

  return (
    <div className="fixed inset-0 pt-24 pb-8">
      <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500/50 scrollbar-track-transparent">
        <div className="min-h-full flex items-start justify-center px-4 py-8">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to experience luxury transportation? Get in touch with us to book your journey 
                or learn more about our premium services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        {info.icon}
                        <div>
                          <h4 className="text-white font-semibold">{info.title}</h4>
                          <p className="text-white/70">{info.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-500"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-500"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-500"
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="airport">Airport Transfers</option>
                      <option value="corporate">Corporate Travel</option>
                      <option value="tours">City Tours</option>
                      <option value="events">Special Events</option>
                      <option value="group">Group Transportation</option>
                      <option value="hourly">Hourly Service</option>
                    </select>
                  </div>
                  
                  <textarea
                    name="message"
                    placeholder="Tell us about your transportation needs..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-500"
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors"
                  >
                    Send Request
                  </button>
                </form>
              </div>
            </div>

            {/* Footer */}
            <footer className="bg-black/80 backdrop-blur-xl border-t border-white/20 py-8 mt-16">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="text-white/60">
                    © 2024 Opulent Transport Solutions. All rights reserved.
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://opulentts.com/bgvideo/otsnobg.png"
                      alt="Opulent"
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-yellow-500 font-semibold">Opulent Transport</span>
                  </div>
                  <div className="text-white/60">
                    (516) 324-5483
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;