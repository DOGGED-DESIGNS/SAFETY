"use client";
import Maxwrapper from "@/components/Maxwrapper";
import { Google, Googlemain } from "@/components/svgs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { signIn, useSession } from "next-auth/react";

export default function page() {
  return (
    <>
      <Maxwrapper>
        <div className=" my-16 flex ">
          <div className=" m-auto border-2 p-10 border-safeAccent rounded-lg">
            <h4 className="h4   max-w-[40ch] font-medium  my-5 text-center">
              get your personalized safety equipment quote—plus exclusive safety
              tips—delivered instantly to your inbox.
            </h4>

            <Button
              size={"lg"}
              className=" h-16  mt-8 w-full bg-safeAccent hover:bg-safeAccent/80 text-xl font-medium"
              onClick={() => {
                signIn("google");
              }}
            >
              <Image
                alt="google"
                width={20}
                height={20}
                src="/san/sanagosgoogle.svg"
              />{" "}
              continue with google
            </Button>
          </div>
        </div>
      </Maxwrapper>
    </>
  );
}
