import React from "react";
import Image, { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";

import bgr from "@/public/images/home/bgrcareers.png";

interface props {
  description: string;
  image: StaticImageData;
}
const AboutReusable: React.FC<props> = ({ description, image }) => {
  return (
    <div className="bg-[#002A2B] min-h-[450px] py-[60px] relative px-5 flex items-center justify-center overflow-hidden mt-[86px]">
      <div
        className="w-full flex justify-center items-center"
        data-aos="zoom-out"
        data-aos-duration="900"
        data-aos-easing="ease-in-sine"
      >
        <div className="w-full max-w-[1238px] flex justify-between items-center mob:flex-col-reverse mob:justify-center mob:gap-10">
          <div className="w-full">
            <Text className="text-[18px] text-white">
              {description.split("<br />").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Text>
          </div>

          {/* <Image
            src={image}
            alt={"image"}
            className="w-full max-w-[400px] relative z-10"
          /> */}
        </div>
        <Image
          className="absolute left-[0px] h-full w-auto "
          src={bgr}
          alt="bgr"
          width={691.94}
          height={381.18}
        />
      </div>
    </div>
  );
};

export default AboutReusable;
