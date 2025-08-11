import React from 'react';
import { Phone, MessageSquare, Mail } from 'lucide-react';

const MobileHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo - Increased size */}
        <img
          src="https://opulentts.com/bgvideo/otsnobg.png"
          alt="Opulent Logo"
          className="h-20 w-auto" /* Increased from h-16 to h-20 */
        />

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {[
            { icon: Phone, href: 'tel:+15163245483', label: 'Call Us' },
            { icon: MessageSquare, href: 'sms:+15163245483', label: 'Text Us' },
            { icon: Mail, href: 'mailto:info@opulentts.com', label: 'Email Us' }
          ].map(({ icon: Icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              className="relative flex flex-col items-center"
            >
              <div
                className="p-3 rounded-xl transition-all duration-300
                  bg-black/80 backdrop-blur-xl border border-gold/30 text-gold
                  shadow-[0_4px_12px_rgba(147,113,39,0.3)]
                  active:scale-95"
              >
                <Icon className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </header>
  );
};

export default MobileHeader;