import React from "react";
import Maxwrapper from "./Maxwrapper";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Aproach() {
  return (
    <>
      <Maxwrapper newClass="py-[60px]  bg-safeDark ">
        <h2 className="  h3 text-center text-safeWhite">
          Our Approach to work
        </h2>
        <div className=" mt-[60px] grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className=" w-full relative bg-safePri h-[300px]">
              <Image
                fill
                className="object-contain"
                alt="image"
                src="/first.png"
              />
              <div className=" absolute top-0 left-0 z-10 bg-safeAccent h-10 w-10 flex justify-center items-center ">
                <p className="h4 m-0 text-safeWhite ">1</p>
              </div>
            </div>
            <h3 className=" h4 my-4 capitalize text-safeWhite ">
              {" "}
              Consultation & Inspection{" "}
            </h3>
            <p className=" p  mt-2 text-slate-300">
              We begin with a clear conversation to understand your fire safety
              needs. Our team visits your site to inspect existing equipment and
              assess risks. This helps us determine exactly what needs to be
              done.
            </p>
          </div>
          <div>
            <div className=" w-full relative bg-safePri h-[300px]">
              <Image
                fill
                className="object-contain"
                alt="image"
                src="/second.png"
              />
              <div className=" absolute top-0 left-0 z-20 bg-safeAccent h-10 w-10 flex justify-center items-center ">
                <p className="h4 m-0 text-safeWhite ">2</p>
              </div>
            </div>
            <h3 className=" my-4 h4 capitalize text-safeWhite ">
              {" "}
              Transparent Quotation{" "}
            </h3>
            <p className=" p  text-slate-300">
              We prepare a detailed and honest quotation for equipment and
              services. Everything is clearly explained to avoid surprises. Once
              you&apos;re satisfied, we move forward with your approval.
            </p>
          </div>
          <div>
            <div className=" w-full relative bg-safePri h-[300px]">
              <Image
                fill
                className="object-contain"
                alt="image"
                src="/third.png"
              />
              <div className=" absolute top-0 left-0 z-20 bg-safeAccent h-10 w-10 flex justify-center items-center ">
                <p className="h4 m-0 text-safeWhite ">3</p>
              </div>
            </div>
            <h3 className="my-4 h4 capitalize text-safeWhite ">
              {" "}
              Quality Execution & Support{" "}
            </h3>
            <p className=" font-normal p  mt-2 text-slate-300">
              We carry out installation or servicing with precision and care. A
              final walkthrough ensures you&apos;re happy and understand the
              setup. Afterward, we provide support and maintenance to keep you
              protected.
            </p>
          </div>
        </div>

        {/* <div className=" mt-[60px] flex">
          <Button
            variant={"outline"}
            className=" bg-transparent  border-2 text-safeWhite md:w-auto lg:w-auto mx-auto border-safeAccent w-full h-10  lg:h-12 md:h-12 rounded-sm p font-bold"
          >
            {" "}
            Go to Blog{" "}
          </Button>
        </div> */}
      </Maxwrapper>
    </>
  );
}
