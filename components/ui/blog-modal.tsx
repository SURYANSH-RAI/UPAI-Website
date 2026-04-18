import { X, Loader2, Link as LinkIcon, AlertCircle } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sourceUrl: string;
  isLoading: boolean;
  content: string | null;
  error?: string | null;
}

export default function BlogModal({
  isOpen,
  onClose,
  title,
  sourceUrl,
  isLoading,
  content,
  error,
}: BlogModalProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Monitor inner HTML images loading
  useEffect(() => {
    if (content && contentRef.current) {
      const images = Array.from(contentRef.current.querySelectorAll("img"));
      
      if (images.length === 0) {
        setImagesLoaded(true);
        return;
      }

      let loadedCount = 0;
      const onImageLoad = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };

      images.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          onImageLoad();
        } else {
          img.addEventListener("load", onImageLoad);
          img.addEventListener("error", onImageLoad); 
        }
      });

      // ultimate fallback to stop loader if hanging
      const timeoutId = setTimeout(() => setImagesLoaded(true), 8000);
      
      return () => {
        clearTimeout(timeoutId);
        images.forEach((img) => {
          img.removeEventListener("load", onImageLoad);
          img.removeEventListener("error", onImageLoad);
        });
      };
    } else {
      setImagesLoaded(false);
    }
  }, [content]);

  // Close on Escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-label="Close modal background"
      />
      
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-[#151515]">
          <h2 className="text-xl md:text-2xl font-bold text-white pr-8 line-clamp-1">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 relative custom-scrollbar bg-black text-gray-200">
          {(isLoading || (content && !imagesLoaded)) && !error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-20 space-y-4">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
              <p className="text-gray-400 font-medium animate-pulse">
                {isLoading ? "Fetching article content..." : "Loading high-res media..."}
              </p>
            </div>
          )}

          {error ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-4 text-center">
              <div className="p-4 bg-red-500/10 rounded-full">
                <AlertCircle className="w-10 h-10 text-red-500" />
              </div>
              <p className="text-red-400 font-medium text-lg">Failed to bypass Medium's block.</p>
              <p className="text-gray-400 max-w-md">
                Medium's servers are strictly blocking our automated request right now. You can safely read this article directly on Medium instead.
              </p>
            </div>
          ) : content ? (
            <div 
              ref={contentRef}
              className={`prose prose-invert prose-lg max-w-none prose-img:rounded-xl prose-a:text-primary hover:prose-a:text-primary-focus prose-headings:text-white prose-pre:bg-[#161b22] prose-pre:border prose-pre:border-gray-800 prose-pre:rounded-xl prose-code:text-pink-400 prose-code:bg-[#1a1a1a] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none transition-opacity duration-500 ${!imagesLoaded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          ) : null}
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6 bg-[#151515] border-t border-white/10 flex items-center justify-between gap-4">
          <p className="text-sm text-gray-400 hidden sm:block">
            Want to read the original?
          </p>
          <Link
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none"
          >
            <Button variant="default" className="w-full sm:w-auto gap-2">
              <LinkIcon className="w-4 h-4" />
              Open in Medium
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
