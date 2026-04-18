import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeAboutSection() {
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
            <div className="space-y-3 max-w-xl">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Our Inspiring Journey Begins:</h3>
                <p className="text-gray-400 text-sm">
                  Welcome to the heart of AI innovation in Uttar Pradesh – AI UP! Rooted in Lucknow since 2022.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-1">Local Communities, One Family:</h3>
                <p className="text-gray-400 text-sm">
                  We've built passionate AI communities for Lucknow, Kanpur, Varanasi, Noida, and more, uniting under the AI Uttar Pradesh banner.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-1">Fueled by Vision:</h3>
                <p className="text-gray-400 text-sm">
                  Our driving vision is simple yet powerful – to ignite the flames of knowledge-sharing across Uttar Pradesh.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-1">Embrace Possibilities:</h3>
                <p className="text-gray-400 text-sm">
                  Whether you seek tailored AI solutions, embark on transformative training, or explore collaborative research ventures, our dedicated team is poised to guide your journey.
                </p>
              </div>
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
      </div>
    </section>
  );
}
