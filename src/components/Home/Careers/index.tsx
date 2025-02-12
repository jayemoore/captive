import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bgr from "@/public/images/home/bgrcareers.png";
const Careers = () => {
  return (
    <div className="bg-[#002A2B] min-h-[450px] relative px-5 flex items-center justify-center overflow-hidden">
      <div
        data-aos="zoom-out"
        data-aos-duration="900"
        data-aos-easing="ease-in-sine"
      >
        <Text as="h1" className="text-center">
          At CIS we don’t just provide jobs; <br />{" "}
          <span className="text-[#008F91]">We create careers</span>
        </Text>

        <Text className="mx-auto text-center max-w-[907px] text-[#FFFFFF]/80 mt-[24px] mb-[32px]">
          With a strong commitment to recognizing and rewarding your hard work,
          we provide the tools and support you need to thrive in your role. From
          our comprehensive benefits to our inclusive culture, we’re here to
          help you succeed.
        </Text>
      </div>
      <Image
        className="absolute left-[0px] h-full w-auto "
        src={bgr}
        alt="bgr"
        width={691.94}
        height={381.18}
      />
    </div>
  );
};

export default Careers;
