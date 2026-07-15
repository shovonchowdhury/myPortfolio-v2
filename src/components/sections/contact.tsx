"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { socialLinks } from "@/lib/data";
import { sendContactEmail } from "@/lib/actions";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    const result = await sendContactEmail(formData);

    if (result.error) {
      setError(result.error);
      setSending(false);
      return;
    }

    setSending(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contact" className="relative px-6 py-14 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[120px]"
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[100px]"
          animate={{ x: [0, -25, 15, 0], y: [0, 15, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to chat? Let's connect!"
        />

        {/* Info row */}
        <motion.div
          className="mb-6 sm:mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground">
            <MapPin size={14} className="text-primary" />
            Sylhet, Bangladesh
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground max-w-full overflow-hidden">
            <Mail size={14} className="text-primary shrink-0" />
            <span className="truncate">shovondaschowdhury1560@gmail.com</span>
          </span>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mb-6 sm:mb-10 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl border border-border/50 bg-card/30 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground hover:bg-card/60"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <link.icon size={14} />
              </div>
              <span className="hidden sm:block">{link.name}</span>
              <ArrowUpRight size={12} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
        >
          <div className="h-[2px] bg-gradient-to-r from-primary via-violet-500 to-indigo-500" />

          <div style={{ padding: "24px" }} className="sm:!p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-3 sm:gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full resize-none rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/10"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm text-red-500">
                <AlertCircle size={14} />
                {error}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={submitted || sending}
              className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 disabled:opacity-70"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              {submitted ? (
                <>
                  <CheckCircle2 size={16} />
                  Message Sent!
                </>
              ) : sending ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </motion.button>
          </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
