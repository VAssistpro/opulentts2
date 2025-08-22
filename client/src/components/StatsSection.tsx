import React from 'react';
import { Clock, Star, Users, Shield } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: "10+",
      subtitle: "Years of Excellence"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "5.0★",
      subtitle: "Perfect Rating"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "24/7",
      subtitle: "Always Available"
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: "100%",
      subtitle: "Client Satisfaction"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-yellow-500" />,
      title: "Safety First",
      description: "Professional chauffeurs with extensive safety training and background checks"
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-500" />,
      title: "Punctuality", 
      description: "Guaranteed on-time service with real-time flight tracking"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Excellence",
      description: "Committed to delivering the highest standards of luxury service"
    }
  ];

  const serviceAreas = [
    "Manhattan", "Brooklyn & Queens", "JFK • LGA • EWR", 
    "Westchester", "Long Island", "Connecticut"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">About Us</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Opulent Transport Solutions has been New York's premier luxury transportation service, 
            setting the standard for excellence in chauffeur services.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:bg-white/5 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.title}</h3>
              <p className="text-white/70">{stat.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:bg-white/5 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-yellow-500 mb-6">Service Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-white/80 font-medium">
                • {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;