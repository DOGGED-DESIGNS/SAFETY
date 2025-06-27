import Maxwrapper from "@/components/Maxwrapper";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { notFound } from "next/navigation";

import { Blog } from "@prisma/client";
import { db } from "@/db/connect";

interface datatype {
  posts: string;
  id: string;
  blog: {
    advertImage: string;
    description: string;
    title: string;
    tags: string[];
  };
}

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Get tips expert safety tips on how to prevent and protect against fire outbreak",
};

// this is the awaite function to draw the first post and all the posts

const firstpost = async () => {
  try {
    const data = await db.blog.findFirst({
      orderBy: {
        time: "asc", // from the top
      },
    });

    const dataSet = data
      ? {
          ...data,
          time: new Date(data.time!).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        }
      : null;

    if (!dataSet) {
      notFound();
    }

    return dataSet;
  } catch (error) {
    return notFound();
  }
};

// this is the all type

const allpost = async () => {
  const data = await db.blogpost.findMany({
    include: {
      blog: true,
    },
  });

  if (!data) {
    notFound();
  }

  return data;
};

export default async function page() {
  const first = await firstpost();

  const all = await allpost();

  return (
    <>
      <Maxwrapper newClass="mt-10">
        <div className=" auto-rows-[minmax(300px,_auto)] lg:auto-rows-[minmax(600px,_auto)]  gap-10  grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 ">
          <Link
            href={`/blog/${first.id}`}
            className="   md:col-span-2    before:content-[''] before:inset-0 before:z-10 before:bg-gradient-to-t before:absolute  before:from-safeDark/80 before:to-safeLightest/50  overflow-hidden  relative    "
          >
            <Image
              src={first.advertImage ?? ""}
              alt="image"
              fill
              className=" w-full h-full absolute object-cover "
            />
            <div className=" flex flex-col  absolute p-4 inset-0 z-10 ">
              <div className="   mt-auto">
                <p className="uppercase p text-gray-300">
                  {" "}
                  {`${first.time} `}{" "}
                </p>
                <h4 className=" h2 text-safeWhite  capitalize  max-w-[30ch] ">
                  {first.title}
                </h4>
              </div>
            </div>
          </Link>

          {all.map((items, index) => (
            <>
              <Link
                key={index}
                href={`/blog/${items.id}`}
                className=" flex flex-col border hover:bg-gray-200 transition-all   duration-1000 ease-in-out  bg-safeWhite  md:col-span-1"
              >
                <div>
                  {" "}
                  <Image
                    src={items.blog.advertImage ?? ""}
                    alt="img"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className=" w-full h-auto "
                  />
                </div>
                <div className=" mt-2 p-4">
                  <h2 className=" uppercase h2">{items.blog.title}</h2>
                </div>

                <div className="p-4  mt-auto">
                  <div className="  w-10 h-10 rounded-full overflow-hidden relative ">
                    <Image
                      src={"/favicon.png"}
                      alt="img"
                      fill
                      className=" w-full h-full absolute object-cover"
                    />
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>

        {/* this is the second part */}

        {/* <div className=" mt-10 grid auto-rows-[minmax(300px,_auto)] lg:auto-rows-[minmax(600px,_auto)]  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
          <Link
            href={"#"}
            className=" flex flex-col border hover:bg-gray-200 transition-all   duration-1000 ease-in-out  bg-safeWhite  md:col-span-1"
          >
            <div>
              {" "}
              <Image
                src={"/img1.jpg"}
                alt="img"
                sizes="100vw"
                width={0}
                height={0}
                className=" w-full h-auto "
              />
            </div>
            <div className=" mt-2 p-4">
              <h2 className="h2">
                HOW TO CHECK THE GAUGE OF A FIRE EXTINGUISHER
              </h2>
            </div>

            <div className="p-4  mt-auto">
              <div className="  w-10 h-10 rounded-full overflow-hidden relative ">
                <Image
                  src={"/favicon.png"}
                  alt="img"
                  fill
                  className=" w-full h-full absolute object-cover"
                />
              </div>
            </div>
          </Link>
          <Link
            href={"#"}
            className=" flex flex-col border hover:bg-gray-200 transition-all   duration-1000 ease-in-out  bg-safeWhite  md:col-span-1"
          >
            <div>
              {" "}
              <Image
                src={"/img1.jpg"}
                alt="img"
                sizes="100vw"
                width={0}
                height={0}
                className=" w-full h-auto "
              />
            </div>
            <div className=" mt-2 p-4">
              <h2 className="h2">
                HOW TO CHECK THE GAUGE OF A FIRE EXTINGUISHER
              </h2>
            </div>

            <div className="p-4  mt-auto">
              <div className="  w-10 h-10 rounded-full overflow-hidden relative ">
                <Image
                  src={"/favicon.png"}
                  alt="img"
                  fill
                  className=" w-full h-full absolute object-cover"
                />
              </div>
            </div>
          </Link>
          <Link
            href={"#"}
            className=" flex flex-col border hover:bg-gray-200 transition-all   duration-1000 ease-in-out  bg-safeWhite  md:col-span-1"
          >
            <div>
              {" "}
              <Image
                src={"/img1.jpg"}
                alt="img"
                sizes="100vw"
                width={0}
                height={0}
                className=" w-full h-auto "
              />
            </div>
            <div className=" mt-2 p-4">
              <h2 className="h2">
                HOW TO CHECK THE GAUGE OF A FIRE EXTINGUISHER
              </h2>
            </div>

            <div className="p-4  mt-auto">
              <div className="  w-10 h-10 rounded-full overflow-hidden relative ">
                <Image
                  src={"/favicon.png"}
                  alt="img"
                  fill
                  className=" w-full h-full absolute object-cover"
                />
              </div>
            </div>
          </Link>
        </div> */}
      </Maxwrapper>
    </>
  );
}
