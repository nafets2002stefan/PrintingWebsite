import React from 'react'

const ImageBanner = ({mainImage, title}) => {
  return (
    <div className='h-80 w-full flex items-center justify-center relative'>
      <img src={mainImage} className="h-full w-full object-cover" alt="" />
      <h1 className='absolute uppercase font-semibold text-white text-[35px] md:text-[40px] text-center lg:text-6xl'>{title}</h1>
    </div>
  )
}

export default ImageBanner