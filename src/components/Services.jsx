import React from 'react'
import mainImage from '../assets/services-images/main.png'
import tiparireImage from '../assets/services-images/tiparire.png'
import designGraficImage from '../assets/services-images/design-grafic.png'
import proiectareImage from '../assets/services-images/proiectare.png'
import taiereImage from '../assets/services-images/taiere.png'
import brailleImage from '../assets/services-images/braille.png'
import embosareImage from '../assets/services-images/embosare.png'
import lacuireImage from '../assets/services-images/lacuire.png'
import laminareImage from '../assets/services-images/laminare.png'
import stantareImage from '../assets/services-images/stantare.png'
import ImageBanner from './ImageBanner'
import HeadingText from './HeadingText'
import BoxComponent from './BoxComponent'
import Envelope from './Envelope'

const services = [
    {
        image : tiparireImage,
        title : "TIPĂRIREA",
        description : "Nu vă limitați imaginația în proiectarea produselor voastre la un nivel modern în orice domeniu."
    },
    {
        image : designGraficImage,
        title : "DESIGN GRAFIC",
        description : "Designul trebuie să fie nu doar atractiv, ci și stilat, iar informațiile trebuie să fie concise și ușor de înțeles pentru toți."
    },
    {
        image : proiectareImage,
        title : "PROIECTAREA",
        description : "Este una dintre etapele principale în pregătirea produselor pentru tipărire, de care va depinde întregul proces de producție ulterior."
    },
    {
        image : taiereImage,
        title : "TĂIEREA ȘI DECUPAREA",
        description : "Procedeul de ștanțare a foilor constă în obținerea produselor prin separarea materialului de-a lungul unui contur închis într-o ștanță."
    },
    {
        image : stantareImage,
        title : "ȘTANȚARE",
        description : "Procesul de transfer, prin presiune și încălzire, a unei folii metalizate sau colorate dintr-un substrat intermediar pe o amprentă."
    },
    {
        image : embosareImage,
        title : "EMBOSARE",
        description : "Proces de realizare a unui element reliefat (adâncit) pe hârtie groasă de orice formă."
    },
    {
        image : brailleImage,
        title : "BRAILLE",
        description : "BRAILLE, fontul Braille este un font tactil punctat în relief conceput pentru scriere și citire pentru persoanele nevăzătoare și cu deficiențe de vedere."
    },
    {
        image : lacuireImage,
        title : "LĂCUIRE SELECTATĂ",
        description : "O tehnologie care presupune lăcuirea nu a întregii suprafețe a amprentei, ci a unei părți a acesteia, a anumitor elemente ale imaginii."
    },
    {
        image : laminareImage,
        title : "LAMINAREA",
        description : "Laminarea unui document înseamnă protejarea acestuia de influențele externe ale mediului, folosind o folie transparentă specială."
    },
]

const servicesTexts = [
    {
        number: "01",
        title: "ECONOMISIRE DE TIMP",
        description: "Nu este nevoie să apelați încă o dată la intermediari. Pre-presarea are loc în prezența voastră." 
    },
    {
        number: "02",
        title:"CONTROLUL PRE-PRESĂRII",
        description: "Puteți controla întregul proces de pre-presare de la verificarea/crearea machetei până la expedierea acesteia pentru tipărire." 
    },
    {
        number: "03",
        title:"CALITATEA TIPĂRIRII",
        description: "Folosim cele mai noi echipamente de tipărire digitală și offset ceea ce ne permite să automatizăm tipărirea." 
    }
]

function Services() {
  return (
    <section className='mt-20'>
        {/* Image banner */}
        <ImageBanner mainImage={mainImage} title="Servicii"/>
        <div className='max-w-7xl mx-auto px-4 my-8'>
            {/* Heading Texts */}
            <HeadingText servicesTexts={servicesTexts}/>
            {/* Services boxes */}
            <BoxComponent component={services}/>
            {/* Envelope component */}
            <Envelope/>
        </div>
    </section>
  )
}

export default Services