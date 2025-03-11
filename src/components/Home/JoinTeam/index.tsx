import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import Button from "@/components/ui/Button";
// import bgr from "@/public/images/home/careers.png";

import bgr from "@/public/images/home/jointeambgr.png";
import Link from "next/link";
const JoinTeam = () => {
  return (
    <div className="bg-[#007879] min-h-[450px] relative px-5 flex items-center justify-center overflow-hidden">
      <div
        className="relative z-20"
        data-aos="zoom-out"
        data-aos-duration="900"
        data-aos-easing="ease-in-sine"
      >
        <Text as="h1" className="text-center">
          Ready to join a team that <br />{" "}
          <span className="text-[#002A2B]">truly values you?</span>
        </Text>
        <Text className="mx-auto text-center max-w-[411px] text-[#FFFFFF]/85 mt-[24px] mb-[32px]">
          Explore our career opportunities today and see how we can build a
          brighter future together.
        </Text>
        <div className="mx-auto w-[193px]">
        <Link href="/contact-us" >
        <Button className="mx-auto">LEARN MORE</Button>
        </Link>
        </div>
      </div>
      <Image
        className="absolute right-0 h-full w-auto  "
        src={bgr}
        alt="bgr"
        width={691.18}
        height={381.94}
      />
    </div>
  );
};

export default JoinTeam;
