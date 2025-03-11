import React from "react";
import Image from "next/image";

import bg from "@/public/images/about/herobg.png";
import bgShadow from "@/public/images/home/bg-shadow.png";
import Text from "@/components/ui/Text";
const AboutHero = () => {
  return (
    <div className=" min-h-[380px] relative flex items-center px-5 justify-center">
      <Image
        className="absolute object-cover h-full w-[70%] mob:w-full right-0 z-0"
        // data-aos="zoom-in"
        // data-aos-duration="900"
        // data-aos-easing="ease-in-sine"
        src={bg}
        alt="bg"
        width={978}
        height={744}
      />
      <Image
        className="absolute object-cover h-full w-full left-0 z-0"
        // data-aos="zoom-in"
        // data-aos-duration="900"
        // data-aos-easing="ease-in-sine"
        src={bgShadow}
        alt="bg"
        width={1377}
        height={744}
      />

      <div className="relative z-20 w-full max-w-[1270px]">
        <div
          className="w-full max-w-[697px]"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-easing="ease-in-sine"
        >
          <Text as="h1" className="mt-[14px] mb-[25px]">
            About Us
          </Text>
          <Text className="text-[#D9D9D9]">
            Captiv8 Integrated Services, LLC (CIS) is a certified Small Business
            by the Small Business Administration (SBA) dedicated to delivering
            cutting-edge solutions that empower organizations to optimize their
            operations.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
