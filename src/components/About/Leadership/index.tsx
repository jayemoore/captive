import React from "react";

import Image from "next/image";
import Text from "@/components/ui/Text";

import leader from "@/public/images/about/leader.png";

const Leadership = () => {
  const leaders = [
    {
      name: "John Doe",
      title: "position",
      image: leader,
    },
    {
      name: "John Doe",
      title: "position",
      image: leader,
    },
    {
      name: "John Doe",
      title: "position",
      image: leader,
    },
    {
      name: "John Doe",
      title: "position",
      image: leader,
    },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center mt-[145px] mb-[111px] relative px-5 mob:my-[50px]">
      <div className="w-full max-w-[1221px] flex justify-center items-center">
        <div className="w-full">
          <div
            data-aos="zoom-out"
            data-aos-duration="900"
            data-aos-easing="ease-in-sine"
          >
            <Text as="h1" className="text-[#002A2B] mb-[12px] text-center">
              Our Leadership
            </Text>
            <Text className="text-[#22282F] text-[18px] text-center">
              To empower organizations to leverage the power of technology to
              drive transformative change for sustainability, scalability,
              interoperability, and security.
            </Text>
          </div>
          <div className="flex w-full items-center flex-wrap justify-center gap-[50px] mt-[59px]">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className=""
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
              >
                <Image
                  src={leader.image}
                  alt="leader"
                  className="w-[267px] h-[267px] mb-[20px]"
                  width={267}
                  height={267}
                />
                <Text className="font-bold text-center text-[24px] text-[#22282F] mb-2">
                  {leader.name}
                </Text>
                <Text className="text-[16px] text-center text-[#22282F]">
                  {leader.title}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
