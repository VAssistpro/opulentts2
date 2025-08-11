import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedElement from '../ui/AnimatedElement';
import BookingWidget from '../booking/BookingWidget';

const Booking = () => {
  return (
    <section id="book" className="relative py-1 min-h-screen overflow-auto">
      {/* Glassmorphic Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-1">
        <AnimatedElement>
          <SectionTitle
            title="Book Your Luxury Experience"
            description="Reserve your premium transportation service with our secure online booking system"
            titleClassName="text-gold"
            descriptionClassName="text-white/90"
          />
        </AnimatedElement>

        <AnimatedElement delay={200}>
          <div className="max-w-6xl mx-auto">
            <BookingWidget />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Booking;