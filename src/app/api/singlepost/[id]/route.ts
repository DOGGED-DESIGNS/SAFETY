import { db } from "@/db/connect";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;

  try {
    const data = await db.blogpost.findUnique({
      where: { id: id },
      include: {
        blog: true,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    throw new Error(`Error:${error}`);
  }
  // Example: Fetch from DB using Prisma
  // const post = await prisma.post.findUnique({ where: { id } });
}
