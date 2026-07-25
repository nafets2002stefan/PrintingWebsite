import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaQuestionCircle, FaPhone, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function FAQ() {

    const [t, i18n] = useTranslation('global')
    const [activeIndex, setActiveIndex] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState('All')
    const currentLang = i18n.language || 'ro'

    useEffect(() => {
        setSelectedCategory('All')
        setActiveIndex(null)
    }, [i18n.language])

    const faqData = [
        {
            question: t('_question1'),
            answer: t('_answer1'),
            category: t('_faqCatGeneral')
        },
        {
            question: t('_question2'),
            answer: t('_answer2'),
            category: t('_faqCatServices')
        },
        {
            question: t('_question3'),
            answer: t('_answer3'),
            category: t('_faqCatServices')
        },
        {
            question: t('_question4'),
            answer: t('_answer4'),
            category: t('_faqCatTechnical')
        },
        {
            question: t('_question5'),
            answer: t('_answer5'),
            category: t('_faqCatPricing')
        },
        {
            question: t('_question6'),
            answer: t('_answer6'),
            category: t('_faqCatPricing')
        },
        {
            question: t('_question7'),
            answer: t('_answer7'),
            category: t('_faqCatServices')
        },
        {
            question: t('_question8'),
            answer: t('_answer8'),
            category: t('_faqCatTechnical')
        },
        {
            question: t('_question9'),
            answer: t('_answer9'),
            category: t('_faqCatGeneral')
        },
        {
            question: t('_question10'),
            answer: t('_answer10'),
            category: t('_faqCatServices')
        },
        {
            question: t('_question11'),
            answer: t('_answer11'),
            category: t('_faqCatPricing')
        },
        {
            question: t('_question12'),
            answer: t('_answer12'),
            category: t('_faqCatTechnical')
        },
    ]

    const categories = ['All', ...new Set(faqData.map(f => f.category))]
    const filteredFAQs = selectedCategory === 'All'
        ? faqData
        : faqData.filter(f => f.category === selectedCategory)

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className='py-16 md:py-24 default-bg'>
            <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className='text-center mb-12'
                >
                    <div className='inline-flex items-center gap-3 bg-[#ffe400]/10 border border-[#ffe400]/30 px-6 py-3 rounded-full mb-6'>
                        <FaQuestionCircle className='text-[#ffe400] text-xl' />
                        <span className='text-[#ffe400] font-semibold'>{t('_faqBadge')}</span>
                    </div>
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                        {t('_faqHeading')}
                    </h2>
                    <p className='text-lg text-[#a0a0a0] max-w-2xl mx-auto'>
                        {t('_faqSubheading')}
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className='flex flex-wrap justify-center gap-3 mb-12'
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category)
                                setActiveIndex(null)
                            }}
                            className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-[#ffe400] text-black shadow-lg shadow-[#ffe400]/30'
                                    : 'bg-[#1a1a1a] text-[#a0a0a0] hover:bg-[#222222] hover:text-white border border-[#333333]'
                            }`}
                        >
                            {category === 'All' ? t('_all') : category}
                        </button>
                    ))}
                </motion.div>

                {/* FAQ Accordion */}
                <div className='space-y-4'>
                    {filteredFAQs.map((faq, index) => {
                        const isActive = activeIndex === index

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`group bg-[#1a1a1a] rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                                    isActive
                                        ? 'border-[#ffe400] shadow-xl shadow-[#ffe400]/10'
                                        : 'border-[#333333] hover:border-[#555555]'
                                }`}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleAnswer(index)}
                                    className='w-full flex items-center justify-between p-6 md:p-8 text-left transition-all duration-300'
                                >
                                    <div className='flex items-start gap-4 flex-1'>
                                        {/* Number Badge */}
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                                            isActive
                                                ? 'bg-[#ffe400] text-black'
                                                : 'bg-[#ffe400]/10 text-[#ffe400]'
                                        }`}>
                                            {index + 1}
                                        </div>

                                        {/* Question Text */}
                                        <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                                            isActive ? 'text-[#ffe400]' : 'text-white group-hover:text-[#ffe400]'
                                        }`}>
                                            {faq.question}
                                        </h3>
                                    </div>

                                    {/* Chevron Icon */}
                                    <motion.div
                                        animate={{ rotate: isActive ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className='flex-shrink-0 ml-4'
                                    >
                                        <FaChevronDown className={`text-xl transition-colors duration-300 ${
                                            isActive ? 'text-[#ffe400]' : 'text-[#a0a0a0]'
                                        }`} />
                                    </motion.div>
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className='overflow-hidden'
                                        >
                                            <div className='px-6 md:px-8 pb-6 md:pb-8'>
                                                {/* Divider */}
                                                <div className='h-px bg-gradient-to-r from-[#ffe400] via-[#ffe400]/50 to-transparent mb-6'></div>

                                                {/* Answer Text */}
                                                <p className='text-[#b0b0b0] text-base md:text-lg leading-relaxed pl-14'>
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Still Have Questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className='mt-16 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 md:p-12 border border-[#333333]'
                >
                    <div className='text-center'>
                        <h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>
                            {t('_faqStillQuestions')}
                        </h3>
                        <p className='text-lg text-[#a0a0a0] mb-8 max-w-2xl mx-auto'>
                            {t('_faqStillQuestionsText')}
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <Link to={`/${currentLang}/contacts`}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='bg-[#ffe400] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ffd700] transition-all duration-300 shadow-xl shadow-[#ffe400]/20 flex items-center gap-3'
                                >
                                    <FaEnvelope />
                                    {t('_contactUs')}
                                </motion.button>
                            </Link>

                            <a href="tel:+37379731688">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='bg-transparent border-2 border-[#ffe400] text-[#ffe400] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ffe400] hover:text-black transition-all duration-300 flex items-center gap-3'
                                >
                                    <FaPhone />
                                    {t('_faqCallNow')}
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ