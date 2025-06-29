import Footer from "@/components/Footer";
import Maxwrapper from "@/components/Maxwrapper";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Sanagos Safety",
    template: "%s - Sanagos Safety ",
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  description:
    "  At Sanagos Safety, we supply and service fire safety equipment,fire detection systems, and automatic fire suppression solutions—built to safeguard lives and property, 24/7.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Maxwrapper>
      <Navbar />
      {children}

      <Footer />
    </Maxwrapper>
  );
}
