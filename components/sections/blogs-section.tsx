"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import BlogModal from "@/components/ui/blog-modal";

const BLOGS = [
  {
    title: "Deploy Multimodal Huggingface Models with vllm on Runpod Serverless GPUs: Complete Guide",
    link: "https://medium.com/@aadityaura_26777/deploy-multimodal-huggingface-models-with-vllm-on-runpod-serverless-gpus-complete-guide-440448ed91d2",
    thumbnail: "https://cdn-images-1.medium.com/max/1024/1*2FLlJ1IEpgV6IbMRp8xvQA.png",
    description: "I recently deployed Google’s Gemma 3, a 27B parameter model that analyzes images, on serverless infrastructure. The whole process took some time onc..."
  },
  {
    title: "चलो, शुरू से शुरू करते हैं, मगर कितना अजीब है न कि शुरू करने से पहले हम यह तय नहीं कर पाते कि…",
    link: "https://medium.com/@aadityaura_26777/%E0%A4%9A%E0%A4%B2%E0%A5%8B-%E0%A4%B6%E0%A5%81%E0%A4%B0%E0%A5%82-%E0%A4%B8%E0%A5%87-%E0%A4%B6%E0%A5%81%E0%A4%B0%E0%A5%82-%E0%A4%95%E0%A4%B0%E0%A4%A4%E0%A5%87-%E0%A4%B9%E0%A5%88%E0%A4%82-%E0%A4%AE%E0%A4%97%E0%A4%B0-%E0%A4%95%E0%A4%BF%E0%A4%A4%E0%A4%A8%E0%A4%BE-%E0%A4%85%E0%A4%9C%E0%A5%80%E0%A4%AC-%E0%A4%B9%E0%A5%88-%E0%A4%A8-%E0%A4%95%E0%A4%BF-%E0%A4%B6%E0%A5%81%E0%A4%B0%E0%A5%82-%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%87-%E0%A4%B8%E0%A5%87-%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%87-%E0%A4%B9%E0%A4%AE-%E0%A4%AF%E0%A4%B9-%E0%A4%A4%E0%A4%AF-%E0%A4%A8%E0%A4%B9%E0%A5%80%E0%A4%82-%E0%A4%95%E0%A4%B0-%E0%A4%AA%E0%A4%BE%E0%A4%A4%E0%A5%87-%E0%A4%95%E0%A4%BF-358ac3a52b1e",
    thumbnail: "https://cdn-images-1.medium.com/max/944/1*5CrGzWjtZ4ERcKXh1PoSYA.png",
    description: "चलो, शुरू से शुरू करते हैं, मगर कितना अजीब है न कि शुरू करने से पहले हम यह तय नहीं कर पाते कि शुरुआत कहाँ से हो। मैंने बहुत बार सोचा है कि क्या फ..."
  },
  {
    title: "Benchmarking Large Language Models (LLMs) i.e. Gemini, ChatGPT4",
    link: "https://medium.com/@aadityaura_26777/benchmarking-large-language-models-llms-i-e-60a460d1c035",
    thumbnail: "https://cdn-images-1.medium.com/max/680/0*wnl94Wytwy9qVxmT",
    description: "Benchmarking Large Language Models (LLMs i.e. Gemini, ChatGPT4, Mixtral 8x7b, LLaMA-2) in the Medical Domain (medmcqa, medqa, pubmedqa etc.) TL;D..."
  },
  {
    title: "Quantization vs Distillation in Neural Networks: A Comparison",
    link: "https://medium.com/@aadityaura_26777/quantization-vs-distillation-in-neural-networks-a-comparison-8ef522e4fbec",
    thumbnail: "https://cdn-images-1.medium.com/max/1010/1*Nez4NjH9iWmiyRbLUmY9Jw.png",
    description: "A dive into the techniques of quantizing and distilling deep learning models: What are they and how do they differ? Deep learning models, especi..."
  },
  {
    title: "How phone and other devices can help to mass test in covid19",
    link: "https://medium.com/@aadityaura_26777/how-phone-and-other-devices-can-help-to-mass-test-in-covid19-b97919f02ab",
    thumbnail: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Working on a solution to gain data via phone devices and feed it to a neural network and predict the chances of covid19 symptoms. This is an open-..."
  },
  {
    title: "The loss function for Multi-label and Multi-class",
    link: "https://medium.com/@aadityaura_26777/the-loss-function-for-multi-label-and-multi-class-f68f95cae525",
    thumbnail: "https://images.unsplash.com/photo-1504930268766-d71549a37ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "If you are using Tensorflow and confused with dozen of loss functions for multi-label and multi-class classification, Here you go: For Multi-labe..."
  },
  {
    title: "Me_Nature_Meditation_Observation",
    link: "https://medium.com/@aadityaura_26777/me-nature-meditation-observation-d68bf335b4ad",
    thumbnail: "https://images.unsplash.com/photo-1541315666795-0370d05ad220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Hi, I am Aadi, I just turned 23, I am a simple human being who is deeply interested in Philosophy, deep conversation on life, Mathematics, observati..."
  }
];

export default function BlogsSection() {
  const [selectedBlog, setSelectedBlog] = useState<typeof BLOGS[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingContent, setLoadingContent] = useState(false);
  const [fetchedContent, setFetchedContent] = useState<string | null>(null);
  const [errorContent, setErrorContent] = useState<string | null>(null);

  const handleCardClick = async (blog: typeof BLOGS[0]) => {
    setSelectedBlog(blog);
    setModalOpen(true);
    setLoadingContent(true);
    setErrorContent(null);
    setFetchedContent(null);

    try {
      const res = await fetch("/api/fetch-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: blog.link })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch");
      }

      setFetchedContent(data.content);
    } catch (err: any) {
      console.error(err);
      setErrorContent(err.message);
    } finally {
      setLoadingContent(false);
    }
  };

  return (
    <section id="blogs" className="py-16 md:py-24 relative bg-black text-white">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="px-5 py-1.5 bg-[#111] border border-white/10 rounded-full shadow-lg">
              <p className="text-xl font-medium text-white flex items-center">
                <span className="mr-2">•</span> Blogs & Articles
              </p>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-gray-500">Insights</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Read up on our latest technical tutorials, philosophical reflections, deep-learning research, and community explorations written by our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog, index) => (
            <div 
              key={index}
              onClick={() => handleCardClick(blog)}
              className="group relative flex flex-col rounded-2xl bg-[#111] border border-white/10 overflow-hidden hover:border-primary/50 cursor-pointer transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <div className="relative w-full h-48 overflow-hidden bg-black border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none opacity-80" />
                {blog.thumbnail ? (
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    fill
                    className="text-transparent object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-black" />
                )}
              </div>
              
              <div className="flex flex-col flex-1 p-6 relative z-20">
                <h3 className="text-xl font-bold text-white mb-3 leading-snug break-words">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed tracking-wide flex-1 line-clamp-3">
                  {blog.description}
                </p>
                
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-primary font-medium text-sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedBlog && (
        <BlogModal 
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedBlog.title}
          sourceUrl={selectedBlog.link}
          isLoading={loadingContent}
          content={fetchedContent}
          error={errorContent}
        />
      )}
    </section>
  );
}
