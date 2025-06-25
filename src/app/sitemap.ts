import { MetadataRoute } from "next";
import { Blogpost } from "@prisma/client";
import { db } from "@/db/connect";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await db.blogpost.findMany({
    include: {
      blog: true,
    },
  });

  const postEntries: MetadataRoute.Sitemap = data.map((id) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id.id}`,
    lastModified: id.blog?.time?.toISOString(),
  }));

  return [
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/supressionquestions` },
    ...postEntries,
  ];
}
