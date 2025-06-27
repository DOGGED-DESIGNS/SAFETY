import Aproach from "@/components/Aproach";
import BlogSection from "@/components/BlogSection";
import Choose from "@/components/Choose";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function page() {
  return (
    <>
      <main className="  overflow-hidden">
        <Hero />

        <Services />

        <Choose />

        <Aproach />

        <BlogSection />
      </main>

      {/* <Footer /> */}
    </>
  );
}
