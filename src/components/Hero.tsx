"use client";
import React, { useState, useContext } from "react";
import { Button } from "./ui/button";
import Maxwrapper from "./Maxwrapper";
import { Input } from "./ui/input";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import { SERVICE } from "@/validator/OptionValidator";
import { Check } from "lucide-react";
import Link from "next/link";
import { ContextProvider } from "@/context/Context";

export default function Hero() {
  const { state, dispatch } = useContext(ContextProvider);
  const [fok, setFok] = useState<Boolean>(false);

  return (
    <>
      <Maxwrapper newClass=" py-10  bg-gradient-to-tl  from-safeLightest to-safeDark   h-auto ">
        <div className=" lg:gap-14 gap-10  grid grid-cols-1 lg:grid-cols-2 ">
          <div className="    self-center ">
            <h1 className="h1 mt-10 text-safeWhite  ">
              {" "}
              Smart, reliable safety solutions built for Africa&apos;s toughest
              environments
            </h1>

            <p className=" mt-8 p text-safeWhite">
              your trusted safety professionals
            </p>

            <div className="mt-8  lg:flex  gap-2 ">
              <div className=" relative lg:flex-1 h-14 my-3">
                <Input
                  onChange={(e) => {
                    console.log(e.target.value);
                    dispatch({ type: "SET", payload: e.target.value });
                  }}
                  onFocus={() => {
                    setFok(true);
                  }}
                  onBlur={() => {
                    setFok(false);
                  }}
                  placeholder="Search Services:(i.e: fire extinguisher)"
                  type="search"
                  className="bg-white h-full"
                />
                {fok && (
                  <ScrollArea className=" border-[1px] border-safeAccent w-full mt-2 rounded-lg z-50 px-3 py-8  bottom-0 bg-safeWhite absolute    h-40 ">
                    <div className=" bg-gradient-to-t from-white left-0 h-14 absolute bottom-0 w-full z-[1000]    " />
                    {state.length < 1 ? (
                      <div className=" absolute top-0 left-0 h-full w-full flex items-center justify-center ">
                        {" "}
                        <h2 className=" text-safeDark text-center p font-bold">
                          {" "}
                          No Result Found
                        </h2>{" "}
                      </div>
                    ) : (
                      state.map((items) => (
                        <>
                          <Link
                            href={"#"}
                            className="  border-t border-b group my-2 py-2 px-2 rounded-sm hover:bg-safeDark block"
                          >
                            {" "}
                            <h2 className="p text-safeDark group-hover:text-white">
                              {items.name}
                            </h2>{" "}
                          </Link>
                        </>
                      ))
                    )}
                  </ScrollArea>
                )}
              </div>
              <div className="h-14">
                <Button className=" w-full h-full my-3 font-outfit font-bold text-white   bg-safeLightest  hover:bg-safeLight  ">
                  {" "}
                  Search{" "}
                </Button>
              </div>
            </div>
          </div>

          <div className="  h-full">
            <div className=" border-dashed border-2 border-safeWhite lg:min-h-[700px] md:min-h-[500] min-h-[300px] relative w-full">
              <Image
                src="/heropng3.png"
                alt="Hero"
                width={0}
                height={0}
                sizes="100vw" // still needed to help the browser pick the right image
                className=" select-none w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Maxwrapper>
    </>
  );
}
