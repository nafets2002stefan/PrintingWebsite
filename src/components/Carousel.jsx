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
        <div className='overflow-hidden relative'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd} 
        >
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                        <img src={slide.image} alt={`Slide ${index}`} className="w-full h-80 object-cover" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className='absolute inset-0 flex items-center justify-center text-white text-[25px] [@media(min-width:470px)]:text-[30px] [@media(min-width:541px)]:text-[35px] md:text-[40px] font-semibold'>{slide.text}</div>
                    </div>
                ))}
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prev} className='p-1 rounded-full shadow bg-[rgba(2,0,0,0.17)] hover:bg-[rgba(2,0,0,0.8)]'>
                    <BiChevronLeft size={40} className='text-white'/>
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-[rgba(2,0,0,0.17)] hover:bg-[rgba(2,0,0,0.8)]'>
                    <BiChevronRight size={40} className='text-white'/>
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div key={i} className={`transition-all w-1 h-1 md:w-3 md:h-3 bg-white rounded-full ${curr === i ? "p-1 md:p-2": "opacity-50"}`} />
                            
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel;