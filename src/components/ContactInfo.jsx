import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaViber, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const ContactInfo = () => {
  const [t] = useTranslation('global')
  const contactDetails = [
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Monday - Friday', '09:00 - 18:00'],
      color: '#ffe400'
    },
    {
      icon: <FaPhone />,
      title: 'Phone Numbers',
      details: [
        { text: '+373 79 73 16 88', link: 'tel:+37379731688', icon: <FaViber /> },
        { text: '+373 68 52 87 23', link: 'tel:+37368528723', icon: <FaViber /> }
      ],
      color: '#ffe400'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Addresses',
      details: [
        { text: 'flexprintgroup@gmail.com', link: 'mailto:flexprintgroup@gmail.com' },
        { text: 'beresteanstefan@gmail.com', link: 'mailto:beresteanstefan@gmail.com' }
      ],
      color: '#ffe400'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Location',
      details: ['Strada Socoleni 7/2', 'Chișinău, Moldova'],
      color: '#ffe400'
    }
  ]

  const socialMedia = [
    { icon: <FaFacebook />, name: 'Facebook', link: t('_facebook'), color: '#1877F2' },
    { icon: <FaInstagram />, name: 'Instagram', link: t('_instagram'), color: '#E4405F' },
    { icon: <FaXTwitter />, name: 'X (Twitter)', link: t('_x'), color: '#000000' }
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {/* Contact Cards */}
      {contactDetails.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className='group bg-[#1a1a1a] rounded-2xl p-6 md:p-8 border border-[#333333] hover:border-[#ffe400] transition-all duration-300 hover:shadow-xl hover:shadow-[#ffe400]/10'
        >
          {/* Icon & Title */}
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-14 h-14 bg-[#ffe400]/10 rounded-xl flex items-center justify-center text-[#ffe400] text-2xl group-hover:bg-[#ffe400] group-hover:text-black transition-all duration-300 group-hover:scale-110'>
              {item.icon}
            </div>
            <h3 className='text-xl md:text-2xl font-bold text-white group-hover:text-[#ffe400] transition-colors duration-300'>
              {item.title}
            </h3>
          </div>

          {/* Details */}
          <div className='space-y-3 pl-1'>
            {item.details.map((detail, i) => (
              <div key={i}>
                {typeof detail === 'string' ? (
                  <p className='text-[#a0a0a0] text-lg group-hover:text-[#b0b0b0] transition-colors duration-300'>
                    {detail}
                  </p>
                ) : (
                  <a
                    href={detail.link}
                    className='flex items-center gap-3 text-[#a0a0a0] hover:text-[#ffe400] transition-colors duration-300 text-lg group'
                  >
                    {detail.icon && <span className='text-[#ffe400]'>{detail.icon}</span>}
                    <span>{detail.text}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Social Media - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className='md:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-6 md:p-8 border border-[#333333]'
      >
        <h3 className='text-xl md:text-2xl font-bold text-white mb-6 text-center'>
          Connect With Us on Social Media
        </h3>
        <div className='flex flex-wrap justify-center gap-4'>
          {socialMedia.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-3 bg-[#0a0a0a] border border-[#333333] hover:border-[#ffe400] rounded-xl px-6 py-3 text-[#a0a0a0] hover:text-white transition-all duration-300 group'
            >
              <span className='text-2xl group-hover:text-[#ffe400] transition-colors duration-300'>
                {social.icon}
              </span>
              <span className='font-semibold'>{social.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ContactInfo
