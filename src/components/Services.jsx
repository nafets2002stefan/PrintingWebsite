import React from 'react'
import albumImage from '../assets/services-images/album.png'
import brosuraImage from '../assets/services-images/brosura.png'
import formularAntetImage from '../assets/services-images/formular-antet.png'
import formularImage from '../assets/services-images/formular.png'
import produseCosmeticeImage from '../assets/services-images/produse-cosmetice.png'
import produseTutunImage from '../assets/services-images/produse-tutun.png'

const services = [
    {
        image : produseCosmeticeImage,
        title : "PRODUSE COSMETICE",
        description : "Producerea cutiilor de carton pentru produse farmaceutice, cosmetice, alimentare și din tutun."
    },
    {
        image : produseTutunImage,
        title : "PRODUSE DIN TUTUN",
        description : "Producerea cutiilor de carton pentru produse farmaceutice, cosmetice, alimentare și din tutun."
    },
    {
        image : albumImage,
        title : "ALBUME",
        description : "Albumul este o ediție poligrafică neobișnuită și specială. Este extrem de dificil de pregătit, deoarece este nevoie de un nivel înalt de profesionalism."
    },
    {
        image : formularAntetImage,
        title : "FORMULAR CU ANTET",
        description : "Formularul cu antet este un element al stilului corporativ al unei companii, organizații sau persoane publice."
    },
    {
        image : brosuraImage,
        title : "BROŞURI",
        description : "Broșurile publicitare conțin informații voluminoase despre produs fiind realizate la un cost relativ scăzut de producere."
    },
    {
        image : formularImage,
        title : "FORMULARE",
        description : "Formularul cu antet este un element al stilului corporativ al unei companii. Orice companie trebuie să aibă formulare cu antet."
    },
]

const Services = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16'>
        {/* Heading Texts */}
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>TIPOGRAFIA PERFECTĂ</h2>
            <p className='text-l text-gray-600'>Tipografia Pergament este o companie de familie fondată în anul 1999.</p>
            <p className='text-l text-gray-600'>Producem ambalaje din carton, materiale publicitare imprimate și ediții periodice de orice complexitate</p>
        </div>

        {/* Features boxs */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {services.map((service, index) => (
                <div key={index} className='flex flex-col items-center p-1 text-center '>
                    <div className='group w-full h-62 sm:h-72 md:h-64'>
                        <div className='relative  h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                            <div className='absolute inset-0'>
                                <img src={service.image} className="h-full w-full rounded-xl object-cover" alt="" />
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/50 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className='flex min-h-full flex-col items-center justify-center'>
                                    <p className='text-xl font-medium'>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-3xl font-medium my-3'>{service.title}</h3>
                </div>
            ))}

            {/*
            {services.map((service, index) => (
                <div key={index} className='flex flex-col items-center p-6 pb-0 text-center border'>
                    <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center bg-gray-200 hover:bg-blue-600 hover:text-white transition-all duration-200'>
                        <div className='text-4xl'>{service.image}</div>
                    </div>
                    <h3 className='text-2xl font-medium mb-3'>{service.title}</h3>
                    <p className='text-gray-500 text-center'>{service.description}</p>
                </div>
            ))}
            */}

        </div>

    </section>
  )
}

export default Services