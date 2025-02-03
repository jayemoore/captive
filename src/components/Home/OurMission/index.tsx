import React from "react";
import Image from "next/image";

import ourmissinimg from "@/public/images/home/ourmission.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const OurMission = () => {
  return (
    <div className="px-5">
      <div className="max-w-[1270px] flex tab:flex-wrap justify-start tab:justify-center gap-[60px] items-center mx-auto">
        <div className="flex-col w-full max-w-[597px]">
          <Image src={ourmissinimg} alt="" width={597} height={477} />
        </div>
        <div className="flex-col w-full max-w-[529px]">
          <Text as="h2">Our Mission</Text>
          <Text className="mt-[12px] mb-[20px]">
            To empower organizations to leverage the power of technology to
            drive transformative change for sustainability, scalability,
            interoperability, and security.
          </Text>

          <Text as="h2">Our Vision</Text>
          <Text className="my-[12px]">
            To deliver superior value through innovation and expertise.
          </Text>
          <Text >
            At CIS, we take a holistic approach to problem-solving, seamlessly
            integrating advanced technologies while fostering a culture of
            innovation, adaptability, and continuous improvement across the
            entire organization.
          </Text>
          <Button className="mt-[25px]">LEARN MORE</Button>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
