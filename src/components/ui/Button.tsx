import React from "react";

import { cn } from "@/lib/utils";
interface ButtonProps {
  text?: string;
  children?: React.ReactNode; // Add children prop
  className?: string;
  type?: "button" | "submit" | "reset"; 
  loading?: boolean; 
}


const Button: React.FC<ButtonProps> = ({
  text = "Explore Music",
  children,
  className,
  type = "button",
  loading = false,
}) => {
  return (
    <>
      <button
      type={type}
      disabled={loading}
        className={cn(
          "w-full flex justify-center items-center rounded-[44.2px]  bg-[#002A2B] text-[16px] font-medium leading-[19.36px] text-[#FFFFFF] h-[49px] tracking-[1px] max-w-[193px]",
          className
        )}
      >
        {children || text} {/* Use children if available, otherwise use text */}
      </button>
    </>
  );
};

export default Button;
