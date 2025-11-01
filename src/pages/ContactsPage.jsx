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
        subtitle="Get in touch with our team. We're here to help bring your printing projects to life"
        breadcrumbs={['Home', 'Contact']}
      />
      <Contacts/>
    </main>
  )
}

export default ContactsPage