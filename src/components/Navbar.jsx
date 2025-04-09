import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiX } from 'react-icons/hi';
import { TbMenu } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';
import mainImage from '../assets/main.svg'
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
                {/* Mobile navbar*/}
                <div className='md:hidden flex items-center justify-between w-full'>

                    <button className='m-1 p-1 border-3 border-white rounded-xl text-white '
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {
                            isMenuOpen ? <HiX className='size-6 text-white' /> : <TbMenu className='size-6 text-white ' />
                        }

                    </button>
                    <div className="items-center gap-1 cursor-pointer flex-shrink-0 object-cover">
                        <img src={mainImage} alt="" className='h-15 w-[108px] object-contain' />
                    </div>
                    <Language/>
                    
                </div>
                {/* Logo and Title */}
                <div className="hidden md:flex items-center gap-1 cursor-pointer">
                    <img src={mainImage} alt="" className='[@media(min-width:769px)]:w-[80px] h-15 [@media(min-width:841px)]:w-[108px] object-contain' />
                </div>

                {/* Desktop navitems */}

                <div className='hidden md:flex gap-5 lg:gap-12 xl:gap-18 items-center whitespace-nowrap'>
                    {
                        navLinks.map((link, index) => (
                            <Link key={index} to={link.href}
                                className={`text-m font-medium  [@media(min-width:769px)]:text-sm [@media(min-width:841px)]:text-base relative  ${location.pathname === link.href ? 'text-white' : 'text-[#807f7d] hover:text-white'}`}
                            >
                                {link.label}
                            </Link>
                        ))
                    }
                    <Language/>
                
                        {/* Get in touch button */}
                        <button className='hidden md:block default-bg-button text-black px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
                            <Link to='/contacts'>
                                {t('_getInTouch')}
                            </Link>
                        </button>
                    </div>
            </div>

            {/* Mobile menu items */}
            {
                isMenuOpen && (
                    <div className='md:hidden bg-black py-4'>
                        <div className='container mx-auto px-4 space-y-3'>
                            {navLinks.map((link, index) => (
                                <Link key={index} to={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block text-lg font-medium py-2 ${location.pathname === link.href ? "text-white" : "text-gray-400 hover:text-gray-300"}`}>
                                    {link.label}
                                </Link>
                            ))}

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