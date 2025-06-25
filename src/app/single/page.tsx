"use client";
import Maxwrapper from "@/components/Maxwrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Firesafety } from "@/components/svgs";

export default function page() {
  return (
    <>
      <Maxwrapper newClass="bg-gradient-to-t from-safeDark to-safeLightest border">
        <div className=" min-h-auto py-10   ">
          <div className=" gap-5 lg:grid-cols-2 grid  justify-center  grid-cols-1 ">
            <div className="  self-center  ">
              <h3 className="h3  text-safePri">
                Servicing and Repairs of FireExtinguishers
              </h3>

              <p className="h4 leading-7  font-light text-slate-200 ">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus omnis veritatis vitae aliquam est ipsam, tempore
                quidem dolorem similique consequuntur a pariatur dolorum quo
                velit incidunt culpa! Excepturi, cum nobis.
              </p>

              <Button className="h-14 h4 font-semibold mt-8  bg-safeAccent hover:bg-safeAccent/80">
                Request for Quotation
              </Button>
            </div>
            <div className=" h-full     ">
              <div className=" ">
                <Image
                  src="/san/sanagosextinguisher.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className=" h-auto w-full  "
                  alt="this"
                />
              </div>
            </div>
          </div>
        </div>
      </Maxwrapper>

      {/* all product listed */}

      <Maxwrapper>
        <div className=" mt-10 gap-10 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
          <div>
            <div className=" p-4 border border-safeAccent rounded-md bg-safeWhite">
              <Firesafety className=" text-safeAccent fill-current  h-10 w-10 m-auto" />
              <h3 className="h4 my-4 text-center text-safeDark capitalize">
                {" "}
                DCP Fire Extinguisher Servicing{" "}
              </h3>
              <p className="  line-clamp-6 text-gray-600 text-center p">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente odit possimus vitae molestias a iusto officiis numquam?
                Repudiandae, odio voluptatibus consectetur ut reiciendis rerum,
                rem deleniti quis odit nihil explicabo error excepturi <br />{" "}
                <br />
                blanditiis dignissimos nam autem cum pariatur adipisci vel
                obcaecati ipsum numquam! Quaerat optio id sit beatae hic
                dolores.
              </p>
            </div>
          </div>
          <div>
            <div className=" p-4 border border-safeAccent rounded-md bg-safeWhite">
              <Firesafety className=" text-safeAccent fill-current  h-10 w-10 m-auto" />
              <h3 className="h4 my-4 text-center text-safeDark capitalize">
                {" "}
                DCP Fire Extinguisher Servicing{" "}
              </h3>
              <p className="  line-clamp-6 text-gray-600 text-center p">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente odit possimus vitae molestias a iusto officiis numquam?
                Repudiandae, odio voluptatibus consectetur ut reiciendis rerum,
                rem deleniti quis odit nihil explicabo error excepturi <br />{" "}
                <br />
                blanditiis dignissimos nam autem cum pariatur adipisci vel
                obcaecati ipsum numquam! Quaerat optio id sit beatae hic
                dolores.
              </p>
            </div>
          </div>
          <div>
            <div className=" p-4 border border-safeAccent rounded-md bg-safeWhite">
              <Firesafety className=" text-safeAccent fill-current  h-10 w-10 m-auto" />
              <h3 className="h4 my-4 text-center text-safeDark capitalize">
                {" "}
                DCP Fire Extinguisher Servicing{" "}
              </h3>
              <p className="  line-clamp-6 text-gray-600 text-center p">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente odit possimus vitae molestias a iusto officiis numquam?
                Repudiandae, odio voluptatibus consectetur ut reiciendis rerum,
                rem deleniti quis odit nihil explicabo error excepturi <br />{" "}
                <br />
                blanditiis dignissimos nam autem cum pariatur adipisci vel
                obcaecati ipsum numquam! Quaerat optio id sit beatae hic
                dolores.
              </p>
            </div>
          </div>
          <div>
            <div className=" p-4 border border-safeAccent rounded-md bg-safeWhite">
              <Firesafety className=" text-safeAccent fill-current  h-10 w-10 m-auto" />
              <h3 className="h4 my-4 text-center text-safeDark capitalize">
                {" "}
                DCP Fire Extinguisher Servicing{" "}
              </h3>
              <p className="  line-clamp-6 text-gray-600 text-center p">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente odit possimus vitae molestias a iusto officiis numquam?
                Repudiandae, odio voluptatibus consectetur ut reiciendis rerum,
                rem deleniti quis odit nihil explicabo error excepturi <br />{" "}
                <br />
                blanditiis dignissimos nam autem cum pariatur adipisci vel
                obcaecati ipsum numquam! Quaerat optio id sit beatae hic
                dolores.
              </p>
            </div>
          </div>
          <div>
            <div className=" p-4 border border-safeAccent rounded-md bg-safeWhite">
              <Firesafety className=" text-safeAccent fill-current  h-10 w-10 m-auto" />
              <h3 className="h4 my-4 text-center text-safeDark capitalize">
                {" "}
                DCP Fire Extinguisher Servicing{" "}
              </h3>
              <p className="  line-clamp-6 text-gray-600 text-center p">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente odit possimus vitae molestias a iusto officiis numquam?
                Repudiandae, odio voluptatibus consectetur ut reiciendis rerum,
                rem deleniti quis odit nihil explicabo error excepturi <br />{" "}
                <br />
                blanditiis dignissimos nam autem cum pariatur adipisci vel
                obcaecati ipsum numquam! Quaerat optio id sit beatae hic
                dolores.
              </p>
            </div>
          </div>
          <div>
            <div className=" p-4 border border-safeAccent rounded-md bg-safeWhite">
              <Firesafety className=" text-safeAccent fill-current  h-10 w-10 m-auto" />
              <h3 className="h4 my-4 text-center text-safeDark capitalize">
                {" "}
                DCP Fire Extinguisher Servicing{" "}
              </h3>
              <p className="  line-clamp-6 text-gray-600 text-center p">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente odit possimus vitae molestias a iusto officiis numquam?
                Repudiandae, odio voluptatibus consectetur ut reiciendis rerum,
                rem deleniti quis odit nihil explicabo error excepturi <br />{" "}
                <br />
                blanditiis dignissimos nam autem cum pariatur adipisci vel
                obcaecati ipsum numquam! Quaerat optio id sit beatae hic
                dolores.
              </p>
            </div>
          </div>
          <div>
            <div className=" p-4 border border-safeAccent rounded-md bg-safeWhite">
              <Firesafety className=" text-safeAccent fill-current  h-10 w-10 m-auto" />
              <h3 className="h4 my-4 text-center text-safeDark capitalize">
                {" "}
                DCP Fire Extinguisher Servicing{" "}
              </h3>
              <p className="  line-clamp-6 text-gray-600 text-center p">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente odit possimus vitae molestias a iusto officiis numquam?
                Repudiandae, odio voluptatibus consectetur ut reiciendis rerum,
                rem deleniti quis odit nihil explicabo error excepturi <br />{" "}
                <br />
                blanditiis dignissimos nam autem cum pariatur adipisci vel
                obcaecati ipsum numquam! Quaerat optio id sit beatae hic
                dolores.
              </p>
            </div>
          </div>
        </div>
      </Maxwrapper>
    </>
  );
}
