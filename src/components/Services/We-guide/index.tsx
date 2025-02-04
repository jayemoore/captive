import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bg from "@/public/images/about/atcisbg.png";

const WeGuide = () => {
  return (
    <div className="w-full h-full min-h-[450px] mob:min-h-[700px] bg-[#002A2B]">
      <div className="relative">
        <Image
          className="absolute bg-contain bg-no-repeat right-0 w-full h-full max-w-[700px] min-h-[500px] z-0"
          src={bg}
          alt="bg"
          width={381}
          height={691}
        />
        <div className="w-full h-full flex flex-col justify-center max-w-[1090px] mx-auto items-center px-5 min-h-[450px] mob:min-h-[700px]">
          <Text as="h1" className="text-center text-[#FFFFFF] mb-[30px]">
            We guide our clients toward the future of information technology
          </Text>
          <Text className="text-[#FFFFFF]/70 text-center font-normal">
            by helping them adopt emerging trends and solutions, such as
            terminology set analysis and enhanced interoperability. By
            leveraging these advancements, our services position organizations
            to maintain operations, adapt to shifting landscapes, and endure in
            the ever-evolving world of technology.
            <br /> <br />
            CIS is committed to providing tailored solutions that ensure our
            clients are equipped to thrive, innovate, and lead in their
            industries.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default WeGuide;
