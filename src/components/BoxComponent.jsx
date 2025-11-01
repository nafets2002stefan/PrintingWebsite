import React, {useState} from 'react'
import { motion } from 'framer-motion'

function BoxComponent({components}) {

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        {components.map((service, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className='group flex flex-col overflow-hidden rounded-2xl bg-[#1a1a1a] hover:bg-[#222222] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#ffe400]/10'
            >
                {/* Image Container */}
                <div
                    className='relative w-full h-64 sm:h-72 md:h-80 overflow-hidden cursor-pointer'
                    tabIndex="0"
                    onFocus={() => setActiveIndex(index)}
                    onBlur={() => setActiveIndex(null)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onTouchStart={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                >
                    {/* Front - Image */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                        <img
                            src={service.image}
                            className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            alt={service.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>

                    {/* Back - Description */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#ffe400] px-6 py-8 flex items-center justify-center transition-opacity duration-500 ${
                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                        <div className='text-center'>
                            <p className='text-base md:text-lg text-[#e0e0e0] leading-relaxed'>{service.description}</p>
                        </div>
                    </div>
                </div>

                {/* Title Section */}
                <div className='p-6 text-center'>
                    <h3 className='text-xl md:text-2xl font-bold text-white group-hover:text-[#ffe400] transition-colors duration-300 leading-tight'>
                        {service.title}
                    </h3>
                </div>

                {/* Decorative bottom accent */}
                <div className='h-1 w-full bg-gradient-to-r from-transparent via-[#ffe400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </motion.div>
        ))}
    </div>
  )
}

export default BoxComponent