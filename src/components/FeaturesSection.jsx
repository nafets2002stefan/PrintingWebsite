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
    <section className='max-w-7xl mx-auto px-4 py-16'>
      {/* Heading Section */}
      <motion.div
        ref={headingInView.ref}
        initial={{ opacity: 0, y: 50 }}
        animate={headingInView.inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className='text-center mb-12'
      >
        <h2 className='text-3xl font-bold mb-4 text-white'>{t('_featureHeading')}</h2>
        <p className='text-l default-link-color'>{t('_featuringParagraph1')}</p>
        <p className='text-l default-link-color'>{t('_featuringParagraph2')}</p>
        <p className='text-l default-link-color'>{t('_featuringParagraph3')}</p>
      </motion.div>
      {/* Feature Boxes */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {features.map((feature, index) => {
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='flex flex-col items-center p-6 pb-0 text-center'
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              onMouseEnter={() => setActiveIndex(index)}
              onTouchMove={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className={`w-24 h-24 rounded-full mb-6 flex items-center justify-center border-3 text-[#807f7d] hover:bg-[#ffe400] hover:text-black transition-all duration-200 ${
                  activeIndex === index ? 'text-black bg-[#ffe400]' : ''
                }`}
              >
                <div className='text-4xl'>{feature.icon}</div>
              </div>
              <h3 className='text-2xl font-medium mb-3 text-white'>{feature.title}</h3>
              <p className='default-link-color text-center'>{feature.description}</p>
        </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
