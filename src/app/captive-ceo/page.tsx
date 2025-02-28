import React from "react";

import ReusableHero from "@/components/CeoAndCooReusable/Hero";
import AboutReusable from "@/components/CeoAndCooReusable/About";

import reightside from "@/public/images/leaders/CEO Image.png";

const CaptiveCeo = () => {
  return (
    <>
      <ReusableHero
        name="Mr. Andre Ray"
        position="Captiv8 CEO"
        image={reightside}
      />
      <AboutReusable
        description="Captiv8 CEO, Mr. Andre Ray, Andre Ray is a distinguished senior executive and four-year letterman from Virginia Tech, where he earned a Bachelor of Science in Housing, Design Management, followed by a Master of Arts in Urban Affairs & Planning and a Master of Science in Information Technology. With a robust educational foundation and a wealth of experience, Andre has established himself as a leader in developing and executing strategic initiatives that drive business improvement and foster organizational change. <br /><br /> As the managing partner of Captiv8 Integrated Services, Andre combines his extensive knowledge and skills with a deep commitment to solutions and innovation. He is known for his relentless work ethic and ability to deliver results-oriented solutions tailored to meet the diverse needs of his clients. His leadership style emphasizes collaboration and innovation, empowering teams to embrace change and culture transformation effectively. <br /><br /> Andre's career is marked by a strong track record in both strategic and operational roles, where he has successfully navigated complex challenges and driven impactful results. His expertise in change management has enabled organizations to adapt and thrive in dynamic environments, while his focus on culture change has fostered inclusive and resilient workplaces. <br /><br /> Through his work at Captiv8 Integrated Services, Andre continues to champion business development and improvement, leveraging his unique blend of academic prowess and practical experience to create sustainable solutions that benefit both clients and communities. With his passion for excellence and commitment to service, Andre Ray is a driving force in the business landscape, dedicated to making a positive impact in every endeavor he undertakes."
        image={reightside}
      />
    </>
  );
};

export default CaptiveCeo;
