import React from 'react'
import { motion } from 'framer-motion'

function HeadingText({servicesTexts}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 my-16 md:my-24 px-4 sm:px-6'>
        {servicesTexts.map((servicesText, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className='group flex flex-col items-center p-6 md:p-8 text-center bg-[#1a1a1a] rounded-2xl hover:bg-[#222222] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffe400]/10 hover:-translate-y-2'
            >
                {/* Number with Title Overlay */}
                <div className="relative flex items-center justify-center h-[140px] md:h-[160px] mb-6">
                    <h1 className='absolute text-[100px] md:text-[130px] font-bold text-[#807f7d]/20 group-hover:text-[#ffe400]/30 transition-all duration-300 select-none'>
                        {servicesText.number}
                    </h1>
                    <p className='relative z-10 font-bold text-base md:text-lg tracking-wider text-white group-hover:text-[#ffe400] transition-colors duration-300 px-4'>
                        {servicesText.title}
                    </p>
                </div>

                {/* Divider */}
                <div className="h-[2px] bg-gradient-to-r from-transparent via-[#ffe400] to-transparent w-16 mb-6 group-hover:w-24 transition-all duration-300"></div>

                {/* Description */}
                <div className='text-lg md:text-xl text-[#a0a0a0] leading-relaxed group-hover:text-[#b0b0b0] transition-colors duration-300'>
                    {servicesText.description}
                </div>
            </motion.div>
        ))}
    </div>
  )
}

export default HeadingText