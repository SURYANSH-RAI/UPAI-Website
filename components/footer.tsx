import Link from "next/link"
import { Zap, Github, Linkedin, Youtube, MapPin } from "lucide-react"
import { RiTwitterXLine, RiDiscordLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-secondary animate-pulse-slow" />
              <span className="text-xl font-bold">UP AI Labs</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Building the future of AI innovation and talent in Uttar Pradesh.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/LucknowAI" className="text-muted-foreground hover:text-secondary transition-colors" target="_blank"
              rel="noopener noreferrer">
                <Github size={30} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://x.com/AILucknow" className="text-muted-foreground hover:text-secondary transition-colors" target="_blank"
              rel="noopener noreferrer">
                <RiTwitterXLine size={30} />
                <span className="sr-only">X</span>
              </Link>
              <Link href="https://www.linkedin.com/company/lucknow-ai-labs/" className="text-muted-foreground hover:text-secondary transition-colors" target="_blank"
              rel="noopener noreferrer">
                <Linkedin size={30} />
                <span className="sr-only">LinkedIn</span>
              </Link><Link href="https://discord.com/invite/QKw67PDZUm" className="text-muted-foreground hover:text-secondary transition-colors" target="_blank"
              rel="noopener noreferrer">
                <RiDiscordLine size={30} />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-muted-foreground hover:text-secondary transition-colors">
                  Labs
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-muted-foreground hover:text-secondary transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-secondary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-secondary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://medium.com/@aadityaura_26777" className="text-muted-foreground hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-muted-foreground hover:text-secondary transition-colors">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@lucknowailabs/videos" className="text-muted-foreground hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-secondary transition-colors">
                  Open Source Projects
                </Link>
              </li>
              <li>
                <Link href="/contact_us" className="text-muted-foreground hover:text-secondary transition-colors">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">Lucknow, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground mt-0.5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-muted-foreground">contact@upailabs.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Uttar Pradesh AI Labs. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground hover:text-secondary transition-colors">
              Privacy Policy
            </span>
            <span className="text-sm text-muted-foreground hover:text-secondary transition-colors">
              Terms of Service
            </span>
            <span className="text-sm text-muted-foreground hover:text-secondary transition-colors">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

