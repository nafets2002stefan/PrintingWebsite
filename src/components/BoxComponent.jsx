import React from 'react'

function BoxComponent({component}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {component.map((service, index) => (
            <div key={index} className='flex flex-col items-center p-1 text-center'>
                <div className='group w-full h-62 sm:h-72 md:h-64'>
                    <div className='relative  h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                        <div className='absolute inset-0'>
                            <img src={service.image} className="h-full w-full rounded-xl object-cover" alt="" />
                        </div>
                        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/50 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className='flex min-h-full flex-col items-center justify-center'>
                                <p className='text-xl font-medium'>{service.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className='text-3xl font-medium my-3'>{service.title}</h3>
            </div>
        ))}
    </div>
  )
}

export default BoxComponent