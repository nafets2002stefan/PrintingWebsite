import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const [t] = useTranslation('global');
  const [activeIndex, setActiveIndex] = useState(null);

  const headingInView = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const testimonials = [
    {
      name: "Andrei",
      imgSrc: "https://i.pravatar.cc/100?img=1",
      text: `${t('_testimonialText1')}`,
    },
    {
      name: "Ana",
      imgSrc: "https://i.pravatar.cc/100?img=10",
      text: `${t('_testimonialText2')}`,
    },
    {
      name: "Alexandru",
      imgSrc: "https://i.pravatar.cc/100?img=3",
      text: `${t('_testimonialText3')}`,
    },
    {
      name: "Gabriel",
      imgSrc: "https://i.pravatar.cc/100?img=11",
      text: `${t('_testimonialText4')}`,
    },
    {
      name: "Maria",
      imgSrc: "https://i.pravatar.cc/100?img=5",
      text: `${t('_testimonialText5')}`,
    },
    {
      name: "Vlad",
      imgSrc: "https://i.pravatar.cc/100?img=13",
      text: `${t('_testimonialText6')}`,
    },
    {
        name: "Cristian",
        imgSrc: "https://i.pravatar.cc/100?img=14",
        text: `${t('_testimonialText7')}`,
      },
      {
        name: "Mihai",
        imgSrc: "https://i.pravatar.cc/100?img=17",
        text: `${t('_testimonialText8')}`,
      },
      {
        name: "Ion",
        imgSrc: "https://i.pravatar.cc/100?img=18",
        text: `${t('_testimonialText9')}`,
      }
  ];

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
      {/* Heading Section */}
      <motion.div
        ref={headingInView.ref}
        initial={{ opacity: 0, y: 50 }}
        animate={headingInView.inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3 }}
        className='text-center mb-16 max-w-4xl mx-auto'
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white leading-tight'>{t('_testimonialsHeading')}</h2>
        <div className='space-y-2 text-base md:text-lg default-link-color leading-relaxed'>
          <p>{t('_testimonialsSubheading1')}</p>
          <p>{t('_testimonialsSubheading2')}</p>
        </div>
      </motion.div>
      {/* Testimonial Boxes */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        {testimonials.map((testimonial, index) => {
          const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 0.1,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className='group flex flex-col items-center p-8 text-center bg-[#1a1a1a] rounded-2xl border-2 border-[#333333] hover:border-[#ffe400] hover:bg-[#222222] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffe400]/10 hover:-translate-y-2'
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              onMouseEnter={() => setActiveIndex(index)}
              onTouchStart={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Avatar */}
              <div className='w-20 h-20 md:w-24 md:h-24 rounded-full mb-5 overflow-hidden border-4 border-[#333333] group-hover:border-[#ffe400] transition-all duration-300 group-hover:scale-110'>
                <img src={testimonial.imgSrc} className='w-full h-full object-cover' alt={testimonial.name} />
              </div>

              {/* Name */}
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[#ffe400] transition-colors duration-300'>{testimonial.name}</h3>

              {/* Stars */}
              <div className='flex gap-1 mb-5 text-[#ffe400]'>
                <FaStar className='text-lg md:text-xl'/>
                <FaStar className='text-lg md:text-xl'/>
                <FaStar className='text-lg md:text-xl'/>
                <FaStar className='text-lg md:text-xl'/>
                <FaStar className='text-lg md:text-xl'/>
              </div>

              {/* Testimonial Text */}
              <p className='default-link-color text-sm md:text-base leading-relaxed group-hover:text-[#b0b0b0] transition-colors duration-300'>{testimonial.text}</p>

              {/* Quote Icon Background */}
              <div className='absolute top-6 right-6 text-6xl text-[#ffe400]/10 group-hover:text-[#ffe400]/20 transition-colors duration-300 font-serif'>"</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
