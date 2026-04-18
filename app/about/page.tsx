import Navbar from "@/components/navbar";
import AboutSection from "@/components/sections/about-section";
import StatsSection from "@/components/sections/stats-section";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | UP AI Labs",
  description: "Learn about UP AI Labs and our mission.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="space-y-12 md:space-y-16 pb-16">
          <AboutSection />
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <StatsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
