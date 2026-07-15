"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { publications } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Research() {
  return (
    <section id="publications" className="relative px-6 py-14 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[120px]"
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-violet-500/5 blur-[100px]"
          animate={{ x: [0, -25, 15, 0], y: [0, 15, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          title="Publications"
          subtitle="Published research in IEEE conferences"
        />

        {/* IEEE badge */}
        <motion.div
          className="mx-auto mb-6 sm:mb-10 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary">
            <Award size={16} />
            {publications.length} Papers Published in IEEE Xplore
          </span>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {publications.map((paper, i) => (
            <motion.div
              key={paper.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
            >
              {/* Top gradient bar */}
              <motion.div
                className="h-[2px] bg-gradient-to-r from-primary via-violet-500 to-indigo-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
              />

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-violet-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative p-6 sm:p-7">
                <div className="flex gap-5">
                  {/* Icon */}
                  <motion.div
                    className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet-500 shadow-lg shadow-primary/20"
                    initial={{ scale: 0, rotate: -15 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.15,
                      type: "spring",
                      stiffness: 250,
                      damping: 14,
                    }}
                    viewport={{ once: true }}
                  >
                    <BookOpen size={22} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                        {paper.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-semibold text-blue-500 dark:text-blue-400">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                          </svg>
                          {paper.conference}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">
                          {paper.year}
                        </span>
                      </div>
                    </div>

                    {/* Link */}
                    {paper.publicationUrl && (
                      <motion.a
                        href={paper.publicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary group/link"
                        whileHover={{ x: 3 }}
                      >
                        <ExternalLink size={13} />
                        View Publication
                      </motion.a>
                    )}
                  </div>

                  {/* Paper number badge */}
                  <div className="hidden sm:flex items-start">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/80 border border-border/50 text-xs font-bold text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
