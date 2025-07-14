/** @format */

import React from "react";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

import cloud from "@/public/images/home/services/cloud.png";
import agile from "@/public/images/home/services/agile.png";
import data from "@/public/images/home/services/datacenter.png";
import tele from "@/public/images/home/services/telecommunication.png";
import ai from "@/public/images/home/services/ai.png";
import cyber from "@/public/images/home/services/cyber-security.png";
import dev from "@/public/images/home/services/dev-sec.png";
const OurServices = () => {
  return (
    <div className='px-5 py-16 mob:pt-10 mob:pb-5 overflow-hidden'>
      <div className='max-w-[1270px] mx-auto flex tab:flex-wrap gap-[108px] mob:gap-[50px]'>
        <div
          className='flex-col max-w-[426px]'
          data-aos='fade-right'
          data-aos-duration='900'
          data-aos-easing='ease-in-sine'>
          <Text as='h2'>Our Services</Text>
          <Text className='my-[16px]'>
            At Captiv8 Integrated Services, LLC (CIS), we empower our partners
            to overcome challenges and embrace innovation through a
            comprehensive range of services and solutions. Our team of seasoned
            professionals specializes in delivering expertise in:
          </Text>
          <div className='w-[244px]'>
            <Link href='/services'>
              <Button className='max-w-[244px]'>SEE ALL SERVICES </Button>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className='flex flex-wrap max-w-[648px] gap-[72px] tab:gap-0'>
          <div className='max-w-[283px]'>
            <div
              className='flex gap-[14px] items-center mb-[32px]'
              data-aos='fade-left'
              data-aos-duration='300'
              data-aos-easing='ease-in-sine'>
              <img
                className='w-[39px] h-[39px] '
                src={cloud.src}
                alt='cloud'
                width={39}
                height={39}
              />
              <Text className='font-bold leading-[20.8px]'>
                Cloud Development and Management
              </Text>
            </div>
            <div
              className='flex gap-[14px] items-center mb-[32px]'
              data-aos='fade-left'
              data-aos-duration='400'
              data-aos-easing='ease-in-sine'>
              <img
                className='w-[39px] h-[39px] '
                src={agile.src}
                alt='cloud'
                width={39}
                height={39}
              />
              <Text className='font-bold leading-[20.8px]'>
                Agile Project Management
              </Text>
            </div>
            <div
              className='flex gap-[14px] items-center mb-[32px]'
              data-aos='fade-left'
              data-aos-duration='500'
              data-aos-easing='ease-in-sine'>
              <img
                className='w-[39px] h-[39px] '
                src={data.src}
                alt='cloud'
                width={39}
                height={39}
              />
              <Text className='font-bold leading-[20.8px]'>
                Data Center Support
              </Text>
            </div>
            <div
              className='flex gap-[14px] items-center mb-[32px]'
              data-aos='fade-left'
              data-aos-duration='600'
              data-aos-easing='ease-in-sine'>
              <img
                className='w-[39px] h-[39px] '
                src={tele.src}
                alt='cloud'
                width={39}
                height={39}
              />
              <Text className='font-bold leading-[20.8px]'>
                Telecommunications
              </Text>
            </div>
          </div>
          {/*  */}
          <div className='max-w-[283px]'>
            <div
              className='flex gap-[14px] items-center mb-[32px]'
              data-aos='fade-left'
              data-aos-duration='700'
              data-aos-easing='ease-in-sine'>
              <img
                className='w-[39px] h-[39px] '
                src={ai.src}
                alt='ai'
                width={39}
                height={39}
              />
              <Text className='font-bold leading-[20.8px]'>
                Artificial Intelligence (AI)
              </Text>
            </div>
            <div
              className='flex gap-[14px] items-center mb-[32px]'
              data-aos='fade-left'
              data-aos-duration='800'
              data-aos-easing='ease-in-sine'>
              <img
                className='w-[39px] h-[39px] '
                src={cyber.src}
                alt='Cybersecurity'
                width={39}
                height={39}
              />
              <Text className='font-bold leading-[20.8px]'>Cybersecurity</Text>
            </div>
            <div
              className='flex gap-[14px] items-center mb-[32px]'
              data-aos='fade-left'
              data-aos-duration='900'
              data-aos-easing='ease-in-sine'>
              <img
                className='w-[39px] h-[39px] '
                src={dev.src}
                alt='Dev/Sec/Ops'
                width={39}
                height={39}
              />
              <Text className='font-bold leading-[20.8px]'>Dev/Sec/Ops</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
