import React from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaArrowRight, FaPhone } from 'react-icons/fa'

const CTABanner = () => {
  const [t, i18n] = useTranslation('global')
  const currentLang = i18n.language || 'ro'

  return (
    <section className='relative py-20 md:py-28 overflow-hidden'>
      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#ffe400] via-[#ffd700] to-[#ffb800]'></div>

      {/* Pattern Overlay */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)',
        }}></div>
      </div>

      {/* Animated Circles */}
      <div className='absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-10 left-10 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className='text-center'
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='inline-block mb-6'
          >
            <span className='bg-black/20 backdrop-blur-sm text-black px-6 py-2 rounded-full text-sm font-semibold'>
              ✨ Ready to Start Your Project?
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight'>
            Let's Bring Your Ideas to Life
          </h2>

          {/* Description */}
          <p className='text-lg md:text-xl text-black/80 max-w-3xl mx-auto mb-10 leading-relaxed'>
            Get in touch with our team today for a free consultation and quote. We're here to help you create stunning printed materials that make an impact.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link to={`/${currentLang}/contacts`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='group bg-black text-[#ffe400] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#131313] transition-all duration-300 shadow-2xl hover:shadow-black/50 flex items-center gap-3'
              >
                Get Started Now
                <FaArrowRight className='group-hover:translate-x-1 transition-transform duration-300' />
              </motion.button>
            </Link>

            <a href="tel:+37379731688">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='group bg-white/20 backdrop-blur-sm text-black border-2 border-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-black hover:text-[#ffe400] hover:border-[#ffe400] transition-all duration-300 shadow-lg flex items-center gap-3'
              >
                <FaPhone className='group-hover:rotate-12 transition-transform duration-300' />
                Call Us Now
              </motion.button>
            </a>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className='mt-12 flex flex-wrap justify-center items-center gap-8 text-black/70 text-sm font-medium'
          >
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>✓</span>
              <span>15+ Years Experience</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>✓</span>
              <span>5000+ Projects</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>✓</span>
              <span>Fast Turnaround</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>✓</span>
              <span>Premium Quality</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner
