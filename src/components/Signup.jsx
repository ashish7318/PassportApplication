import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Signup = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Add registration logic here
    alert(language === 'en' ? 'Signup successful!' : 'दर्ता सफल भयो!');
    navigate('/login');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          {language === 'en' ? 'Sign Up' : 'दर्ता गर्नुहोस्'}
        </h2>
        <div className="mb-4">
          <label className="block mb-1">
            {language === 'en' ? 'Full Name' : 'पूरा नाम'}
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">
            {language === 'en' ? 'Email' : 'इमेल'}
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">
            {language === 'en' ? 'Password' : 'पासवर्ड'}
          </label>
          <input
            type="password"
            name="password"
            required
            className="w-full border p-2 rounded"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
        >
          {language === 'en' ? 'Sign Up' : 'दर्ता गर्नुहोस्'}
        </button>
      </form>
    </section>
  );
};
