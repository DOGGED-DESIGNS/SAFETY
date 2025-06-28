"use client";
import Maxwrapper from "@/components/Maxwrapper";
import { Google, Googlemain } from "@/components/svgs";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (data?.user?.email) {
      router.push("/single");
    }
  }, [data?.user?.email, router]);

  return (
    <>
      <Maxwrapper>
        <div className=" my-16 flex ">
          <div className=" m-auto border-2 p-10 border-safeAccent rounded-lg">
            <h4 className="h4   max-w-[40ch] font-medium  my-5 text-center">
              get your personalized safety equipment quote—plus exclusive safety
              tips—delivered instantly to your inbox.
            </h4>

            <div className=" mt-8 md:flex flex-col gap-2">
              <Button
                size={"lg"}
                className=" h-16   w-full bg-safeAccent hover:bg-safeAccent/80 text-xl font-medium"
                onClick={() => {
                  signIn("google", {
                    callbackUrl: "/",
                  });
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

              <div>
                <p className="h4  text-center"> OR </p>
              </div>
              <Link
                href={"/single"}
                className={buttonVariants({
                  size: "lg",
                  className:
                    " h-16 hover:bg-transparent text-safeDark hover:text-safeAccent   w-full hover:border-safeAccent border-safeDark border bg-transparent text-xl font-medium",
                })}
              >
                Proceed
              </Link>
            </div>
          </div>
        </div>
      </Maxwrapper>
    </>
  );
}
