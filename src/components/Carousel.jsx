import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Carousel = ({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000    
}) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => curr === 0 ? slides.length - 1 : curr - 1);
    const next = () => setCurr((curr) => curr === slides.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        if(!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval)
    },[curr])

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">

        
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                        <img src={slide.image} alt={`Slide ${index}`} className="w-full h-[180px] sm:h-[250px] md:h-[350px] object-cover" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className='absolute inset-0 flex items-center justify-center text-white text-[35px] md:text-[40px] lg:text-6xl font-semibold'>{slide.text}</div>
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
                        <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2": "opacity-50"}`} />
                            
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Carousel;