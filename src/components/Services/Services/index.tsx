"use client";
import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import cloud from "@/public/images/services/cloud.svg";
import agile from "@/public/images/services/agile.svg";
import data from "@/public/images/services/data.svg";
import cyber from "@/public/images/services/cyber.svg";
import tele from "@/public/images/services/tele.svg";
import ai from "@/public/images/services/ai.svg";
import devops from "@/public/images/services/devops.svg";

import cloudcard from "@/public/images/services/cloudcard.png";
import agilecard from "@/public/images/services/agilecard.png";
import datacard from "@/public/images/services/datacard.png";
import cybercard from "@/public/images/services/cybercard.png";
import telecard from "@/public/images/services/telecard.png";
import aicard from "@/public/images/services/aicard.png";
import devopscard from "@/public/images/services/devopscard.png";

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const buttons = [
    {
      title: "Cloud Development and Management",
      icon: cloud,
    },
    {
      title: "Agile Project Management",
      icon: agile,
    },
    {
      title: "Data Center Support",
      icon: data,
    },
    {
      title: "Cybersecurity",
      icon: cyber,
    },
    {
      title: "Telecommunications",
      icon: tele,
    },
    {
      title: "Artificial Intelligence (AI)",
      icon: ai,
    },
    {
      title: "Dev/Sec/Ops",
      icon: devops,
    },
  ];

  const content = [
    {
      title: "Cloud Development and Management",
      image: cloudcard,
      description:
        "At Captiv8 Integrated Services, LLC (CIS), we specialize in delivering cutting-edge cloud solutions that enable organizations to scale, secure, and streamline their operations. Whether you're just starting your cloud journey or looking to optimize an existing infrastructure, our expertise ensures your business is equipped to thrive in today’s digital landscape. \n\n At CIS, we understand that no two organizations are alike. That’s why we take a customized approach, combining industry best practices with innovative technologies to deliver solutions that align with your unique goals. Our team of cloud experts is committed to ensuring your cloud environment supports not just your current operations but your vision for the future. Let us help you harness the full potential of the cloud to drive innovation, agility, and growth.",
    },
    {
      title: "Agile Project Management",
      image: agilecard,
      description:
        "At Captiv8 Integrated Services, LLC (CIS), we deliver results-driven Agile Project Management services designed to help organizations streamline workflows, enhance collaboration, and achieve their goals efficiently. By embracing agile methodologies, we ensure your projects stay on track, adapt to change, and deliver value at every stage. \n\n At CIS, we go beyond simply managing projects; we partner with you to deliver results that align with your mission and goals. Our experienced Agile practitioners are skilled at navigating complex environments, driving efficiency, and fostering a culture of adaptability.\n\n By leveraging Agile Project Management, we enable our clients to respond to evolving demands, reduce time-to-market, and continuously deliver value. Let us help you transform your approach to project management and position your organization for long-term success.",
    },

    {
      title: "Data Center Support",
      image: datacard,
      description:
        "At Captiv8 Integrated Services, LLC (CIS), we provide comprehensive data center support services that ensure your critical infrastructure operates at peak performance. Our solutions are designed to optimize, secure, and modernize your data center environment, helping you meet the demands of an ever-evolving digital world. At CIS, we understand the critical role your data center plays in your organization’s success.  \n\n That’s why we take a proactive and personalized approach to support, ensuring your infrastructure remains secure, reliable, and aligned with your business goals. \n Whether you’re looking to enhance efficiency, strengthen security, or modernize your data center, our team of experts is here to help you achieve operational excellence. Partner with CIS to ensure your data center remains a driving force behind your success.",
    },
    {
      title: "Cybersecurity",
      image: cybercard,
      description:
        "At Captiv8 Integrated Services, LLC (CIS), we prioritize the protection of your digital assets with comprehensive cybersecurity solutions designed to defend against evolving threats and ensure the security, integrity, and confidentiality of your critical systems and data. Our expert team works with you to implement proactive strategies that safeguard your organization from cyberattacks and minimize the risk of breaches.  \n\n At CIS, we understand that cybersecurity is more than just technology—it’s about building a culture of security that extends throughout your organization. We combine cutting-edge technology with best-in-class practices to provide you with end-to-end protection, ensuring your business can operate with confidence in an increasingly complex threat landscape. \n Partner with CIS for a comprehensive cybersecurity strategy that defends your digital assets, supports compliance efforts, and ensures the ongoing security of your operations.",
    },

    {
      title: "Telecommunications",
      image: telecard,
      description:
        "At Captiv8 Integrated Services, LLC (CIS), we provide cutting-edge telecommunications solutions that ensure seamless connectivity, reliable communication, and enhanced collaboration for your organization. Whether you are upgrading existing systems or implementing new technologies, our expert team delivers solutions that support your business goals while adapting to the ever-changing telecommunications landscape.\n\n At CIS, we understand that reliable communication is the backbone of modern businesses. Our solutions are designed to enhance connectivity, streamline communication processes, and support collaboration in real-time. Whether it’s connecting remote teams, improving data sharing, or upgrading legacy systems, we bring expertise and innovative solutions to meet your telecommunications needs. Partner with CIS for end-to-end telecommunications services that keep your organization connected, competitive, and ready for the future.",
    },
    {
      title: "Artificial Intelligence (AI)",
      image: aicard,
      description:
        "At Captiv8 Integrated Services, LLC (CIS), we leverage the power of Artificial Intelligence (AI) to drive innovation, optimize operations, and unlock new opportunities for growth. Our AI solutions are tailored to address your unique business challenges, enabling you to make data-driven decisions, automate processes, and enhance customer experiences with intelligent technology.\n\n At CIS, we believe in the transformative potential of AI. Our expert team combines cutting-edge technologies with industry best practices to deliver AI solutions that deliver measurable business value. Whether you’re looking to automate processes, improve decision-making, or unlock new capabilities, we help you harness the power of AI to stay ahead of the competition. \n Partner with CIS to explore innovative AI-driven solutions that accelerate growth, streamline operations, and position your organization for the future.",
    },
    {
      title: "Dev/Sec/Ops",
      image: devopscard,
      description:
        "At Captiv8 Integrated Services, LLC (CIS), we integrate development, security, and operations into a seamless and efficient workflow designed to accelerate innovation, ensure robust security, and optimize operational performance. Our Dev/Sec/Ops approach brings together agile development practices with comprehensive security and operational strategies, enabling your organization to deliver high-quality, secure software at speed.\n\nwe understand that to stay competitive, businesses must deliver high-quality, secure software faster than ever before. Our Dev/Sec/Ops approach helps you achieve this by breaking down traditional silos and creating a collaborative environment where development, security, and operations work together seamlessly. \nBy integrating security early in the development process and automating key workflows, we help you deliver software that is both fast and secure. Our expert team will work with you to design, implement, and optimize a Dev/Sec/Ops strategy that accelerates your time to market while maintaining the highest standards of security and operational excellence. \n\n Partner with CIS for a transformative approach to Dev/Sec/Ops that drives innovation, enhances security, and optimizes performance. ",
    },
  ];

  return (
    <div className="flex justify-center my-20 mob:my-10">
      <div
        className="w-full max-w-[1251px] mob:px-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex flex-col flex-wrap justify-center tab:gap-8 mt-6 items-center">
          <div className="w-full max-w-[1350px] rounded-[4px] p-[20px] mob:p-0 flex flex-wrap items-center justify-center mob:justify-start">
            {buttons.map((label, index) => (
              <div key={index} className="">
                <button
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full rounded-[4px] h-[57px] px-5 max-w-[397px] text-[16px] mob:text-[15px] text-[#22282F] font-bold font-inter flex justify-start items-center mb-6 mob:mb-2 text-start
            ${selectedIndex === index ? "bg-[#008F9130]/20" : " "}
          `}
                >
                  {
                    <div className="w-full flex items-center justify-center mob:gap-[10px] mob:justify-start">
                      <Image className="" src={label.icon} alt={label.title} />
                      <Text className="ml-3 mob:ml-0 font-bold text-[16px] text-center mob:text-left">
                        {label.title}
                      </Text>
                    </div>
                  }
                </button>

                {/* Conditionally render content below the button in mobile view */}
                <div className="mob:block hidden">
                  {selectedIndex === index && (
                    <div className="mt-2 p-4 mb-4 rounded-[4px] bg-[#2A323A] ">
                      <Image
                        src={
                          selectedIndex !== null
                            ? content[selectedIndex].image
                            : content[0].image
                        }
                        alt="Image"
                        className="w-full h-full "
                      />
                      <Text
                        as="h1"
                        className="mob:text-[25px] mob:leading-[33px] text-center font-bold mob:text-white"
                      >
                        {content[index].title}
                      </Text>
                      <Text className="mt-2 text-center mob:text-white mob:text-left">
                        {selectedIndex !== null
                          ? content[selectedIndex].description
                              .split("\n")
                              .map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}
                                  <br />
                                </React.Fragment>
                              ))
                          : content[0].description
                              .split("\n")
                              .map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}
                                  <br />
                                </React.Fragment>
                              ))}
                      </Text>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* content  */}
          <div className="w-full flex items-center justify-center mob:hidden bg-[#FFFFFF] box-shadow-services py-[45px] pr-[45px] mt-[52px] rounded-[12px] mb-[70px]">
            <Image
              src={
                selectedIndex !== null
                  ? content[selectedIndex].image
                  : content[0].image
              }
              alt="Image"
              className="w-full h-full max-w-[580px] min-h-[455px]"
            />
            <div>
              <Text
                as="h1"
                className="text-[48px] text-[#002A2B] mob:text-[30px] mob:leading-[40px] mob:text-center leading-[59.4px]"
              >
                {selectedIndex !== null
                  ? content[selectedIndex].title
                  : content[0].title}
              </Text>
              <Text className="mt-3 text-[#22282F]/80 text-[16px] font-inter mob:mt-2 mob:text-center">
                {selectedIndex !== null
                  ? content[selectedIndex].description
                      .split("\n")
                      .map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))
                  : content[0].description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
