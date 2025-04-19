import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Sanagos Safety",
  description = " At Sanagos Safety, we supply and service fire safety equipment,fire detection systems, and automatic fire suppression solutions—built to safeguard lives and property, 24/7.",
  image = "/santhumb.png",
  icons = "/favicon.ico",
  keywords = [
    "fire exginguiser servicing",
    "fire alarm",
    "Adressable Alarm",
    "Fire Extingisher",
    "Safety",
  ],
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  keywords?: string[];
} = {}): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@sanagossafety",
    },
    icons,
    metadataBase: new URL("https://sanagossafety.com/"),
  };
}
