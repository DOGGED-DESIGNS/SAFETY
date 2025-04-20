"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
// import Alarm from "../../public/san/firesafetysan.svg";
// app/page.tsx
// import { svgIcons } from "@/components/svgs/index"
import {
  Alarm,
  Detection,
  Firesafety,
  Ppe,
  Risk,
  Servicing,
  Sprinkler,
  Supression,
} from "./svgs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Maxwrapper from "./Maxwrapper";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <Maxwrapper newClass=" bg-gray-50 px-14 py-[100px]">
        <div className=" ">
          <h1 className=" h3 capitalize  text-slate-900  text-center ">
            Browse our Top service Categories
          </h1>
          {/* this is the array */}

          <div className="  mt-[60px] ">
            <Carousel
              opts={{
                align: "center",
              }}
              className="w-full  relative  h-full m-auto   max-w-screen-xl  "
            >
              <CarouselContent>
                {/* beginning */}
                <CarouselItem className=" min-h-[100px] md:basis-1/2 lg:basis-1/4 ">
                  <Link
                    href={"#"}
                    className=" block cursor-pointer transition-all duration-300 group py-10 px-3 h-full rounded-md border-2 hover:bg-safeDark  bg-safeWhite border-safeAccent "
                  >
                    <Supression className=" select-none transition-all duration-300 mx-auto  text-safeAccent   h-12 w-12 group-hover:text-safeWhite   fill-current " />
                    <h1 className=" p mt-5 group-hover:text-white text-safeDark font-medium  transition-all selection: duration-300 text-center ">
                      Automatic Fire Supression
                    </h1>
                  </Link>
                </CarouselItem>
                {/* beginning */}
                <CarouselItem className=" min-h-[100px] md:basis-1/2 lg:basis-1/4 ">
                  <Link
                    href={"/riskquestions"}
                    className=" block select-none cursor-pointer transition-all duration-300 group py-10 px-3 h-full rounded-md border-2 hover:bg-safeDark  bg-safeWhite border-safeAccent "
                  >
                    <Risk className=" select-none transition-all duration-300 mx-auto  text-safeAccent   h-12 w-12 group-hover:text-safeWhite   fill-current " />
                    <h1 className=" select-none p mt-5 group-hover:text-white text-safeDark font-medium  transition-all duration-300 text-center ">
                      Risk Assesment
                    </h1>
                  </Link>
                </CarouselItem>
                {/* ending  */}
                {/* beginning */}
                <CarouselItem className=" min-h-[100px] md:basis-1/2 lg:basis-1/4 ">
                  <div className=" cursor-pointer transition-all duration-300 group py-10 px-3 h-full rounded-md border-2 hover:bg-safeDark  bg-safeWhite border-safeAccent ">
                    <Servicing className=" transition-all duration-300 mx-auto  text-safeAccent   h-12 w-12 group-hover:text-safeWhite   fill-current " />
                    <h1 className=" p mt-5 group-hover:text-white text-safeDark font-medium  transition-all duration-300 text-center ">
                      Servicing & mentainance
                    </h1>
                  </div>
                </CarouselItem>
                <CarouselItem className=" min-h-[100px] md:basis-1/2 lg:basis-1/4 ">
                  <div className=" cursor-pointer transition-all duration-300 group py-10 px-3 h-full rounded-md border-2 hover:bg-safeDark  bg-safeWhite border-safeAccent ">
                    <Firesafety className=" select-none transition-all duration-300 mx-auto  text-safeAccent   h-12 w-12 group-hover:text-safeWhite   fill-current " />
                    <h1 className=" select-none p mt-5 group-hover:text-white text-safeDark font-medium  transition-all duration-300 text-center ">
                      Fire Safety
                    </h1>
                  </div>
                </CarouselItem>
                <CarouselItem className=" min-h-[100px] md:basis-1/2 lg:basis-1/4 ">
                  <div className=" cursor-pointer transition-all duration-300 group py-10 px-3 h-full rounded-md border-2 hover:bg-safeDark  bg-safeWhite border-safeAccent ">
                    <Sprinkler className=" transition-all duration-300 mx-auto  text-safeAccent   h-12 w-12 group-hover:text-safeWhite   fill-current " />
                    <h1 className=" p mt-5 group-hover:text-white text-safeDark font-medium  transition-all duration-300 text-center ">
                      Sprinkler
                    </h1>
                  </div>
                </CarouselItem>
                <CarouselItem className=" min-h-[100px] md:basis-1/2 lg:basis-1/4 ">
                  <div className=" cursor-pointer transition-all duration-300 group py-10 px-3 h-full rounded-md border-2 hover:bg-safeDark  bg-safeWhite border-safeAccent ">
                    <Ppe className=" transition-all duration-300 mx-auto  text-safeAccent   h-12 w-12 group-hover:text-safeWhite   fill-current " />
                    <h1 className=" p mt-5 group-hover:text-white text-safeDark font-medium  transition-all duration-300 text-center ">
                      PPE
                    </h1>
                  </div>
                </CarouselItem>
                <CarouselItem className=" min-h-[100px] md:basis-1/2 lg:basis-1/4 ">
                  <div className=" cursor-pointer transition-all duration-300 group py-10 px-3 h-full rounded-md border-2 hover:bg-safeDark  bg-safeWhite border-safeAccent ">
                    <Detection className=" transition-all duration-300 mx-auto  text-safeAccent   h-12 w-12 group-hover:text-safeWhite   fill-current " />
                    <h1 className=" p mt-5 group-hover:text-white text-safeDark font-medium  transition-all duration-300 text-center ">
                      Fire Detection
                    </h1>
                  </div>
                </CarouselItem>
                <CarouselItem className=" min-h-[100px] md:basis-1/2 lg:basis-1/4 ">
                  <div className=" cursor-pointer transition-all duration-300 group py-10 px-3 h-full rounded-md border-2 hover:bg-safeDark  bg-safeWhite border-safeAccent ">
                    <Alarm className=" transition-all duration-300 mx-auto  text-safeAccent   h-12 w-12 group-hover:text-safeWhite   fill-current " />
                    <h1 className=" p mt-5 group-hover:text-white text-safeDark font-medium  transition-all duration-300 text-center ">
                      Alarm System
                    </h1>
                  </div>
                </CarouselItem>
                {/* ending  */}
                {/* beginning */}

                {/* ending  */}
                {/* beginning */}

                {/* ending  */}
                {/* beginning */}

                {/* ending  */}
                {/* beginning */}

                {/* ending  */}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </Maxwrapper>
    </>
  );
}
