import React from 'react'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import ProductHighlight from '../components/ProductHighlight'
import CTABanner from '../components/CTABanner'
import HeadingText from '../components/HeadingText'

const productImages = [
  "https://plus.unsplash.com/premium_photo-1731520548009-be4236a75eca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2128",
  "https://images.unsplash.com/photo-1718670013921-2f144aba173a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1060",
  "https://images.unsplash.com/photo-1695634365580-cae400a4360b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  "https://images.unsplash.com/photo-1724155090003-fd4e48ab8c8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  "https://images.unsplash.com/photo-1505063366573-38928ae5567e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  "https://images.unsplash.com/photo-1761670835899-5a0248c7e7d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  "https://images.unsplash.com/photo-1722509402063-7e9e3027c217?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
  "https://images.unsplash.com/photo-1627618997007-6d81f1efb811?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  "https://images.unsplash.com/photo-1642489216436-4c5075b34d53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=719"
]

function ProductsPage() {
  const [t] = useTranslation('global')

  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n, i) => ({
    image: productImages[i],
    title: t(`_prod${n}Title`),
    description: t(`_prod${n}Desc`),
    category: t(`_prod${n}Category`),
    features: [t(`_prod${n}Feat1`), t(`_prod${n}Feat2`), t(`_prod${n}Feat3`)]
  }))

  const productsTexts = [
    { number: "1", title: t('_prodInfo1Title'), description: t('_prodInfo1Desc') },
    { number: "2", title: t('_prodInfo2Title'), description: t('_prodInfo2Desc') },
    { number: "3", title: t('_prodInfo3Title'), description: t('_prodInfo3Desc') }
  ]

  return (
    <main className='relative min-h-screen overflow-x-hidden default-bg'>
      <PageHeader
        title={t('_products')}
        subtitle={t('_productsPageSubtitle')}
        breadcrumbs={[t('_home'), t('_products')]}
      />
      <HeadingText servicesTexts={productsTexts} />
      <ProductHighlight />
      <ProductGrid products={products} />
      <CTABanner />
    </main>
  )
}

export default ProductsPage