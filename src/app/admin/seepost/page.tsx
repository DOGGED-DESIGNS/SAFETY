"use client";
import Maxwrapper from "@/components/Maxwrapper";
import { Firesafety } from "@/components/svgs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <Maxwrapper newClass=" my-14">
      <div className=" border border-safeAccent">
        <div className="flex items-center flex-row bg-safeAccent p-5">
          <div>
            <h2 className=" h3 text-safeWhite "> All blogs titles </h2>
          </div>

          <div className="  w-1/4  ml-auto">
            <Input className="bg-white h-12  " type="search" />
          </div>
        </div>

        <div className=" mt-5">
          <ScrollArea className="  overflow-auto border-2  h-80 w-full">
            <div className="flex flex-col space-y-5">
              <div className=" flex  items-center  p-3 border">
                <div>
                  <p className="h4  font-medium line-clamp-1  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, nemo et suscipit cumque ut magni optio, aliquid
                    consectetur facilis fuga minima, laboriosam voluptatem. Eum
                    temporibus corrupti nostrum tempore suscipit iure non
                  </p>{" "}
                </div>
                <Link
                  href={"#"}
                  className=" cursor-pointer group border border-safeAccent bg-transparent hover:bg-safeAccent  p-2"
                >
                  <Firesafety className="fill-current text-safeAccent group-hover:text-safeWhite w-10 h-10" />
                </Link>
              </div>
              <div className=" flex  items-center  p-3 border">
                <div>
                  <p className="h4  font-medium line-clamp-1  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, nemo et suscipit cumque ut magni optio, aliquid
                    consectetur facilis fuga minima, laboriosam voluptatem. Eum
                    temporibus corrupti nostrum tempore suscipit iure non
                  </p>{" "}
                </div>
                <Link
                  href={"#"}
                  className=" cursor-pointer group border border-safeAccent bg-transparent hover:bg-safeAccent  p-2"
                >
                  <Firesafety className="fill-current text-safeAccent group-hover:text-safeWhite w-10 h-10" />
                </Link>
              </div>
              <div className=" flex  items-center  p-3 border">
                <div>
                  <p className="h4  font-medium line-clamp-1  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, nemo et suscipit cumque ut magni optio, aliquid
                    consectetur facilis fuga minima, laboriosam voluptatem. Eum
                    temporibus corrupti nostrum tempore suscipit iure non
                  </p>{" "}
                </div>
                <Link
                  href={"#"}
                  className=" cursor-pointer group border border-safeAccent bg-transparent hover:bg-safeAccent  p-2"
                >
                  <Firesafety className="fill-current text-safeAccent group-hover:text-safeWhite w-10 h-10" />
                </Link>
              </div>
              <div className=" flex  items-center  p-3 border">
                <div>
                  <p className="h4  font-medium line-clamp-1  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, nemo et suscipit cumque ut magni optio, aliquid
                    consectetur facilis fuga minima, laboriosam voluptatem. Eum
                    temporibus corrupti nostrum tempore suscipit iure non
                  </p>{" "}
                </div>
                <Link
                  href={"#"}
                  className=" cursor-pointer group border border-safeAccent bg-transparent hover:bg-safeAccent  p-2"
                >
                  <Firesafety className="fill-current text-safeAccent group-hover:text-safeWhite w-10 h-10" />
                </Link>
              </div>
              <div className=" flex  items-center  p-3 border">
                <div>
                  <p className="h4  font-medium line-clamp-1  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, nemo et suscipit cumque ut magni optio, aliquid
                    consectetur facilis fuga minima, laboriosam voluptatem. Eum
                    temporibus corrupti nostrum tempore suscipit iure non
                  </p>{" "}
                </div>
                <Link
                  href={"#"}
                  className=" cursor-pointer group border border-safeAccent bg-transparent hover:bg-safeAccent  p-2"
                >
                  <Firesafety className="fill-current text-safeAccent group-hover:text-safeWhite w-10 h-10" />
                </Link>
              </div>
              <div className=" flex  items-center  p-3 border">
                <div>
                  <p className="h4  font-medium line-clamp-1  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, nemo et suscipit cumque ut magni optio, aliquid
                    consectetur facilis fuga minima, laboriosam voluptatem. Eum
                    temporibus corrupti nostrum tempore suscipit iure non
                  </p>{" "}
                </div>
                <Link
                  href={"#"}
                  className=" cursor-pointer group border border-safeAccent bg-transparent hover:bg-safeAccent  p-2"
                >
                  <Firesafety className="fill-current text-safeAccent group-hover:text-safeWhite w-10 h-10" />
                </Link>
              </div>
              <div className=" flex  items-center  p-3 border">
                <div>
                  <p className="h4  font-medium line-clamp-1  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, nemo et suscipit cumque ut magni optio, aliquid
                    consectetur facilis fuga minima, laboriosam voluptatem. Eum
                    temporibus corrupti nostrum tempore suscipit iure non
                  </p>{" "}
                </div>
                <Link
                  href={"#"}
                  className=" cursor-pointer group border border-safeAccent bg-transparent hover:bg-safeAccent  p-2"
                >
                  <Firesafety className="fill-current text-safeAccent group-hover:text-safeWhite w-10 h-10" />
                </Link>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </Maxwrapper>
  );
}
