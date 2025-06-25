"use server";

import { db } from "@/db/connect";

interface urlkey {
  url: string;
  key: string;
}

export const saveUrlKey = async (info: urlkey) => {
  try {
    const result = await db.imagez.create({
      data: {
        imageurl: info.url,
        imagekey: info.key,
      },
    });

    return result;
  } catch (error) {
    throw new Error(`Error:${error}`);
  }
};
