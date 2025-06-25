import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Inspection",
  description: "this is the inspection title",
  robots:{
    index:false,
    follow:true
  }
};

export default function page() {
  return <div>page</div>;
}
