import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaArrowRight, FaCheck } from 'react-icons/fa'

const ProductGrid = ({ products }) => {
  const [t, i18n] = useTranslation('global')
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    setSelectedCategory('All')
  }, [i18n.language])

  // Extract unique categories
  const categories = ['All', ...new Set(products.map(p => p.category || 'General'))]

  // Filter products
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => (p.category || 'General') === selectedCategory)

  return (
    <section className='py-16 md:py-24 default-bg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-12 flex flex-wrap justify-center gap-3'
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#ffe400] text-black shadow-xl shadow-[#ffe400]/30 scale-105'
                  : 'bg-[#1a1a1a] text-[#a0a0a0] hover:bg-[#222222] hover:text-white border border-[#333333]'
              }`}
            >
              {category === 'All' ? t('_all') : category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className='group relative bg-[#1a1a1a] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#ffe400]/10 transition-all duration-500 hover:-translate-y-2'
            >
              {/* Image Container */}
              <div className='relative h-72 overflow-hidden'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                />
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300'></div>

                {/* Category Badge */}
                {product.category && (
                  <div className='absolute top-4 left-4'>
                    <span className='bg-[#ffe400] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase'>
                      {product.category}
                    </span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className='text-center px-6'>
                    <p className='text-white text-base leading-relaxed'>
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#ffe400] transition-colors duration-300'>
                  {product.title}
                </h3>

                {/* Features List */}
                {product.features && (
                  <ul className='space-y-2 mb-4'>
                    {product.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className='flex items-center gap-2 text-sm text-[#a0a0a0]'>
                        <FaCheck className='text-[#ffe400] text-xs flex-shrink-0' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Bottom Border Accent */}
                <div className='mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#ffe400] to-transparent transition-all duration-500'></div>
              </div>

              {/* Corner Accent */}
              <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ffe400]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </motion.div>
          ))}
        </div>

        {/* Show message if no products */}
        {filteredProducts.length === 0 && (
          <div className='text-center py-20'>
            <p className='text-[#a0a0a0] text-xl'>{t('_noProductsFound')}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductGrid
