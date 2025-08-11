import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  return (
    <Helmet>
      <title>Opulent Transport Solutions - Luxury Transportation Services</title>
      <meta name="description" content="Experience unparalleled luxury and comfort with Opulent Transport Solutions. Premium chauffeur services across NYC, airports, and special events." />
      <meta name="keywords" content="luxury transportation, chauffeur service, NYC limo service, airport transfer" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Opulent Transport Solutions" />
      <meta property="og:description" content="Premium luxury transportation services in NYC" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://opulentts.com" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Opulent Transport Solutions" />
      <meta name="twitter:description" content="Premium luxury transportation services in NYC" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#937127" />
      <link rel="canonical" href="https://opulentts.com" />
      
      {/* Preload Critical Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="https://res.cloudinary.com" />
    </Helmet>
  );
};

export default SEOHead;