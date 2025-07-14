/** @format */

import React from "react";
import Link from "next/link";

import bg from "@/public/images/home/hero-bg-world.png";
import bgShadow from "@/public/images/home/bg-shadow.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
const Hero = () => {
  return (
    <div
      className=' min-h-[684px] relative flex items-center px-5 justify-center
    '>
      <img
        className='absolute object-cover h-full w-[70%] mob:w-full right-0 z-0'
        // data-aos="zoom-in"
        // data-aos-duration="900"
        // data-aos-easing="ease-in-sine"
        src={bg.src}
        alt='bg'
        width={978}
        height={744}
      />
      <img
        className='absolute object-cover h-full w-full left-0 z-0'
        // data-aos="zoom-in"
        // data-aos-duration="900"
        // data-aos-easing="ease-in-sine"
        src={bgShadow.src}
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
          <Text className='text-white text-[18px] font-medium tracking-[1.7px] uppercase'>
            we take a holistic approach to problem-solving
          </Text>
          <Text as='h1' className='mt-[14px] mb-[20px]'>
            Deliver superior value through innovation and expertise
          </Text>
          <Text className='text-[#D9D9D9] mb-[32px]'>
            Captiv8 Integrated Services, LLC (CIS) is a certified Small Business
            by the Small Business Administration (SBA) dedicated to delivering
            cutting-edge solutions that empower organizations to optimize their
            operations.
          </Text>

          <div className='w-[193px]'>
            <Link href='/contact-us'>
              <Button className=''>LEARN MORE</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
