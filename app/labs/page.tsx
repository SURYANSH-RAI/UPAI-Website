import Navbar from "@/components/navbar";
import Chapters from "@/components/sections/chapters";
import WorkingGroupsSection from "@/components/sections/working-groups-section";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labs & Chapters | UP AI Labs",
  description: "Explore our AI labs and chapters across Uttar Pradesh.",
}

export default function LabsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="space-y-12 md:space-y-16 pb-16">
          <Chapters />
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <WorkingGroupsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
