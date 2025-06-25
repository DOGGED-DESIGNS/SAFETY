"use client";
import {
  Award,
  AwardIcon,
  BadgeCheck,
  CircleCheck,
  MarsStroke,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import Maxwrapper from "./Maxwrapper";
import Image from "next/image";
import { Badge, Shield } from "./svgs";

export default function Choose() {
  return (
    <>
      {/* this is the choose sction */}

      <Maxwrapper newClass=" bg-gray-100 lg:px-6 md:px-6 px-10 py-[100px]">
        <div className=" grid-cols-1 gap-10 grid md:grid-cols-2 lg:grid-cols-2">
          <div>
            <h2 className="h2 capitalize font-bold ">
              why choose Sanagos Safety as your safety technician
            </h2>

            <div className=" flex flex-col space-y-10  mt-10">
              <div>
                <div>
                  <div className=" items-center flex gap-2">
                    <Shield className=" fill-current shrink-0 h-7 w-7 font-bold fill text-safeAccent " />{" "}
                    <p className="p  font-semibold ">Guaranteed</p>
                  </div>
                  <h2 className="  p ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus enim sequi nisi minima optio dolores aliquid quae
                    beatae distinctio expedita!
                  </h2>
                </div>
              </div>

              <div>
                <div>
                  <div className=" items-center flex gap-2">
                    <Badge className=" fill-current shrink-0 h-7 w-7 font-bold fill text-safeAccent " />{" "}
                    <p className="p  font-semibold ">Reliability</p>
                  </div>
                  <h2 className="  p ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima ea sint animi nostrum?
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className="  w-full  ">
              <Image
                alt="Hero"
                width={0}
                height={0}
                sizes="100vw" // still needed to help the browser pick the right image
                className="  select-none w-full h-auto"
                src={"/chooselatest.png"}
              />
            </div>
          </div>
        </div>
      </Maxwrapper>
    </>
  );
}
