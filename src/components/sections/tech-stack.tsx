"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { techStack } from "@/lib/data";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  CreditCard,
  Puzzle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categoryMeta: Record<string, { icon: LucideIcon; gradient: string }> = {
  Frontend: { icon: Monitor, gradient: "from-blue-500 to-cyan-500" },
  Backend: { icon: Server, gradient: "from-emerald-500 to-teal-500" },
  Database: { icon: Database, gradient: "from-violet-500 to-purple-500" },
  "Cloud & DevOps": { icon: Cloud, gradient: "from-orange-500 to-amber-500" },
  Payment: { icon: CreditCard, gradient: "from-pink-500 to-rose-500" },
  Other: { icon: Puzzle, gradient: "from-indigo-500 to-blue-500" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export function TechStack() {
  return (
    <section id="tech-stack" className="relative px-6 py-24 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[120px]"
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[100px]"
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies I work with"
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techStack.map((category) => {
            const meta = categoryMeta[category.title] ?? {
              icon: Puzzle,
              gradient: "from-gray-500 to-slate-500",
            };
            const Icon = meta.icon;

            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -4, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{ position: "relative" }}
                className="group relative rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
                />

                {/* Header */}
                <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${meta.gradient} shadow-lg`}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="mx-5 h-px bg-border/50" />

                {/* Chips */}
                <motion.div
                  className="flex flex-wrap gap-2 px-5 pt-4 pb-5"
                  variants={containerVariants}
                >
                  {category.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={chipVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      className="cursor-default rounded-lg border border-border/50 bg-accent/50 px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${meta.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
