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
        " lg:px-8 md:px-4 sm:px-2 px-2 max-w-screen-2xl  m-auto  ",
        newClass
      )}
    >
      {children}
    </div>
  );
}
