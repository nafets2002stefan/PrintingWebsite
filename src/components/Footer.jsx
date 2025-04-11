import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import mainImage from '../assets/image1.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    const [t, i18n] = useTranslation('global');

    const footerLinks = {
        [t('_company')] : [
            { name: t('_home'), href: '/' },
            { name: t('_products'), href: '/products' },
            { name: t('_services'), href: '/services' },
            { name: t('_testimonials'), href: '/testimonials' },
            { name: t('_contactUs'), href: '/contacts' },
        ],
        [t('_contacts')] : [
          { name: t('_viber'), href: `viber://chat?number=${t('_phoneNumber')}` },
          { name: t('_phone'), href: `tel:${t('_phoneNumber')}` },
        ],
      }

    return (
        <footer className='bg-black'>
            <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap12'>
                    {/* Brand column */}
                    <div className='lg:col-span-4'>
                        <div className='flex gap-1 items-center mb-6'>
                            <div className="flex items-center gap-1 cursor-pointer">
                                <img src={mainImage} alt="" className='h-7 w-auto object-contain' />
                            </div>
                        </div>
                        <p className='default-link-color font-semibold mb-6 md:w-3/4'>{t('_littleBlindTextWarning')}</p>
                        <div className='flex gap-4'>
                            <a href={t('_facebook')} className='w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200'><FaFacebookF className='size-5'/></a>
                            <a href={t('_x')} className='w-10 h-10  rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-200'><FaXTwitter className='size-5'/></a>
                            <a href={t('_instagram')} className='w-10 h-10 text-[#807f7d] rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-500 hover:text-white transition-all duration-200'><FaInstagram className='size-5'/></a>

                        </div>
                    </div>

                    {/* Footer nav items column */}
                    <div className='lg:col-span-8'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category}>
                                    <h3 className='text-lg font-semibold mb-4 uppercase text-white'>{category}</h3>
                                    <ul className='space-y-3'>
                                        {links.map((link, index) => (
                                            <li key={index}>
                                                <Link to={link.href} className='text-[#807f7d] font-semibold hover:text-white'>{link.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer bottom section*/}
                <div className='border-t border-gray-200 mt-12 pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className='default-link-color text-sm'>Copyright © {new Date().getFullYear()}</p>
                        <p className='default-link-color text-sm'>{t('_createdBy')} Stefan Berestean</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer