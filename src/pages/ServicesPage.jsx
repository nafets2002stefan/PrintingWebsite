import React, { useEffect} from 'react'
import Services from '../components/Services'
import { useTranslation } from 'react-i18next';

function ServicesPage() {

  const [t] = useTranslation('global');
  useEffect(() => {
      document.title = t('_services');
    }, []);

  return (
    <main className='relative min-h-screen overflow-x-hidden default-bg'>
        <Services/>
    </main>
  )
}

export default ServicesPage