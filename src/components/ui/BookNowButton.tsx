import React from 'react';
import { Calendar } from 'lucide-react';
import LuxuryButton from './design-system/LuxuryButton';
import { useNavigationContext } from '../../hooks/useNavigationContext';

const BookNowButton = () => {
  const { setActiveSection } = useNavigationContext();

  return (
    <LuxuryButton
      onClick={() => setActiveSection('book')}
      icon={Calendar}
      iconPosition="right"
      variant="secondary"
      size="lg"
      className="mt-12"
    >
      Book Your Journey
    </LuxuryButton>
  );
};

export default BookNowButton;