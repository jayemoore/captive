import React from "react";

import Text from "@/components/ui/Text";

const Mission = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mt-[75px] mb-[93px] mob:mt-[60px] mob:mb-12 relative px-5">
      <div className="w-full h-full max-w-[967px] flex justify-center items-center">
        <div className="w-full h-full text-center">
          <Text as="h1" className="text-gray-900">
            Our Mission
          </Text>
          <Text className="mt-[12px] text-[18px] mb-[20px] text-gray-500">
            To empower organizations to leverage the power of technology to
            drive transformative change for sustainability, scalability,
            interoperability, and security.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Mission;
