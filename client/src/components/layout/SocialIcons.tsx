import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import LuxuryIcon from '../ui/design-system/LuxuryIcon';
import Tooltip from '../ui/Tooltip';

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Follow us on Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Follow us on Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'Connect on LinkedIn' }
];

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center gap-3 md:gap-4">
      {SOCIAL_LINKS.map(({ icon, href, label }) => (
        <Tooltip key={label} content={label} position="top">
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

export default SocialIcons;
