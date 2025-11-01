import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SEO = () => {
  const { i18n } = useTranslation();

  const seoContent = {
    ro: {
      title: 'Servicii Tipografie si Imprimare | Сhisinau | Tipărire rapidă | FlexPrint.md',
      description: 'Produsele poligrafice: tipar broșuri, tiparire pliante, cataloage, stickere, etichete și ambalaje, reviste, Tipărire rapidă, si alte servicii de imprimare in Moldova'
    },
    ru: {
      title: 'Услуги типографии и печати | Кишинёв | Быстрая печать | FlexPrint.md',
      description: 'Полиграфическая продукция: печать брошюр, печать листовок, каталогов, стикеров, этикеток и упаковки, журналов, быстрая печать и другие услуги печати в Молдове'
    },
    en: {
      title: 'only | Chisinau | Fast Printing | FlexPrint.md',
      description: 'Printing products: brochures, flyers, catalogs, stickers, labels and packaging, magazines, fast printing and other printing services in Moldova'
    }
  };

  useEffect(() => {
    const currentLang = i18n.language;
    const content = seoContent[currentLang] || seoContent.ro;

    // Update title
    document.title = content.title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = content.description;
  }, [i18n.language]);

  return null;
};

export default SEO;
