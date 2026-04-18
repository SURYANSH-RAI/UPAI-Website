import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero-section";
import HomeAboutSection from "@/components/sections/home-about-section";
import Activities from "@/components/sections/activities";
import StatsSection from "@/components/sections/stats-section";
import PartnersSection from "@/components/sections/partners-section";
import Footer from "@/components/footer";
import { ScrollButton } from "@/components/ui/scroll-button";
import FAQs from "@/components/faq";
import StructuredData from './structured-data'
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import WorkingGroupsSection from "@/components/sections/working-groups-section";

export const metadata: Metadata = {
  title: "AI Labs & Research Centers | UP AI Labs",
  description: "Explore our state-of-the-art AI labs and research centers across Uttar Pradesh. Join us in advancing AI technology and innovation.",
} 

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <StructuredData />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <div id="next-section"></div>
        
        {/* Consistent section spacing */}
        <div className="space-y-12 md:space-y-16 pb-16">
          <StatsSection />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <HomeAboutSection />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <Activities />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <WorkingGroupsSection />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <PartnersSection />
          
        </div>
      </main>
      <Footer />
      <ScrollButton targetId="next-section" />
    </div>
  );
}
