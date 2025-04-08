import React from 'react'
import { useTranslation } from 'react-i18next';
import mainImage from '../assets/contacts-images/main.png'
import ImageBanner from './ImageBanner'
import { FaViber } from 'react-icons/fa';
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Contacts() {
    
    const [t] = useTranslation('global');

    return (
        <section className='mt-20'>
            {/* Image banner */}
            <ImageBanner mainImage={mainImage} title={t('_contacts')}/>
            <div className='max-w-7xl mx-auto px-4 my-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='cutie'>
                        <h1 className='text-2xl font-semibold'>Contacte</h1>
                        <div className='h-[1px] bg-blue-600 w-full my-5'></div>
                        <span className='font-semibold text-gray-600'>Luni — Vineri: </span> <span className='text-gray-600'>09:00 — 18:00</span>
                        <div className='flex items-center mt-5' > 
                            <FaViber className='size-6 mr-2 text-violet-900'/>
                            +373 68 528 723
                         </div> 
                         <div className='flex items-center mt-5' > 
                            <FaViber className='size-6 mr-2 text-violet-900'/>
                            +373 69 34 21 78
                         </div> 
                         <br/> 
                         <div className='flex items-center mt-5' > 
                            <IoMailOutline  className='size-6 mr-2 text-gray-600'/>
                            stefanberestean@gmail.com
                         </div>
                         <div className='flex items-center mt-5' > 
                            <IoMailOutline  className='size-6 mr-2 text-gray-600'/>
                            testare@gmail.com
                         </div>
                         <br/> 
                         <div className='flex items-center mt-5' > 
                            <FaFacebook  className='size-6 mr-2 text-gray-600'/>
                            Facebook
                         </div>
                         <div className='flex items-center mt-5' > 
                            <FaInstagram  className='size-6 mr-2 text-gray-600'/>
                            Instagram
                         </div>
                         <div className='flex items-center mt-5' > 
                            <FaXTwitter  className='size-6 mr-2 text-gray-600'/>
                            X
                         </div>

                    </div>
                    <div className='space-y-5'>
                    <div className='cutie'>
                        <h1 className='text-2xl font-semibold'>Adresa</h1>
                        <div className='h-[1px] bg-blue-600 w-full my-5'></div>
                        <span className='font-semibold text-gray-600'>Republica Moldova <br/>or. Chișinău </span> <div className='text-gray-600'>str. Columna 170, bloc C<br/>
                        (parcul industrial „Tracom”)</div>
                    </div>
                    <div className='cutie'>
                        <h1 className='text-2xl font-semibold'>Rechizite</h1>
                        <div className='h-[1px] bg-blue-600 w-full my-5'></div>
                         <div className='text-gray-600'>Nume: SRL «Capatina Print»<br/>
                            Cod TVA: 0501938<br/>Cod fiscal: 1003600093280<br/>IBAN: MD34CM000225104980141956<br/>Banca: BIC CMTBMD2X в BC «Comertbank» SA, Sucursala nr. 3<br/>Adresa juridică/fizică: or. Chișinău, str. Columna 170
                        </div>
                    </div>
                    </div>
                </div>
                <div className='cutie mt-10'>
                    <h1 className='text-2xl font-semibold'>Harta</h1>
                    <div className='h-[1px] bg-blue-600 w-full my-5'></div>
                    <div className='map w-full h-150'>
                        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.3174650012115!2d28.819918076797183!3d46.97509883137154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97eda1a1fca09%3A0x3a5ea2e37be90147!2sstr-la%201%20Sitarului%2C%20Codru%2C%20Moldova!5e0!3m2!1sro!2s!4v1744118092871!5m2!1sro!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
      )
}

export default Contacts