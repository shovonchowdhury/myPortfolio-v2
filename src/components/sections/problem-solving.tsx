"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { ExternalLink, Trophy, Swords, Flame, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { platforms } from "@/lib/data";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) => Math.round(v).toLocaleString());
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(motionVal, value, { duration: 2.2, ease: "easeOut" });
    }
  }, [isInView, motionVal, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

/* ── Platform logos ── */


type PlatformStyle = {
  icon: LucideIcon;
  accent: string;
  accentText: string;
};

const platformStyles: Record<string, PlatformStyle> = {
  Codeforces: {
    icon: Swords,
    accent: "from-blue-500 to-cyan-500",
    accentText: "text-cyan-400",
  },
  CodeChef: {
    icon: Flame,
    accent: "from-amber-500 to-yellow-400",
    accentText: "text-amber-400",
  },
  "Other Platforms": {
    icon: Code2,
    accent: "from-violet-500 to-purple-500",
    accentText: "text-violet-400",
  },
};

function parseCount(s: string) {
  return parseInt(s.replace(/[^0-9]/g, ""), 10) || 0;
}

export function ProblemSolving() {
  const total = platforms.reduce((s, p) => s + parseCount(p.problemsSolved), 0);

  return (
    <section id="problem-solving" className="relative px-6 py-24 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[120px]"
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 h-[350px] w-[350px] rounded-full bg-violet-500/5 blur-[100px]"
          animate={{ x: [0, -25, 15, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          title="Problem Solving"
          subtitle="Sharpening algorithmic thinking across competitive platforms"
        />

        {/* Hero stat */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-md"
        >
          <div className="group relative rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
            <motion.div
              className="h-[2px] bg-gradient-to-r from-primary via-violet-500 to-primary bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative p-8 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 12 }}
                viewport={{ once: true }}
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet-500 shadow-lg shadow-primary/25"
              >
                <Trophy size={28} className="text-white" />
              </motion.div>
              <p className="text-5xl font-bold text-foreground">
                <AnimatedNumber value={total} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Programming Problems Solved
              </p>

            </div>
          </div>
        </motion.div>

        {/* Platform cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {platforms.map((platform, i) => {
            const style = platformStyles[platform.name] ?? {
              icon: Code2,
              accent: "from-gray-500 to-gray-600",
              accentText: "text-gray-400",
            };
            const Icon = style.icon;
            const count = parseCount(platform.problemsSolved);
            const isLink = platform.profileUrl !== "#";

            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.accent} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`} />

                <div className="relative p-6 flex flex-col items-center text-center">
                  {/* Logo */}
                  <motion.div
                    className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${style.accent} shadow-lg`}
                    initial={{ scale: 0, rotate: -15 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.12,
                      type: "spring",
                      stiffness: 250,
                      damping: 14,
                    }}
                    viewport={{ once: true }}
                  >
                    <Icon size={26} className="text-white" />
                  </motion.div>

                  {/* Platform name */}
                  <h3 className="text-lg font-bold text-foreground">
                    {platform.name}
                  </h3>

                  {/* Count */}
                  <p className={`mt-1 text-3xl font-bold ${style.accentText}`}>
                    <AnimatedNumber value={count} suffix="+" />
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">problems solved</p>

                  {/* Max rating */}
                  {platform.maxRating && (
                    <motion.div
                      className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-accent/50 px-3 py-1 text-xs text-muted-foreground"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      Max Rating: <span className={`font-bold ${style.accentText}`}>{platform.maxRating}</span>
                    </motion.div>
                  )}


                  {/* View profile link */}
                  {isLink && (
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      <ExternalLink size={12} />
                      View Profile
                    </div>
                  )}
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${style.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
              </motion.div>
            );

            return isLink ? (
              <a
                key={platform.name}
                href={platform.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <div key={platform.name}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
