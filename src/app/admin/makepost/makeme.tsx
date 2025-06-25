"use client";

import Maxwrapper from "@/components/Maxwrapper";
import {
  finalupdateBlogpost,
  storageTitle,
  updateBlogPostAdvertImages,
} from "./action";
import React, { useEffect, useState, useContext } from "react";
import "react-quill/dist/quill.snow.css";
import { ContextProvider } from "@/context/Context";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Dropzone from "react-dropzone";
import { ImageDown, Loader, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Editor from "@/components/Editor";
import { useUploadThing } from "@/lib/uploadthing";
import { Progress } from "@/components/ui/progress";

export default function Makeme() {
  const { toast } = useToast();
  const { load, setLoad, progress, titleState } = useContext(ContextProvider);

  const [blog, setBlog] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagvalue, setTagvalue] = useState<string>("");
  const [qqv, setQqv] = useState<string>("");
  const [textarr, setTextarr] = useState<string>("");
  const [drag, setDrag] = useState<boolean>(false);
  const [uploading, setUploading] = useState<number>(0);
  const [localid, setLocalid] = useState<string>("");

  const { mutate: addTitle, isPending } = useMutation({
    mutationKey: ["addedTitle"],
    mutationFn: storageTitle,
    onError: (error) => {
      toast({
        title: "Error",
        description: String(error),
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      setBlog(data.title);
      setLocalid(data.id);
      setTags(data.tags);
      setTextarr(data.description);

      if (typeof window !== "undefined") {
        localStorage.setItem("title", JSON.stringify(data));
      }
    },
  });

  const { mutate: updateBlogPostAdd, isPending: isPendingForAdvert } =
    useMutation({
      mutationKey: ["updateAdvertImage"],
      mutationFn: updateBlogPostAdvertImages,
      onError: (error) => {
        toast({
          title: "Upload Error",
          description: String(error),
          variant: "destructive",
        });
      },
      onSuccess: () => {
        toast({
          title: "Success",
          description: "Advert image uploaded successfully",
        });
      },
    });

  const { mutate: mutateFinal, isPending: isPendingFinal } = useMutation({
    mutationKey: ["finalUpload"],
    mutationFn: finalupdateBlogpost,
    onError: (error) => {
      toast({
        description: String(error),
        title: "BLOG UPDATE",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        description: "ALL BLOG POST UPDATED SUCCESSFULLY",
        title: "BLOG UPDATE",
      });
      setBlog("");
      setQqv("");
      setTags([]);
      setTextarr("");
      setLocalid("");
      if (typeof window !== "undefined") {
        localStorage.clear();
      }
    },
  });

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      updateBlogPostAdd({ id: localid, advertImage: data.url });
    },
    onUploadProgress: (e) => {
      setUploading(Number(e));
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("title");
      if (data) {
        const finaldata = JSON.parse(data);
        setTextarr(finaldata.description);
        setBlog(finaldata.title);
        setLocalid(finaldata.id);
      }
    }
  }, []);

  const onDropRejected = (fileRejections: any[]) => {
    const [file] = fileRejections;
    toast({
      title: "Error",
      description: `File is not supported`,
      variant: "destructive",
    });
  };

  const onAccept = (files: File[]) => {
    startUpload(files, { user: undefined });
    setDrag(false);
  };

  return (
    <Maxwrapper newClass=" max-w-screen-lg my-14">
      <div className=" grid gap-4 md:grid-cols-3 grid-cols-1 ">
        <div className=" col-span-2 flex flex-col space-y-5">
          <h2 className=" text-center h2 capitalize my-6">
            Create a blog post
          </h2>

          <div>
            <label className="p">Title</label>
            <Input
              onChange={(e) => setBlog(e.target.value)}
              value={blog}
              className=" h-12 mt-2 border border-safeAccent"
            />
          </div>

          <div>
            <label className="p">Description</label>
            <Textarea
              value={textarr}
              onChange={(e) => setTextarr(e.target.value)}
              className=" h-12 mt-2 border border-safeAccent"
            />
          </div>

          <div className="border-2 p-4 border-safeAccent">
            <div className="flex">
              <h2 className="flex-1 p font-medium my-2">Tags</h2>
              <div className="flex">
                <Input
                  value={tagvalue}
                  onChange={(e) => setTagvalue(e.target.value)}
                  className="rounded-none border border-safeAccent"
                />
                <Button
                  onClick={() => {
                    if (tagvalue.trim()) {
                      setTags((prev) => [...prev, tagvalue.trim()]);
                      setTagvalue("");
                    }
                  }}
                  className="rounded-none bg-safeAccent hover:bg-safeAccent/80"
                  size={"icon"}
                >
                  <Plus />
                </Button>
                <Button
                  onClick={() => {
                    setTags((prev) => prev.slice(0, -1));
                  }}
                  className="rounded-none bg-safeDark hover:bg-safeDark/80"
                  size={"icon"}
                >
                  <Minus />
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {tags.map((val, idx) => (
                <div
                  key={idx}
                  className="p-2 border border-safeAccent rounded-xl"
                >
                  <p className="p">{val}</p>
                </div>
              ))}
            </div>
          </div>

          {!localid && (
            <Button
              onClick={() =>
                addTitle({ describe: textarr, tags: tags, title: blog })
              }
              className="bg-safeAccent"
            >
              {isPending ? <Loader className="animate-spin" /> : "Proceed"}
            </Button>
          )}

          {localid && (
            <>
              <div className="block mb-10 relative h-80">
                <Editor valuez={qqv} onChange={(content) => setQqv(content)} />

                {load && (
                  <div className="absolute inset-0 z-20 flex-col bg-slate-100/90 flex justify-center items-center">
                    <Loader className="animate-spin" />
                    <p className="p">Uploading image...</p>
                    <Progress className="w-2/5 mt-2" value={progress} />
                  </div>
                )}
              </div>

              <div className="w-full pt-14 mb-10">
                <Button
                  onClick={() => {
                    mutateFinal({
                      imagesKeys: titleState.imagekeys,
                      post: qqv,
                      id: localid,
                      title: blog,
                      description: textarr,
                      tag: tags,
                    });

                    localStorage.clear();
                  }}
                  className="h-14 w-full bg-safeAccent hover:bg-safeAccent/80"
                >
                  {isPendingFinal ? (
                    <Loader className="animate-spin" />
                  ) : (
                    "POST BLOG"
                  )}
                </Button>
              </div>
            </>
          )}
        </div>

        {localid && (
          <div>
            <div className="flex gap-5">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="border border-safeAccent p-1 rounded-xl"
                >
                  <div className="rounded-xl relative overflow-hidden w-16 h-16">
                    <Image
                      src={"/img2.jpg"}
                      alt="img"
                      fill
                      className="object-cover absolute"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="border rounded-xl p-2 flex flex-col justify-center items-center border-safeAccent h-28 my-6">
              <Dropzone
                onDropAccepted={onAccept}
                onDropRejected={onDropRejected}
                onDragEnter={() => setDrag(true)}
                onDragLeave={() => setDrag(false)}
                accept={{
                  "image/png": [".png"],
                  "image/jpeg": [".jpeg"],
                  "image/jpg": [".jpg"],
                }}
              >
                {({ getInputProps, getRootProps }) => (
                  <div
                    className="flex-1 w-full flex items-center justify-center bg-slate-200 rounded-xl"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    {isUploading ? (
                      <div className="flex flex-col justify-center items-center">
                        <p className="p mb-2">Uploading image...</p>
                        <Progress value={uploading} />
                      </div>
                    ) : (
                      <div className="cursor-pointer">
                        <ImageDown className="text-zinc-500 border m-auto w-6 h-6 my-2" />
                        <p className="p select-none text-center text-zinc-500">
                          Upload advert&apos;s image
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </Dropzone>
            </div>
          </div>
        )}
      </div>
    </Maxwrapper>
  );
}
