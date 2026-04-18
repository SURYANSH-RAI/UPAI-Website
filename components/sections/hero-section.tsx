"use client";

import { ArrowRight } from "lucide-react"
import React from "react"
import Link from "next/link";
import Tilt from 'react-parallax-tilt'

export default function UttarPradeshAILabs() {
  
  const images = [
    { src: "/6.jpg", alt: "Bara Imambara", x: 225, y: 225  },
    { src: "/5.jpg", alt: "Varanasi Ghats", x: 225, y: 75  },
    { src: "/4.jpg", alt: "Taj Mahal", x: 360, y: 150 },
    { src: "/3.jpg", alt: "Rumi Gate",  x: 360, y: 300 },
    { src: "/7.jpg", alt: "Kanpur Mueseum", x: 225, y: 375},
    { src: "/8.jpg", alt: "Hindu Priest", x: 90, y: 300 },  
    { src: "/9.jpg", alt: "Red Fort", x: 90, y: 150 }, 
  ];

  const hexSize = 165;

  return (
    <section id="hero" className="py-6 relative">
    <div className="container mx-auto bg-black text-white overflow-hidden relative">
      
        {/* Main content */}
        <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left section */}
        <div className="flex-1 flex flex-col px-8 md:px-16 py-16 mt-12">
          <div className="flex  mb-6">
          <div className="px-5 py-1.5 bg-[#111] border border-white/10 rounded-full shadow-lg">
            <p className="text-xl font-medium text-white flex items-center">
              <span className="mr-2">•</span> नमस्ते, एआई उत्तर प्रदेश
            </p>
          </div>
        </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white/90">
            Uttar Pradesh<br />AI Labs
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-12">
            Building the future of AI innovation and talent <br />in Uttar Pradesh
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH" 
              target="_blank"
              rel="noopener noreferrer">
            <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-white/90 transition-colors">
              Join Our Community
            </button>
            </Link>
            <Link href="/contact">
            <button className="flex items-center gap-2 text-white font-medium px-4 py-3 hover:text-white/80 transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Contact Us
            </button>
            </Link>
          </div>
        </div>

          {/* Right Section: Honeycomb collage grid */}
        
        <div className="flex-1 flex items-center justify-center relative">
          <Tilt>
          <div className="relative" style={{ width: 450, height: 450 }}>
            {images.map((img, idx) => (
              <div
                key={idx}
                className="absolute overflow-hidden shadow-lg"
                style={{
                  width: hexSize,
                  height: hexSize,
                  left: img.x - hexSize / 2,
                  top: img.y - hexSize / 2,
                  clipPath: 'polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          </Tilt>
        </div>
      </div>
    </div>
    </section>
  )
}