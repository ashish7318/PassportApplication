import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-blue-100 text-center py-12 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
        {language === 'en' ? 'Apply for Your Passport Online' : 'अनलाइन पासपोर्टको लागि आवेदन दिनुहोस्'}
      </h2>
      <p className="mt-3 text-gray-700 text-base md:text-lg">
        {language === 'en' ? 'Start your passport process here.' : 'यहाँबाट पासपोर्ट प्रक्रिया सुरु गर्नुहोस्।'}
      </p>
      <a
        href="/form.pdf"
        download
        aria-label={language === 'en' ? 'Download passport form PDF' : 'पासपोर्ट फारम PDF डाउनलोड गर्नुहोस्'}
        className="mt-6 inline-block bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition duration-200"
      >
        {language === 'en' ? 'Download Form (PDF)' : 'फारम डाउनलोड गर्नुहोस् (PDF)'}
      </a>
    </section>
  );
};
