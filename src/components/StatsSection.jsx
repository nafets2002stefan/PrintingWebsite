import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaAward, FaUsers, FaBox, FaClock } from 'react-icons/fa'

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const stats = [
    {
      icon: <FaClock />,
      end: 15,
      suffix: '+',
      label: 'Years in Business',
      color: '#ffe400'
    },
    {
      icon: <FaBox />,
      end: 5000,
      suffix: '+',
      label: 'Projects Completed',
      color: '#ffe400'
    },
    {
      icon: <FaUsers />,
      end: 800,
      suffix: '+',
      label: 'Happy Clients',
      color: '#ffe400'
    },
    {
      icon: <FaAward />,
      end: 50,
      suffix: '+',
      label: 'Awards Won',
      color: '#ffe400'
    }
  ]

  const Counter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (inView) {
        let startTime
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime) / duration, 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) {
            requestAnimationFrame(step)
          }
        }
        requestAnimationFrame(step)
      }
    }, [inView, end, duration])

    return (
      <span className='text-5xl md:text-6xl font-bold text-white'>
        {count}{suffix}
      </span>
    )
  }

  return (
    <section className='relative py-20 md:py-28 bg-gradient-to-b from-[#0a0a0a] to-[#131313] overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'radial-gradient(circle, #ffe400 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Our Success in Numbers
          </h2>
          <p className='text-lg md:text-xl text-[#a0a0a0] max-w-2xl mx-auto'>
            Trusted by hundreds of businesses for exceptional printing solutions
          </p>
        </motion.div>

        <div ref={ref} className='grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className='group text-center p-6 md:p-8 bg-[#1a1a1a] rounded-2xl hover:bg-[#222222] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffe400]/10 hover:-translate-y-2'
            >
              {/* Icon */}
              <div className='inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 bg-[#ffe400]/10 rounded-full text-[#ffe400] text-3xl md:text-4xl group-hover:bg-[#ffe400] group-hover:text-black transition-all duration-300 group-hover:scale-110'>
                {stat.icon}
              </div>

              {/* Counter */}
              <div className='mb-3'>
                <Counter end={stat.end} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className='text-base md:text-lg text-[#a0a0a0] group-hover:text-white transition-colors duration-300 font-medium'>
                {stat.label}
              </p>

              {/* Decorative line */}
              <div className='mt-6 h-1 w-16 mx-auto bg-gradient-to-r from-transparent via-[#ffe400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
