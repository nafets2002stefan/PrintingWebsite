import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const pageKeys = {
  home: { title: '_metaTitle', description: '_metaDescription' },
  products: { title: '_metaTitleProducts', description: '_metaDescProducts' },
  services: { title: '_metaTitleServices', description: '_metaDescServices' },
  questions: { title: '_metaTitleFAQ', description: '_metaDescFAQ' },
  contacts: { title: '_metaTitleContacts', description: '_metaDescContacts' },
};

const SEO = ({ page = 'home' }) => {
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    const keys = pageKeys[page] || pageKeys.home;

    document.title = t(keys.title);

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = t(keys.description);
  }, [i18n.language, page, t]);

  return null;
};

export default SEO;
