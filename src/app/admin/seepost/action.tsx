"use server";
import { db } from "@/db/connect";

export async function getallPosts() {
  try {
    const data = await db.blog.findMany();

    return data;
  } catch (error) {
    throw new Error(`Error:${error}`);
  }
}
