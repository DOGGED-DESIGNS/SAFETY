import React from "react";
import Maxwrapper from "./Maxwrapper";
import Image from "next/image";
import { Button } from "./ui/button";

export default function BlogSection() {
  return (
    <>
      <Maxwrapper newClass=" py-[100px]">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-20 lg:grid-cols-3">
          <div className=" pb-5 bg-safeWhite shadow-md">
            <div className="  w-full h-[300px] relative ">
              <Image
                src={"/img1.jpg"}
                alt="image"
                fill
                className="object-cover"
              />
            </div>
            <div className=" px-4">
              <h4 className=" my-8 h4 capitalize ">
                Why you need a fire alarm system
              </h4>
              <p className=" p line-clamp-3 text-slate-900">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates odit modi dolorem dolore enim in facilis, nobis atque
                quidem sapiente recusandae quod pariatur inventore, eius non
                earum tenetur harum suscipit.
              </p>
            </div>
            <div className="mt-8 px-4">
              <Button className=" text-white font-outfit hover:bg-safeDark bg-safeLight w-full lg:h-12  font-bold p">
                Read More
              </Button>
            </div>
          </div>
          <div className=" pb-5 bg-safeWhite shadow-md">
            <div className="  w-full h-[300px] relative ">
              <Image
                src={"/img2.jpg"}
                alt="image"
                fill
                className="object-cover"
              />
            </div>
            <div className=" px-4">
              <h4 className=" my-8 h4 capitalize">
                {" "}
                How to use a fireextinguisher{" "}
              </h4>
              <p className=" p line-clamp-3 text-slate-900">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates odit modi dolorem dolore enim in facilis, nobis atque
                quidem sapiente recusandae quod pariatur inventore, eius non
                earum tenetur harum suscipit.
              </p>
            </div>
            <div className="mt-8 px-4">
              <Button className=" text-white font-outfit hover:bg-safeDark bg-safeLight w-full lg:h-12  font-bold p">
                Read More
              </Button>
            </div>
          </div>
          <div className=" pb-5 bg-safeWhite shadow-md">
            <div className="  w-full h-[300px] relative ">
              <Image
                src={"/img3.jpg"}
                alt="image"
                fill
                className="object-cover"
              />
            </div>
            <div className=" px-4">
              <h4 className=" my-8 h4">Automatic Fire Suppression </h4>
              <p className=" p line-clamp-3 text-slate-900">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates odit modi dolorem dolore enim in facilis, nobis atque
                quidem sapiente recusandae quod pariatur inventore, eius non
                earum tenetur harum suscipit.
              </p>
            </div>
            <div className="mt-8 px-4">
              <Button className=" text-white font-outfit hover:bg-safeDark bg-safeLight w-full lg:h-12  font-bold p">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </Maxwrapper>
    </>
  );
}
