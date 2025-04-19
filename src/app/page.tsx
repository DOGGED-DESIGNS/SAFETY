import Aproach from "@/components/Aproach";
import BlogSection from "@/components/BlogSection";
import Choose from "@/components/Choose";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Maxwrapper from "@/components/Maxwrapper";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function page() {
  return (
    <>
      <Hero />

      <Services />

      <Choose />

      <Aproach />

      <BlogSection />

      {/* <Footer /> */}
    </>
  );
}
