import React, {useState} from 'react'

function BoxComponent({components}) {

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {components.map((service, index) => (
            <div key={index} className='flex flex-col items-center p-1 text-center'>
                <div className='group w-full h-62 sm:h-72 md:h-64' tabIndex="0"
                    onFocus={() => setActiveIndex(index)}
                    onBlur={() => setActiveIndex(null)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                >
                    <div className={`relative  h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] ${activeIndex === index ? '[transform:rotateY(180deg)]' : ''}`}>
                        <div className='absolute inset-0'>
                            <img src={service.image} className="h-full w-full rounded-xl object-cover" alt="" />
                        </div>
                        <div className="absolute inset-0 h-full w-full rounded-xl bg-[#131313] border-1 border-[#807f7d] px-12 text-center text-[#807f7d] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className='flex min-h-full flex-col items-center justify-center'>
                                <p className='text-xl font-medium'>{service.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className='text-3xl font-medium my-3 text-white'>{service.title}</h3>
            </div>
        ))}
    </div>
  )
}

export default BoxComponent