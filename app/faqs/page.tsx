import Navbar from "@/components/navbar";
import FAQs from "@/components/faq";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | UP AI Labs",
  description: "Frequently Asked Questions about UP AI Labs.",
}

export default function FAQsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="space-y-12 md:space-y-16 pb-16">
          {/* FAQs Section */}
          <div className="container max-w-5xl mx-auto px-4 mt-8">
            <div className="flex justify-center mb-6">
              <div className="px-5 py-1.5 bg-[#111] border border-white/10 rounded-full shadow-lg">
                <p className="text-lg font-medium text-white flex items-center">
                  <span className="mr-2">•</span> FAQs
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="p-4 bg-[#111] border border-white/10 rounded-xl backdrop-blur-lg">
                <FAQs />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
