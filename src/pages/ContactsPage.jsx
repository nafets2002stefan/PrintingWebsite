import React, { useEffect} from 'react'
import Contacts from '../components/Contacts'
import { useTranslation } from 'react-i18next';

function ContactsPage() {

  const [t] = useTranslation('global');
  useEffect(() => {
    document.title = t('_contacts');
  }, []);

  return (
    <main className='relative min-h-screen overflow-x-hidden default-bg'>
        <Contacts/>
    </main>
  )
}

export default ContactsPage