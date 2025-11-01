import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { HiX } from 'react-icons/hi'
import { TbMenu } from 'react-icons/tb'
import { FiPhone } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import mainImage from '../assets/main.png'
import Language from './Language'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const [t, i18n] = useTranslation('global')
    const currentLang = i18n.language || 'ro'

    const menuRef = useRef()
    const toggleRef = useRef()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target) &&
                toggleRef.current && !toggleRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false)
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('touchstart', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('touchstart', handleClickOutside)
        }
    }, [isMenuOpen])

    const navLinks = [
        { label: t('_home'), href: `/${currentLang}` },
        { label: t('_products'), href: `/${currentLang}/products` },
        { label: t('_services'), href: `/${currentLang}/services` },
        { label: t('_FAQ'), href: `/${currentLang}/questions` },
        { label: t('_contactUs'), href: `/${currentLang}/contacts` }
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-black/95 backdrop-blur-lg shadow-2xl shadow-black/50 border-b border-[#ffe400]/20'
                    : 'bg-black/80 backdrop-blur-md border-b border-[#ffe400]/10'
            }`}
        >
            <div className="w-full max-w-7xl container mx-auto flex items-center justify-between px-4 h-20 md:h-24">
                {/* Mobile navbar*/}
                <div className='md:hidden flex items-center justify-between w-full'>
                    <motion.button
                        ref={toggleRef}
                        whileTap={{ scale: 0.95 }}
                        className='p-2 rounded-xl bg-[#1a1a1a] border border-[#333333] hover:border-[#ffe400] text-white transition-all duration-300'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <HiX className='w-6 h-6' />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <TbMenu className='w-6 h-6' />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    <Link to={`/${currentLang}`} className="flex-shrink-0">
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            src={mainImage}
                            alt="FlexPrint"
                            className='h-10 w-auto object-contain'
                        />
                    </Link>

                    <div className="flex items-center gap-3">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+37379731688"
                            className="p-2 rounded-xl bg-[#ffe400]/10 text-[#ffe400] hover:bg-[#ffe400] hover:text-black transition-all duration-300"
                        >
                            <FiPhone className="w-5 h-5" />
                        </motion.a>
                        <Language />
                    </div>
                </div>

                {/* Logo - Desktop */}
                <div className="hidden md:flex items-center">
                    <Link to={`/${currentLang}`}>
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            src={mainImage}
                            alt="FlexPrint"
                            className='h-12 lg:h-14 w-auto object-contain'
                        />
                    </Link>
                </div>

                {/* Desktop nav items */}
                <div className='hidden md:flex gap-5 lg:gap-8 xl:gap-10 items-center whitespace-nowrap'>
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Link
                                to={link.href}
                                className={`text-sm lg:text-base font-semibold relative transition-all duration-300 group ${
                                    location.pathname === link.href
                                        ? 'text-[#ffe400]'
                                        : 'text-[#a0a0a0] hover:text-white'
                                }`}
                            >
                                {link.label}
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#ffe400] rounded-full"
                                    initial={{ scaleX: location.pathname === link.href ? 1 : 0 }}
                                    animate={{ scaleX: location.pathname === link.href ? 1 : 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ originX: 0 }}
                                />
                            </Link>
                        </motion.div>
                    ))}

                    <motion.a
                        href="tel:+37379731688"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-xl bg-[#1a1a1a] border border-[#333333] hover:border-[#ffe400] text-[#a0a0a0] hover:text-[#ffe400] transition-all duration-300"
                    >
                        <FiPhone className="w-5 h-5" />
                    </motion.a>

                    <Language />

                    {/* Get in touch button */}
                    <Link to={`/${currentLang}/contacts`}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='default-bg-button text-black px-6 lg:px-8 py-2.5 lg:py-3 rounded-xl font-bold hover:bg-[#ffd700] text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#ffe400]/30'
                        >
                            {t('_getInTouch')}
                        </motion.button>
                    </Link>
                </div>
            </div>

            {/* Mobile menu items */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='md:hidden bg-black/95 backdrop-blur-lg border-t border-[#333333]'
                    >
                        <div className='container mx-auto px-4 py-6 space-y-2'>
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block text-base font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                                            location.pathname === link.href
                                                ? 'bg-[#ffe400]/10 text-[#ffe400] border-l-4 border-[#ffe400]'
                                                : 'text-[#a0a0a0] hover:text-white hover:bg-[#1a1a1a] border-l-4 border-transparent'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Get in touch button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                            >
                                <Link to={`/${currentLang}/contacts`} onClick={() => setIsMenuOpen(false)}>
                                    <button className='w-full default-bg-button text-black px-6 py-3 rounded-xl text-base font-bold mt-4 hover:bg-[#ffd700] transition-all duration-300 shadow-lg'>
                                        {t('_getInTouch')}
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
