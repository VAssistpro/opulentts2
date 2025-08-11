import React from 'react';

interface BookingLinkProps {
  className?: string;
}

const BookingLink: React.FC<BookingLinkProps> = ({ className = '' }) => {
  return (
    <a
      href="https://book.mylimobiz.com/v4/virk"
      data-ores-widget="website"
      data-ores-alias="virk"
      className={`block w-full text-center text-lg font-semibold text-gray-800 dark:text-dark-text hover:text-gold transition-colors duration-300 ${className}`}
    >
      Online Reservations
    </a>
  );
};

export default BookingLink;