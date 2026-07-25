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
        subtitle={t('_faqPageSubtitle')}
        breadcrumbs={[t('_home'), t('_FAQ')]}
      />
      <FAQ/>
    </main>
  )
}

export default FAQPage