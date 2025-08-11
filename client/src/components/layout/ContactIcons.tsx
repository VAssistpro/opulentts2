import React from 'react';
import { Phone, MessageSquare, Mail } from 'lucide-react';
import LuxuryIcon from '../ui/design-system/LuxuryIcon';
import Tooltip from '../ui/Tooltip';

const CONTACT_DETAILS = [
  { icon: Phone, href: 'tel:+15163245483', label: 'Call Us: (516) 324-5483' },
  { icon: MessageSquare, href: 'sms:+15163245483', label: 'Send SMS' },
  { icon: Mail, href: 'mailto:reservations@opulentts.com', label: 'Email: reservations@opulentts.com' }
];

const ContactIcons = () => {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4">
      {CONTACT_DETAILS.map(({ icon, href, label }, index) => (
        <Tooltip key={index} content={label} position="bottom">
          <LuxuryIcon
            icon={icon}
            href={href}
            label={label}
            variant="ghost"
            className="rounded-full p-3"
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default ContactIcons;