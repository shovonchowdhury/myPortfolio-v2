"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Code2, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: 1.5, suffix: "+", decimals: 1 },
  { icon: Trophy, label: "Projects Built", value: 10, suffix: "+" },
  { icon: Code2, label: "Problems Solved", value: 1400, suffix: "+" },
  { icon: GraduationCap, label: "Research Papers", value: 1, suffix: "" },
];

const highlights = [
  { text: "Software Engineer", color: "from-indigo-500 to-violet-500" },
  { text: "1400+ Problems Solved", color: "from-emerald-500 to-teal-500" },
  { text: "10+ Projects Built", color: "from-amber-500 to-orange-500" },
];

function AnimatedCounter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
  );
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function About() {
  return (
    <section id="about" className="relative px-6 py-14 sm:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[120px]"
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/6 blur-[100px]"
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading title="About Me" />

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-5">
          {/* Text — takes 3 cols */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Terminal-style bio card */}
            <div className="group relative rounded-2xl border border-border/60 bg-slate-900 backdrop-blur-sm overflow-hidden">
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 via-violet-500/20 to-primary/20 blur-sm -z-10" />

              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <span className="ml-2 text-xs text-slate-400 font-mono">about-me.ts</span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 font-mono text-sm leading-relaxed">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-blue-400">developer</span>{" "}
                  <span className="text-slate-400">=</span>{" "}
                  <span className="text-slate-400">{"{"}</span>
                </motion.div>

                <motion.div
                  className="pl-6 space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p>
                    <span className="text-emerald-400">role</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-amber-400">&quot;Software Engineer&quot;</span>
                    <span className="text-slate-400">,</span>
                  </p>
                  <p>
                    <span className="text-emerald-400">domain</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-amber-400">&quot;Web Application Development&quot;</span>
                    <span className="text-slate-400">,</span>
                  </p>
                  <p>
                    <span className="text-emerald-400">passion</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-amber-400">&quot;Solving complex problems with smart solutions&quot;</span>
                    <span className="text-slate-400">,</span>
                  </p>
                  <p>
                    <span className="text-emerald-400">focus</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-slate-400">[</span>
                    <span className="text-amber-400">&quot;Scalable Apps&quot;</span>
                    <span className="text-slate-400">,</span>{" "}
                    <span className="text-amber-400">&quot;Clean UX&quot;</span>
                    <span className="text-slate-400">,</span>{" "}
                    <span className="text-amber-400">&quot;Problem Solving&quot;</span>
                    <span className="text-slate-400">],</span>
                  </p>
                  <p>
                    <span className="text-emerald-400">status</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-amber-400">&quot;Open to opportunities&quot;</span>
                    <span className="text-slate-400">,</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <span className="text-slate-400">{"}"}</span>
                  <span className="text-slate-400">;</span>
                  <motion.span
                    className="inline-block ml-1 w-2 h-4 bg-primary/70 align-middle"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5] }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Descriptive text below the terminal */}
            <motion.p
              className="text-base leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              With 1400+ competitive programming problems solved and hands-on
              experience building production applications, I bring strong
              problem-solving skills and practical engineering expertise to
              every project.
            </motion.p>

            {/* Highlight badges */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {highlights.map((h, i) => (
                <motion.span
                  key={h.text}
                  className={`inline-flex items-center rounded-full bg-gradient-to-r ${h.color} px-4 py-1.5 text-xs font-semibold text-white shadow-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {h.text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats — takes 2 cols */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-3 self-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group relative aspect-square rounded-2xl border border-border/60 bg-card/50 p-6 text-center backdrop-blur-sm overflow-hidden will-change-transform flex flex-col items-center justify-center"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon with animated ring */}
                <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center">
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/20"
                    whileHover={{ scale: 1.2, borderColor: "var(--primary)" }}
                    transition={{ duration: 0.3 }}
                  />
                  <stat.icon
                    className="relative text-primary transition-transform duration-300 group-hover:scale-110"
                    size={24}
                  />
                </div>

                {/* Animated counter */}
                <p className="text-3xl font-bold text-foreground">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {stat.label}
                </p>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
