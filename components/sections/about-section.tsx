import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container relative">
        {/* About AI Button - Centered */}
        <div className="flex justify-center mb-8">
          <div className="px-6 py-2 bg-[#111] border border-white/10 rounded-full shadow-lg">
            <p className="text-xl font-medium text-white"><span className="mr-2">•</span>About AI उत्तरप्रदेश</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Main Heading - Centered on mobile */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-500">Pioneering AI</span>
                <br />
                <span className="text-white">Excellence for All</span>
              </h1>
            </div>

            {/* Content Sections - Centered on mobile */}
            <div className="space-y-4 max-w-xl">
              <p className="text-gray-400 text-base leading-relaxed">
                UPAI Labs is a Section 8 registered non-profit organisation (NGO) dedicated to building and sustaining AI-driven technology ecosystems in Tier-2 and Tier-3 cities across India. Founded by practitioners who experienced first-hand the absence of mentorship and research culture outside India's metro cities, UPAI Labs exists to bridge that gap & democratising access to AI education, open-source research, and collaborative innovation.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                The Lucknow chapter, Lucknow AI Labs, is the organisation's founding chapter and flagship community. It operates as the nucleus of Lucknow's growing AI ecosystem, running workshops, hackathons, research collaborations, and mentorship programmes that serve students, professionals, entrepreneurs, and researchers across Uttar Pradesh.
              </p>
            </div>
          </div>

          {/* Gallery Section - Centered */}
          <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-4">
              {/* First image */}
              <div className="rounded-xl overflow-hidden h-40">
                <Image 
                  src="/event.jpg" 
                  alt="AI UP Community Meetup" 
                  width={200} 
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Video placeholder */}
              <div className="rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center h-40">
              <Link 
                  href="https://www.youtube.com/@lucknowailabs/videos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <Play className="h-6 w-6 text-white" />
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Team image */}
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image 
                src="/team.jpg" 
                alt="AI UP Team" 
                width={400} 
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission and Vision Interactive Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16 md:mt-24">
          <div className="group relative p-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
            <div className="relative h-full bg-[#111] p-8 md:p-10 rounded-2xl border border-white/5 backdrop-blur-sm overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/60 transition-all duration-500"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                </span>
                Our Mission
              </h2>
              <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                To advance AI literacy, open-source research, and deep-tech collaboration through community-led workshops, hackathons, mentorship/Internship programmes, and ecosystem partnerships, beginning with Lucknow and expanding citywide across Uttar Pradesh.
              </p>
            </div>
          </div>

          <div className="group relative p-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
            <div className="relative h-full bg-[#111] p-8 md:p-10 rounded-2xl border border-white/5 backdrop-blur-sm overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/60 transition-all duration-500"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"></path></svg>
                </span>
                Our Vision
              </h2>
              <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                A self-sustaining AI ecosystem in every high-potential Tier-2 city of India, where students get mentorship, professionals collaborate on cutting-edge research, and entrepreneurs build AI-powered solutions without needing to relocate to a metro.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

