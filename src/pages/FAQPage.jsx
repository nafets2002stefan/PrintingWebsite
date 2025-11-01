import React from 'react'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader'
import FAQ from '../components/FAQ'

function FAQPage() {
  const [t] = useTranslation('global')

  return (
    <main className='relative min-h-screen overflow-x-hidden default-bg'>
      <PageHeader
        title={t('_FAQ')}
        subtitle="Find answers to commonly asked questions about our services and processes"
        breadcrumbs={['Home', 'FAQ']}
      />
      <FAQ/>
    </main>
  )
}

export default FAQPage