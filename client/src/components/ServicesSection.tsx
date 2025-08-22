import React from 'react';
import { Car, Plane, Users, Crown } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Car className="w-12 h-12 text-yellow-500" />,
      title: "Executive Transportation",
      description: "Professional chauffeur services for business executives and VIP clients with luxury sedans and SUVs."
    },
    {
      icon: <Plane className="w-12 h-12 text-yellow-500" />,
      title: "Airport Transfers",
      description: "Reliable and punctual airport transportation to JFK, LGA, and EWR with flight monitoring."
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      title: "Group Events",
      description: "Spacious vehicles for corporate events, weddings, and special occasions with professional service."
    },
    {
      icon: <Crown className="w-12 h-12 text-yellow-500" />,
      title: "Luxury Experiences",
      description: "Premium transportation for special events, theater shows, fine dining, and exclusive experiences."
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive luxury transportation solutions tailored to your needs, 
            delivered with unmatched professionalism and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;