import React from 'react'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader'
import Contacts from '../components/Contacts'

function ContactsPage() {
  const [t] = useTranslation('global')

  return (
    <main className='relative min-h-screen overflow-x-hidden default-bg'>
      <PageHeader
        title={t('_contactUs')}
        subtitle={t('_contactsPageSubtitle')}
        breadcrumbs={[t('_home'), t('_contactUs')]}
      />
      <Contacts/>
    </main>
  )
}

export default ContactsPage