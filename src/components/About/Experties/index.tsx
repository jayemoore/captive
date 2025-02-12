import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import experties from "@/public/images/about/expert.png";
import software from "@/public/images/about/csoftware.svg";
import itconsult from "@/public/images/about/csoftware.svg";
import support from "@/public/images/about/csoftware.svg";
import itservice from "@/public/images/about/csoftware.svg";
import handshake from "@/public/images/about/csoftware.svg";
import workforce from "@/public/images/about/csoftware.svg";

const expertiseData = [
  {
    id: 1,
    code: "541511",
    description: "Custom software development",
    image: software,
  },
  {
    id: 2,
    code: "541512",
    description: "IT consulting services",
    image: itconsult,
  },
  {
    id: 3,
    code: "541513",
    description: "Computer systems management and support",
    image: support,
  },
  {
    id: 4,
    code: "541519",
    description: "Other IT-related services",
    image: itservice,
  },
  {
    id: 5,
    code: "541611",
    description: "Business management consulting",
    image: handshake,
  },
  {
    id: 6,
    code: "561320",
    description: "Staffing and workforce solutions",
    image: workforce,
  },
];

const Experties = () => {
  return (
    <div className="px-5 pt-[180] pb-8 mob:py-10">
      <div className="w-full max-w-[1250px] mx-auto flex flex-wrap gap-[48px] mob:gap-[40px] tab:justify-center justify-between "
        data-aos="zoom-out"
        data-aos-duration="900"
        data-aos-easing="ease-in-sine"
      >
        {/* left */}
        <div className="w-full max-w-[577px]">
          <Image className="w-full" src={experties} alt="experties" />
        </div>

        {/* right */}
        <div className="w-full max-w-[605px]">
          <Text
            as="h2"
            className="text-[#002A2B] text-[48px] leading-[52.8px] max-w-[529px] mob:text-center mob:text-[40px] mob:leading-[50px]"
          >
            Our Areas of Expertise (NAICS)
          </Text>
          <Text className="text-[#22282F] mt-4 mob:text-center">
            Our company operates under the following NAICS codes, reflecting our
            expertise and commitment to excellence in technology, consulting,
            and professional services.
          </Text>

          <div className="flex flex-wrap gap-[19px] mt-[42px] mob:grid mob:grid-cols-2">
            {expertiseData.map((item) => (
              <div
                key={item.id}
                className={`px-[10px] py-5 w-full max-w-[189px] min-h-[184px] rounded-[12px] transition-transform duration-300 hover:scale-[1.1] ${
                    [2, 4, 6].includes(item.id) ? "shadow-[5px_5px_7.2px_0px_rgba(156,163,175,0.4)]" : ""
                  }`}
               >
                <Image
                  className="mx-auto"
                  src={item.image}
                  alt="expertise"
                  width={36}
                  height={36}
                />
                <p className="text-[#22282F] text-center text-[24px] font-extrabold leading-[26.4px] my-2">
                  {item.code}
                </p>
                <p className="text-[#7D7D7D] text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experties;
