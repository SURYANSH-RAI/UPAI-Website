"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending…");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Email send failed");
      }

      setStatus("Message sent! Check your inbox.");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setStatus(`Error: ${err.message}`);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary/5 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Info Column */}
          <div>
            <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
              <Star className="h-6 w-6 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Join Our Community
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Be part of Uttar Pradesh&apos;s growing AI ecosystem. Connect with
              like-minded individuals, learn from experts, and contribute to
              innovative projects.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    UP AI Labs Headquarters
                    <br />
                    Triveni Nagar, Lucknow
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:contact@upailabs.org"
                      className="hover:text-primary transition-colors"
                    >
                      contact@upailabs.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+91 9336247359</p>
                </div>
              </div>
            </div>
            <Link
              href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="gap-2 group">
                Become a Member
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right Form Column */}
          <div className="bg-card/70 backdrop-blur-md rounded-lg p-8 border border-white/10 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 rounded-lg border border-white/10 z-10 hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Your email"
                    className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Your message"
                  className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              <Button type="submit" variant="secondary" className="w-full">
                Send Message
              </Button>

              {status && (
                <p
                  className={`mt-2 text-sm ${
                    status.startsWith("Error")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
