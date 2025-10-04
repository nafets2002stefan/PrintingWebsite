import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SEO = ({ page = 'home' }) => {
  const { i18n } = useTranslation();

  const seoContent = {
    home: {
      ro: {
        title: 'Acasă | Servicii Tipografie si Immprimare | FlexPrint.md',
        description: 'Produsele poligrafice: tipar broșuri, tiparire pliante, cataloage, stickere, etichete și ambalaje, reviste, Tipărire rapidă, si alte servicii de imprimare in Moldova'
      },
      ru: {
        title: 'Главная | Услуги типографии и печати | FlexPrint.md',
        description: 'Полиграфическая продукция: печать брошюр, печать листовок, каталогов, стикеров, этикеток и упаковки, журналов, быстрая печать и другие услуги печати в Молдове'
      },
      en: {
        title: 'Acasă | Servicii Tipografie si Immprimare | FlexPrint.md',
        description: 'Produsele poligrafice: tipar broșuri, tiparire pliante, cataloage, stickere, etichete și ambalaje, reviste, Tipărire rapidă, si alte servicii de imprimare in Moldova'
      }
    },
    products: {
      ro: {
        title: 'Produse | Servicii Tipografie si Immprimare | FlexPrint.md',
        description: 'Produsele poligrafice: tipar broșuri, tiparire pliante, cataloage, stickere, etichete și ambalaje, reviste, Tipărire rapidă, si alte servicii de imprimare in Moldova'
      },
      ru: {
        title: 'Продукты | Услуги типографии и печати | FlexPrint.md',
        description: 'Полиграфическая продукция: печать брошюр, печать листовок, каталогов, стикеров, этикеток и упаковки, журналов, быстрая печать и другие услуги печати в Молдове'
      },
      en: {
        title: 'Produse | Servicii Tipografie si Immprimare | FlexPrint.md',
        description: 'Produsele poligrafice: tipar broșuri, tiparire pliante, cataloage, stickere, etichete și ambalaje, reviste, Tipărire rapidă, si alte servicii de imprimare in Moldova'
      }
    },
    services: {
      ro: {
        title: 'Servicii | Servicii Tipografie si Immprimare | FlexPrint.md',
        description: 'Produsele poligrafice: tipar broșuri, tiparire pliante, cataloage, stickere, etichete și ambalaje, reviste, Tipărire rapidă, si alte servicii de imprimare in Moldova'
      },
      ru: {
        title: 'Услуги | Услуги типографии и печати | FlexPrint.md',
        description: 'Полиграфическая продукция: печать брошюр, печать листовок, каталогов, стикеров, этикеток и упаковки, журналов, быстрая печать и другие услуги печати в Молдове'
      },
      en: {
        title: 'Servicii | Servicii Tipografie si Immprimare | FlexPrint.md',
        description: 'Produsele poligrafice: tipar broșuri, tiparire pliante, cataloage, stickere, etichete și ambalaje, reviste, Tipărire rapidă, si alte servicii de imprimare in Moldova'
      }
    },
    questions: {
      ro: {
        title: 'Întrebări | Servicii Tipografie si Immprimare | FlexPrint.md',
        description: 'Produsele poligrafice: tipar broșuri, tiparire pliante, cataloage, stickere, etichete și ambalaje, reviste, Tipărire rapidă, si alte servicii de imprimare in Moldova'
      },
      ru: {
        title: 'Вопросы | Услуги типографии и печати | FlexPrint.md',
        description: 'Полиграфическая продукция: печать брошюр, печать листовок, каталогов, стикеров, этикеток и упаковки, журналов, быстрая печать и другие услуги печати в Молдове'
      },
      en: {
        title: 'Întrebări | Servicii Tipografie si Immprimare | FlexPrint.md',
        description: 'Produsele poligrafice: tipar broșuri, tiparire pliante, cataloage, stickere, etichete și ambalaje, reviste, Tipărire rapidă, si alte servicii de imprimare in Moldova'
      }
    },
    contacts: {
      ro: {
        title: 'Contacte | Servicii Tipografie si Immprimare | FlexPrint.md',
        description: 'Produsele poligrafice: tipar broșuri, tiparire pliante, cataloage, stickere, etichete și ambalaje, reviste, Tipărire rapidă, si alte servicii de imprimare in Moldova'
      },
      ru: {
        title: 'Контакты | Услуги типографии и печати | FlexPrint.md',
        description: 'Полиграфическая продукция: печать брошюр, печать листовок, каталогов, стикеров, этикеток и упаковки, журналов, быстрая печать и другие услуги печати в Молдове'
      },
      en: {
        title: 'Contacte | Servicii Tipografie si Immprimare | FlexPrint.md',
        description: 'Produsele poligrafice: tipar broșuri, tiparire pliante, cataloage, stickere, etichete și ambalaje, reviste, Tipărire rapidă, si alte servicii de imprimare in Moldova'
      }
    }
  };

  useEffect(() => {
    const currentLang = i18n.language;
    const content = seoContent[page]?.[currentLang] || seoContent.home.ro;

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
  }, [i18n.language, page]);

  return null;
};

export default SEO;
