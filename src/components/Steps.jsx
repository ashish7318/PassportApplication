import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const Steps = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    en: [
      { text: 'Fill Form', onClick: () => navigate('/fill-form') },
      { text: 'Visit Office' },
      { text: 'Submit Documents' },
      { text: 'Collect Passport' },
    ],
    np: [
      { text: 'फारम भर्नुहोस्', onClick: () => navigate('/fill-form') },
      { text: 'कार्यालय जानुहोस्' },
      { text: 'कागजात बुझाउनुहोस्' },
      { text: 'पासपोर्ट लिनुहोस्' },
    ]
  };

  return (
    <section className="py-8 px-4">
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">
        {language === 'en' ? 'Application Process' : 'आवेदन प्रक्रिया'}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {content[language].map((step, i) => (
          <div
            key={i}
            onClick={step.onClick || undefined}
            className={`p-4 bg-gray-100 rounded shadow transition duration-200 ${
              step.onClick
                ? 'cursor-pointer hover:bg-blue-100'
                : 'cursor-default'
            }`}
          >
            <div className="text-3xl mb-2">🔹</div>
            <p className="text-sm md:text-base font-medium">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
