import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bg from "@/public/images/about/vision.png";

const Vision = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full max-w-[1350px]">
        <div className="relative flex justify-center items-center mob:flex-col mob:gap-5">
          <Image
            className="absolute mob:relative h-full min-h-[861px] mob:min-h-full bg-center w-[1350px] mob:w-full z-0"
            src={bg}
            alt="bg"
            width={1350}
            height={861}
          />
          <div className="w-full pl-[45px] mob:px-5">
            <div className="relative flex justify-center rounded-[12px] items-center z-10  max-w-[644px] bg-[#008F91E5]/90">
              <div className="w-full h-full px-[45px] py-[30px] mob:px-5">
                <Text as="h1" className=" mb-[24px]">
                  Our Vision
                </Text>
                <Text className="text-white text-[16px] font-medium">
                  To deliver superior value through innovation and expertise. At
                  CIS, we take a holistic approach to problem-solving,
                  seamlessly integrating advanced technologies while fostering a
                  culture of innovation, adaptability, and continuous
                  improvement across the entire organization.
                  <br />
                  <br />
                  As a team of subject matter experts, we ground our expertise
                  in extensive research of industry best practices. We are
                  strategists and technologists driven by curiosity, pursuing
                  answers to pressing industry challenges through investigatory
                  research. Our focus is on identifying opportunities to exploit
                  technology to address specific business needs effectively and
                  efficiently.
                  <br />
                  <br />
                  Through this process, we develop proof-of-concept models and
                  pilot programs that showcase the potential impact of our
                  research. These programs allow us to demonstrate tangible
                  outcomes, showing how technology can address complex problems
                  with precision and innovation.
                  <br />
                  At CIS, our commitment to excellence, collaboration, and
                  forward-thinking ensures that we don’t just solve problems—we
                  create sustainable solutions that help our clients thrive in
                  an ever-evolving digital landscape.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative flex items-center px-5 justify-center">
        <Image
          className=" absolute object-cover min-h-[861px] bg-center h-full w-[1250px] mob:w-full  z-0"
          src={bg}
          alt="bg"
          width={1250}
          height={861}
        />

        <div className="relative z-20 w-full max-w-[1270px]">
          <div className="w-full max-w-[697px]">o
            <Text as="h1" className="mt-[14px] mb-[20px]">
              About Us
            </Text>
            <Text className="text-[#D9D9D9]">
              Captiv8 Integrated Services, LLC (CIS) is a certified Small
              Business by the Small Business Administration (SBA) dedicated to
              delivering cutting-edge solutions that empower organizations to
              optimize their operations.
            </Text>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Vision;
