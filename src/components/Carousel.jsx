import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import slider1Image from '../assets/slider-main/slider1.png'
import slider2Image from '../assets/slider-main/slider2.png'
import slider3Image from '../assets/slider-main/slider3.png'
import slider4Image from '../assets/slider-main/slider4.png'
import slider5Image from '../assets/slider-main/slider5.png'

const Carousel = ({
    autoSlide = false,
    autoSlideInterval = 3000    
}) => 
{
    const [curr, setCurr] = useState(0);
    const [startTouch, setStartTouch] = useState(0);

    const [t] = useTranslation('global');

    const slides = [
        {
          image: slider1Image,
          text: t('_accessibility')
        }, 
        {
          image: slider2Image,
      
          text: t('_fastReliable')
        }, 
        {
          image: slider3Image,
          text: t('_premiumQuality')
        }, 
        {
          image: slider4Image,
          text: t('_customOrders')
        }, {
          image: slider5Image,
          text: t('_affordablePricing')
        }
      ]

    const prev = () => setCurr((curr) => curr === 0 ? slides.length - 1 : curr - 1);
    const next = () => setCurr((curr) => curr === slides.length - 1 ? 0 : curr + 1);
    
    const handleTouchStart = (e) => {
        const touchStart = e.touches[0].clientX;
        setStartTouch(touchStart);
      };

    const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (startTouch - touchEnd > 100) {
        next();
    } else if (touchEnd - startTouch > 100) {
        prev();
    }
    };
    useEffect(() => {
        if(!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval)
    },[curr])

    return (
        <div className='overflow-hidden relative group'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        >
            <div className='flex transition-transform ease-out duration-700' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                        <img src={slide.image} alt={`Slide ${index}`} className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
                        <div className='absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8'>
                            <h2 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight tracking-tight drop-shadow-2xl animate-fade-in'>{slide.text}</h2>
                        </div>
                    </div>
                ))}
            </div>
            {/* Navigation Buttons */}
            <div className='absolute inset-0 flex items-center justify-between p-4 sm:p-6 md:p-8'>
                <button
                    onClick={prev}
                    className='p-2 md:p-3 rounded-full shadow-lg bg-black/30 hover:bg-[#ffe400] backdrop-blur-sm border border-white/20 hover:border-[#ffe400] transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110'
                    aria-label={t('_previousSlide')}
                >
                    <BiChevronLeft size={32} className='text-white hover:text-black transition-colors'/>
                </button>
                <button
                    onClick={next}
                    className='p-2 md:p-3 rounded-full shadow-lg bg-black/30 hover:bg-[#ffe400] backdrop-blur-sm border border-white/20 hover:border-[#ffe400] transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110'
                    aria-label={t('_nextSlide')}
                >
                    <BiChevronRight size={32} className='text-white hover:text-black transition-colors'/>
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 md:bottom-8 right-0 left-0">
                <div className="flex items-center justify-center gap-2 md:gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurr(i)}
                            className={`transition-all rounded-full ${
                                curr === i
                                    ? "w-8 md:w-12 h-2 md:h-2.5 bg-[#ffe400]"
                                    : "w-2 md:w-3 h-2 md:h-2.5 bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={t('_goToSlide', { n: i + 1 })}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel;