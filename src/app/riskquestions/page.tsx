"use client";
import Maxwrapper from "@/components/Maxwrapper";
import { Risk } from "../../components/svgs";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <Maxwrapper newClass=" max-w-screen-sm my-[100px]">
      <div className="  flex flex-col space-y-5">
        <Link
          href={"#"}
          className=" items-center flex flex-row gap-3 border-2 border-safeLight rounded-xl p-2 "
        >
          <Risk className="  text-safeLight fill-current h-10 w-10" />
          <h2 className=" m-0 flex-1 p font-bold  text-safeLight ">
            {" "}
            i want to service for an organization{" "}
          </h2>
          <ChevronRight className=" text-safeDark" />
        </Link>
        <div className=" items-center flex flex-row gap-2 border-2 border-slate-600 rounded-xl p-3 ">
          <h2 className=" m-0 flex-1 h4 ">
            {" "}
            i want to service for an organization{" "}
          </h2>
          <ChevronRight className=" text-safeDark" />
        </div>
      </div>
      {/* this is the button section */}
      <div className=" flex border mt-[60px]">
        <Button className=" p font-bold ml-auto h-14"> Proceed </Button>
      </div>
    </Maxwrapper>
  );
}
