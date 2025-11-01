import React from 'react'
import { useTranslation } from 'react-i18next';
import mainImage from '../assets/products-images/main.png'
import albumImage from '../assets/products-images/album.png'
import brosuraImage from '../assets/products-images/brosura.png'
import formularAntetImage from '../assets/products-images/formular-antet.png'
import formularImage from '../assets/products-images/formular.png'
import produseCosmeticeImage from '../assets/products-images/produse-cosmetice.png'
import produseTutunImage from '../assets/products-images/produse-tutun.png'
import produseFarmaceuticeImage from '../assets/products-images/produse-farmaceutice.png'
import stickereImage from '../assets/products-images/stickere.png'
import carteImage from '../assets/products-images/carte.png'
import ImageBanner from './ImageBanner'
import HeadingText from './HeadingText'
import BoxComponent from './BoxComponent'
import Envelope from './Envelope'

const products = [
    {
        image : produseCosmeticeImage,
        title : "PRODUSE COSMETICE",
        description : "Producerea cutiilor de carton pentru produse farmaceutice, cosmetice, alimentare și din tutun.",
        category: "Packaging",
        features: ["Custom designs", "Premium materials", "Various sizes available"]
    },
    {
        image : produseTutunImage,
        title : "PRODUSE DIN TUTUN",
        description : "Producerea cutiilor de carton pentru produse farmaceutice, cosmetice, alimentare și din tutun.",
        category: "Packaging",
        features: ["Durable construction", "Brand customization", "Regulatory compliant"]
    },
    {
        image : albumImage,
        title : "ALBUME",
        description : "Albumul este o ediție poligrafică neobișnuită și specială. Este extrem de dificil de pregătit, deoarece este nevoie de un nivel înalt de profesionalism.",
        category: "Publishing",
        features: ["Professional binding", "Premium paper quality", "Custom layouts"]
    },
    {
        image : formularAntetImage,
        title : "FORMULAR CU ANTET",
        description : "Formularul cu antet este un element al stilului corporativ al unei companii, organizații sau persoane publice.",
        category: "Corporate",
        features: ["Professional design", "Brand consistency", "Various paper options"]
    },
    {
        image : brosuraImage,
        title : "BROŞURI",
        description : "Broșurile publicitare conțin informații voluminoase despre produs fiind realizate la un cost relativ scăzut de producere.",
        category: "Marketing",
        features: ["Full-color printing", "Multiple folding options", "Cost-effective"]
    },
    {
        image : formularImage,
        title : "FORMULARE",
        description : "Formularul cu antet este un element al stilului corporativ al unei companii. Orice companie trebuie să aibă formulare cu antet.",
        category: "Corporate",
        features: ["Custom formats", "Carbonless copies available", "Bulk discounts"]
    },
    {
        image : carteImage,
        title : "CĂRȚI",
        description : "O carte tipărită pe hârtie calitativă, cu o copertă originală, realizată dintr-un material de copertare scump, va fi întotdeauna solicitată.",
        category: "Publishing",
        features: ["Hardcover & softcover", "Premium finishing", "ISBN registration"]
    },
    {
        image : stickereImage,
        title : "ETICHETE, STICKERE",
        description : "Produse de etichetare pentru toate tipurile de bunuri. Pot fi realizate din tipuri speciale de hârtie sau autoadezive.",
        category: "Labels",
        features: ["Waterproof options", "Die-cut shapes", "Strong adhesive"]
    },
    {
        image : produseFarmaceuticeImage,
        title : "PRODUSE FARMACEUTICE",
        description : "Producerea cutiilor de carton pentru produse farmaceutice, cosmetice, alimentare și din tutun.",
        category: "Packaging",
        features: ["Safety certified", "Tamper-evident options", "Compliance approved"]
    }
]

const productsTexts = [
    {
        number: "01",
        title: "O GAMĂ LARGĂ",
        description: "De la formulare până la ambalaje de forme complexe, de la cărți de vizită alb-negru până la cataloage de publicitate colore." 
    },
    {
        number: "02",
        title:"SERVICII DE CALITATE ÎNALTĂ",
        description: "De la crearea conceptului produsului până la producerea ambalajelor pentru tirajul final și livrarea acestora către client." 
    },
    {
        number: "03",
        title:"ECHIPAMENTE DE TIPAR",
        description: "Echipamente moderne de tipar și procesare offset, digitale, de format mare." 
    }
]

const Products = () => {
  const [t] = useTranslation('global');
  
  return (
    <section className='mt-20 default-bg'>
        {/* Image banner */}
        <ImageBanner mainImage={mainImage} title={t('_products')}/>
        <div className='max-w-7xl mx-auto px-4 my-8'>
            {/* Heading Texts */}
            <HeadingText servicesTexts={productsTexts}/>
            {/* Products boxes */}
            <BoxComponent components={products}/>
            {/* Envelope component */}
            <Envelope/>
            
        </div>
    </section>
  )
}

export default Products