import React from 'react'

function HeadingText({servicesTexts}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3  my-20'>
        {servicesTexts.map((servicesText, index) => (
            <div key={index} className='flex flex-col items-center p-1 text-center'>
                <div className="relative flex items-center justify-center bg-gray h-[180px]">
                    <h1 className='absolute text-[120px] z-5 text-[#807f7d]'>{servicesText.number}</h1>
                    <p className='mt-7 z-10 font-semibold text-[18px] tracking-widest text-white '>{servicesText.title}</p>
                </div>
                    <div className="h-[1px] bg-[#ffe400] w-10 mb-4"></div>
                <div className='text-[24px] text-[#807f7d] '>
                    {servicesText.description}
                </div>
            </div>
        ))}
    </div>
  )
}

export default HeadingText