/** @format */

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import Drawer from "../ui/Drawer";

import logo from "@/public/CIS_logo 1 (1).png";
// import Image from "next/image";

import togglesvg from "@/public/icons/togglesvg.svg";
import Text from "../ui/Text";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // console.log(currentPathname);

  // const [BooknowToggle] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      // Select all list items
      const listItems = document.querySelectorAll(".list-items");

      // Set initial opacity to 0 and translateX to 20px
      gsap.set(listItems, { opacity: 0, x: 20 });

      // Iterate through list items and animate them
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7, // Animation duration
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        ease: "power2.out", // Easing function
      });
    }
  }, [isOpen]);

  return (
    <nav className='relative min-h-[134px] mob:min-h-max z-50  w-full px-5 bg-[#124c5400]'>
      <div className=' max-w-[1270px]  min-h-[130px] mob:min-h-max w-full flex flex-wrap items-center justify-between mx-auto py-4'>
        <div className='flex justify-between items-center w-full '>
          <Link
            href='/'
            className='flex mob:max-w-[182px] mob:justify-start space-x-3 rtl:space-x-reverse'>
            <img
              src={logo.src}
              alt='Flowbite Logo'
              width={229}
              height={109}
              className='w-[229px] '
              data-aos='fade-down'
              data-aos-duration='900'
              data-aos-easing='ease-in-sine'
            />
          </Link>
          <div className='flex xl:pr-4 xl:hidden  pt-4'>
            <button
              // onClick={toggleMenu}
              data-aos='fade-down'
              data-aos-duration='900'
              data-aos-easing='ease-in-sine'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 bg-gray-700 dark:ring-gray-600'
              aria-controls='navbar-default'
              aria-expanded={isOpen ? "true" : "false"}>
              <span className='sr-only'>Open main menu</span>
              <img src={togglesvg.src} alt='' width={64} height={64} />
            </button>
          </div>

          {/* tab and mob  menu*/}
          <div className='block mob:pr-0 '>
            <div
              className='relative cursor-pointer flex pr-2 mob:pr-0 pt-[5px]'
              onClick={onOpen}>
              <button
                // onClick={toggleMenu}
                data-aos='fade-down'
                data-aos-duration='900'
                data-aos-easing='ease-in-sine'
                type='button'
                className='inline-flex items-center p-2 w-[64px] h-[64px] justify-center text-sm  bg-transparent text-white rounded-lg  '
                aria-controls='navbar-default'
                aria-expanded={isOpen ? "true" : "false"}>
                <span className='sr-only'>Open main menu</span>
                <img src={togglesvg.src} alt='' width={64} height={64} />
              </button>
            </div>
            <div className='relative z-40'>
              <Drawer isOpen={isOpen} onClose={onClose}>
                <div className='flex items-center h-full w-full '>
                  <ul className='font-normal  w-full mob:justify-center mob:items-center  mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]  rtl:space-x-reverse md:mt-0 '>
                    <Link
                      href='/'
                      className='block  text-[20px] font-inter font-medium leading-[25.5px]'
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      <Text className='flex pl-16 mob:pl-0 font-bold justify-start py-[15px] list-items text-white'>
                        Home
                      </Text>
                    </Link>
                    <div className='w-full border-[#FFFFFF]/60 border'></div>
                    <Link
                      href='/about'
                      className='block  text-[20px] font-inter font-medium leading-[25.5px]'
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      <Text className='flex pl-16 mob:pl-0 font-bold justify-start py-[15px] list-items text-white'>
                        About Us
                      </Text>
                    </Link>
                    <div className='w-full border-[#FFFFFF]/60 border'></div>
                    <Link
                      href='/services'
                      className='block  text-[20px] font-inter font-medium leading-[25.5px]'
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      <Text className='flex pl-16 mob:pl-0 font-bold justify-start py-[15px] list-items text-white'>
                        Services
                      </Text>
                    </Link>
                    <div className='w-full border-[#FFFFFF]/60 border'></div>
                    <Link
                      href='/contact-us'
                      className='block  text-[20px] font-inter font-medium leading-[25.5px]'
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      <Text className='flex pl-16 mob:pl-0 font-bold justify-start py-[15px] list-items text-white'>
                        Contact Us
                      </Text>
                    </Link>
                    <div className='w-full border-[#FFFFFF]/60 border'></div>
                  </ul>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
