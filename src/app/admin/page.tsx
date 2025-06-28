"use client";
import Maxwrapper from "@/components/Maxwrapper";
import { Firesafety } from "@/components/svgs";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Admin",
// };

export default function page() {
  return (
    <>
      <Maxwrapper newClass=" ">
        <div className="  auto-rows-auto grid  grid-cols-1  md:grid-cols-3 gap-10  my-14 ">
          <Link
            href={"#"}
            className="hover:bg-safeDark group transition-all duration-700 ease-in-out border-2 border-safeAccent rounded-xl p-4"
          >
            <Firesafety className="m-auto text-safeAccent w-20 h-20 fill-current" />

            <h1 className="text-safeDark group-hover:text-safeWhite transition-all ease-in-out duration-700 text-center mt-15 h1">
              {" "}
              6{" "}
            </h1>
            <p className=" text-center h4 text-safeAccent font-medium  ">
              quotation sent
            </p>
          </Link>
          <Link
            href={"#"}
            className="hover:bg-safeDark group transition-all duration-700 ease-in-out border-2 border-safeAccent rounded-xl p-4"
          >
            <Firesafety className="m-auto text-safeAccent w-20 h-20 fill-current" />

            <h1 className="text-safeDark group-hover:text-safeWhite transition-all ease-in-out duration-700 text-center mt-15 h1">
              {" "}
              6{" "}
            </h1>
            <p className=" text-center h4 text-safeAccent font-medium  ">
              quotation sent
            </p>
          </Link>
          <Link
            href={"#"}
            className="hover:bg-safeDark group transition-all duration-700 ease-in-out border-2 border-safeAccent rounded-xl p-4"
          >
            <Firesafety className="m-auto text-safeAccent w-20 h-20 fill-current" />

            <h1 className="text-safeDark group-hover:text-safeWhite transition-all ease-in-out duration-700 text-center mt-15 h1">
              {" "}
              6{" "}
            </h1>
            <p className=" text-center h4 text-safeAccent font-medium  ">
              quotation sent
            </p>
          </Link>
          <Link
            href={"#"}
            className="hover:bg-safeDark group transition-all duration-700 ease-in-out border-2 border-safeAccent rounded-xl p-4"
          >
            <Firesafety className="m-auto text-safeAccent w-20 h-20 fill-current" />

            <h1 className="text-safeDark group-hover:text-safeWhite transition-all ease-in-out duration-700 text-center mt-15 h1">
              {" "}
              6{" "}
            </h1>
            <p className=" text-center h4 text-safeAccent font-medium  ">
              quotation sent
            </p>
          </Link>
        </div>
      </Maxwrapper>
    </>
  );
}
