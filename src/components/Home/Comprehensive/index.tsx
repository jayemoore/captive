import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bg from "@/public/images/home/comprihensive.png";
import shadow from "@/public/images/home/comprihensive-shadow.png";
import frame from "@/public/images/home/compriFrame 56.png";
import bgcircle from "@/public/images/home/comprihensiveUntitled design.png";
import check from "@/public/images/home/icons_check-fill.png";
const Comprehensive = () => {
  return (
    <div className="relative mt-36 mob:mt-12 min-h-[708px] bg-[#018f91] overflow-hidden">
      <Image
        className=" object-cover w-full h-full z-0 max-h-[508px] mb-[-140px]"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-easing="ease-in-sine"
        src={bg}
        alt=""
        width={1270}
        height={804}
      />
      <Image
        className=" absolute object-cover w-full tab:h-full tab:top-0 top-[200px] z-0"
        src={shadow}
        alt=""
        width={1440}
        height={1151}
      />
      <div className="w-full max-w-[1340px] flex tab:flex-wrap gap-[20px] items-center  mx-auto relative z-20 px-5  pb-32 mob:pt-10 mob:pb-24">
        <div className="flex-col w-full max-w-[578px]">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
          >
            <Text as="h2" className="text-white">
              Comprehensive Benefits Package
            </Text>
            <Text className="text-white my-[24px]">
              At CIS, we’re proud to offer a robust benefits package designed to
              support your health, well-being, and future. Our benefits include:
            </Text>
          </div>
          {/* checks */}
          <div
            className="flex gap-[12px] max-w-[501px] mb-[12px]"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            <Image
              className="w-[24px] h-[24px] "
              src={check}
              alt=""
              width={24}
              height={24}
            />
            <Text className="text-white">
              <span className="font-bold">
                {" "}
                Medical, Dental, and Vision Insurance{" "}
              </span>{" "}
              <br />
              Comprehensive plans to ensure you and your family are covered.
            </Text>
          </div>
          <div
            className="flex gap-[12px] max-w-[511px] mb-[12px]"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
          >
            <Image
              className="w-[24px] h-[24px] "
              src={check}
              alt=""
              width={24}
              height={24}
            />
            <Text className="text-white">
              <span className="font-bold">
                {" "}
                Short-Term and Long-Term Disability Insurance (STD & LTD){" "}
              </span>{" "}
              <br />
              Providing financial security when life presents unexpected
              challenges.
            </Text>
          </div>
          <div
            className="flex gap-[12px] max-w-[501px] mb-[12px]"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
          >
            <Image
              className="w-[24px] h-[24px] "
              src={check}
              alt="3"
              width={24}
              height={24}
            />
            <Text className="text-white">
              <span className="font-bold">
                {" "}
                401(k) Retirement Savings Plan{" "}
              </span>{" "}
              <br />
              Plan for your future with employer contributions and a range of
              investment options.
            </Text>
          </div>

          <div
            className="flex gap-[12px] max-w-[501px] mb-[12px]"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
          >
            <Image
              className="w-[24px] h-[24px] "
              src={check}
              alt="4"
              width={24}
              height={24}
            />
            <Text className="text-white">
              <span className="font-bold"> Paid Time Off and Holidays </span>{" "}
              <br />
              11 Paid Holidays annually, Personal and Sick Leave, Generous
              Vacation Time to recharge and relax
            </Text>
          </div>
          <div
            className="flex gap-[12px] max-w-[501px] mb-[12px]"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-easing="ease-in-sine"
          >
            <Image
              className="w-[24px] h-[24px] "
              src={check}
              alt="4"
              width={24}
              height={24}
            />
            <Text className="text-white">
              <span className="font-bold"> Tuition Reimbursement </span> <br />
              Invest in your future with financial support for continuing
              education and professional development.
            </Text>
          </div>
        </div>
        {/*  */}
        <div
          className="w-full max-w-[800px] relative flex justify-center items-center tab:mt-10"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <Image
            className="z-0 max-h-[708px] ml-6 tab:ml-0"
            src={frame}
            alt=""
            width={700}
            height={492}
          />
          <Image
            className="  absolute  z-0 "
            src={bgcircle}
            alt=""
            width={750}
            height={452}
          />
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
