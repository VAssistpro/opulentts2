import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Corporate Executive",
      content: "Exceptional service every time. The professionalism and attention to detail is unmatched. My go-to for all business transportation needs.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Event Coordinator",
      content: "Opulent Transport made our corporate event seamless. Their luxury vehicles and professional chauffeurs exceeded all expectations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Wedding Planner",
      content: "Absolutely perfect for special occasions. The vehicles are immaculate and the service is white-glove. Highly recommended!",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Business Traveler",
      content: "Reliable, punctual, and luxurious. Their airport service is fantastic - they track flights and are always on time.",
      rating: 5
    }
  ];

  return (
    <div className="fixed inset-0 pt-24 pb-8">
      <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500/50 scrollbar-track-transparent">
        <div className="min-h-full flex items-start justify-center px-4 py-8">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Client Reviews</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our valued clients say about 
                their experiences with Opulent Transport Solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60">{testimonial.role}</p>
                  </div>
                </div>
              ))}
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

export default TestimonialsSection;