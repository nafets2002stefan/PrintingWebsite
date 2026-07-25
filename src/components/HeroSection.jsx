import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaArrowRight } from 'react-icons/fa'

const HeroSection = () => {
  const [t, i18n] = useTranslation('global')
  const currentLang = i18n.language || 'ro'
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: t('_heroSlide1Title'),
      subtitle: t('_heroSlide1Subtitle'),
      description: t('_heroSlide1Desc')
    },
    {
      title: t('_heroSlide2Title'),
      subtitle: t('_heroSlide2Subtitle'),
      description: t('_heroSlide2Desc')
    },
    {
      title: t('_heroSlide3Title'),
      subtitle: t('_heroSlide3Subtitle'),
      description: t('_heroSlide3Desc')
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#131313] to-[#1a1a1a]'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-[#ffe400]/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-[#ffe400]/5 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
        <div className='absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#ffe400]/5 rounded-full blur-3xl animate-pulse' style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'linear-gradient(#ffe400 1px, transparent 1px), linear-gradient(90deg, #ffe400 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className='text-left'
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className='inline-block mb-6'
            >
              <span className='bg-[#ffe400]/10 border border-[#ffe400]/30 text-[#ffe400] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm'>
                {t('_heroBadge')}
              </span>
            </motion.div>

            {/* Animated Title */}
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight'
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.h2
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className='text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ffe400] mb-6'
            >
              {slides[currentSlide].subtitle}
            </motion.h2>

            {/* Animated Description */}
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className='text-lg md:text-xl text-[#a0a0a0] mb-10 leading-relaxed max-w-xl'
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className='flex flex-col sm:flex-row gap-4'
            >
              <Link to={`/${currentLang}/products`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='group bg-[#ffe400] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ffd700] transition-all duration-300 shadow-2xl shadow-[#ffe400]/20 flex items-center justify-center gap-3'
                >
                  {t('_heroViewProducts')}
                  <FaArrowRight className='group-hover:translate-x-1 transition-transform duration-300' />
                </motion.button>
              </Link>

              <Link to={`/${currentLang}/contacts`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='group bg-transparent border-2 border-[#ffe400] text-[#ffe400] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ffe400] hover:text-black transition-all duration-300 flex items-center justify-center gap-3'
                >
                  {t('_contactUs')}
                </motion.button>
              </Link>
            </motion.div>

            {/* Slide Indicators */}
            <div className='flex gap-3 mt-12'>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-12 bg-[#ffe400]' : 'w-8 bg-[#ffe400]/30 hover:bg-[#ffe400]/50'
                  }`}
                  aria-label={t('_goToSlide', { n: index + 1 })}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className='relative hidden lg:block'
          >
            {/* Large Typography Display */}
            <div className='relative'>
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className='text-[200px] font-black text-[#ffe400]/10 leading-none select-none'
              >
                FLEX
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className='text-[200px] font-black text-white/10 leading-none -mt-12 select-none'
              >
                PRINT
              </motion.div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className='absolute top-20 -right-10 w-48 h-32 bg-gradient-to-br from-[#ffe400] to-[#ffd700] rounded-xl shadow-2xl shadow-[#ffe400]/30'
            ></motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className='absolute bottom-20 -left-10 w-56 h-40 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-2 border-[#ffe400]/30 rounded-xl shadow-2xl'
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className='text-[#ffe400] text-sm font-medium flex flex-col items-center gap-2'
        >
          <span>{t('_heroScrollDown')}</span>
          <div className='w-6 h-10 border-2 border-[#ffe400] rounded-full flex justify-center'>
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className='w-1.5 h-1.5 bg-[#ffe400] rounded-full mt-2'
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
