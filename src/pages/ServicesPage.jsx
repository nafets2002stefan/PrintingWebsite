import React from 'react'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import ProductHighlight from '../components/ProductHighlight'
import CTABanner from '../components/CTABanner'
import HeadingText from '../components/HeadingText'

// Professional printing services with relevant process images
const services = [
  {
    image: "https://images.unsplash.com/photo-1693031630369-bd429a57f115?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    title: "TIPĂRIRE OFFSET",
    description: "Servicii de tipărire offset pentru tiraje mari. Precizie cromatică excelentă și cost eficient pentru cataloage, reviste și ambalaje.",
    category: "Printing",
    features: ["High-volume printing", "Excellent color accuracy", "Cost-effective for bulk"]
  },
  {
    image: "https://images.unsplash.com/photo-1693031630146-568e2f72db0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    title: "TIPĂRIRE DIGITALĂ",
    description: "Servicii de tipărire digitală rapidă pentru tiraje mici și medii. Timpii de execuție rapidi, perfecte pentru documente personalizate.",
    category: "Printing",
    features: ["Fast turnaround", "Variable data printing", "Perfect for small runs"]
  },
  {
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    title: "DESIGN GRAFIC",
    description: "Servicii complete de design grafic: logo, identitate de brand și fișiere gata de tipărire pentru toate materialele dumneavoastră.",
    category: "Design",
    features: ["Logo design", "Brand identity", "Print-ready files"]
  },
  {
    image: "https://images.unsplash.com/photo-1532154286208-09c66db54ac5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1014",
    title: "PRE-PRESS ȘI MACHETARE",
    description: "Servicii pre-press și machetare: corectare culori, optimizare fișiere și creare machete de aprobare înainte de tipărire.",
    category: "Pre-Press",
    features: ["Color correction", "File optimization", "Proof creation"]
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1669646471652-5e6cd8b9d5a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    title: "TĂIERE ȘI ȘTANȚARE",
    description: "Servicii de tăiere de precizie și ștanțare pentru forme personalizate. Margini curate și forme perfect executate pentru toate produsele.",
    category: "Finishing",
    features: ["Custom shapes", "Precision cutting", "Clean edges"]
  },
  {
    image: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    title: "FOIL STAMPING",
    description: "Servicii de foil stamping: aplicare folie metalică aur și argint pentru un aspect premium. Efecte metalice elegante pe ambalaje și invitații.",
    category: "Finishing",
    features: ["Metallic effects", "Gold & silver foil", "Premium appearance"]
  },
  {
    image: "https://images.unsplash.com/photo-1512879336734-d372f3f6402d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    title: "EMBOSARE ȘI DEBOSARE",
    description: "Servicii de embosare și debosare: crearea de texturi în relief sau adâncite. Finisaj elegant pentru cărți de vizită și materiale premium.",
    category: "Finishing",
    features: ["Raised texture", "Debossing available", "Elegant finish"]
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    title: "LĂCUIRE UV SELECTIVĂ",
    description: "Servicii de lăcuire UV selectivă: aplicare lac pe zone specifice pentru contrast strălucitor. Efecte vizuale atractive și protecție suplimentară.",
    category: "Finishing",
    features: ["Spot UV coating", "Glossy highlights", "Eye-catching effect"]
  },
  {
    image: "https://images.unsplash.com/photo-1656784095237-3fcb8f5971b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    title: "LAMINARE ȘI PROTECȚIE",
    description: "Servicii de laminare mat sau lucioasă. Protecție împotriva apei, rezistență la zgârieturi și durabilitate sporită pentru materialele tipărite.",
    category: "Finishing",
    features: ["Matte or glossy", "Water resistant", "Scratch protection"]
  }
]

const servicesTexts = [
  {
    number: "1",
    title: "ECONOMISIRE DE TIMP",
    description: "Nu este nevoie să apelați încă o dată la intermediari. Pre-presarea are loc în prezența voastră."
  },
  {
    number: "2",
    title: "CONTROLUL PRE-PRESĂRII",
    description: "Puteți controla întregul proces de pre-presare de la verificarea/crearea machetei până la expedierea acesteia pentru tipărire."
  },
  {
    number: "3",
    title: "CALITATEA TIPĂRIRII",
    description: "Folosim cele mai noi echipamente de tipărire digitală și offset ceea ce ne permite să automatizăm tipărirea."
  }
]

function ServicesPage() {
  const [t, i18n] = useTranslation('global')

  return (
    <main className='relative min-h-screen overflow-x-hidden default-bg'>
      <PageHeader
        title={t('_services')}
        subtitle="Professional printing services with state-of-the-art technology and expert craftsmanship"
        breadcrumbs={['Home', 'Services']}
      />
      <HeadingText servicesTexts={servicesTexts} />
      <ProductHighlight />
      <ProductGrid products={services} />
      <CTABanner />
    </main>
  )
}

export default ServicesPage