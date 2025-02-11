import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bg from "@/public/images/about/atcisbg.png";

const AtCix = () => {
  return (
    <div className="w-full h-full min-h-[450px] bg-[#002A2B] overflow-hidden">
      <div className="relative">
        <Image
          className="absolute bg-contain bg-no-repeat right-0 w-full h-full max-w-[700px] min-h-[500px] z-0"
          src={bg}
          alt="bg"
          width={381}
          height={691}
        />
        <div
          className="w-full h-full flex justify-center items-center px-5 min-h-[450px]"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-easing="ease-in-sine"
        >
          <Text as="h1" className="text-center ">
            At CIS we don’t just provide jobs; <br />{" "}
            <span className="text-[#008F91]"> We create careers</span>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default AtCix;
