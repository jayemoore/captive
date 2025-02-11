"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";
import ContactForm from "./Form";

import map from "@/public/images/contactus/map.png";
import location from "@/public/images/contactus/location.svg";
import call from "@/public/images/contactus/call.svg";
import mail from "@/public/images/contactus/mail.svg";
import fb from "@/public/images/contactus/fb.svg";
import insta from "@/public/images/contactus/insta.svg";
import twitter from "@/public/images/contactus/twitter.svg";
import yt from "@/public/images/contactus/yt.svg";

const ReachUs = () => {
  return (
    <div className="flex justify-center mt-[-167px] relative mob:my-10 mb-[33px]">
      <div
        className="w-full max-w-[1250px] mob:px-5"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <div className="flex flex-col flex-wrap justify-center tab:gap-8 items-center">
          <div className="w-full flex items-center justify-between mob:flex-col mob:gap-10 bg-[#FFFFFF] box-shadow-services py-[24px] px-[39px] mob:px-5 rounded-[12px] mob:pb-12">
            <div>
              <Text className="text-[54px] mob:text-[40px] font-bold leading-[62px] mb-[29px] mob:mb-4">
                Reach us at
              </Text>
              <Image
                src={map}
                alt="Image"
                className="w-full h-full max-w-[548px] min-h-[198px] rounded-[8px] mb-[33px]"
              />

              <div className="flex items-center gap-[16px]">
                <Image src={location} alt="Location" />
                <Text className="text-[#1B1D21]">
                  12410 Milestone Center Drive, Suite 600, German Town, MD
                </Text>
              </div>
              <div className="flex items-center gap-[16px] mt-5">
                <a
                  href="tel:4045930333"
                  className="w-fit flex items-center gap-[16px]"
                >
                  <Image src={call} alt="Call" />
                  <Text className="text-[#1B1D21]">(404) 593-0333</Text>
                </a>
              </div>
              <div className="flex items-center gap-[16px] mb-[33px] mt-5">
                <a
                  href="mailto:info@captive8integratedservices"
                  className="w-fit flex items-center gap-[16px]"
                >
                  <Image src={mail} alt="Mail" />
                  <Text className="text-[#1B1D21]">
                    info@captiv8integratedeservices.com
                  </Text>
                </a>
              </div>
              <div className="flex items-center gap-[20px] flex-wrap mob:justify-center">
                <Link href="">
                  <Image src={fb} alt="fb" />
                </Link>
                <Link href="">
                  <Image src={insta} alt="insta" />
                </Link>
                <Link href="">
                  <Image src={twitter} alt="twitter" />
                </Link>
                <Link href="">
                  <Image src={yt} alt="youtube" />
                </Link>
              </div>
            </div>

            <div className="bg-[#008F91] flex justify-center items-center rounded-[8px] w-full max-w-[558px] min-h-[596px]">
              <div className="w-full max-w-[465px] mob:px-5">
                <Text className="text-[40px] text-[#FFFFFF] font-black mob:text-[30px] mob:leading-[40px] mob:text-center leading-[54.4px]">
                  Let’s Talk
                </Text>
                <Text className="mt-1 text-[#FFFFFF] mb-[18px]">
                  Please fill out the contact form below.
                </Text>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
