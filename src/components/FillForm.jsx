import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext'; // Assuming you have this context

export const FillForm = ({ show }) => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    address: '',
    gender: '',
    citizenshipNumber: '',
    passportType: '',
    photo: null,
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await fetch('http://localhost:8080/api/passport', {
        method: 'POST',
        body: data,
      });

      if (!res.ok) throw new Error('Server error');

      navigate('/confirmation');
    } catch (err) {
      alert(language === 'en' ? 'Error submitting form.' : 'फारम पेश गर्दा त्रुटि भयो।');
      console.error('Submission error:', err);
    }
  };

  if (!show) return null;

  const genderOptions = {
    en: ['Male', 'Female', 'Other'],
    np: ['पुरुष', 'महिला', 'अन्य'],
  };

  const passportTypeOptions = {
    en: ['Ordinary', 'Official', 'Diplomatic'],
    np: ['सामान्य', 'आधिकारिक', 'राजनयिक'],
  };

  return (
    <section className="px-4 py-10 bg-gray-50">
      <h3 className="text-2xl font-bold text-center mb-6">
        {language === 'en' ? 'Fill Passport Application Form' : 'पासपोर्ट आवेदन फारम भर्नुहोस्'}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded shadow"
        encType="multipart/form-data"
      >
        {[
          { labelEn: 'Full Name', labelNp: 'पूरा नाम', name: 'name', type: 'text' },
          { labelEn: 'Date of Birth', labelNp: 'जन्म मिति', name: 'dob', type: 'date' },
          { labelEn: 'Email Address', labelNp: 'इमेल ठेगाना', name: 'email', type: 'email' },
          { labelEn: 'Current Address', labelNp: 'हालको ठेगाना', name: 'address', type: 'text' },
          {
            labelEn: 'Gender',
            labelNp: 'लिङ्ग',
            name: 'gender',
            type: 'select',
            options: language === 'en' ? genderOptions.en : genderOptions.np,
          },
          { labelEn: 'Citizenship Number', labelNp: 'नागरिकता नम्बर', name: 'citizenshipNumber', type: 'text' },
          {
            labelEn: 'Passport Type',
            labelNp: 'पासपोर्ट प्रकार',
            name: 'passportType',
            type: 'select',
            options: language === 'en' ? passportTypeOptions.en : passportTypeOptions.np,
          },
          { labelEn: 'Passport Photo', labelNp: 'पासपोर्ट फोटो', name: 'photo', type: 'file' },
        ].map(({ labelEn, labelNp, name, type, options }) => (
          <div key={name} className="mb-4">
            <label htmlFor={name} className="block mb-1 font-medium">
              {language === 'en' ? labelEn : labelNp}
            </label>
            {type === 'select' ? (
              <select
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="" disabled>
                  {language === 'en' ? '-- Select --' : '-- चयन गर्नुहोस् --'}
                </option>
                {options.map(opt => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={name}
                type={type}
                name={name}
                value={type === 'file' ? undefined : formData[name]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required={name !== 'photo'}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {language === 'en' ? 'Submit Form' : 'फारम पेश गर्नुहोस्'}
        </button>
      </form>
      <BackToHomeButton />
    </section>
  );
};

export const BackToHomeButton = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  return (
    <div className="text-center mt-6">
      <button
        onClick={() => navigate('/')}
        className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        {language === 'en' ? '← Back to Home' : '← गृहपृष्ठमा फर्कनुहोस्'}
      </button>
    </div>
  );
};
