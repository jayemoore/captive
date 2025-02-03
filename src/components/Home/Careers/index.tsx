import React from 'react'
import Image from 'next/image'

import Text from '@/components/ui/Text'

import bgr from "@/public/images/home/careers.png"
const Careers = () => {
  return (
    <div className='bg-[#002A2B] min-h-[450px] relative px-5 flex items-center justify-center'>
      <Text as='h1' className='text-center'>
      At CIS we don’t just provide jobs; <br /> <span className="text-[#008F91]">We create careers</span>
      </Text>
      <Image className='absolute right-0 ' src={bgr} alt="bgr" width={691.94 } height={381.18} />
    </div>
  )
}

export default Careers
