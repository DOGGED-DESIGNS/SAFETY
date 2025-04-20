import React from "react";
import Maxwrapper from "./Maxwrapper";
import Link from "next/link";
import {
  Facebook,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      <Maxwrapper newClass=" bg-gray-50 py-[60px]">
        <div className=" flex">
          <div className="   m-auto gap-7 flex justify-center flex-wrap space-x-4">
            <Link
              className=" capitalize text-slate-950 hover:text-safeLightest p "
              href={"#"}
            >
              About us
            </Link>
            <Link
              className=" pl-4 border-l-[1px] border-slate-400 capitalize text-slate-950 hover:text-safeLightest p "
              href={"#"}
            >
              Privacy Policies
            </Link>
            <Link
              className=" pl-4 border-l-[1px] border-slate-400 capitalize text-slate-950 hover:text-safeLightest p "
              href={"#"}
            >
              Cookies
            </Link>
            <Link
              className=" pl-4 border-l-[1px] border-slate-400 capitalize text-slate-950 hover:text-safeLightest p "
              href={"#"}
            >
              Contact Us
            </Link>
            <Link
              className=" pl-4 border-l-[1px] border-slate-400 capitalize text-slate-950 hover:text-safeLightest p "
              href={"#"}
            >
              FAQ&apos;s
            </Link>
          </div>
        </div>
        <div className=" flex mx-auto max-w-screen-sm ">
          <div className=" mx-auto gap-5 flex  mt-[30px]">
            <Link
              href={"#"}
              className="  group transition-all duration-200 bg-safeWhite hover:bg-safeDark h-12 w-12 rounded-lg flex justify-center items-center"
            >
              <InstagramIcon className=" transition-all duration-200 h-5 w-5 group-hover:text-safeWhite " />
            </Link>
            <Link
              href={"#"}
              className="  group transition-all duration-200 bg-safeWhite hover:bg-safeDark h-12 w-12 rounded-lg flex justify-center items-center"
            >
              <LinkedinIcon className=" transition-all duration-200 h-5 w-5 group-hover:text-safeWhite " />
            </Link>
            <Link
              href={"#"}
              className="  group transition-all duration-200 bg-safeWhite hover:bg-safeDark h-12 w-12 rounded-lg flex justify-center items-center"
            >
              <FacebookIcon className=" transition-all duration-200 h-5 w-5 group-hover:text-safeWhite " />
            </Link>
          </div>
        </div>

        <div className=" mx-auto mt-[30px] max-w-screen-xl">
          <div className="  flex">
            <div className=" m-auto justify-center gap-2 flex-wrap  flex">
              <div className=" px-3 border-r-[1px] border-slate-950">
                <p className=" p">
                  {" "}
                  Data and Privacy Policy:
                  <Link className=" hover:underline text-safeLight" href={"$"}>
                    {""} info@sanagos.com
                  </Link>
                </p>
              </div>
              <div className=" px-3 border-r-[1px] border-slate-950">
                <p className=" p">
                  {" "}
                  General enquiries:
                  <Link className="hover:underline text-safeLight" href={"$"}>
                    {""} info@sanagos.com
                  </Link>
                </p>
              </div>
              <div className=" px-3 border-r-[1px] border-slate-950">
                <p className=" p">
                  {" "}
                  Acount Mentenance & IT Request:
                  <Link className="hover:underline text-safeLight" href={"$"}>
                    {""} info@sanagos.com
                  </Link>
                </p>
              </div>
              <div className=" px-3 border-r-[1px] border-slate-950">
                <p className=" p">
                  {" "}
                  costomer Service:
                  <Link className="hover:underline text-safeLight" href={"$"}>
                    {""} info@sanagos.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Maxwrapper>
    </>
  );
}
