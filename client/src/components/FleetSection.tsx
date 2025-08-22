import React from 'react';

const FleetSection = () => {
  const vehicles = [
    {
      name: "Mercedes S-Class",
      type: "Luxury Sedan",
      capacity: "Up to 3 passengers",
      features: ["Executive comfort", "Premium amenities", "Professional chauffeur"]
    },
    {
      name: "BMW X7",
      type: "Luxury SUV", 
      capacity: "Up to 6 passengers",
      features: ["Spacious interior", "Advanced technology", "All-weather capability"]
    },
    {
      name: "Cadillac Escalade",
      type: "Premium SUV",
      capacity: "Up to 7 passengers",
      features: ["Group transportation", "Luxury appointments", "Ample luggage space"]
    },
    {
      name: "Mercedes Sprinter",
      type: "Executive Van",
      capacity: "Up to 14 passengers",
      features: ["Corporate events", "Group transfers", "Premium comfort"]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Our Fleet</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A carefully curated selection of premium vehicles, meticulously maintained 
            and equipped with the finest amenities for your comfort and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3>
              <p className="text-yellow-500 font-semibold mb-2">{vehicle.type}</p>
              <p className="text-white/70 mb-4">{vehicle.capacity}</p>
              
              <div className="space-y-2">
                {vehicle.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FleetSection;