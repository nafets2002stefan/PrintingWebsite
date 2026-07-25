import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa'

const ContactForm = () => {
  const [t] = useTranslation('global')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [focused, setFocused] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 md:p-10 border border-[#333333] hover:border-[#ffe400]/30 transition-all duration-300'
    >
      <div className='mb-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
          {t('_contactFormHeading')}
        </h2>
        <p className='text-[#a0a0a0] text-lg'>
          {t('_contactFormSubheading')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Name Field */}
        <div className='relative'>
          <label className='block text-sm font-semibold text-[#a0a0a0] mb-2'>
            {t('_contactFormName')}
          </label>
          <div className='relative'>
            <FaUser className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
              focused.name ? 'text-[#ffe400]' : 'text-[#666666]'
            }`} />
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused({ ...focused, name: true })}
              onBlur={() => setFocused({ ...focused, name: false })}
              required
              className='w-full bg-[#0a0a0a] border-2 border-[#333333] rounded-xl px-12 py-4 text-white placeholder-[#666666] focus:border-[#ffe400] focus:outline-none transition-all duration-300'
              placeholder={t('_contactFormNamePlaceholder')}
            />
          </div>
        </div>

        {/* Email Field */}
        <div className='relative'>
          <label className='block text-sm font-semibold text-[#a0a0a0] mb-2'>
            {t('_contactFormEmail')}
          </label>
          <div className='relative'>
            <FaEnvelope className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
              focused.email ? 'text-[#ffe400]' : 'text-[#666666]'
            }`} />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused({ ...focused, email: true })}
              onBlur={() => setFocused({ ...focused, email: false })}
              required
              className='w-full bg-[#0a0a0a] border-2 border-[#333333] rounded-xl px-12 py-4 text-white placeholder-[#666666] focus:border-[#ffe400] focus:outline-none transition-all duration-300'
              placeholder={t('_contactFormEmailPlaceholder')}
            />
          </div>
        </div>

        {/* Phone Field */}
        <div className='relative'>
          <label className='block text-sm font-semibold text-[#a0a0a0] mb-2'>
            {t('_contactFormPhone')}
          </label>
          <div className='relative'>
            <FaPhone className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
              focused.phone ? 'text-[#ffe400]' : 'text-[#666666]'
            }`} />
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocused({ ...focused, phone: true })}
              onBlur={() => setFocused({ ...focused, phone: false })}
              className='w-full bg-[#0a0a0a] border-2 border-[#333333] rounded-xl px-12 py-4 text-white placeholder-[#666666] focus:border-[#ffe400] focus:outline-none transition-all duration-300'
              placeholder={t('_contactFormPhonePlaceholder')}
            />
          </div>
        </div>

        {/* Message Field */}
        <div className='relative'>
          <label className='block text-sm font-semibold text-[#a0a0a0] mb-2'>
            {t('_contactFormMessage')}
          </label>
          <div className='relative'>
            <FaComment className={`absolute left-4 top-6 transition-colors duration-300 ${
              focused.message ? 'text-[#ffe400]' : 'text-[#666666]'
            }`} />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused({ ...focused, message: true })}
              onBlur={() => setFocused({ ...focused, message: false })}
              required
              rows='6'
              className='w-full bg-[#0a0a0a] border-2 border-[#333333] rounded-xl px-12 py-4 text-white placeholder-[#666666] focus:border-[#ffe400] focus:outline-none transition-all duration-300 resize-none'
              placeholder={t('_contactFormMessagePlaceholder')}
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type='submit'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='w-full bg-[#ffe400] text-black font-bold text-lg py-4 rounded-xl hover:bg-[#ffd700] transition-all duration-300 shadow-xl shadow-[#ffe400]/30 flex items-center justify-center gap-3'
        >
          <FaPaperPlane />
          {t('_contactFormSubmit')}
        </motion.button>

        <p className='text-sm text-[#666666] text-center'>
          {t('_contactFormPrivacy')}
        </p>
      </form>
    </motion.div>
  )
}

export default ContactForm
