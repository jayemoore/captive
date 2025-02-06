import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import respect from "@/public/images/home/respecticon.png";
import growth from "@/public/images/home/growthicon.png";
import map from "@/public/images/home/mapbg.png";

const Working = () => {
  return (
    <div className="px-5 pt-20 ">
      <div className="max-w-[1270px] mx-auto">
        <Text as="h2" className="text-center">
          Working at Captiv8
        </Text>
        <Text className="text-center max-w-[742px] mx-auto mt-[15px] mb-[15px]">
          At Captiv8 Integrated Services, our people are the heart of everything
          we do. We believe that a thriving, engaged workforce is the foundation
          of innovation, success, and growth. That’s why we’ve built a culture
          that values and invests in every individual who joins our team.
        </Text>
        <Text className="text-center mx-auto mb-10">
          We foster this culture by:
        </Text>
      </div>
      <div className="max-w-[1270px] mx-auto relative flex flex-wrap justify-center gap-[44px] pt-8 pb-20">
        <Image
          className="absolute object-cover w-full  z-0 top-[-60px]"
          src={map}
          alt=""
          width={1270}
          height={804}
        />
        <div className="w-full max-w-[278px]  h-[373px] shadow-[0px_4px_54px_#668FA54D] px-[21px] pt-[50px] relative z-20 bg-white">
          <div className="flex justify-center">
            <Image src={respect} alt="" width={64} height={64} />
          </div>

          <Text className="text-center my-[15px] font-bold">
            Respect and Inclusion
          </Text>
          <Text className="text-center">
            Experts in designing secure, high-performing, resilient, and
            efficient infrastructure on AWS.
          </Text>
        </div>

        <div className="w-full max-w-[278px]  h-[373px] shadow-[0px_4px_54px_#668FA54D] px-[21px] pt-[35px] mt-[167px] tab:mt-[0px] relative z-20 bg-white">
          <div className="flex justify-center">
            <Image src={growth} alt="" width={64} height={64} />
          </div>

          <Text className="text-center my-[15px] font-bold">
            Continuous Growth
          </Text>
          <Text className="text-center">
            We believe in empowering our employees to achieve their personal and
            professional goals. Whether through training programs, mentorship,
            or career advancement opportunities, we’re committed to your growth.
          </Text>
        </div>

        <div className="w-full max-w-[278px]  h-[373px] shadow-[0px_4px_54px_#668FA54D] px-[21px] pt-[50px] relative z-20 bg-white">
          <div className="flex justify-center">
            <Image src={respect} alt="" width={64} height={64} />
          </div>

          <Text className="text-center my-[15px] font-bold">
            Wellness and Balance
          </Text>
          <Text className="text-center">
            We understand the importance of balancing work and life. From
            flexible work arrangements to wellness programs, we support your
            well-being every step of the way.
          </Text>
        </div>

        <div className="w-full max-w-[278px]  h-[373px] shadow-[0px_4px_54px_#668FA54D] px-[21px] pt-[50px] mt-[167px] tab:mt-[0px] relative z-20 bg-white">
          <div className="flex justify-center">
            <Image src={respect} alt="" width={64} height={64} />
          </div>

          <Text className="text-center my-[15px] font-bold">
            Collaboration and Innovation
          </Text>
          <Text className="text-center">
            Great ideas come from great teamwork. We encourage collaboration
            across teams and levels, empowering employees to innovate, take
            initiative, and make an impact.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Working;
