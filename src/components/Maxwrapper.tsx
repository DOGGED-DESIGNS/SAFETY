import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function Maxwrapper({
  children,
  newClass,
}: {
  children: ReactNode;
  newClass?: string;
}) {
  return (
    <div
      className={cn(
        " lg:px-10 md:px-8 sm:px-4 px-4 max-w-screen-2xl  m-auto  ",
        newClass
      )}
    >
      {children}
    </div>
  );
}
