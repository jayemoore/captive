import React from "react";
import Image from "next/image";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

import cloud from "@/public/images/home/services/cloud.png";
import agile from "@/public/images/home/services/agile.png";
import data from "@/public/images/home/services/datacenter.png";
import tele from "@/public/images/home/services/telecommunication.png";
import ai from "@/public/images/home/services/ai.png";
import cyber from "@/public/images/home/services/cyber-security.png";
import dev from "@/public/images/home/services/dev-sec.png";
const OurServices = () => {
  return (
    <div className="px-5 py-16">
      <div className="max-w-[1270px] mx-auto flex tab:flex-wrap gap-[108px]">
        <div className="flex-col max-w-[426px]">
          <Text as="h2">Our Services</Text>
          <Text className="my-[16px]">
            At Captiv8 Integrated Services, LLC (CIS), we empower our partners
            to overcome challenges and embrace innovation through a
            comprehensive range of services and solutions. Our team of seasoned
            professionals specializes in delivering expertise in:
          </Text>
          <Button className="max-w-[244px]">SEE ALL SERVICES </Button>
        </div>
        {/*  */}
        <div className="flex flex-wrap max-w-[648px] gap-[72px] tab:gap-0">
          <div className="max-w-[283px]">
            <div className="flex gap-[14px] items-center mb-[32px]">
              <Image
                className="w-[39px] h-[39px] "
                src={cloud}
                alt="cloud"
                width={39}
                height={39}
              />
              <Text className="font-bold leading-[20.8px]">
                Cloud Development and Management
              </Text>
            </div>
            <div className="flex gap-[14px] items-center mb-[32px]">
              <Image
                className="w-[39px] h-[39px] "
                src={agile}
                alt="cloud"
                width={39}
                height={39}
              />
              <Text className="font-bold leading-[20.8px]">
              Agile Project Management
              </Text>
            </div>
            <div className="flex gap-[14px] items-center mb-[32px]">
              <Image
                className="w-[39px] h-[39px] "
                src={data}
                alt="cloud"
                width={39}
                height={39}
              />
              <Text className="font-bold leading-[20.8px]">
              Data Center Support
              </Text>
            </div>
            <div className="flex gap-[14px] items-center mb-[32px]">
              <Image
                className="w-[39px] h-[39px] "
                src={tele}
                alt="cloud"
                width={39}
                height={39}
              />
              <Text className="font-bold leading-[20.8px]">
              Telecommunications
              </Text>
            </div>
          </div>
          {/*  */}
          <div className="max-w-[283px]">
            <div className="flex gap-[14px] items-center mb-[32px]">
              <Image
                className="w-[39px] h-[39px] "
                src={ai}
                alt="ai"
                width={39}
                height={39}
              />
              <Text className="font-bold leading-[20.8px]">
              Artificial Intelligence (AI)
              </Text>
            </div>
            <div className="flex gap-[14px] items-center mb-[32px]">
              <Image
                className="w-[39px] h-[39px] "
                src={cyber}
                alt="Cybersecurity"
                width={39}
                height={39}
              />
              <Text className="font-bold leading-[20.8px]">
              Cybersecurity
              </Text>
            </div>
            <div className="flex gap-[14px] items-center mb-[32px]">
              <Image
                className="w-[39px] h-[39px] "
                src={dev}
                alt="Dev/Sec/Ops"
                width={39}
                height={39}
              />
              <Text className="font-bold leading-[20.8px]">
              Dev/Sec/Ops
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
