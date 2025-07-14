import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Login = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Add your authentication logic here
    alert(language === 'en' ? 'Logged in successfully!' : 'लगइन सफल भयो!');
    navigate('/');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          {language === 'en' ? 'Login' : 'लगइन'}
        </h2>
        <div className="mb-4">
          <label className="block mb-1">
            {language === 'en' ? 'Email' : 'इमेल'}
          </label>
          <input
            type="email"
            required
            className="w-full border p-2 rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">
            {language === 'en' ? 'Password' : 'पासवर्ड'}
          </label>
          <input
            type="password"
            required
            className="w-full border p-2 rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
        >
          {language === 'en' ? 'Login' : 'लगइन गर्नुहोस्'}
        </button>
      </form>
    </section>
  );
};
