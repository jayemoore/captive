import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import map from "@/public/images/contactus/map.png";
import location from "@/public/images/contactus/location.svg";
import call from "@/public/images/contactus/call.svg";
import mail from "@/public/images/contactus/mail.svg";
import fb from "@/public/images/contactus/fb.svg";
import insta from "@/public/images/contactus/insta.svg";
import twitter from "@/public/images/contactus/twitter.svg";
import yt from "@/public/images/contactus/yt.svg";

const ReachUs = () => {
  return (
    <div className="flex justify-center mt-[-167px] relative mob:my-10 mb-[33px]">
      <div
        className="w-full max-w-[1250px] mob:px-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex flex-col flex-wrap justify-center tab:gap-8 items-center">
          <div className="w-full flex items-center justify-between mob:flex-col mob:gap-10 bg-[#FFFFFF] box-shadow-services py-[24] px-[40] mob:px-5 rounded-[12px]">
            <div>
              <Text className="text-[54px] mob:text-[40px] font-bold leading-[62px] mb-[29px] mob:mb-4">
                Reach us at
              </Text>
              <Image
                src={map}
                alt="Image"
                className="w-full h-full max-w-[548px] min-h-[198px] rounded-[8px] mb-[33px]"
              />

              <div className="flex items-center gap-[16px]">
                <Image src={location} alt="Location" />
                <Text className="text-[#1B1D21]">
                  +12345 Lorem ipusm st., Alebander, AR 72002
                </Text>
              </div>
              <div className="flex items-center gap-[16px] mt-5">
                <a
                  href="tel:4045930333"
                  className="w-fit flex items-center gap-[16px]"
                >
                  <Image src={call} alt="Call" />
                  <Text className="text-[#1B1D21]">(404) 593-0333</Text>
                </a>
              </div>
              <div className="flex items-center gap-[16px] mb-[33px] mt-5">
                <a
                  href="mailto:info@captive8integratedservices"
                  className="w-fit flex items-center gap-[16px]"
                >
                  <Image src={mail} alt="Mail" />
                  <Text className="text-[#1B1D21]">
                    info@captive8integratedservices
                  </Text>
                </a>
              </div>
              <div className="flex items-center gap-[20px] flex-wrap mob:justify-center">
                <Link href="">
                  <Image src={fb} alt="fb" />
                </Link>
                <Link href="">
                  <Image src={insta} alt="insta" />
                </Link>
                <Link href="">
                  <Image src={twitter} alt="twitter" />
                </Link>
                <Link href="">
                  <Image src={yt} alt="youtube" />
                </Link>
              </div>
            </div>

            <div className="bg-[#008F91] flex justify-center items-center rounded-[8px] w-full max-w-[558px] min-h-[596px]">
              <div className="w-full max-w-[465px] mob:px-5">
                <Text className="text-[40px] text-[#FFFFFF] font-black mob:text-[30px] mob:leading-[40px] mob:text-center leading-[54.4px]">
                  Let’s Talk
                </Text>
                <Text className="mt-1 text-[#FFFFFF] mb-[18px]">
                  Please fill out the contact form below.
                </Text>
                <form action="" className="">
                  <input
                    type="text"
                    className="w-full max-w-[465px] px-[22px] py-3 form-input-shadow rounded-[4px] focus:outline-none"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    className="w-full max-w-[465px] px-[22px] py-3 mt-[17px] form-input-shadow rounded-[4px] focus:outline-none"
                    placeholder="Last Name"
                    required
                  />
                  <input
                    type="email"
                    className="w-full max-w-[465px] px-[22px] py-3 mt-[17px] form-input-shadow rounded-[4px] focus:outline-none"
                    placeholder="Email Address"
                    required
                  />
                  <input
                    type="text"
                    className="w-full max-w-[465px] px-[22px] py-3 mt-[17px] form-input-shadow rounded-[4px] focus:outline-none"
                    placeholder="Phone Number"
                    required
                  />
                  <textarea
                    className="w-full max-w-[465px] px-[22px] h-[106px] py-3 mt-[17px] form-input-shadow rounded-[4px] focus:outline-none"
                    placeholder="Message"
                  />
                  <Button className="w-full max-w-[465px] rounded-[44px] text-white mt-[18px]">
                    SUBMIT
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
