import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import global_en from './translations/en/global.json'
import global_ro from './translations/ro/global.json'
import global_ru from './translations/ru/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next';

// Detect language from URL path or fallback to localStorage or default 'ro'
const pathLanguage = window.location.pathname.match(/^\/(ro|en|ru)/)?.[1];
const storedLanguage = localStorage.getItem('language');
const initialLanguage = pathLanguage || storedLanguage || 'ro';

i18next.init({
  lng: initialLanguage,
  fallbackLng: 'ro',
  resources: {
    en: {
      global: global_en
    },
    ro: {
      global: global_ro
    },
    ru: {
      global: global_ru
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
