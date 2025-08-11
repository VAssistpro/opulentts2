import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import LuxuryIcon from '../../ui/design-system/LuxuryIcon';

const socialIcons = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const MenuSocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialIcons.map((social, index) => (
        <LuxuryIcon
          key={index}
          icon={social.icon}
          href={social.href}
          label={social.label}
          variant="ghost"
          className="w-10 h-10"
        />
      ))}
    </div>
  );
};

export default MenuSocialIcons;