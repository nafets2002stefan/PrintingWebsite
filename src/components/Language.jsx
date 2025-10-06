import {React, useState, useRef, useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { HiChevronDown } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';

function Language() {
  const [t, i18n] = useTranslation('global');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const langRef = useRef();

  const changeLanguage = (lng) => {
    // Get current path without language prefix
    const currentPath = location.pathname.replace(/^\/(ro|en|ru)/, '');
    // Navigate to new language route
    navigate(`/${lng}${currentPath || ''}`);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
          const handleClickOutside = (event) => {
              if (langRef.current && !langRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
              }
          };
      
          const handleTouchStart = (event) => {
              if (langRef.current && !langRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
              }
          };
          if (isDropdownOpen) {
              document.addEventListener("mousedown", handleClickOutside);
              document.addEventListener("touchstart", handleTouchStart);
          }
      
          return () => {
              document.removeEventListener("mousedown", handleClickOutside);
              document.removeEventListener("touchstart", handleTouchStart);
          };
      }, [isDropdownOpen]);

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
    <>
      <span className='hidden md:block'>
        {languagesToShow.map((lang) => (
          <button key={lang} className='text-[#807f7d] mr-4 [@media(min-width:769px)]:text-sm [@media(min-width:841px)]:text-base' onClick={() => changeLanguage(lang)}>
            {lang === 'en' ? 'EN' : lang === 'ro' ? 'RO' : 'RU'}
          </button>
        ))}
      </span>

      <div ref={langRef} className="relative md:hidden">
        {/* Current selected language with a dropdown arrow */}
        <button 
          className='hover:text-white flex items-center space-x-2 transition-all' 
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
    </>
  )
}

export default Language