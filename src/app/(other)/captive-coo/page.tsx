import React from "react";

import ReusableHero from "@/components/CeoAndCooReusable/Hero";
import AboutReusable from "@/components/CeoAndCooReusable/About";

import reightside from "@/public/images/leaders/CEO Image.png";

const CaptiveCoo = () => {
  return (
    <>
      <ReusableHero
        name="Mr. Jason Moore"
        position="Captiv8 COO"
        image={reightside}
      />
      <AboutReusable
        description="Jason Moore is a dynamic entrepreneur, seasoned Information Technology Executive, and Certified Program & Project Manager Professional with over 25 years of distinguished experience. Holding dual bachelor's degrees in Economics and Computer Information Systems, as well as master's degrees in Cybersecurity and Business Administration from the University of Maryland, Jason has built an impressive career at the intersection of technology and leadership. His expertise spans the design and implementation of IT and cybersecurity policies, enterprise information systems, and telecommunications solutions, effectively bridging the gap between business needs and technological innovation. <br /><br /> Jason has established himself as a trusted advisor and leader within the Department of Defense, Intelligence Community, and civilian federal government sectors. His portfolio includes collaborations with esteemed organizations such as the Central Intelligence Agency, National Security Agency, and various branches of the military, including Army Intelligence (INSCOM). Jason has also contributed to mission-critical initiatives for agencies like the Department of Homeland Security, Federal Aviation Administration, and Department of Veterans Affairs. These engagements have showcased his ability to manage complex, high-stakes projects that deliver transformative results. <br /><br /> Throughout his career, Jason has successfully overseen more than 100 high-visibility projects, with budgets ranging from $50,000 to $10 million. He is recognized for his strategic approach to problem-solving, identifying risks, and implementing innovative solutions that drive long-term impact and cost efficiency. His forward-thinking methodologies and continuous pursuit of industry-leading certifications have enabled him to forecast trends, mitigate risks, and position organizations for sustainable success. <br /><br /> Jason's commitment to excellence and innovation is matched by his passion for fostering collaboration between technology and business. Whether developing enterprise-wide IT strategies or crafting cybersecurity frameworks, Jason consistently delivers value to his clients and stakeholders. His proven track record of leadership and results underscores his reputation as a visionary executive who thrives in challenging and dynamic environments."
        image={reightside}
      />
    </>
  );
};

export default CaptiveCoo;
