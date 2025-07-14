import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold tracking-wide">
        My Passport Portal
      </h1>

      {/* Right-side buttons: language + auth links */}
      <div className="flex items-center gap-6">
        {/* Auth Links */}
        <div className="flex gap-4 text-sm">
          <Link
            to="/login"
            className="hover:underline hover:text-gray-200 transition"
          >
            {language === 'en' ? 'Login' : 'लगइन'}
          </Link>
          <Link
            to="/signup"
            className="hover:underline hover:text-gray-200 transition"
          >
            {language === 'en' ? 'Sign Up' : 'दर्ता'}
          </Link>
        </div>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm transition"
          aria-label="Toggle Language"
        >
          {language === 'en' ? 'नेपाली' : 'English'}
        </button>
      </div>
    </header>
  );
};
