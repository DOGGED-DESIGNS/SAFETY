"use client";
import React, { useState } from "react";
import Maxwrapper from "./Maxwrapper";
import { motion } from "framer";
import { CircleUser, GoalIcon, MenuIcon, User } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";

export default function Navbar() {
  // create a use state for toggle

  const [toggle, setToggle] = useState(false);
  return (
    <nav className="  fixed bg-safePri/85  backdrop-blur-lg z-[1000]  block md:hidden top-0 w-full  lg:hidden  ">
      <Maxwrapper newClass=" relative p-0 sm:p-0 ">
        <div className=" flex items-center md:h-[60px] h-[50px]">
          <div className=" bg-safeWhite rounded-r-full p-2">
            <div className=" relative h-[30px] w-[100px] ">
              <Image
                fill
                className="object-contain"
                alt=" logo"
                src={"/san/logosvg.svg"}
              />
            </div>
          </div>

          <div className=" pr-3 flex items-center gap-4 ml-auto">
            <Link href={"#"}>
              <CircleUser className=" text-safeDark h-7 w-7" />
            </Link>
            <motion.a
              onClick={() => {
                setToggle(!toggle);
              }}
              href={"#"}
              className=" flex flex-col gap-2"
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
                className="h-[2.5px] shrink-0   block w-6 bg-slate-900 "
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
                className=" shrink-0 h-[2.5px]   block w-6 bg-slate-900 "
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
                className="h-[2.5px] shrink-0  block w-6 bg-slate-900 "
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
  );
}
// translate-y-[300%] rotate-45
// opacity-0
// -translate-y-[300%] -rotate-45
