import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

type ComponentAs = "h1" | "h2";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: ComponentAs;
  onClick?: React.MouseEventHandler<HTMLHeadingElement>; 
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onClick } = props;

    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "font-inter text-[64px]  font-extrabold leading-[76.8px] text-white mob:text-[40px] mob:leading-[50px]",
            className,
          )}
          onClick={onClick}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-inter text-[48px] mob:text-[40px] font-extrabold leading-[52.8px] text-[#002A2B]",
            className,
          )}
          onClick={onClick}
        >
          {children}
        </h2>
      );
    }

    return (
      <p
        ref={ref}
        className={cn("font-inter text-[16px] font-normal leading-[22.4px] text-[#22282F]", className)}
        onClick={onClick}
      >
        {children}
      </p>
    );
  },
);

Text.displayName = "Text";

export default Text;
