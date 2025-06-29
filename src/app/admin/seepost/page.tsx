"use client";
import Maxwrapper from "@/components/Maxwrapper";
import { Firesafety } from "@/components/svgs";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader, Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { getallPosts } from "./action";
import { ContextProvider } from "@/context/Context";
import { notFound } from "next/navigation";
import { deletePost } from "../makepost/action";

export default function Seepost() {
  const { titlesort, titlesortDispatch } = useContext(ContextProvider);

  const queryclient = useQueryClient();

  // this is for deleteing post
  const { mutate, isPending } = useMutation({
    mutationFn: deletePost,
    mutationKey: ["deletpostforseepost"],
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["keys"] });
    },
  });

  // i want to use query

  const {
    data: titledata,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["keys"],
    queryFn: async () => await getallPosts(),
  });

  useEffect(() => {
    if (titledata) {
      titlesortDispatch({ instruct: "SET", payload2: titledata });
    }
  }, [titledata, titlesortDispatch]);

  if (isLoading) {
    return (
      <Maxwrapper newClass=" h-lvh  justify-center items-center  flex flex-col">
        <div className="  ">
          <Loader className=" text-safeAccent font-bold  mx-auto text-center animate-spin" />
          <p className="h4 text-center ">Loading...</p>;
        </div>
      </Maxwrapper>
    );
  }
  if (!!error) {
    return notFound();
  }

  return (
    <Maxwrapper newClass=" my-14">
      <div className=" border border-safeAccent">
        <div className="flex items-center flex-row bg-safeAccent p-5">
          <div>
            <h2 className=" h3 text-safeWhite "> All blogs titles </h2>
          </div>

          <div className="  w-1/2  ml-auto">
            <Input className="bg-white h-12  " type="search" />
          </div>
        </div>

        <div className=" mt-5">
          <ScrollArea className="  overflow-auto border-2  h-80 w-full">
            <div className="flex flex-col space-y-5">
              {isPending && (
                <div className="flex flex-col justify-center items-center my-3">
                  <Loader className=" animate-spin text-center text-safeAccent font-bold text-3xl " />
                  <h2 className="text-center">Loading...</h2>
                </div>
              )}

              {titlesort.map((sort) => (
                <>
                  {" "}
                  <div className=" flex  items-center gap-3  p-3 border">
                    <div className=" flex-1">
                      <p className="h4  font-medium line-clamp-1  ">
                        {sort.title}
                      </p>{" "}
                    </div>

                    <div className=" flex gap-5">
                      <Button
                        onClick={() => {
                          mutate(sort.id);
                        }}
                        className=" bg-transparent border border-safeDark hover:border-safeAccent h4 text-safeDark hover:bg-transparent hover:text-safeAccent "
                      >
                        Delete Post
                      </Button>
                      <Link
                        href={`/admin/makepost?id=${sort.id}`}
                        className={buttonVariants({
                          className:
                            " bg-safeDark hover:bg-safeDark/80 h4 text-white",
                        })}
                      >
                        Update Post
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </Maxwrapper>
  );
}
