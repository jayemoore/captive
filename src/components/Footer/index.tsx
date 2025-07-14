/** @format */

import React from "react";
// import Image from "next/image";
import Text from "../ui/Text";
import Link from "next/link";

import logo from "@/public/CIS_logo 2.png";
// import twitter from "@/public/icons/twitter.svg";
// import insta from "@/public/icons/insta.svg";
// import fb from "@/public/icons/fb.svg";

const Footer = () => {
  return (
    <>
      <footer className='bg-white py-16 px-5'>
        <div className='flex flex-wrap justify-between tab:gap-[50px] w-full max-w-[1270px] mx-auto'>
          {/* About Section */}
          <div className='max-w-[220px]'>
            <Text className='font-semibold text-[24px] mb-4'>About</Text>
            <Text>
              We guide our clients toward the future of information technology
              by helping them adopt emerging trends and solutions, such as
              terminology set analysis and enhanced interoperability.
            </Text>
          </div>
          {/* Sitemap Section */}
          <div className='max-w-[124px]'>
            <Text className='font-semibold text-[24px] mb-4'>Sitemap</Text>
            <ul className='space-y-1 '>
              <li>
                <Link href='/' className=''>
                  <Text>HOME</Text>
                </Link>
              </li>
              <li>
                <a href='/about' className=''>
                  <Text>ABOUT US</Text>
                </a>
              </li>
              <li>
                <a href='/services' className=''>
                  <Text>SERVICES</Text>
                </a>
              </li>
              <li>
                <a href='/contact-us' className=''>
                  <Text>CONTACT US</Text>
                </a>
              </li>
            </ul>
          </div>
          {/* Address Section */}
          <div className='max-w-[240px]'>
            <Text className='font-semibold text-[24px] mb-4'>Address</Text>

            <div className=''>
              <Text>
                12410 Milestone Center Drive, Suite 600, German Town, MD
              </Text>
            </div>
          </div>
          {/* Newsletter Section */}
          <div className=''>
            <Text className='font-semibold text-[24px] mb-3'>Newsletter</Text>
            <Text className=' mb-5'>
              Stay in the loop with the latest updates!
            </Text>
            <div className='flex gap-0 mob:flex-col mob:gap-5'>
              <input
                type='email'
                placeholder='Enter email'
                className='px-4 py-2 text-[16px] font-inter  shadow-[0px_4px_4px_#0000001A] h-[36px] outline-none text-[#22282F] placeholder:text-[#6B6B6B]'
              />
              <button className='bg-[#008F91] px-[24px] h-[36px] text-white text-[16px]  font-inter font-semibold  rounded  hover:bg-opacity-90 transition-colors'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className='flex tab:flex-wrap tab:gap-6  w-full items-center justify-between   max-w-[1300px] mx-auto mt-4'>
          <Link href='/'>
            <img
              src={logo.src}
              alt='Captiv Logo'
              className='mob:w-[150px]'
              width={229}
              height={109}
            />
          </Link>
          <Text className=' text-gray-500 mob:w-full'>
            Copyright © 2025 Captiv
          </Text>
          {/* <div className="flex items-center gap-8">
            <div className="flex gap-6 mr-[15px] tab:mr-0">
              <a href="#" className="text-brand-teal hover:opacity-80">
                <img
                  src={twitter.src}
                  alt="twitter"
                  className=""
                  width={24.52}
                  height={24.52}
                />
              </a>
              <a href="#" className="text-brand-teal hover:opacity-80">
                <img
                  src={insta.src}
                  alt="insta"
                  className=""
                  width={24.52}
                  height={24.52}
                />
              </a>
              <a href="#" className="text-brand-teal hover:opacity-80">
                <img
                  src={fb.src}
                  alt="fb"
                  className=""
                  width={24.52}
                  height={24.52}
                />
              </a>
            </div>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
