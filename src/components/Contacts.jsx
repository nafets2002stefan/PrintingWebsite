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
        <section className='mt-20 default-bg'>
            {/* Image banner */}
            <ImageBanner mainImage={mainImage} title={t('_contacts')}/>
            <div className='max-w-7xl mx-auto px-4 my-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='cutie'>
                        <h1 className='text-2xl font-semibold text-white'>{t('_contacts')}</h1>
                        <div className='h-[1px] bg-[#ffe400] w-full my-5'></div>
                        <span className='font-semibold text-[#807f7d]'>Luni — Vineri: 09:00 — 18:00</span>
                        <div className='flex items-center mt-5 text-[#807f7d]' >
                            <FaViber className='size-6 mr-2 text-[#807f7d]'/>
                            +373 78 444 410
                         </div> 
                         <div className='flex items-center mt-5 text-[#807f7d]' >
                            <FaViber className='size-6 mr-2 text-[#807f7d]'/>
                            +373 68 52 87 23
                         </div> 
                         <br/> 
                         <div className='flex items-center mt-5 text-[#807f7d]' >
                            <IoMailOutline  className='size-6 mr-2'/>
                            beresteanstefan@gmail.com
                         </div>
                         <div className='flex items-center mt-5 text-[#807f7d]' >
                            <IoMailOutline  className='size-6 mr-2'/>
                            stefanberestea@gmail.com
                         </div>
                         <br/> 
                         <div className='flex items-center mt-5 text-[#807f7d]' > 
                            <FaFacebook  className='size-6 mr-2'/>
                            Facebook
                         </div>
                         <div className='flex items-center mt-5 text-[#807f7d]' > 
                            <FaInstagram  className='size-6 mr-2'/>
                            Instagram
                         </div>
                         <div className='flex items-center mt-5 text-[#807f7d]' > 
                            <FaXTwitter  className='size-6 mr-2'/>
                            X
                         </div>

                    </div>
                    <div className='space-y-5'>
                    <div className='cutie'>
                        <h1 className='text-2xl font-semibold text-white'>{t('_address')}</h1>
                        <div className='h-[1px] bg-[#ffe400] w-full my-5'></div>
                        <span className='font-semibold text-[#807f7d]'>Republica Moldova <br/>or. Chișinău </span> <div className='text-[#807f7d]'>Strada Socoleni 7/2</div>
                    </div>
                    {/* <div className='cutie'>
                        <h1 className='text-2xl font-semibold text-white'>{t('_supplies')}</h1>
                        <div className='h-[1px] bg-[#ffe400] w-full my-5'></div>
                         <div className='text-[#807f7d]'>Nume: SRL «Capatina Print»<br/>
                            Cod TVA: 0501938<br/>Cod fiscal: 1003600093280<br/>IBAN: MD34CM000225104980141956<br/>Banca: BIC CMTBMD2X в BC «Comertbank» SA, Sucursala nr. 3<br/>Adresa juridică/fizică: or. Chișinău, str. Columna 170
                        </div>
                    </div> */}
                    </div>
                </div>
                <div className='cutie mt-10'>
                    <h1 className='text-2xl font-semibold text-white'>{t('_map')}</h1>
                    <div className='h-[1px] bg-[#ffe400] w-full my-5'></div>
                    <div className='map w-full h-150'>
                        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2719.8!2d28.845950366042775!3d47.06123873202801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAzJzQwLjUiTiAyOMKwNTAnNDUuNCJF!5e0!3m2!1sro!2s!4v1735000000000!5m2!1sro!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
      )
}

export default Contacts