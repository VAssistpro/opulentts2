import React from 'react';
import { BookingWidgetStatus } from '../../types/booking';
import LoadingSpinner from '../ui/LoadingSpinner';
import ErrorMessage from '../ui/ErrorMessage';

interface BookingStatusProps {
  status: BookingWidgetStatus;
}

const BookingStatus: React.FC<BookingStatusProps> = ({ status }) => {
  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'error') {
    return <ErrorMessage />;
  }

  return null;
};

export default BookingStatus;