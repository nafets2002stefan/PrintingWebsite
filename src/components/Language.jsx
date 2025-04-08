import React from 'react'
import { useTranslation } from 'react-i18next';

function Language() {
  const [t, i18n] = useTranslation('global');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getLanguagesToShow = () => {
    switch (i18n.language) {
      case 'en':
        return ['ro', 'ru'];
      case 'ro':
        return ['en', 'ru']; 
      case 'ru':
        return ['en', 'ro'];
      default:
        return ['en', 'ru'];
    }
  };

  const languagesToShow = getLanguagesToShow();

  return (
    <span>
      {languagesToShow.map((lang) => (
        <button key={lang} className='text-gray-400 mr-4' onClick={() => changeLanguage(lang)}>
          {lang === 'en' ? 'EN' : lang === 'ro' ? 'RO' : 'RU'}
        </button>
      ))}
    </span>
  )
}

export default Language