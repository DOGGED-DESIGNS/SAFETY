"use client";
import React, { useState } from "react";
import Maxwrapper from "./Maxwrapper";
import { motion } from "framer";
import { Use, Whatsapp } from "./svgs/index";
import {
  CircleUser,
  GoalIcon,
  MenuIcon,
  MessageCircle,
  Phone,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";

export default function Navbar() {
  // create a use state for toggle

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="  fixed bg-safePri/85  backdrop-blur-lg z-[1000]  block md:hidden top-0 w-full  lg:hidden  ">
        <Maxwrapper newClass=" relative p-0 sm:p-0 ">
          <div className=" flex items-center md:h-[60px] h-[50px]">
            <Link href={"/"} className=" bg-safeWhite rounded-r-full p-2">
              <span className=" block relative h-[30px] w-[100px] ">
                <Image
                  fill
                  className="object-contain"
                  alt=" logo"
                  src={"/san/logosvg.svg"}
                />
              </span>
            </Link>

            <div className=" pr-3 flex items-center gap-4 ml-auto">
              <Link href={"#"}>
                <Use className=" fill-current text-safeDark h-7 w-7" />
              </Link>
              <motion.a
                onClick={() => {
                  setToggle(!toggle);
                }}
                href={"#"}
                className="  flex flex-col gap-2"
              >
                <motion.span
                  initial={{
                    height: "2.5px",
                    display: "block",
                    width: "24px",
                    rotate: 0,
                  }}
                  animate={
                    toggle
                      ? {
                          y: "410%",
                          rotate: 45,
                        }
                      : {
                          height: "2.5px",
                          display: "block",
                          width: "24px",
                          rotate: 0,
                        }
                  }
                  className="h-[2.5px] shrink-0   block w-6 bg-safeDark "
                />
                <motion.span
                  initial={{
                    height: "2.5px",
                    display: "block",
                    width: "24px",
                    rotate: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0,
                  }}
                  animate={
                    toggle
                      ? {
                          opacity: 0,
                        }
                      : {
                          opacity: 1,
                        }
                  }
                  className=" shrink-0 h-[2.5px]   block w-6 bg-safeDark "
                />
                <motion.span
                  initial={{
                    height: "2.5px",
                    display: "block",
                    width: "24px",
                    rotate: 0,
                  }}
                  animate={
                    toggle
                      ? {
                          y: "-410%",
                          rotate: -45,
                        }
                      : {
                          height: "2.5px",
                          display: "block",
                          width: "24px",
                          rotate: 0,
                        }
                  }
                  className="h-[2.5px] shrink-0  block w-6 bg-safeDark "
                />
              </motion.a>
            </div>
          </div>

          {/* welcome to the max-width wrapper */}
          <motion.div
            initial={{
              x: "100%",
            }}
            animate={
              toggle
                ? {
                    x: "0%",
                  }
                : {
                    x: "100%",
                  }
            }
            className=" z-[1000] bg-safePri h-lvh w-[75%] top-full right-0 absolute"
          >
            <Maxwrapper newClass="">
              <div className="">
                <Link
                  href={"#"}
                  className={buttonVariants({
                    className:
                      " h-12 mt-10 w-full transition-all ease-in-out duration-300 group bg-transparent hover:bg-safeDark text-safeLight hover:text-safeWhite hover:border-safeDark border-2 border-safeLight  gap-2 ml-auto p font-bold mr-5 items-center block",
                    size: "lg",
                  })}
                >
                  <Whatsapp className=" duration-300 fill-current   transition-all ease-in-out group-hover:text-safeWhite   font-extrabold text-safeLight" />{" "}
                  +234 907 617 6485
                  {/* <p className=" p font-bold text-safeDark">0976176485</p> */}
                </Link>
                <Button className=" text-safeWhite font-bold p hover:text-safeWhite bg-safeLight hover:bg-safeDark mt-5 h-12 w-full">
                  {" "}
                  <GoalIcon /> SignUp with Google{" "}
                </Button>
                <div className=" flex flex-col space-y-3 mt-4">
                  <Link
                    className=" inline-block mr-auto hover:text-safeLight capitalize h4 font-medium"
                    href={"#"}
                  >
                    {" "}
                    Home{" "}
                  </Link>
                  <Link
                    className=" hover:text-safeLight capitalize h4 font-medium"
                    href={"#"}
                  >
                    {" "}
                    Contact
                  </Link>
                  <Link
                    className="hover:text-safeLight h4 font-medium"
                    href={"#"}
                  >
                    {" "}
                    Inquiries
                  </Link>
                </div>
              </div>
            </Maxwrapper>
          </motion.div>
        </Maxwrapper>

        {/* this is the div that moves */}
      </nav>

      <nav className=" sticky bg-safePri/85  backdrop-blur-lg z-[1000]  hidden md:block top-0 w-full  lg:block">
        <div className=" flex items-center md:h-[70px] h-[50px]">
          <Link
            href={"/"}
            className=" z-[1000] relative bg-safeWhite rounded-r-full p-2 "
          >
            <span className=" block relative h-[50px] w-[200px] ">
              <Image
                fill
                className="object-contain"
                alt=" logo"
                src={"/san/logosvg.svg"}
              />
            </span>
          </Link>

          <div className=" items-center ml-auto mr-6 flex gap-4">
            <div>
              <Link
                href={"#"}
                className={buttonVariants({
                  className:
                    " h-12 transition-all ease-in-out duration-300 group bg-transparent hover:bg-safeDark text-safeLight hover:text-safeWhite hover:border-safeDark border-2 border-safeLight  gap-2 ml-auto p font-bold mr-5 items-center block",
                  size: "lg",
                })}
              >
                <Whatsapp className=" duration-300 fill-current   transition-all ease-in-out group-hover:text-safeWhite   font-extrabold text-safeLight" />{" "}
                +234 907 617 6485
                {/* <p className=" p font-bold text-safeDark">0976176485</p> */}
              </Link>
            </div>

            <Button className=" p font-bold bg-safeLight hover:bg-safeDark h-12">
              SignUp with Google
            </Button>
            <Use className=" fill-current text-safeLight  h-[48px] w-[48px]" />
          </div>
        </div>
      </nav>
    </>

    // big nav
  );
}
// translate-y-[300%] rotate-45
// opacity-0
// -translate-y-[300%] -rotate-45
