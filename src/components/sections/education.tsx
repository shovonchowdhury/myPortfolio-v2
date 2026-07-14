"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-24 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[120px]"
          animate={{ x: [0, -25, 15, 0], y: [0, 15, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          title="Education"
          subtitle="My academic background"
        />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Top gradient bar */}
                <motion.div
                  className="h-[2px] bg-gradient-to-r from-primary via-violet-500 to-indigo-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "left" }}
                />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-violet-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative p-6 sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -15 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 250,
                        damping: 14,
                      }}
                      viewport={{ once: true }}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet-500 shadow-lg shadow-primary/20"
                    >
                      <GraduationCap size={24} className="text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {edu.institution}
                        </h3>
                        <p className="mt-1 text-base text-primary font-medium">
                          {edu.degree}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                          <MapPin size={14} />
                          {edu.location}
                        </span>
                        <motion.span
                          className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <Award size={12} />
                          CGPA: {edu.cgpa}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
