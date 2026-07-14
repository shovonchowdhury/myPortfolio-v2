"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/lib/data";
import { useRef } from "react";

function getDuration(period: string) {
  const parts = period.split(" - ");
  if (parts.length < 2) return "";
  const parseDate = (s: string) => {
    if (s.toLowerCase() === "present") return new Date();
    const [mon, yr] = s.split(" ");
    const monthIndex = [
      "Jan","Feb","Mar","Apr","May","Jun",
      "Jul","Aug","Sep","Oct","Nov","Dec",
    ].indexOf(mon);
    return new Date(Number(yr), monthIndex >= 0 ? monthIndex : 0);
  };
  const start = parseDate(parts[0].trim());
  const end = parseDate(parts[1].trim());
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (months < 1) return "< 1 month";
  if (months === 1) return "1 month";
  if (months < 12) return `${months} months`;
  const yrs = Math.floor(months / 12);
  const rem = months % 12;
  if (rem === 0) return `${yrs} yr${yrs > 1 ? "s" : ""}`;
  return `${yrs} yr${yrs > 1 ? "s" : ""} ${rem} mo`;
}

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  const isPresent = (period: string) =>
    period.toLowerCase().includes("present");

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative px-6 py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[120px]"
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 h-[350px] w-[350px] rounded-full bg-violet-500/5 blur-[100px]"
          animate={{ x: [0, -20, 15, 0], y: [0, 15, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="relative">
          {/* Scroll-driven timeline line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px hidden sm:block">
            <div className="absolute inset-0 bg-border/30" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-violet-500"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, i) => {
              const current = isPresent(exp.period);
              const duration = getDuration(exp.period);

              return (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="relative sm:pl-20"
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 sm:left-0 top-0 hidden sm:flex flex-col items-center">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.2 + i * 0.15,
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Glow ring for current */}
                      {current && (
                        <>
                          <motion.div
                            className="absolute -inset-2 rounded-full bg-primary/20 blur-md"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.5, 0.15, 0.5],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute -inset-1 rounded-full border border-primary/30"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.6, 0, 0.6],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </>
                      )}
                      <div
                        className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-lg ${
                          current
                            ? "border-primary bg-background text-primary shadow-primary/20"
                            : "border-border/80 bg-background text-muted-foreground shadow-none"
                        }`}
                      >
                        {exp.type === "internship" ? (
                          <GraduationCap size={18} />
                        ) : (
                          <Briefcase size={18} />
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    className={`group relative overflow-hidden rounded-2xl border backdrop-blur-sm ${
                      current
                        ? "border-primary/25 bg-card/70"
                        : "border-border/50 bg-card/40"
                    }`}
                    whileHover={{ y: -4, scale: 1.005 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {/* Top gradient bar */}
                    {current && (
                      <motion.div
                        className="h-[2px] bg-gradient-to-r from-primary via-violet-500 to-indigo-500"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ transformOrigin: "left" }}
                      />
                    )}

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-violet-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative p-6 sm:p-7">
                      {/* Header row */}
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h3 className="text-xl font-bold text-foreground">
                              {exp.title}
                            </h3>
                            {current && (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-500">
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </span>
                                Current
                              </span>
                            )}
                            {!current && (
                              <span className="rounded-full bg-accent/80 border border-border/50 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                                {exp.type === "internship"
                                  ? "Internship"
                                  : "Full-time"}
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                            <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                              <Building2 size={14} />
                              {exp.company}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                              <Calendar size={14} />
                              {exp.period}
                            </span>
                            {duration && (
                              <span className="text-muted-foreground/60 text-xs">
                                ({duration})
                              </span>
                            )}
                            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                              <MapPin size={14} />
                              Dhaka, Bangladesh
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="mt-5 space-y-2.5">
                        {exp.responsibilities.map((item, j) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.4 + j * 0.08,
                              duration: 0.4,
                            }}
                            viewport={{ once: true }}
                            className="group/item flex gap-3 text-sm leading-relaxed text-muted-foreground hover:text-foreground/80 transition-colors"
                          >
                            <ChevronRight
                              size={14}
                              className="mt-1 shrink-0 text-primary/50 group-hover/item:text-primary transition-colors"
                            />
                            <span>{item}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <motion.div
                        className="mt-5 flex flex-wrap gap-1.5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {exp.technologies.map((tech, j) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.65 + j * 0.04 }}
                            viewport={{ once: true }}
                            className="rounded-md border border-primary/15 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary/80"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline end marker */}
          <motion.div
            className="absolute left-[18px] -bottom-2 hidden sm:block"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            <div className="h-3 w-3 rounded-full border-2 border-border bg-card" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
