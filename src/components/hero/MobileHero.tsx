import React from 'react';
import { Info, Briefcase, Car, Mail, Phone, User, MessageSquare } from 'lucide-react';
import MobileHeroBackground from './MobileHeroBackground';

const MobileHero = () => {
  return (
    <div className="hero-section relative lg:hidden min-h-screen w-full">
      {/* Background */}
      <MobileHeroBackground />

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src="https://opulentts.com/bgvideo/otsnobg.png"
          alt="Opulent Logo"
          className="h-24 w-auto"
        />

        {/* Contact Icons */}
        <div className="flex gap-3">
          {[
            { icon: Phone, href: 'tel:+15163245483', tooltip: 'Call Us' },
            { icon: MessageSquare, href: 'sms:+15163245483', tooltip: 'SMS Us' }
          ].map(({ icon: Icon, href, tooltip }, index) => (
            <div key={index} className="relative group">
              <a
                href={href}
                className="p-3 rounded-full bg-black/90 border border-gold hover:bg-gold/20 
                         transition-all duration-300 shadow-lg hover:scale-110 block"
                aria-label={tooltip}
              >
                <Icon className="h-5 w-5 text-gold" />
              </a>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                           bg-black/90 text-gold text-xs px-2 py-1 rounded
                           opacity-0 group-hover:opacity-100 transition-opacity">
                {tooltip}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4 pt-32">
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-gold mb-4 leading-tight">
            Elevate Your Travel Experience
          </h1>
          <p className="text-lg sm:text-xl font-montserrat text-gray-300 mt-4">
            Premium transportation for business and leisure
          </p>
        </div>

        {/* Circular Navigation Menu */}
        <div className="relative w-72 h-72 mx-auto rounded-full border-4 border-gold/80 
                      flex items-center justify-center bg-black/40 backdrop-blur-sm
                      shadow-[0_0_30px_rgba(147,113,39,0.3)]">
          {/* Center Button */}
          <button
            onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            className="absolute z-20 w-24 h-24 rounded-full bg-gold text-black font-semibold
                     flex items-center justify-center transform hover:scale-110
                     transition-all duration-300 shadow-xl border-2 border-gold/50"
          >
            Book Now
          </button>

          {/* Navigation Icons */}
          {[
            { icon: Info, href: '#about', position: 'top-4 left-4', label: 'About' },
            { icon: Briefcase, href: '#services', position: 'bottom-20 -left-3', label: 'Services' },
            { icon: Car, href: '#fleet', position: 'bottom-4 left-1/2 -translate-x-1/2', label: 'Fleet' },
            { icon: Mail, href: '#contact', position: 'top-4 right-4', label: 'Contact' },
            { icon: User, href: '#login', position: 'bottom-20 -right-3', label: 'Login' }
          ].map(({ icon: Icon, href, position, label }, index) => (
            <a
              key={index}
              href={href}
              className={`absolute ${position} p-4 rounded-full 
                       bg-black/90 border border-gold/50 
                       hover:border-gold hover:scale-110 
                       transition-all duration-300 shadow-lg group`}
            >
              <Icon className="h-6 w-6 text-gold" />
              <span className="absolute top-14 left-1/2 -translate-x-1/2 
                           bg-black/90 text-gold text-xs px-3 py-1 
                           rounded-full opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300 whitespace-nowrap">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileHero;
