import React from 'react'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import ProductHighlight from '../components/ProductHighlight'
import CTABanner from '../components/CTABanner'
import HeadingText from '../components/HeadingText'

// High-quality printing products with relevant images
const products = [
  {
    image: "https://plus.unsplash.com/premium_photo-1731520548009-be4236a75eca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2128",
    title: "CUTII DE AMBALAJ PERSONALIZATE",
    description: "Producția cutiilor de ambalaj din carton de înaltă calitate. Design personalizat, materiale premium și o gamă largă de dimensiuni disponibile.",
    category: "Packaging",
    features: ["Custom designs", "Premium materials", "Various sizes available"]
  },
  {
    image: "https://images.unsplash.com/photo-1718670013921-2f144aba173a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1060",
    title: "CĂRȚI DE VIZITĂ",
    description: "Tipărire cărți de vizită pe carton premium, finisaj mat sau lucios. Impresie perfectă pentru afacerea dumneavoastră.",
    category: "Corporate",
    features: ["Premium cardstock", "Matte or glossy finish", "Fast turnaround"]
  },
  {
    image: "https://images.unsplash.com/photo-1695634365580-cae400a4360b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    title: "CATALOAGE ȘI BROȘURI",
    description: "Tipărire cataloage și broșuri color, multiple opțiuni de pliere. Prezentați produsele dumneavoastră profesional și atractiv.",
    category: "Marketing",
    features: ["Full-color printing", "Multiple folding options", "Cost-effective"]
  },
  {
    image: "https://images.unsplash.com/photo-1724155090003-fd4e48ab8c8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    title: "ETICHETE ȘI AUTOCOLANTE",
    description: "Producție etichete și autocolante personalizate, rezistente la apă, forme decupate la comandă și adeziv puternic.",
    category: "Labels",
    features: ["Waterproof options", "Die-cut shapes", "Strong adhesive"]
  },
  {
    image: "https://images.unsplash.com/photo-1505063366573-38928ae5567e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    title: "CĂRȚI ȘI REVISTE",
    description: "Tipărire cărți și reviste cu copertă tare sau moale. Finisaj premium și legare profesională de înaltă calitate.",
    category: "Publishing",
    features: ["Hardcover & softcover", "Premium finishing", "Professional binding"]
  },
  {
    image: "https://images.unsplash.com/photo-1761670835899-5a0248c7e7d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    title: "MATERIALE CORPORATE",
    description: "Tipărire materiale corporate: formulare cu antet, plicuri, dosare. Identitate vizuală consistentă pentru compania dumneavoastră.",
    category: "Corporate",
    features: ["Brand consistency", "Various paper options", "Custom formats"]
  },
  {
    image: "https://images.unsplash.com/photo-1722509402063-7e9e3027c217?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
    title: "POSTERE ȘI BANNERE",
    description: "Tipărire postere și bannere de format mare. Culori vibrante, interior și exterior, ideale pentru promovare și evenimente.",
    category: "Marketing",
    features: ["Large format", "Vibrant colors", "Indoor & outdoor"]
  },
  {
    image: "https://images.unsplash.com/photo-1627618997007-6d81f1efb811?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    title: "INVITAȚII ȘI FELICITĂRI",
    description: "Tipărire invitații și felicitări elegante pe hârtie premium. Design personalizat și finisaje elegante pentru evenimente speciale.",
    category: "Special",
    features: ["Premium paper", "Custom design", "Elegant finishes"]
  },
  {
    image: "https://images.unsplash.com/photo-1642489216436-4c5075b34d53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=719",
    title: "CALENDARE PERSONALIZATE",
    description: "Tipărire calendare personalizate de perete și birou. Fotografii personalizate, formate variate, calitate superioară de tipărire.",
    category: "Marketing",
    features: ["Custom photos", "Various formats", "High-quality print"]
  }
]

const productsTexts = [
  {
    number: "1",
    title: "O GAMĂ LARGĂ",
    description: "De la formulare până la ambalaje de forme complexe, de la cărți de vizită alb-negru până la cataloage de publicitate colore."
  },
  {
    number: "2",
    title: "SERVICII DE CALITATE ÎNALTĂ",
    description: "De la crearea conceptului produsului până la producerea ambalajelor pentru tirajul final și livrarea acestora către client."
  },
  {
    number: "3",
    title: "ECHIPAMENTE DE TIPAR",
    description: "Echipamente moderne de tipar și procesare offset, digitale, de format mare."
  }
]

function ProductsPage() {
  const [t, i18n] = useTranslation('global')

  return (
    <main className='relative min-h-screen overflow-x-hidden default-bg'>
      <PageHeader
        title={t('_products')}
        subtitle="Explore our comprehensive range of premium printing products tailored to your business needs"
        breadcrumbs={['Home', 'Products']}
      />
      <HeadingText servicesTexts={productsTexts} />
      <ProductHighlight />
      <ProductGrid products={products} />
      <CTABanner />
    </main>
  )
}

export default ProductsPage