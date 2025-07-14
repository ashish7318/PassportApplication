import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Notices = () => {
  const { language } = useLanguage();
  const message =
    language === 'en'
      ? 'Important: Make sure your documents are valid before submission.'
      : 'महत्वपूर्ण: आवेदन दिनु अघि तपाईंको कागजात मान्य छन् कि छैनन् हेर्नुहोस्।';

  return (
    <section
      role="alert"
      aria-live="polite"
      className="bg-yellow-100 py-4 px-4 md:px-8 border border-yellow-300"
    >
      <p className="text-center font-medium text-yellow-800 text-sm md:text-base">
        ⚠️ {message}
      </p>
    </section>
  );
};
