import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import mainImage from '../assets/main.png'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const [t, i18n] = useTranslation('global')
    const currentLang = i18n.language || 'ro'
    const location = useLocation()

    const footerLinks = {
        [t('_company')] : [
            { name: t('_home'), href: `/${currentLang}` },
            { name: t('_products'), href: `/${currentLang}/products` },
            { name: t('_services'), href: `/${currentLang}/services` },
            { name: t('_FAQ'), href: `/${currentLang}/questions` },
            { name: t('_contactUs'), href: `/${currentLang}/contacts` },
        ],
    }

    const contactInfo = [
        { icon: <FaPhone />, text: '+373 79 73 16 88', href: 'tel:+37379731688' },
        { icon: <FaEnvelope />, text: 'flexprintgroup@gmail.com', href: 'mailto:flexprintgroup@gmail.com' },
        { icon: <FaMapMarkerAlt />, text: 'Strada Socoleni 7/2, Chișinău', href: '#' },
    ]

    const socialMedia = [
        { icon: <FaFacebookF />, name: 'Facebook', href: t('_facebook'), color: 'hover:bg-blue-600' },
        { icon: <FaXTwitter />, name: 'X', href: t('_x'), color: 'hover:bg-white hover:text-black' },
        { icon: <FaInstagram />, name: 'Instagram', href: t('_instagram'), color: 'hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600' },
    ]

    return (
        <footer className='relative bg-gradient-to-b from-[#0a0a0a] to-black border-t border-[#333333]'>
            {/* Decorative top line */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffe400] to-transparent'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
                    {/* Brand Column */}
                    <div className='lg:col-span-4'>
                        <Link to={`/${currentLang}`} className='inline-block mb-6'>
                            <img src={mainImage} alt="FlexPrint" className='h-12 w-auto object-contain hover:scale-105 transition-transform duration-300' />
                        </Link>
                        <p className='text-[#a0a0a0] text-sm leading-relaxed mb-6'>
                            {t('_littleBlindTextWarning')}
                        </p>

                        {/* Social Media */}
                        <div className='mb-6'>
                            <h4 className='text-white font-bold mb-4 text-sm uppercase tracking-wider'>Follow Us</h4>
                            <div className='flex gap-3'>
                                {socialMedia.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-11 h-11 rounded-xl bg-[#1a1a1a] border border-[#333333] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#ffe400] transition-all duration-300 ${social.color}`}
                                    >
                                        <span className='text-lg'>{social.icon}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='lg:col-span-3'>
                        <h3 className='text-white font-bold mb-6 text-sm uppercase tracking-wider'>Quick Links</h3>
                        <ul className='space-y-3'>
                            {footerLinks[t('_company')].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className={`text-[#a0a0a0] hover:text-[#ffe400] transition-colors duration-300 text-sm flex items-center gap-2 group ${
                                            location.pathname === link.href ? 'text-[#ffe400]' : ''
                                        }`}
                                    >
                                        <span className='w-0 group-hover:w-2 h-0.5 bg-[#ffe400] transition-all duration-300'></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='lg:col-span-5'>
                        <h3 className='text-white font-bold mb-6 text-sm uppercase tracking-wider'>Contact Info</h3>
                        <ul className='space-y-4'>
                            {contactInfo.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className='flex items-start gap-3 text-[#a0a0a0] hover:text-[#ffe400] transition-colors duration-300 text-sm group'
                                    >
                                        <span className='text-[#ffe400] text-base mt-0.5 group-hover:scale-110 transition-transform duration-300'>
                                            {item.icon}
                                        </span>
                                        <span className='flex-1'>{item.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Working Hours */}
                        <div className='mt-6 p-4 bg-[#1a1a1a] rounded-xl border border-[#333333]'>
                            <p className='text-white font-semibold text-sm mb-2'>Working Hours</p>
                            <p className='text-[#a0a0a0] text-sm'>Monday - Friday: 09:00 - 18:00</p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className='mt-12 pt-8 border-t border-[#333333]'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className='text-[#666666] text-sm text-center md:text-left'>
                            © {new Date().getFullYear()} FlexPrint. All rights reserved.
                        </p>
                        <p className='text-[#666666] text-sm flex items-center gap-2'>
                            {t('_createdBy')}
                            <span className='text-[#ffe400] font-semibold'>Stefan Berestean</span>
                            <FaHeart className='text-red-500 text-xs animate-pulse' />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer