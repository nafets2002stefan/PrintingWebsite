import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SEO = ({ page = 'home' }) => {
  const { t } = useTranslation('global');

  // Page name translations
  const pageNames = {
    home: { key: '_home' },
    products: { key: '_products' },
    services: { key: '_services' },
    questions: { key: '_FAQLong' },
    contacts: { key: '_contacts' }
  };

  // Use useLayoutEffect to update before browser paint
  useLayoutEffect(() => {
    const baseTitle = t('_metaTitle');
    const baseDescription = t('_metaDescription');
    const pageName = pageNames[page]?.key ? t(pageNames[page].key) : '';

    // Create title with page name prefix if not home
    const title = page === 'home' ? baseTitle : `${pageName} | ${baseTitle}`;

    // Update title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = baseDescription;
  }, [t, page]);

  return null;
};

export default SEO;
