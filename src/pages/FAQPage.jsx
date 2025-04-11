import React, { useEffect} from 'react'
import FAQ from '../components/FAQ'
import { useTranslation } from 'react-i18next';

function FAQPage() {

  const [t] = useTranslation('global');
  useEffect(() => {
    document.title = t('_FAQ');
  }, []);

  return (
    <main className='relative min-h-screen overflow-x-hidden default-bg'>
        <FAQ/>
    </main>
  )
}

export default FAQPage