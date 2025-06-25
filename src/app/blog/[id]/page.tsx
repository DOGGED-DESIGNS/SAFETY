import Maxwrapper from "@/components/Maxwrapper";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { cache } from "react";
import { Blogpost } from "@prisma/client";
import { db } from "@/db/connect";

export const revalidate = 60 * 60;

export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await db.blogpost.findMany({
    include: {
      blog: true,
    },
  });

  return data.map((da) => ({ id: da.id }));
}

const getBlog = cache(async (id: string) => {
  const data = await db.blogpost.findUnique({
    where: { id: id },
    include: {
      blog: true,
    },
  });

  if (!data) {
    notFound();
  }

  return data;
});

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const data = await db.blogpost.findUnique({
    where: { id: id },
    include: {
      blog: true,
    },
  });

  if (!data) {
    return {
      title: "Not found",
      description: "The page could not be loaded.",
    };
  }

  return {
    title: data?.blog?.title,
    description: data?.blog?.description,
    keywords: data?.blog?.tags || [],
    openGraph: {
      images: [
        {
          url: data?.blog?.advertImage ?? "",
        },
      ],
    },
  };
}

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const data = await getBlog(id);

  return (
    <>
      <Maxwrapper newClass="mt-10  max-w-screen-lg  ">
        <div
          className=" max-w-screen-lg genclass"
          dangerouslySetInnerHTML={{ __html: data.posts ?? "" }}
        />

        <div className=" lg:col-span-1">this is set</div>
      </Maxwrapper>
    </>
  );
}

{
  /* <div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit facere
  sapiente porro officiis! Debitis laboriosam ad natus doloribus iusto nam in
  esse facere. Voluptas voluptatibus laboriosam delectus cum amet inventore
  doloribus vel architecto obcaecati. Dignissimos nulla ex modi consequatur. Non
  enim dolores impedit tempore fugit eos labore consectetur exercitationem!
</div>; */
}
