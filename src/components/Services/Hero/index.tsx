/** @format */

import React from "react";
// import Image from "next/image";

import bg from "@/public/images/services/herobg.png";
import bgShadow from "@/public/images/home/bg-shadow.png";
import Text from "@/components/ui/Text";
const ServicesHero = () => {
  return (
    <div className=' min-h-[380px] relative flex items-center px-5 justify-center overflow-hidden'>
      <img
        className='absolute object-cover h-full w-[70%] mob:w-full right-0 z-0'
        src={bg.src}
        // data-aos="zoom-in"
        // data-aos-duration="900"
        // data-aos-easing="ease-in-sine"
        alt='bg'
        width={978}
        height={744}
      />
      <img
        className='absolute object-cover h-full w-full left-0 z-0'
        src={bgShadow.src}
        // data-aos="zoom-in"
        // data-aos-duration="900"
        // data-aos-easing="ease-in-sine"
        alt='bg'
        width={1377}
        height={744}
      />

      <div className='relative z-20 w-full max-w-[1270px]'>
        <div
          className='w-full max-w-[697px]'
          data-aos='zoom-in'
          data-aos-duration='900'
          data-aos-easing='ease-in-sine'>
          <Text as='h1' className='mt-[14px] mb-[25px]'>
            Our Services
          </Text>
          <Text className='text-[#D9D9D9] w-full max-w-[588px]'>
            At Captiv8 Integrated Services, LLC (CIS), we empower our partners
            to overcome challenges and embrace innovation through a
            comprehensive range of services and solutions. Our team of seasoned
            professionals specializes in delivering expertise in:
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
