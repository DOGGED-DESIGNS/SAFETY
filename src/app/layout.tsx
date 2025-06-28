import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Provider";
import { Toaster } from "@/components/ui/toaster";
import { ContextMain } from "@/context/Context";
import AuthProvider from "@/provider/AuthProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = constructMetadata();

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-gray-100">
        <Providers>
          <AuthProvider>
            <ContextMain>
              {children}
              <Toaster />
            </ContextMain>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
