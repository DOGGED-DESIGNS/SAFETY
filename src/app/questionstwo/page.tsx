import Maxwrapper from "@/components/Maxwrapper";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <Maxwrapper newClass=" max-w-screen-sm my-[60px]">
      <div className="  flex flex-col space-y-5">
        <div className=" items-center flex flex-row gap-2 border-2 border-slate-600 rounded-xl p-3 ">
          <h2 className=" m-0 flex-1 h4 ">do you want site inspection</h2>
          <ChevronRight className=" text-safeDark" />
        </div>
        <div className=" items-center flex flex-row gap-2 border-2 border-slate-600 rounded-xl p-3 ">
          <h2 className=" m-0 flex-1 h4 ">do you want a quotation</h2>
          <ChevronRight className=" text-safeDark" />
        </div>
      </div>
      {/* this is the button section */}
      <div className=" flex border mt-[60px]">
        <Button className=" p font-bold ml-auto h-14"> Proceed </Button>
      </div>
    </Maxwrapper>
  );
}
