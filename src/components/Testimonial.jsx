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
    <section className='max-w-7xl mx-auto px-4 py-16'>
      {/* Heading Section */}
      <motion.div
        ref={headingInView.ref}
        initial={{ opacity: 0, y: 50 }}
        animate={headingInView.inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.2 }}
        className='text-center mb-12'
      >
        <h2 className='text-3xl font-bold mb-4 text-white'>{t('_featureHeading')}</h2>
        <p className='text-l default-link-color'>{t('_featuringParagraph1')}</p>
        <p className='text-l default-link-color'>{t('_featuringParagraph2')}</p>
        <p className='text-l default-link-color'>{t('_featuringParagraph3')}</p>
      </motion.div>
      {/* Testimonial Boxes */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {testimonials.map((testimonial, index) => {
          const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className='flex flex-col items-center p-6 text-center border-[#807f7d] md:border-1 rounded-2xl'
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              onMouseEnter={() => setActiveIndex(index)}
              onTouchMove={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className={`w-24 h-24 rounded-full mb-6 flex items-center justify-center border-3 text-[#807f7d] hover:bg-[#ffe400] hover:text-[#ffe400] transition-all duration-200 ${
                  activeIndex === index ? 'bg-[#ffe400]' : ''
                }`}
              >
                <img src={testimonial.imgSrc} className='rounded-full' alt="" />
              </div>
              <h3 className='text-2xl font-medium mb-3 text-white'>{testimonial.name}</h3>
              <span className='text-xl font-medium mb-3 text-[#ffe400] flex flex-wrap gap-2'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
              <p className='default-link-color text-center'>{testimonial.text}</p>
        </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
