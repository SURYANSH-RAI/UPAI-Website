import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://upai.org'),
  title: "UP AI Labs | Uttar Pradesh Artificial Intelligence Initiative",
  description: "Uttar Pradesh AI Labs - Leading AI innovation, research, and education in UP. Join our community of AI researchers, developers, and industry experts.",
  keywords: "UP AI, Uttar Pradesh AI, Artificial Intelligence UP, AI Labs Uttar Pradesh, Machine Learning UP, AI Research India, UP Tech Innovation, AI Education UP",
  authors: [{ name: "UP AI Labs" }],
  openGraph: {
    title: "UP AI Labs | Uttar Pradesh Artificial Intelligence Initiative",
    description: "Leading AI innovation, research, and education in Uttar Pradesh. Join our community of AI researchers, developers, and industry experts.",
    url: "https://upai.org",
    siteName: "UP AI Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UP AI Labs | Uttar Pradesh Artificial Intelligence Initiative",
    description: "Leading AI innovation, research, and education in Uttar Pradesh. Join our community of AI researchers, developers, and industry experts.",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://upai.org",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#0d1117] text-white`}>
        {children}
      </body>
    </html>
  )
}

