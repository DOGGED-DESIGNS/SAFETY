"use client";
import Maxwrapper from "@/components/Maxwrapper";
import { Risk } from "../../components/svgs";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function page() {
  return (
    <Maxwrapper newClass=" bg-safeWhite max-w-screen-2xl py-[100px]">
      <ScrollArea className="relative max-w-screen-md m-auto overflow-auto py-3   h-80 px-3 ">
        <div
          aria-hidden="true"
          className="absolute z-10 inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/90 pointer-events-none"
        />
        <div className="flex flex-col   space-y-5">
          <Link
            href={"#"}
            className=" group hover:bg-safeDark  items-center  flex flex-row gap-3 border-2 border-safeDark rounded-xl p-2 "
          >
            <Risk className=" group-hover:text-safeWhite text-safeDark fill-current h-6 w-6" />
            <h2 className="group-hover:text-white m-0 flex-1 p font-bold  text-safeDark ">
              {" "}
              Conducting of commercial fire audit
            </h2>
            <ChevronRight className="group-hover:text-safeWhite text-safeDark" />
          </Link>
          <Link
            href={"#"}
            className=" group hover:bg-safeDark  items-center flex flex-row gap-3 border-2 border-safeDark rounded-xl p-2 "
          >
            <Risk className=" group-hover:text-safeWhite text-safeDark fill-current h-6 w-6" />
            <h2 className="group-hover:text-white m-0 flex-1 p font-bold  text-safeDark ">
              {" "}
              Performing of industrial fire risk assessment
            </h2>
            <ChevronRight className="group-hover:text-safeWhite text-safeDark" />
          </Link>
          <Link
            href={"#"}
            className=" group hover:bg-safeDark  items-center flex flex-row gap-3 border-2 border-safeDark rounded-xl p-2 "
          >
            <Risk className=" group-hover:text-safeWhite text-safeDark fill-current h-6 w-6" />
            <h2 className="group-hover:text-white m-0 flex-1 p font-bold  text-safeDark ">
              {" "}
              Conducting of home fire safety evaluation
            </h2>
            <ChevronRight className="group-hover:text-safeWhite text-safeDark" />
          </Link>
          <Link
            href={"#"}
            className=" group hover:bg-safeDark  items-center flex flex-row gap-3 border-2 border-safeDark rounded-xl p-2 "
          >
            <Risk className=" group-hover:text-safeWhite text-safeDark fill-current h-6 w-6" />
            <h2 className="group-hover:text-white m-0 flex-1 p font-bold  text-safeDark ">
              {" "}
              Providing of fire safety training
            </h2>
            <ChevronRight className="group-hover:text-safeWhite text-safeDark" />
          </Link>
          <Link
            href={"#"}
            className=" group hover:bg-safeDark  items-center flex flex-row gap-3 border-2 border-safeDark rounded-xl p-2 "
          >
            <Risk className=" group-hover:text-safeWhite text-safeDark fill-current h-6 w-6" />
            <h2 className="group-hover:text-white m-0 flex-1 p font-bold  text-safeDark ">
              {" "}
              Offering of compliance strategy consultation
            </h2>
            <ChevronRight className="group-hover:text-safeWhite text-safeDark" />
          </Link>
        </div>
      </ScrollArea>
      {/* this is the button section */}
      <div className=" flex max-w-screen-md mx-auto  mt-10">
        <Button className="w-full p font-bold h-12 bg-safeLight hover:bg-safeDark">
          {" "}
          Proceed
          <ChevronRight />
        </Button>
      </div>
    </Maxwrapper>
  );
}
