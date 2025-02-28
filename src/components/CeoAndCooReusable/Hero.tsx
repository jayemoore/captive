import React from "react";
import { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";

interface props {
  name: string;
  position: string;
  image?: StaticImageData;
}

const ReusableHero: React.FC<props> = ({ name, position }) => {
  return (
    <div className=" min-h-[744px] relative flex items-center px-5 justify-center bg-gradient-ceo">
      {/* <Image
        className="absolute object-cover h-full w-[70%] mob:w-full right-0 z-0"
        src={bg}
        alt="bg"
        width={978}
        height={744}
      /> */}
      {/* <Image
        className="absolute object-cover h-full w-full left-0 z-0"
        src={bgShadow}
        alt="bg"
        // width={1377}
        // height={744}
      /> */}

      <div className="relative z-20 w-full max-w-[1250px]">
        <div
          className="w-full max-w-[697px]"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-easing="ease-in-sine"
        >
          <Text as="h1" className="mt-[14px] mb-[20px]">
            {name}
          </Text>
          <Text className="text-[#D9D9D9] text-[30px] mb-[32px]">
            {position}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ReusableHero;
