import {React, useState} from 'react'
import { useTranslation } from 'react-i18next';
import { HiChevronDown } from 'react-icons/hi';

function Language() {
  const [t, i18n] = useTranslation('global');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsDropdownOpen(false);
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
    <div className="relative">
      {/* Current selected language with a dropdown arrow */}
      <button 
        className='text-gray-400 hover:text-white flex items-center space-x-2 transition-all' 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span className='text-white'>{i18n.language.toUpperCase()}</span> 
        {/* Show the current language */}
        <HiChevronDown className={`transition-transform text-white ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute top-full left-[-10px] right-2 mt-2 bg-black border-1 border-[#807f7d] text-white rounded-lg shadow-lg w-15 py-2">
          {languagesToShow.map((lang) => (
            <button
              key={lang}
              className='block text-[#807f7d] hover:text-white focus:text-white px-4 py-2 w-full text-left transition-all'
              onClick={() => changeLanguage(lang)}
            >
              {lang === 'en' ? 'EN' : lang === 'ro' ? 'RO' : 'RU'}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Language