import { cn } from "@lib/utils";
import React, { JSX } from "react";

function Container({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) {
  return (
    <div
      className={cn([
        "w-[95%] max-w-[1440px] px-4 mx-auto max-sm:w-[90%] max-sm:px-0 ",
        className,
      ])}
    >
      {children}
    </div>
  );
}

export default Container;
