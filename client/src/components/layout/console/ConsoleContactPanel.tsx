import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, Wifi, Signal, Battery } from 'lucide-react';

const CONTACT_DETAILS = [
  { 
    icon: Phone, 
    href: 'tel:+15163245483', 
    label: 'CALL',
    code: 'PH01',
    status: 'READY'
  },
  { 
    icon: MessageSquare, 
    href: 'sms:+15163245483', 
    label: 'SMS',
    code: 'TX01',
    status: 'READY'
  },
  { 
    icon: Mail, 
    href: 'mailto:reservations@opulentts.com', 
    label: 'MAIL',
    code: 'EM01',
    status: 'READY'
  }
];

const ConsoleContactPanel = () => {
  const [activeContact, setActiveContact] = useState<number | null>(null);

  return (
    <div className="space-y-3 h-full flex flex-col">


      {/* Contact Controls */}
      <div className="flex-1 space-y-2">
        <div className="text-xs text-gold/80 font-mono text-center">COMM</div>
        
        {CONTACT_DETAILS.map(({ icon: Icon, href, label, code, status }, index) => (
          <div key={index} className="space-y-1">
            <a
              href={href}
              onMouseEnter={() => setActiveContact(index)}
              onMouseLeave={() => setActiveContact(null)}
              className={`block p-2 rounded transition-all duration-100 border ${
                activeContact === index
                  ? 'bg-gold/10 border-gold/30'
                  : 'bg-black/40 border-gold/20 hover:border-gold/25'
              }`}
              title={href}
            >
              <div className="flex flex-col items-center gap-1">
                <Icon className={`w-4 h-4 ${
                  activeContact === index ? 'text-gold' : 'text-white/70'
                }`} />
                <span className={`text-xs font-mono ${
                  activeContact === index ? 'text-gold' : 'text-white/60'
                }`}>
                  {label}
                </span>
              </div>
            </a>
            
            {/* Status Indicator */}
            <div className="text-center">
              <div className="flex justify-center">
                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>

      

      
    </div>
  );
};

export default ConsoleContactPanel;
