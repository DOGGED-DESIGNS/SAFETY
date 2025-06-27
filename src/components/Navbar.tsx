"use client";
import React, { useState } from "react";
import Maxwrapper from "./Maxwrapper";
import { motion } from "framer";
import { Google, Googlemain, Use, Whatsapp } from "./svgs/index";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import { Size } from "framer/render/types/Size.js";
import { cn } from "@/lib/utils";

export default function Navbar() {
  // create a use state for toggle

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className=" sticky z-30    overflow-hidden      block md:hidden top-0 w-full  lg:hidden  ">
        <Maxwrapper newClass="   p-0 sm:p-0 ">
          <div className="  bg-safeWhite flex items-center md:h-[60px] h-[50px]">
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
                <Use className=" fill-current text-safeAccent h-7 w-7" />
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

          <div
            onClick={() => setToggle(false)}
            className={cn(" bg-transparent hidden ", {
              " bg-slate-600/20 block backdrop-blur-lg ": toggle,
            })}
          >
            <motion.div
              initial={{
                x: "-100%",
              }}
              animate={
                toggle
                  ? {
                      x: "0%",
                    }
                  : {
                      x: "-100%",
                    }
              }
              className="    bg-safePri h-lvh w-[75%] "
            >
              <Maxwrapper newClass="">
                <div className="">
                  <Link
                    href={"#"}
                    className={buttonVariants({
                      className:
                        " h-12 mt-10 w-full transition-all ease-in-out duration-300 group bg-transparent hover:bg-transparent text-zinc-900 hover:text-safeAccent hover:border-safeAccent border-2 border-zinc-900  gap-2 ml-auto p font-bold mr-5 items-center block",
                      size: "lg",
                    })}
                  >
                    <Whatsapp className=" duration-300 fill-current   transition-all ease-in-out group-hover:text-safeAccent   font-extrabold text-zinc-900" />{" "}
                    +234 907 617 6485
                  </Link>
                  <Link
                    href={"/login"}
                    onClick={() => {
                      setToggle(false);
                    }}
                    className={buttonVariants({
                      size: "lg",
                      className:
                        " text-safeWhite font-bold p hover:text-safeWhite bg-safeAccent hover:bg-safeAccent/80 mt-5 h-12 w-full",
                    })}
                  >
                    {" "}
                    Login
                  </Link>
                  <div className=" flex flex-col space-y-3 mt-4">
                    <Link
                      className=" inline-block mr-auto hover:text-safeAccent capitalize h4 font-medium"
                      href={"/"}
                      onClick={() => setToggle(false)}
                    >
                      {" "}
                      About
                    </Link>
                    <Link
                      className=" hover:text-safeAccent mr-auto capitalize h4 font-medium"
                      href={"#"}
                      onClick={() => setToggle(false)}
                    >
                      {" "}
                      Services
                    </Link>
                    <Link
                      className=" mr-auto hover:text-safeAccent capitalize h4 font-medium"
                      href={"#"}
                      onClick={() => setToggle(false)}
                    >
                      {" "}
                      Contact
                    </Link>
                    <Link
                      className="mr-autohover:text-safeAccent h4 font-medium"
                      href={"/blog"}
                      onClick={() => setToggle(false)}
                    >
                      blog
                    </Link>
                  </div>
                </div>
              </Maxwrapper>
            </motion.div>
          </div>
        </Maxwrapper>
      </nav>

      {/* backdrop-blur-lg */}

      {/* bigscreen */}

      <nav className=" sticky z-30   hidden md:block top-0 w-full  lg:block">
        <div className=" mx-auto max-w-screen-2xl bg-safeWhite  flex items-center md:h-[70px] h-[50px]">
          <Link
            href={"/"}
            className="  relative bg-safeWhite rounded-r-full p-2 "
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

          <div className=" flex  justify-center flex-1    ">
            <Link className="p mx-7  font-medium capitalize" href={"#"}>
              About
            </Link>
            <Link className="p mx-7  font-medium capitalize" href={"#"}>
              Services
            </Link>
            <Link className="p mx-7  font-medium capitalize" href={"#"}>
              Contact
            </Link>
            <Link className="p mx-7  font-medium capitalize" href={"/blog"}>
              blog
            </Link>
          </div>

          <div className="    items-center ml-auto mr-6 flex gap-4">
            <Link
              href={"/login"}
              className={buttonVariants({
                size: "lg",
                className:
                  "  p font-bold bg-safeAccent hover:bg-safeAccent/80 ",
              })}
              // className=" p font-bold bg-safeAccent hover:bg-safeAccent/80 "
            >
              Login
            </Link>
            <div>
              <Link
                href={"#"}
                className={buttonVariants({
                  className:
                    "  transition-all ease-in-out duration-300 group bg-transparent  text-zinc-900 hover:bg-transparent hover:border-safeAccent hover:text-safeAccent  border-2 border-zinc-900  gap-2 ml-auto p font-bold  items-center block",
                  size: "lg",
                })}
              >
                <Whatsapp className="  group-hover:text-safeAccent duration-300 fill-current   transition-all ease-in-out    font-extrabold text-zinc-900" />{" "}
                +234 907 617 6485
                {/* <p className=" p font-bold text-safeDark">0976176485</p> */}
              </Link>
            </div>

            <Use className=" fill-current text-safeAccent  h-[38px] w-[38px]" />
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
