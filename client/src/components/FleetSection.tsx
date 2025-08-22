import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const FleetSection = () => {
  const [activeVehicle, setActiveVehicle] = useState(0);

  const vehicles = [
    {
      name: "Mercedes S Class",
      category: "Executive Sedan",
      description: "Ultimate luxury sedan experience with premium comfort and sophistication",
      capacity: "3 Passengers",
      luggage: 3,
      price: "From $85",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
      features: ["Heated Leather Seats", "Climate Control", "WiFi Available", "Bottled Water", "Phone Chargers"],
      ideal: ["Airport Transfers", "Business Meetings", "Executive Travel"]
    },
    {
      name: "Cadillac CT5",
      category: "Luxury Sedan", 
      description: "Sophisticated luxury sedan with modern amenities and cutting-edge technology",
      capacity: "3 Passengers",
      luggage: 3,
      price: "From $75",
      image: "https://images.unsplash.com/photo-1606016159991-226fccb5e306?auto=format&fit=crop&w=800&q=80",
      features: ["Leather Seats", "Climate Control", "WiFi Available", "Bottled Water", "USB Charging"],
      ideal: ["City Tours", "Date Nights", "Airport Transfers"]
    },
    {
      name: "Mercedes Jet Sprinter",
      category: "Luxury Van",
      description: "Luxurious and spacious for group travel with premium interior",
      capacity: "12 Passengers",
      luggage: 8,
      price: "From $200",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      features: ["Leather Seats", "Climate Control", "WiFi Available", "Entertainment System", "Premium Sound"],
      ideal: ["Group Events", "Corporate Transport", "Airport Groups"]
    },
    {
      name: "Mercedes Sprinter Limo",
      category: "Luxury Limousine",
      description: "Experience the ultimate in luxury limousine service with premium amenities",
      capacity: "10 Passengers",
      luggage: 6,
      price: "From $300",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
      features: ["Leather Seats", "Climate Control", "Wet Bar", "Premium Sound System", "Mood Lighting"],
      ideal: ["Weddings", "Special Events", "Celebrations"]
    },
    {
      name: "Cadillac Escalade",
      category: "Luxury SUV",
      description: "Premium luxury SUV with commanding presence and advanced features",
      capacity: "7 Passengers",
      luggage: 6,
      price: "From $120",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
      features: ["Leather Seats", "Climate Control", "Premium Sound", "Panoramic Sunroof", "Advanced Tech"],
      ideal: ["Family Travel", "VIP Transport", "Group Outings"]
    },
    {
      name: "Chevrolet Suburban",
      category: "Premium SUV",
      description: "Spacious and comfortable SUV perfect for any occasion with ample room",
      capacity: "7 Passengers", 
      luggage: 5,
      price: "From $100",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
      features: ["Leather Seats", "Climate Control", "Premium Sound", "USB Charging", "Ample Space"],
      ideal: ["Airport Groups", "Family Events", "Corporate Travel"]
    }
  ];

  const nextVehicle = () => {
    setActiveVehicle((prev) => (prev + 1) % vehicles.length);
  };

  const prevVehicle = () => {
    setActiveVehicle((prev) => (prev - 1 + vehicles.length) % vehicles.length);
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
                  Premium Fleet
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-playfair">
                Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Fleet</span>
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                A carefully curated selection of premium vehicles, meticulously maintained 
                and equipped with the finest amenities for your comfort and convenience.
              </p>
            </motion.div>

            {/* Featured Vehicle Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 
                         backdrop-blur-2xl border border-white/20 rounded-3xl p-8 mb-16 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVehicle}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Vehicle Image */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                      <img
                        src={vehicles[activeVehicle].image}
                        alt={vehicles[activeVehicle].name}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-yellow-400 font-semibold text-sm">
                          {vehicles[activeVehicle].category}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Vehicle Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-2 font-playfair">
                        {vehicles[activeVehicle].name}
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed">
                        {vehicles[activeVehicle].description}
                      </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex items-center space-x-8">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-yellow-500" />
                        <span className="text-white font-semibold">{vehicles[activeVehicle].capacity}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-5 h-5 text-yellow-500" />
                        <span className="text-white font-semibold">{vehicles[activeVehicle].luggage} Bags</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span className="text-yellow-500 font-bold text-lg">{vehicles[activeVehicle].price}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-white font-bold mb-3">Premium Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {vehicles[activeVehicle].features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.3 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                            <span className="text-white/80 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div>
                      <h4 className="text-white font-bold mb-3">Ideal For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicles[activeVehicle].ideal.map((use, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 
                                     rounded-full text-yellow-400 text-sm font-medium"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 
                               text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-yellow-500
                               shadow-[0_10px_40px_rgba(147,113,39,0.3)] transition-all duration-300"
                    >
                      <span>Book This Vehicle</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <motion.button
                  onClick={prevVehicle}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-500/50 
                           rounded-full text-white hover:text-yellow-400 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <div className="flex space-x-2">
                  {vehicles.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveVehicle(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeVehicle 
                          ? 'bg-yellow-500 scale-125' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextVehicle}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-500/50 
                           rounded-full text-white hover:text-yellow-400 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>

            {/* Vehicle Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {vehicles.map((vehicle, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setActiveVehicle(index)}
                  className={`cursor-pointer bg-gradient-to-br from-black/60 via-black/40 to-black/60 
                            backdrop-blur-2xl border rounded-2xl p-6 transition-all duration-300
                            ${index === activeVehicle 
                              ? 'border-yellow-500/50 ring-2 ring-yellow-500/20 shadow-[0_20px_60px_rgba(147,113,39,0.2)]' 
                              : 'border-white/20 hover:border-yellow-500/30'
                            }`}
                >
                  <div className="aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                  <p className="text-white/60 text-sm mb-3">{vehicle.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-500 font-bold">{vehicle.price}</span>
                    <span className="text-white/60 text-sm">{vehicle.capacity}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

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

export default FleetSection;