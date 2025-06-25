// import {NextResponse} from "NextResponse"

import { db } from "@/db/connect";
import { NextResponse } from "next/server";

export async function GET() {
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

    return NextResponse.json(dataSet);
  } catch (error) {
    throw new Error(`${error}`);
  }
}
