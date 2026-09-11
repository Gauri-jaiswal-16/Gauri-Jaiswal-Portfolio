"use client";

import { useState, FormEvent } from "react";
import { Mail, Github, Linkedin, FileText, Send } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import CopyEmailButton from "./CopyEmailButton";
import { profile } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Unable to send message. Please try again later.");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[900px] -translate-x-1/2 rounded-full bg-soft-accent/40 blur-[110px] dark:bg-primary/10"
      />
      <div className="section-container relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-line dark:border-line-dark bg-card dark:bg-card-dark px-6 py-14 shadow-soft sm:px-10 md:py-20">
          {/* subtle corner accent, not a full background */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Let&apos;s talk</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink dark:text-ink-dark sm:text-4xl">
                Open to internships, freelance design work, and early AI/ML opportunities.
              </h2>
              <p className="mt-4 max-w-md text-muted dark:text-muted-dark">
                If you have design work, or you&apos;re building something in the AI space and
                want a fast-learning collaborator, I&apos;d love to hear from you.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Magnetic strength={8}>
                  <a
                    href={`mailto:${profile.email}`}
                    className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-lift"
                  >
                    <Mail size={15} /> {profile.email}
                  </a>
                </Magnetic>
                <CopyEmailButton email={profile.email} className="h-11 w-11" />
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark transition-colors hover:border-accent hover:text-accent"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark transition-colors hover:border-accent hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark transition-colors hover:border-accent hover:text-accent"
                  aria-label="Download resume"
                >
                  <FileText size={17} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl border border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark p-6"
              >
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-muted-dark">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="focus-ring mt-1.5 w-full rounded-lg border border-line dark:border-line-dark bg-card dark:bg-card-dark px-3.5 py-2.5 text-sm text-ink dark:text-ink-dark placeholder:text-muted/60 outline-none transition-colors focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-muted-dark">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="focus-ring mt-1.5 w-full rounded-lg border border-line dark:border-line-dark bg-card dark:bg-card-dark px-3.5 py-2.5 text-sm text-ink dark:text-ink-dark placeholder:text-muted/60 outline-none transition-colors focus:border-accent"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-muted-dark">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="focus-ring mt-1.5 w-full rounded-lg border border-line dark:border-line-dark bg-card dark:bg-card-dark px-3.5 py-2.5 text-sm text-ink dark:text-ink-dark placeholder:text-muted/60 outline-none transition-colors focus:border-accent"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
                <Magnetic strength={8} className="block w-full">
                  <button
                    type="submit"
                    disabled={sending}
                    className="focus-ring relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 hover:translate-x-full" />
                    <Send size={15} /> {sending ? "Sending…" : "Send message"}
                  </button>
                </Magnetic>
                {sent && (
                  <p className="text-center text-xs text-primary dark:text-soft-accent">
                    Message sent successfully — thank you!
                  </p>
                )}
                {error && (
                  <p className="text-center text-xs text-destructive dark:text-destructive-light">
                    {error}
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
