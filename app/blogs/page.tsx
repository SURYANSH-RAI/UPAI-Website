import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogsSection from "@/components/sections/blogs-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | UP AI Labs",
  description: "Read our latest blogs and updates.",
}

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <BlogsSection />
      </main>
      <Footer />
    </div>
  );
}
