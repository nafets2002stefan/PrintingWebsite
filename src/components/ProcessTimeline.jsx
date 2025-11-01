import React from 'react'
import { motion } from 'framer-motion'
import { FaFileAlt, FaPaintBrush, FaPrint, FaTruck } from 'react-icons/fa'

const ProcessTimeline = () => {
  const steps = [
    {
      icon: <FaFileAlt />,
      title: 'Consultation',
      description: 'Share your requirements and ideas with our team. We discuss your needs and provide expert guidance.'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Design & Pre-Press',
      description: 'Our designers create mockups and prepare files for printing with precision and attention to detail.'
    },
    {
      icon: <FaPrint />,
      title: 'Production',
      description: 'Using modern equipment, we print your materials with exceptional quality and color accuracy.'
    },
    {
      icon: <FaTruck />,
      title: 'Delivery',
      description: 'Fast and reliable delivery to your location. Quality checked and ready to impress.'
    }
  ]

  return (
    <section className='py-20 md:py-28 default-bg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            How We Work
          </h2>
          <p className='text-lg md:text-xl text-[#a0a0a0] max-w-2xl mx-auto'>
            Our streamlined process ensures quality results from start to finish
          </p>
        </motion.div>

        {/* Timeline */}
        <div className='relative'>
          {/* Connecting Line - Desktop */}
          <div className='hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#ffe400]/20 via-[#ffe400] to-[#ffe400]/20'></div>

          {/* Steps */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6'>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className='relative'
              >
                {/* Card */}
                <div className='group bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#222222] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffe400]/10 hover:-translate-y-2 h-full flex flex-col items-center text-center'>
                  {/* Step Number */}
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#ffe400] rounded-full flex items-center justify-center text-black font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className='mt-6 mb-6 w-20 h-20 bg-[#ffe400]/10 rounded-full flex items-center justify-center text-[#ffe400] text-4xl group-hover:bg-[#ffe400] group-hover:text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-12'>
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-[#ffe400] transition-colors duration-300'>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className='text-[#a0a0a0] leading-relaxed group-hover:text-[#b0b0b0] transition-colors duration-300'>
                    {step.description}
                  </p>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className='hidden lg:block absolute top-24 -right-6 text-[#ffe400] text-3xl'>
                      →
                    </div>
                  )}
                </div>

                {/* Vertical line for mobile */}
                {index < steps.length - 1 && (
                  <div className='lg:hidden flex justify-center my-6'>
                    <div className='w-1 h-12 bg-gradient-to-b from-[#ffe400] to-[#ffe400]/20'></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
