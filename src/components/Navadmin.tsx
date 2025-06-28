"use client";
import React, { useState } from "react";
import Maxwrapper from "./Maxwrapper";
import { motion } from "framer";
import { Google, Googlemain, Use, Whatsapp } from "./svgs/index";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import { Size } from "framer/render/types/Size.js";
import { cn } from "@/lib/utils";

export default function Navbadmin() {
  // create a use state for toggle
  // this is the session tags

  const { data: session, status } = useSession();

  // this is the thing
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
                {session?.user?.image ? (
                  <div className=" relative rounded-full overflow-hidden h-7 w-7">
                    <Image
                      src={session.user.image ?? ""}
                      fill
                      className=" h-full w-full object-cover"
                      alt="img"
                    />
                  </div>
                ) : (
                  <Use className=" fill-current text-safeAccent h-7 w-7" />
                )}
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
                  {session?.user?.email ? (
                    <Link
                      href={"/login"}
                      onClick={() => {
                        signOut({ callbackUrl: "/" });
                        setToggle(false);
                      }}
                      className={buttonVariants({
                        size: "lg",
                        className:
                          " text-safeWhite font-bold p hover:text-safeWhite bg-safeAccent hover:bg-safeAccent/80 mt-5 h-12 w-full",
                      })}
                    >
                      Logout
                    </Link>
                  ) : (
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
                      LogIn
                    </Link>
                  )}

                  <div className=" flex flex-col space-y-3 mt-4">
                    <Link
                      className=" inline-block mr-auto hover:text-safeAccent capitalize h4 font-medium"
                      href={"/admin/makepost"}
                      onClick={() => setToggle(false)}
                    >
                      {" "}
                      Makeposts
                    </Link>
                    <Link
                      className=" hover:text-safeAccent mr-auto capitalize h4 font-medium"
                      href={"admin/seepost"}
                      onClick={() => setToggle(false)}
                    >
                      Seeposts
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
            <Link
              className="p mx-7  font-medium capitalize"
              href={"/admin/seepost"}
            >
              Seeposts
            </Link>
            <Link
              className="p mx-7  font-medium capitalize"
              href={"/admin/makepost"}
            >
              Makeposts
            </Link>
            <Link className="p mx-7  font-medium capitalize" href={"#"}>
              Contact
            </Link>
            <Link className="p mx-7  font-medium capitalize" href={"/blog"}>
              blog
            </Link>
          </div>

          <div className="    items-center ml-auto mr-6 flex gap-4">
            {status === "loading" ? null : session?.user?.email ===
              "uzoechijerry@gmail.com" ? (
              <Link
                href="/admin"
                className={buttonVariants({
                  size: "lg",
                  className: "p font-bold bg-safeAccent hover:bg-safeAccent/80",
                })}
              >
                Admin
              </Link>
            ) : session?.user?.email ? (
              <Link
                href="/login"
                onClick={() => signOut({ callbackUrl: "/" })}
                className={buttonVariants({
                  size: "lg",
                  className: "p font-bold bg-safeAccent hover:bg-safeAccent/80",
                })}
              >
                LougOut
              </Link>
            ) : (
              <Link
                href="/login"
                className={buttonVariants({
                  size: "lg",
                  className: "p font-bold bg-safeAccent hover:bg-safeAccent/80",
                })}
              >
                Login
              </Link>
            )}

            <Link href={"#"}>
              {session?.user?.image ? (
                <div className=" relative rounded-full overflow-hidden h-[38px] w-[38px]">
                  <Image
                    src={session.user.image ?? ""}
                    fill
                    className=" h-full w-full object-cover"
                    alt="img"
                  />
                </div>
              ) : (
                <Use className=" fill-current text-safeAccent  h-[38px] w-[38px]" />
              )}
            </Link>
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
