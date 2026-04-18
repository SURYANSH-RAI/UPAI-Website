import Navbar from "@/components/navbar";
import ResearchSection from "@/components/sections/research-section";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Resources | UP AI Labs",
  description: "Access our AI research and resources.",
}

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <ResearchSection />
      </main>
      <Footer />
    </div>
  );
}
