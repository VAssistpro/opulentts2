import React from 'react';
import { Plane, Building2, Map, Wine, Users, Calendar } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Plane className="w-12 h-12 text-yellow-500" />,
      title: "Airport Transfers",
      description: "Seamless airport transportation with flight tracking and meet & greet service"
    },
    {
      icon: <Building2 className="w-12 h-12 text-yellow-500" />,
      title: "Corporate Travel",
      description: "Professional transportation solutions for business executives and teams"
    },
    {
      icon: <Map className="w-12 h-12 text-yellow-500" />,
      title: "City Tours",
      description: "Customized tours of New York City with knowledgeable chauffeurs"
    },
    {
      icon: <Wine className="w-12 h-12 text-yellow-500" />,
      title: "Special Events",
      description: "Luxury transportation for weddings, galas, and special occasions"
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      title: "Group Transportation",
      description: "Comfortable and efficient transport for groups of any size"
    },
    {
      icon: <Calendar className="w-12 h-12 text-yellow-500" />,
      title: "Hourly Service",
      description: "Flexible hourly booking for meetings, events, or personal errands"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/5 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;