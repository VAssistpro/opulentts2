import React from 'react';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About Us', href: '#about' },
  { title: 'Services', href: '#services' },
  { title: 'Fleet Gallery', href: '#fleet' },
  { title: 'Book Now', href: '#book' },
  { title: 'Contact', href: '#contact' },
];

const HeroNavigation = () => {
  return (
    <nav className="w-full max-w-5xl mb-4">
      <div className="flex items-center justify-between">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="text-base font-extrabold tracking-[0.2em] uppercase text-white hover:text-gold 
                     transition-all duration-300 relative overflow-hidden px-6 py-3
                     after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full 
                     after:h-0.5 after:bg-gold after:transform after:scale-x-0 after:origin-right 
                     after:transition-transform after:duration-300 hover:after:scale-x-100 
                     hover:after:origin-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]
                     hover:drop-shadow-[0_2px_8px_rgba(180,145,39,0.6)]"
          >
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default HeroNavigation;