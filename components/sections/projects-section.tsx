import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Nawab AI",
    description: "Nawab AI is an intelligent city assistant developed by Lucknow AI Labs that helps people explore Lucknow with ease. Using conversational AI, it provides local insights, news updates, and guidance on places, culture, and services around the city. Whether you're a resident or a visitor, Nawab AI acts as your digital companion to discover the best of Lucknow in a simple and interactive way.",
    image: "/nawab-ai.jpg",
    link: "https://nawabaifrontend-506068601490.asia-south1.run.app/login"
  },
  {
    title: "Resume Roster",
    description: "ResumeRoaster is an AI-powered tool that analyzes your resume and gives brutally honest, actionable feedback. Upload your resume and instantly discover weak points in formatting, wording, and impact. Fix them quickly and turn your resume into something recruiters actually want to read.",
    image: "/resume-roster.jpg",
    link: "https://resumeroaster-506068601490.asia-south1.run.app/"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 relative bg-black text-white">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="px-5 py-1.5 bg-[#111] border border-white/10 rounded-full shadow-lg">
              <p className="text-xl font-medium text-white flex items-center">
                <span className="mr-2">•</span> Our Projects
              </p>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-gray-500">Initiatives</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the latest core tools and systems built by our AI community to empower local ecosystems and advance AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl bg-[#111] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <div className="relative w-full h-80 overflow-hidden bg-[#1a1a1a]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out rounded-t-2xl"
                />
              </div>
              <div className="flex flex-col flex-1 p-6 md:p-8 relative z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed tracking-wide flex-1">
                  {project.description}
                </p>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-white hover:text-gray-300 transition-colors"
                  >
                    Launch App <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 animate-pulse shadow-lg shadow-primary/20">
            <div className="px-8 py-3 bg-[#0a0a0a] rounded-full flex items-center gap-3">
              <span className="text-2xl"></span>
              <p className="text-xl md:text-2xl font-bold uppercase tracking-wider bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                More exciting projects coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
