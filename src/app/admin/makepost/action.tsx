"use server";
import { db } from "@/db/connect";

import { UTApi } from "uploadthing/server";

// this is the upload blog type

interface finaluploadblogtype {
  id: string;
  // authorImage: string;
  advertImage?: string;
  post: string;
  imagesKeys: string[];
  title?: string;
  description?: string;
  tag?: string[];
}

interface uploadblogtype {
  id: string;
  advertImage: string;
}

interface bb {
  title: string;
  describe: string;
  tags: string[];
}

interface inserBlogposttype {
  id: string;
  imagekeys: string[];
}

interface imageUpdate {
  id: string;
  images: string[];
}

interface updateBlogtype {
  id: string;
  post: string;
}

export const storageTitle = async (bb: bb) => {
  try {
    const data = await db.blog.create({
      data: {
        title: bb.title,
        description: bb.describe,
        tags: bb.tags,
      },
    });

    const blogpostdate = await db.blogpost.create({
      data: {
        id: data.id,
      },
    });
    //  localStorage.setItem("test", data.description)
    return data;
  } catch (error) {
    throw new Error(`this is the error ${error}`);
  }
};

// FINAL UPDATE update blog post POSTS

export const finalupdateBlogpost = async (
  finalupdateblog: finaluploadblogtype
) => {
  try {
    const blogupdate = await db.blogpost.update({
      where: {
        id: finalupdateblog.id,
      },
      data: {
        posts: finalupdateblog.post,
        imagekeys: finalupdateblog.imagesKeys,
      },
    });

    const updateTDT = await db.blog.update({
      where: {
        id: finalupdateblog.id,
      },
      data: {
        title: finalupdateblog.title,
        description: finalupdateblog.description,
        tags: finalupdateblog.tag,
      },
    });

    return blogupdate;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

// insert blog post

export const insertBlogpost = async (insertblogpost: inserBlogposttype) => {
  try {
    const insertBlogpost = await db.blogpost.create({
      data: {
        id: insertblogpost.id,
        imagekeys: [],
      },
    });

    return insertBlogpost;
  } catch (error) {
    throw new Error();
  }
};

// this is to  upload blog with the image

export const updateBlogPostAdvertImages = async (
  updateadvertimages: uploadblogtype
) => {
  try {
    const uploadBlogdata = await db.blog.update({
      where: {
        id: updateadvertimages.id,
      },
      data: {
        advertImage: updateadvertimages.advertImage,
      },
    });

    return uploadBlogdata;
  } catch (error) {
    throw new Error();
  }
};

// delete post
// this involves deleting the post firest then the images
//step get the post you want to delte
// stip 2 delete all images related to that post
// step 3 delete the title which then drops the entire post

export async function deletePost(id: string) {
  try {
    const data = await db.blog.findFirst({
      where: {
        id: id,
      },
      include: {
        blogpost: true,
      },
    });

    const utpi = new UTApi();

    for (const key of data?.blogpost ?? []) {
      for (const keys of key.imagekeys) {
        await utpi.deleteFiles(keys);
      }
    }

    const deletefile = db.blog.delete({
      where: {
        id: id,
      },
    });

    return deletefile;
  } catch (error) {
    throw new Error(`error :${error}`);
  }
}

// update posts

//step one get the post related to the id and return it
// DO NOT DELETE ANY IMAGE

export async function updatePost(info: { id: string }) {
  try {
    const data = await db.blogpost.findFirst({
      where: {
        id: info.id,
      },
      include: {
        blog: true,
      },
    });

    if (!data) {
      throw new Error("NO DATA FOUND");
    }

    return data;
  } catch (error) {
    throw new Error(`Error:${error}`);
  }
}
