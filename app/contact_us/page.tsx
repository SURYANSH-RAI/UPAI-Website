import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactSection from "@/components/sections/contact-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | UP AI Labs",
  description: "Get in touch with the UP AI Labs team.",
}

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
