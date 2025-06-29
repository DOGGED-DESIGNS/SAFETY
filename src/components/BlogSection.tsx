import React, { cache } from "react";
import Maxwrapper from "./Maxwrapper";
import Image from "next/image";
import { Button } from "./ui/button";
import { db } from "@/db/connect";
import Link from "next/link";
import { notFound } from "next/navigation";

const getblogs = cache(async () => {
  try {
    const data = await db.blog.findMany({
      take: 2,
      include: {
        blogpost: true,
      },
    });

    return data;
  } catch (error) {
    return notFound();
  }
});

export default async function BlogSection() {
  const result = await getblogs();

  if (result.length === 0) {
    return <h2 className="h3 text-safeAccent"> No Blog Found </h2>;
  }

  return (
    <>
      <Maxwrapper newClass=" py-[200px]">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-20 lg:grid-cols-3">
          {result.map((reve) => (
            <>
              <div className=" pb-5 bg-safeWhite shadow-md">
                <div className="  w-full h-[300px] relative ">
                  <Image
                    src={reve.advertImage ?? ""}
                    alt="image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className=" px-4">
                  <h4 className=" my-8 h4 capitalize ">{reve.title}</h4>
                  <p className=" p line-clamp-3 text-slate-900">
                    {reve.description}
                  </p>
                </div>
                <Link href={`/blog/${reve.id}`} className=" block mt-8 px-4">
                  <Button className=" text-white font-outfit hover:bg-safeAccent/80 bg-safeAccent w-full lg:h-12  font-bold p">
                    Read More
                  </Button>
                </Link>
              </div>
            </>
          ))}
        </div>
      </Maxwrapper>
    </>
  );
}
