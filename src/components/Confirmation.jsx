import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Confirmation = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <section
      role="region"
      aria-labelledby="confirmation-heading"
      className="px-4 py-10 bg-gray-50 min-h-screen flex flex-col items-center justify-center"
    >
      <h2
        id="confirmation-heading"
        role="alert"
        className="text-3xl font-bold mb-4 text-center"
      >
        {language === 'en' ? 'Form Submitted Successfully!' : 'फारम सफलतापूर्वक पेश गरियो!'}
      </h2>
      <p className="mb-6 text-center max-w-md">
        {language === 'en'
          ? 'Thank you for submitting your passport application form. We will process it shortly.'
          : 'तपाईंको पासपोर्ट आवेदन फारम पेश गरेकोमा धन्यवाद। हामी यसलाई चाँडै प्रक्रिया गर्नेछौं।'}
      </p>
      <button
        onClick={() => navigate('/')}
        aria-label={language === 'en' ? 'Back to Home' : 'गृहपृष्ठमा फर्कनुहोस्'}
        className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {language === 'en' ? 'Back to Home' : 'गृहपृष्ठमा फर्कनुहोस्'}
      </button>
    </section>
  );
};
