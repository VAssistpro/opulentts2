import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../ui/SectionTitle';
import BookingWidget from '../../booking/BookingWidget';
import GlassmorphicCard from '../../ui/GlassmorphicCard';

const Booking = () => {
  return (
    <div className="h-full relative py-2">
      {/* Glassmorphic Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      <div className="relative z-10 container mx-auto px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Book Your Luxury Experience"
            description="Reserve your premium transportation service with our secure online booking system"
            titleClassName="text-gold"
            descriptionClassName="text-white/90"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <GlassmorphicCard className="p-2 mt-2 overflow-hidden">
            <div className="h-[650px] custom-scrollbar">
              <BookingWidget />
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;