import React from 'react'
import amazonImage from '../assets/amazon.png'
import meundiesImage from '../assets/meundies.png'
import sitePointImage from '../assets/sitepoint.png'
import slackImage from '../assets/slack.png'
import wooCommerceImage from '../assets/woocommerce.png'

const CompanyLogo = () => {
  const logos = [amazonImage, meundiesImage, sitePointImage, slackImage, wooCommerceImage];

  return (
    <div className='max-w-7xl mx-auto px-4 my-8 w-full overflow-hidden container py-20 gap-8 flex sm:flex-row sm:items-center flex-col items-start'>
      <div className='w-[300px] shrink-0 text-[#807f7d] rounded-sm border-2 border-[#807f7d] bg-[#131313] px-5 py-2 z-10 sm:text-base text-xl font-semibold text-left'>Proud partner at <br /> Hubspot & Segment </div>

      <div className='flex animate-marquee whitespace-nowrap'>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt='company logo' className='mx-12 h-8 w-32 object-contain opacity-70  hover:opacity-100 transition-all' />
          
        ))}
        {/* Duplicate logos for the marquee effect */}
        {logos.map((logo, index) => (
          <img key={`duplicate-${index}`} src={logo} alt='company logo' className='mx-12 h-8 w-36 object-contain opacity-70 hover:opacity-100 transition-all' />
          
        ))}

      </div>
    </div>
  )
}

export default CompanyLogo