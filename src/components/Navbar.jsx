import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import mainImage from '../assets/main.png'
import Language from './Language';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const [t] = useTranslation('global');

    const navLinks = [
        { label: t('_home'), href: "/" },
        { label: t('_products'), href: "/products" },
        { label: t('_services'), href: "/services" },
        { label: t('_testimonials'), href: "/testimonials" },
        { label: t('_contactUs'), href: "/contacts" }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 default-bg backdrop-blur-sm z-50 shadow-sm">
            <div className="w-full max-w-7xl container mx-auto flex items-center justify-between px-4 md:h-30 h-25">
                {/* Logo and Title */}
                <div className="flex items-center gap-1 cursor-pointer">
                    <img src={mainImage} alt="" className='h-12 w-auto object-contain' />
                </div>

                {/* Mobile menu button*/}
                <button className='md:hidden p-2'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {
                        isMenuOpen ? <HiX className='size-6 text-white' /> : <HiMenu className='size-6 text-white' />
                    }

                </button>



                {/* Desktop navitems */}

                <div className='hidden md:flex gap-10 items-center'>
                    {
                        navLinks.map((link, index) => (
                            <Link key={index} to={link.href}
                                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                                after:w-0 hover:after:w-full after:bg-white after:transition-all ${location.pathname === link.href ? 'text-white after:w-full' : 'text-[#807f7d] hover:text-white'}`}
                            >
                                {link.label}
                            </Link>
                        ))
                    }
                </div>

                <span className="flex items-center gap-5 hidden md:block">
                    <Language />

                    {/* Get in touch button */}
                    <button className='default-bg-button text-black px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
                        <Link to='/contacts'>
                            {t('_getInTouch')}
                        </Link>
                    </button>
                </span>

            </div>

            {/* Mobile menu items */}
            {
                isMenuOpen && (
                    <div className='md:hidden bg-black py-4'>
                        <div className='container mx-auto px-4 space-y-3'>
                            {navLinks.map((link, index) => (
                                <Link key={index} to={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block text-sm font-medium py-2 ${location.pathname === link.href ? "text-white" : "text-gray-400 hover:text-gray-300"}`}>
                                    {link.label}
                                </Link>
                            ))}

                            {/* Testez */}
                            <Language />

                            {/* Get in touch button */}
                            <button className='w-full default-bg-button text-black px-6 my-3 py-2.5 rounded-lg text-sm font-medium'>
                                <Link to='/contacts'>
                                    {t('_getInTouch')}
                                </Link>
                            </button>
                        </div>
                    </div>
                )

            }

        </nav>
    )
}

export default Navbar;