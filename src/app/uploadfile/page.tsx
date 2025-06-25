"use client";
import Maxwrapper from "@/components/Maxwrapper";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useUploadThing } from "@/lib/uploadthing";
import { useMutation } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { Loader2, MousePointerSquareDashed, Image as Im } from "lucide-react";
// import Image from "next/image";
import React, { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { saveUrlKey } from "./action";
export default function Uploadfile() {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const route = useRouter();

  // this is the toast section

  const { toast } = useToast();
  const { mutate: mutateme } = useMutation({
    mutationKey: ["mumu-mumu"],
    mutationFn: saveUrlKey,
    onSuccess: (data) => {
      toast({
        variant: "default",
        description: "data has been added successfully",
        title: "data is added",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: `error: ${error}`,
        title: "Error in storing data",
      });
    },
  });

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete([data]) {
      startTransition(() => {
        route.push("/");
        const main = data.serverData.user; // this is what you passed
      });

      mutateme({ key: data.serverData.fileKey, url: data.serverData.fileKey });

      // console.log(data.serverData.fileKey);
      // console.log("above is the filekey");
      // console.log(data.serverData.fileurl);
      // console.log("above is the file url");
    },
    onUploadProgress: (p) => {
      setUploadProgress(p);
    },
  });

  const onDropRejected = (rejectedFile: FileRejection[]) => {
    const [file] = rejectedFile;

    toast({
      variant: "destructive",
      title: `${file.file.type} type is not supported `,
      description: "wrong file uploaded",
    });

    setIsDragOver(false);
  };

  const onDropAccepted = (acceptedFile: File[]) => {
    startUpload(acceptedFile, { user: undefined });

    setIsDragOver(false);
  };

  const [isPending, startTransition] = useTransition();

  const [uploadProgress, setUploadProgress] = useState<number>(80);

  return (
    <>
      <Maxwrapper newClass="flex flex-col border-orange-900 border-2  h-72">
        <div className="   flex-1  p-2 ">
          <div
            className={cn(
              "relative  h-full flex-1  w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/25 lg:rounded-2xl justify-center flex-col items-center",
              {
                "ring-blue-900/25 bg-blue-900/25": isDragOver,
              }
            )}
          >
            <Dropzone
              onDropAccepted={onDropAccepted}
              onDropRejected={onDropRejected}
              accept={{
                "image/png": [".png"],
                "image/jpeg": [".jpeg"],
                "image/jpg": [".jpg"],
              }}
              onDragEnter={() => setIsDragOver(true)}
              onDragLeave={() => setIsDragOver(false)}
            >
              {({ getRootProps, getInputProps }) => (
                <div
                  className=" h-full w-full flex-1 flex flex-col items-center justify-center"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {isDragOver ? (
                    <MousePointerSquareDashed />
                  ) : isUploading || isPending ? (
                    <Loader2 className="    mb-2 h-6 w-6  animate-spin" />
                  ) : (
                    <Im className="h-6 w-6 text-zinc-500 mb-2" />
                  )}
                  <div className=" flex flex-col items-center">
                    {isUploading ? (
                      <div className="flex flex-col items-center">
                        <p>Uploading...</p>
                        <Progress
                          value={uploadProgress}
                          className="mt-2 w-40 h-2 bg-gray-300"
                        />
                      </div>
                    ) : isPending ? (
                      <div className="flex flex-col items-center">
                        <p>Redirection, please wait...</p>
                      </div>
                    ) : isDragOver ? (
                      <p>
                        {" "}
                        <span className=" font-semibold p">
                          {" "}
                          Drop file to upload{" "}
                        </span>{" "}
                      </p>
                    ) : (
                      <p className=" font-semibold p">
                        {" "}
                        <span className="font-semibold">
                          {" "}
                          Click to upload{" "}
                        </span>{" "}
                        or drag and drop{" "}
                      </p>
                    )}
                  </div>
                  {isPending ? null : (
                    <p className=" text-xs text-zinc-500">PNG, JPG, JPEG </p>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
        </div>
      </Maxwrapper>
    </>
  );
}
