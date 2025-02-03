import React from 'react'
import Image from 'next/image'

import Text from '../ui/Text'

import logo from "@/public/CIS_logo 2.png"
import twitter from "@/public/icons/twitter.svg"
import insta from "@/public/icons/insta.svg"
import fb from "@/public/icons/fb.svg"
const Footer = () => {
  return (
    <>
       <footer className="bg-white py-16 px-5">
        <div className="flex flex-wrap justify-between tab:gap-[50px] w-full max-w-[1270px] mx-auto">
          {/* About Section */}
          <div className="max-w-[220px]">
            <Text className="font-semibold text-[24px] mb-4">About</Text>
            <Text >
              We guide our clients toward the future of information technology by helping them adopt emerging trends and solutions, such as terminology set analysis and enhanced interoperability.
            </Text>
          </div>
          {/* Sitemap Section */}
          <div className="max-w-[104px]">
            <Text className="font-semibold text-[24px] mb-4">Sitemap</Text>
            <ul className="space-y-1 ">
              <li>
                <a href="#" className=""><Text>HOME</Text></a>
              </li>
              <li>
                <a href="#" className=""><Text>ABOUT US</Text></a>
              </li>
              <li>
                <a href="#" className=""><Text>CONTACT</Text></a>
              </li>
              <li>
                <a href="#" className=""><Text>CAPABILITIES</Text></a>
              </li>
              <li>
                <a href="#" className=""><Text>STATEMENT</Text></a>
              </li>
            </ul>
          </div>
          {/* Address Section */}
          <div className="max-w-[240px]">
            <Text className="font-semibold text-[24px] mb-4">Address</Text>

            <div className="">
              <Text>HQ – 608 ½ Parkside place NE Washington D.C. 20019 <br />
              California Office- 1150 S. Olive Street, 19th Floor, Los Angeles, CA 90015</Text>
            </div>
          </div>
          {/* Newsletter Section */}
          <div className=''>

            <Text className="font-semibold text-[24px] mb-3">Newsletter</Text>
            <Text className=" mb-5">Stay in the loop with the latest updates!</Text>
            <div className="flex gap-0 shadow-[0px_4px_4px_#0000001A]">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2 text-[16px] font-inter h-[36px] outline-none text-[#22282F] placeholder:text-[#6B6B6B]"
              />
              <button className="bg-[#008F91] px-[24px] h-[36px] text-white text-[16px]  font-inter font-semibold  rounded  hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>



        {/* Logo Section */}
        <div className="flex tab:flex-wrap tab:gap-6  w-full items-center justify-between   max-w-[1300px] mx-auto mt-4">
          <Image
            src={logo}
            alt="Captiv Logo"
            className=""
            width={229}
            height={109}
          />
            <Text className=" text-gray-500 mob:w-full">
              Copyright © 2025 Captiv
            </Text>
          <div className="flex items-center gap-8">
          
            <div className="flex gap-6 mr-[15px] tab:mr-0">
              <a href="#" className="text-brand-teal hover:opacity-80">
              <Image
            src={twitter}
            alt="twitter"
            className=""
            width={24.52}
            height={24.52}
          />
              </a>
              <a href="#" className="text-brand-teal hover:opacity-80">
              <Image
            src={insta}
            alt="insta"
            className=""
            width={24.52}
            height={24.52}
          />
              </a>
              <a href="#" className="text-brand-teal hover:opacity-80">
              <Image
            src={fb}
            alt="fb"
            className=""
            width={24.52}
            height={24.52}
          />
              </a>
            </div>
          </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
