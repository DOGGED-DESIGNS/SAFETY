import { NextResponse } from "next/server";
import { db } from "@/db/connect";

export async function GET(rep: Request) {
  try {
    const data = await db.blogpost.findMany({
      include: {
        blog: true,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    throw new Error(`Error:${error}`);
  }
}
