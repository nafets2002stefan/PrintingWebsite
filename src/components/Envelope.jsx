import React from 'react'

function Envelope() {
  return (
    <div className='flex flex-wrap justify-evenly gap-9 p-1 text-center lg:ml-10'>
        <div className="h-[90px] w-[102px] bg-[#ffe400] flex items-center justify-center">102x90</div>
        <div className="h-[97px] w-[107px] bg-[#ffe400] flex items-center justify-center">107x97</div>
        <div className="h-[99px] w-[139px] bg-[#ffe400] flex items-center justify-center">139x99</div>
        <div className="h-[63px] w-[130px] bg-[#ffe400] flex items-center justify-center">130x63</div>
        <div className="h-[67px] w-[127px] bg-[#ffe400] flex items-center justify-center">127x67</div>
    </div>
  )
}

export default Envelope