"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const researchProjects = [
  {
    title: "Project Awadhi",
    description: "Ongoing research on the Awadhi Language project actively explores preservation strategies, digital tools for grammar and vocabulary, and community-driven revitalization efforts for this Indo-Aryan language spoken in Uttar Pradesh. The initiative is advancing linguistic documentation and interactive learning resources to support cultural heritage. This positions it as a vibrant, under-development showcase for your community site.",
    image: "/Project_Awadhi.png",
    link: "https://awadhi-language.vercel.app/",
    status: "Ongoing"
  },
  {
    title: "AI Sign Language Translator",
    description: "Research on the AI-based Sign Language Translator project focuses on developing real-time gesture recognition models to convert sign language into spoken or written text. Leveraging computer vision and machine learning, the initiative aims to bridge communication gaps for the deaf community through an accessible web or app interface. This cutting-edge work highlights your community's commitment to inclusive AI innovations.",
    image: "/AI_Sign_Language.png",
    status: "Under Development"
  }
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-16 md:py-24 relative bg-black text-white">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="px-5 py-1.5 bg-[#111] border border-white/10 rounded-full shadow-lg">
              <p className="text-xl font-medium text-white flex items-center">
                <span className="mr-2">•</span> Research
              </p>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-gray-500">Initiatives</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our latest research projects, initiatives, and explorations into the frontiers of AI.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {researchProjects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] rounded-2xl bg-[#111] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <div className="relative w-full h-64 overflow-hidden bg-[#1a1a1a]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/30 backdrop-blur-sm shadow-sm uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6 md:p-8 relative z-20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      title="Visit Project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed tracking-wide flex-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-primary/40 via-secondary to-primary/40 animate-pulse shadow-lg shadow-secondary/20">
            <div className="px-8 py-3 bg-[#0a0a0a] rounded-full flex items-center gap-3">
              <span className="text-2xl"></span>
              <p className="text-xl md:text-2xl font-bold uppercase tracking-wider bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                More research work coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
