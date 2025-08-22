import React from 'react';

const FleetSection = () => {
  const vehicles = [
    {
      name: "Mercedes S Class",
      description: "Ultimate luxury sedan experience",
      capacity: "3 Passengers",
      luggage: 3,
      features: ["Leather Seats", "Climate Control", "WiFi Available", "Bottled Water"]
    },
    {
      name: "Cadillac CT5",
      description: "Sophisticated luxury sedan with modern amenities",
      capacity: "3 Passengers", 
      luggage: 3,
      features: ["Leather Seats", "Climate Control", "WiFi Available", "Bottled Water", "USB Charging"]
    },
    {
      name: "Mercedes Jet Sprinter",
      description: "Luxurious and spacious for group travel",
      capacity: "12 Passengers",
      luggage: 8,
      features: ["Leather Seats", "Climate Control", "WiFi Available", "Entertainment System", "Premium Sound System"]
    },
    {
      name: "Mercedes Sprinter Limo",
      description: "Experience the ultimate in luxury limousine service",
      capacity: "10 Passengers",
      luggage: 6,
      features: ["Leather Seats", "Climate Control", "Wet Bar", "Premium Sound System", "Mood Lighting"]
    },
    {
      name: "Cadillac Escalade",
      description: "Premium luxury SUV with commanding presence",
      capacity: "7 Passengers",
      luggage: 6,
      features: ["Leather Seats", "Climate Control", "Premium Sound System", "Panoramic Sunroof", "Advanced Technology"]
    },
    {
      name: "Chevrolet Suburban",
      description: "Spacious and comfortable SUV for any occasion",
      capacity: "7 Passengers",
      luggage: 5,
      features: ["Leather Seats", "Climate Control", "Premium Sound System", "USB Charging Ports", "Ample Luggage Space"]
    }
  ];

  return (
    <div className="fixed inset-0 pt-24 pb-8">
      <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500/50 scrollbar-track-transparent">
        <div className="min-h-full flex items-start justify-center px-4 py-8">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Our Fleet</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                A carefully curated selection of premium vehicles, meticulously maintained 
                and equipped with the finest amenities for your comfort and convenience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles.map((vehicle, index) => (
                <div key={index} className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/5 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3>
                  <p className="text-white/70 mb-3">{vehicle.description}</p>
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-yellow-500 font-semibold">{vehicle.capacity}</span>
                    <span className="text-white/60">{vehicle.luggage} Bags</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm mb-3">Features:</h4>
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetSection;