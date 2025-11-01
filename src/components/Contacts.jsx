import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ContactInfo from './ContactInfo'
import { FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

function Contacts() {

    const [t] = useTranslation('global')

    return (
        <section className='py-16 md:py-24 default-bg'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-16'
                >
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                        Get in Touch with Us
                    </h2>
                    <p className='text-lg text-[#a0a0a0] max-w-2xl mx-auto'>
                        We're here to help with all your printing needs. Reach out via phone, email, or visit us at our location.
                    </p>
                </motion.div>

                {/* Contact Info Cards */}
                <div className='mb-16'>
                    <ContactInfo />
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#333333]'
                >
                    {/* Map Header */}
                    <div className='p-6 md:p-8 border-b border-[#333333]'>
                        <div className='flex items-center gap-4'>
                            <div className='w-12 h-12 bg-[#ffe400]/10 rounded-xl flex items-center justify-center text-[#ffe400] text-2xl'>
                                <FaMapMarkedAlt />
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-white'>Find Us Here</h3>
                                <p className='text-[#a0a0a0]'>Strada Socoleni 7/2, Chișinău, Moldova</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className='relative h-96 md:h-[500px]'>
                        <iframe
                            className='w-full h-full'
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2719.8!2d28.845950366042775!3d47.06123873202801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAzJzQwLjUiTiAyOMKwNTAnNDUuNCJF!5e0!3m2!1sro!2s!4v1735000000000!5m2!1sro!2s"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="FlexPrint Location"
                        ></iframe>

                        {/* Overlay gradient for better integration */}
                        <div className='absolute inset-0 pointer-events-none border-4 border-[#1a1a1a] rounded-b-2xl'></div>
                    </div>
                </motion.div>

                {/* Quick Contact Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='mt-12 bg-gradient-to-r from-[#ffe400] to-[#ffd700] rounded-2xl p-8 md:p-12 text-center'
                >
                    <h3 className='text-2xl md:text-3xl font-bold text-black mb-4'>
                        Need Immediate Assistance?
                    </h3>
                    <p className='text-black/80 text-lg mb-6 max-w-2xl mx-auto'>
                        Our team is available Monday to Friday, 9:00 AM - 6:00 PM. Call us now for urgent inquiries.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <a
                            href="tel:+37379731688"
                            className='inline-flex items-center justify-center gap-3 bg-black text-[#ffe400] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#131313] transition-all duration-300 shadow-xl'
                        >
                            <FaPhone className='text-xl' />
                            +373 79 73 16 88
                        </a>
                        <a
                            href="tel:+37368528723"
                            className='inline-flex items-center justify-center gap-3 bg-black/20 backdrop-blur-sm text-black border-2 border-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-black hover:text-[#ffe400] transition-all duration-300'
                        >
                            <FaPhone className='text-xl' />
                            +373 68 52 87 23
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contacts