import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import GlowingIcon from '../ui/GlowingIcon';

interface ContactButtonsProps {
  vertical?: boolean;
  horizontal?: boolean;
  className?: string;
}

const ContactButtons: React.FC<ContactButtonsProps> = ({ 
  vertical = false,
  horizontal = false,
  className = '' 
}) => {
  return (
    <div className={`flex ${vertical ? 'flex-col' : ''} ${horizontal ? 'flex-row' : ''} gap-6 ${className}`}>
      <GlowingIcon
        icon={Phone}
        href="tel:+15163245483"
        label="Call us"
      />
      <GlowingIcon
        icon={MessageSquare}
        href="sms:+15163245483"
        label="Send SMS"
      />
    </div>
  );
};

export default ContactButtons;