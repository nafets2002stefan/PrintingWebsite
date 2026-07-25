import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaStar, FaAward, FaClock, FaCheckCircle } from 'react-icons/fa'

const ProductHighlight = () => {
  const [t] = useTranslation('global')
  const highlights = [
    {
      icon: <FaStar />,
      title: t('_premiumQuality'),
      description: t('_highlightQualityDesc')
    },
    {
      icon: <FaClock />,
      title: t('_highlightSpeedTitle'),
      description: t('_highlightSpeedDesc')
    },
    {
      icon: <FaAward />,
      title: t('_highlightDesignTitle'),
      description: t('_highlightDesignDesc')
    },
    {
      icon: <FaCheckCircle />,
      title: t('_highlightCustomTitle'),
      description: t('_highlightCustomDesc')
    }
  ]

  return (
    <section className='py-16 md:py-20 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            {t('_productHighlightHeading')}
          </h2>
          <p className='text-lg text-[#a0a0a0] max-w-2xl mx-auto'>
            {t('_productHighlightSubheading')}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className='group relative bg-[#131313] p-6 rounded-2xl border border-[#333333] hover:border-[#ffe400] transition-all duration-300 hover:shadow-xl hover:shadow-[#ffe400]/10 overflow-hidden'
            >
              {/* Background Glow */}
              <div className='absolute inset-0 bg-gradient-to-br from-[#ffe400]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              {/* Icon */}
              <div className='relative w-14 h-14 mb-4 bg-[#ffe400]/10 rounded-xl flex items-center justify-center text-[#ffe400] text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className='relative text-xl font-bold text-white mb-2 group-hover:text-[#ffe400] transition-colors duration-300'>
                {item.title}
              </h3>
              <p className='relative text-[#a0a0a0] text-sm leading-relaxed'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductHighlight
