// app/admin/makepost/page.tsx
import dynamic from "next/dynamic";

// Dynamically import Makeme without SSR
const Makeme = dynamic(() => import("./makeme"), { ssr: false });

export default function Page() {
  return <Makeme />;
}
