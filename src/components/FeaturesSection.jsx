import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaForward,
  FaUserCheck,
  FaBoxOpen,
  FaCogs,
  FaHeart,
  FaBalanceScaleLeft,
  FaPaintBrush,
  FaShippingFast,
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const [t] = useTranslation('global');
  const [activeIndex, setActiveIndex] = useState(null);

  const headingInView = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const features = [
    {
      icon: <FaForward />,
      title: t('_featuringSpeed'),
      description: (
        <>
          {t('_featuringSpeed1')} <br /> {t('_featuringSpeed2')} <br /> {t('_featuringSpeed3')}
        </>
      ),
    },
    {
      icon: <FaUserCheck />,
      title: t('_featuringTeam'),
      description: (
        <>
          {t('_featuringTeam1')} <br /> {t('_featuringTeam2')} <br /> {t('_featuringTeam3')}
        </>
      ),
    },
    {
      icon: <FaBoxOpen />,
      title: t('_featuringBox'),
      description: <>{t('_featuringBox1')}</>,
    },
    {
      icon: <FaCogs />,
      title: t('_featuringProduction'),
      description: (
        <>
          {t('_featuringProduction1')} <br /> {t('_featuringProduction2')} <br /> {t('_featuringProduction3')}
        </>
      ),
    },
    {
      icon: <FaHeart />,
      title: t('_featuringAtmosphere'),
      description: (
        <>
          {t('_featuringAtmosphere1')} <br /> {t('_featuringAtmosphere2')}
        </>
      ),
    },
    {
      icon: <FaBalanceScaleLeft />,
      title: t('_featuringPrice'),
      description: (
        <>
          {t('_featuringPrice1')} <br /> {t('_featuringPrice2')} <br /> {t('_featuringPrice3')}
        </>
      ),
    },
    {
      icon: <FaPaintBrush />,
      title: t('_featuringDesign'),
      description: (
        <>
          {t('_featuringDesign1')} <br /> {t('_featuringDesign2')} <br /> {t('_featuringDesign1')}
        </>
      ),
    },
    {
      icon: <FaShippingFast />,
      title: t('_featuringShipping'),
      description: (
        <>
          {t('_featuringShipping1')}
          <br /> {t('_featuringShipping2')} <br /> {t('_featuringShipping3')}
        </>
      ),
    },
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
        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white leading-tight'>{t('_featureHeading')}</h2>
        <div className='space-y-2 text-base md:text-lg default-link-color leading-relaxed'>
          <p>{t('_featuringParagraph1')}</p>
          <p>{t('_featuringParagraph2')}</p>
          <p>{t('_featuringParagraph3')}</p>
        </div>
      </motion.div>
      {/* Feature Boxes - Modern Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
        {features.map((feature, index) => {
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
              className='group relative flex flex-col items-center p-8 text-center bg-[#1a1a1a] rounded-2xl hover:bg-[#222222] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffe400]/10 hover:-translate-y-2 cursor-pointer'
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              onMouseEnter={() => setActiveIndex(index)}
              onTouchStart={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Icon Container */}
              <div
                className={`w-20 h-20 md:w-24 md:h-24 rounded-full mb-6 flex items-center justify-center border-2 text-[#807f7d] group-hover:bg-[#ffe400] group-hover:text-black group-hover:border-[#ffe400] group-hover:scale-110 transition-all duration-300 ${
                  activeIndex === index ? 'text-black bg-[#ffe400] border-[#ffe400] scale-110' : 'border-[#333333]'
                }`}
              >
                <div className='text-3xl md:text-4xl'>{feature.icon}</div>
              </div>
              {/* Title */}
              <h3 className='text-xl md:text-2xl font-semibold mb-4 text-white group-hover:text-[#ffe400] transition-colors duration-300'>{feature.title}</h3>
              {/* Description */}
              <p className='default-link-color text-sm md:text-base leading-relaxed'>{feature.description}</p>

              {/* Decorative element */}
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffe400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl'></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
