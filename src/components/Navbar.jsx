import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
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
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
            <div className="w-full max-w-7xl container mx-auto flex items-center justify-between px-4 md:h-20 h-16">
                {/* Logo and Title */}
                <div className="flex items-center gap-1 cursor-pointer">
                    <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                    <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
                </div>

                {/* Mobile menu button*/}
                <button className='md:hidden p-2'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {
                        isMenuOpen ? <HiX className='size-6' /> : <HiMenu className='size-6' />
                    }

                </button>



                {/* Desktop navitems */}

                <div className='hidden md:flex gap-10 items-center'>
                    {
                        navLinks.map((link, index) => (
                            <Link key={index} to={link.href}
                                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                                after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${location.pathname === link.href ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                {link.label}
                            </Link>
                        ))
                    }
                </div>

                <span className="flex items-center gap-5 hidden md:block">
                    <Language />

                    {/* Get in touch button */}
                    <button className='bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
                        <Link to='/contacts'>
                            {t('_getInTouch')}
                        </Link>
                    </button>
                </span>

            </div>

            {/* Mobile menu items */}
            {
                isMenuOpen && (
                    <div className='md:hidden bg-white border-t border-gray-100 py-4'>
                        <div className='container mx-auto px-4 space-y-3'>
                            {navLinks.map((link, index) => (
                                <Link key={index} to={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block text-sm font-medium py-2 ${location.pathname === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}>
                                    {link.label}
                                </Link>
                            ))}

                            {/* Testez */}
                            <Language />

                            {/* Get in touch button */}
                            <button className='w-full bg-blue-600 text-white px-6 my-3 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
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