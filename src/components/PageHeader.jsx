import React from 'react'
import { motion } from 'framer-motion'

const PageHeader = ({ title, subtitle, breadcrumbs }) => {
  return (
    <section className='relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#131313] to-[#1a1a1a]'>
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <div className='absolute top-10 right-10 w-96 h-96 bg-[#ffe400]/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#ffe400]/5 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
      </div>

      {/* Grid Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'linear-gradient(#ffe400 1px, transparent 1px), linear-gradient(90deg, #ffe400 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='mb-6 flex items-center justify-center gap-2 text-[#a0a0a0] text-sm'
          >
            <span className='text-[#ffe400]'>
              {breadcrumbs[breadcrumbs.length - 1]}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight'
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className='text-lg md:text-xl lg:text-2xl text-[#a0a0a0] max-w-3xl mx-auto leading-relaxed'
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='mt-8 h-1 w-32 bg-gradient-to-r from-transparent via-[#ffe400] to-transparent mx-auto'
        />
      </div>

      {/* Bottom gradient */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#131313] to-transparent'></div>
    </section>
  )
}

export default PageHeader
