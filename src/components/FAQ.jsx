import React, { useState } from 'react'
import ImageBanner from './ImageBanner'
import { HiX } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import mainImage from '../assets/faq-images/main.png'

function FAQ() {
  
    const [t] = useTranslation('global');
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        { question: t('_question1'), answer: t('_answer1') },
        { question: t('_question2'), answer: t('_answer2') },
        { question: t('_question3'), answer: t('_answer3') },
        { question: t('_question4'), answer: t('_answer4') },
        { question: t('_question5'), answer: t('_answer5') },
        { question: t('_question6'), answer: t('_answer6') },
        { question: t('_question7'), answer: t('_answer7') },
      ];

      const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
      
    return (
        <section className='mt-20 default-bg'>
            {/* Image banner */}
            <ImageBanner mainImage={mainImage} title={t('_FAQLong')}/>
            <div className='max-w-7xl mx-auto px-4 my-8'>
                <div className='text-white'>
                {faqData.map((faq, index) => (
              <div key={index} className='mb-8 p-4 bg-black shadow-lg rounded-lg shadow-white/10'>
                <div className="flex items-center justify-between" onClick={() => toggleAnswer(index)}>
                    <button
                    className=' text-left text-xl font-medium text-white hover:text-white focus:outline-none'
                    >
                    {faq.question}
                    </button>
                    {activeIndex === index && (
                        <HiX
                            className='text-white cursor-pointer'
                            onClick={() => toggleAnswer(index)}
                        />
                    )}
                </div>
                <div className={`transition-all duration-300 overflow-hidden ${
                    activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="w-full h-[1px] mt-4 bg-[#807f7d]"></div>
                    <p className='mt-2 text-gray-400'>{faq.answer}</p>
                </div>
            </div>
            ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ