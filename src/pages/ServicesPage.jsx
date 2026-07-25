import React from 'react'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import ProductHighlight from '../components/ProductHighlight'
import CTABanner from '../components/CTABanner'
import HeadingText from '../components/HeadingText'

const serviceImages = [
  "https://images.unsplash.com/photo-1693031630369-bd429a57f115?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  "https://images.unsplash.com/photo-1693031630146-568e2f72db0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  "https://images.unsplash.com/photo-1532154286208-09c66db54ac5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1014",
  "https://plus.unsplash.com/premium_photo-1669646471652-5e6cd8b9d5a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  "https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  "https://images.unsplash.com/photo-1512879336734-d372f3f6402d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  "https://images.unsplash.com/photo-1656784095237-3fcb8f5971b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
]

function ServicesPage() {
  const [t] = useTranslation('global')

  const services = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n, i) => ({
    image: serviceImages[i],
    title: t(`_serv${n}Title`),
    description: t(`_serv${n}Desc`),
    category: t(`_serv${n}Category`),
    features: [t(`_serv${n}Feat1`), t(`_serv${n}Feat2`), t(`_serv${n}Feat3`)]
  }))

  const servicesTexts = [
    { number: "1", title: t('_servInfo1Title'), description: t('_servInfo1Desc') },
    { number: "2", title: t('_servInfo2Title'), description: t('_servInfo2Desc') },
    { number: "3", title: t('_servInfo3Title'), description: t('_servInfo3Desc') }
  ]

  return (
    <main className='relative min-h-screen overflow-x-hidden default-bg'>
      <PageHeader
        title={t('_services')}
        subtitle={t('_servicesPageSubtitle')}
        breadcrumbs={[t('_home'), t('_services')]}
      />
      <HeadingText servicesTexts={servicesTexts} />
      <ProductHighlight />
      <ProductGrid products={services} />
      <CTABanner />
    </main>
  )
}

export default ServicesPage