"use client";
import Maxwrapper from "@/components/Maxwrapper";
import { Supression } from "../../components/svgs";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Supressionquestion() {
  const { data } = useSession();
  const router = useRouter();
  return (
    <Maxwrapper newClass=" flex bg-safeWhite max-w-screen-2xl py-[100px]">
      <div className=" border-2 m-auto   border-safeAccent p-2 ">
        <div className="bg-safeAccent p-2 mb-4">
          <h2 className=" h4 leading-5 text-safeWhite capitalize text-center">
            {" "}
            Where do you need fm200 system installed
          </h2>
        </div>
        <ScrollArea className=" bg-safePri  relative  m-auto overflow-auto py-3   h-80 px-3 ">
          <div
            aria-hidden="true"
            className="absolute z-10 inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/90 pointer-events-none"
          />
          <div className="flex flex-col   space-y-10">
            <button
              onClick={() => {
                if (data?.user?.email) {
                  router.push("/single");
                } else {
                  router.push("/login");
                }
              }}
              className=" group hover:border-safeAccent   items-center  flex flex-row gap-3 border-2 border-zinc-900 rounded-xl p-5 "
            >
              <Supression className=" group-hover:text-safeAccent text-zinc-900 fill-current h-10 w-10" />
              <h2 className="group-hover:text-safeAccent m-0 flex-1 leading-5 h4  font-light  text-zinc-900 ">
                Installation of server room fire suppression system
              </h2>
              <ChevronRight className="group-hover:text-safeAccent text-zinc-900" />
            </button>
          </div>
        </ScrollArea>
      </div>
      {/* this is the button section */}
    </Maxwrapper>
  );
}
