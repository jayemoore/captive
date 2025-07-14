/** @format */

import React from "react";
// import Image from "next/image";

import bg from "@/public/images/contactus/herobg.png";
import Text from "@/components/ui/Text";
const ContactHero = () => {
  return (
    <div className=' min-h-[380px] relative flex items-center px-5 justify-center'>
      <img
        className='absolute object-cover object-top h-full w-[100%] mob:w-full right-0 z-0'
        src={bg.src}
        alt='bg'
        width={978}
        height={744}
      />

      <div className='w-full h-full absolute bg-[#007879B2]/70'></div>

      <div className='relative z-20 w-full max-w-[1270px]'>
        <div
          className='w-full'
          data-aos='zoom-in'
          data-aos-duration='1200'
          data-aos-delay='100'>
          <Text as='h1' className='mb-[20px] text-center mt-[-78px] mob:mt-0'>
            Contact Us
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
