"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Users, CreditCard, Map, MessageCircle, BarChart3, Shield, Kanban, Zap } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";
import Link from "next/link";

/* ── Mock screenshot UIs ── */

function HRMockUI() {
  return (
    <div className="flex h-full w-full bg-slate-900 font-mono text-[10px]">
      {/* Sidebar */}
      <div className="w-[72px] shrink-0 border-r border-white/5 bg-slate-950 p-2 space-y-2">
        <div className="h-6 w-full rounded bg-indigo-500/20 flex items-center justify-center">
          <span className="text-indigo-400 text-[8px] font-bold">HR</span>
        </div>
        <div className="h-5 w-full rounded bg-indigo-500/10" />
        <div className="h-5 w-full rounded bg-white/5" />
        <div className="h-5 w-full rounded bg-white/5" />
        <div className="h-5 w-full rounded bg-white/5" />
      </div>
      {/* Main */}
      <div className="flex-1 p-3 space-y-2.5 overflow-hidden">
        <div className="flex gap-2">
          {[
            { label: "Employees", val: "248", color: "text-white" },
            { label: "Present", val: "231", color: "text-emerald-400" },
            { label: "On Leave", val: "12", color: "text-amber-400" },
            { label: "Depts", val: "8", color: "text-indigo-400" },
          ].map((s) => (
            <div key={s.label} className="flex-1 rounded-lg bg-slate-800/80 p-2">
              <p className="text-slate-500 text-[7px]">{s.label}</p>
              <p className={`text-sm font-bold ${s.color}`}>{s.val}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="flex-[2] rounded-lg bg-slate-800/80 p-2">
            <p className="text-slate-400 text-[8px] font-semibold mb-1.5">Attendance Overview</p>
            <svg viewBox="0 0 200 50" className="w-full h-8">
              <polyline points="0,40 30,30 60,35 90,20 120,25 150,15 200,22" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
              <polyline points="0,42 30,38 60,40 90,32 120,36 150,28 200,34" fill="none" stroke="#818cf8" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
            </svg>
          </div>
          <div className="flex-1 rounded-lg bg-slate-800/80 p-2">
            <p className="text-slate-400 text-[8px] font-semibold mb-1">Activity</p>
            <div className="space-y-1">
              <div className="h-3 rounded bg-slate-700/50 w-full" />
              <div className="h-3 rounded bg-slate-700/30 w-full" />
              <div className="h-3 rounded bg-slate-700/50 w-4/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StripeMockUI() {
  return (
    <div className="flex h-full w-full bg-slate-900 font-mono text-[10px]">
      <div className="w-[72px] shrink-0 border-r border-white/5 bg-slate-950 p-2 space-y-2">
        <div className="h-6 w-full rounded bg-violet-500/20 flex items-center justify-center">
          <CreditCard size={10} className="text-violet-400" />
        </div>
        <div className="h-5 w-full rounded bg-violet-500/10" />
        <div className="h-5 w-full rounded bg-white/5" />
        <div className="h-5 w-full rounded bg-white/5" />
      </div>
      <div className="flex-1 p-3 space-y-2.5 overflow-hidden">
        <p className="text-slate-400 text-[8px] font-semibold">Subscription Plans</p>
        <div className="flex gap-2">
          {[
            { name: "Starter", price: "$9", active: false },
            { name: "Pro", price: "$29", active: true },
            { name: "Enterprise", price: "$99", active: false },
          ].map((p) => (
            <div
              key={p.name}
              className={`flex-1 rounded-lg p-2 ${p.active ? "bg-indigo-500/10 border border-indigo-500/40" : "bg-slate-800/80 border border-transparent"}`}
            >
              {p.active && <span className="text-[6px] bg-indigo-500 text-white px-1.5 py-0.5 rounded-full font-bold">POPULAR</span>}
              <p className={`font-semibold mt-1 ${p.active ? "text-indigo-400" : "text-slate-300"}`}>{p.name}</p>
              <p className={`text-sm font-bold ${p.active ? "text-indigo-300" : "text-white"}`}>{p.price}<span className="text-[7px] text-slate-500">/mo</span></p>
              <div className="mt-1 space-y-0.5">
                <div className="h-1.5 rounded bg-slate-700/50 w-full" />
                <div className="h-1.5 rounded bg-slate-700/30 w-3/4" />
              </div>
              <div className={`mt-1.5 h-4 rounded text-[7px] flex items-center justify-center font-bold ${p.active ? "bg-indigo-500 text-white" : "bg-slate-700 text-slate-300"}`}>
                {p.active ? "Get Started" : "Select"}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-slate-800/80 p-2">
          <p className="text-slate-400 text-[8px] font-semibold mb-1">Recent Invoices</p>
          <div className="space-y-1">
            {["INV-001", "INV-002", "INV-003"].map((inv, i) => (
              <div key={inv} className={`flex justify-between items-center h-4 px-1.5 rounded ${i % 2 === 0 ? "bg-slate-700/30" : ""}`}>
                <span className="text-slate-500">{inv}</span>
                <span className="text-emerald-400 text-[7px]">Paid</span>
                <span className="text-slate-300">$29.00</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CRMMockUI() {
  return (
    <div className="flex h-full w-full bg-slate-900 font-mono text-[10px]">
      <div className="w-[72px] shrink-0 border-r border-white/5 bg-slate-950 p-2 space-y-2">
        <div className="h-6 w-full rounded bg-emerald-500/20 flex items-center justify-center">
          <Map size={10} className="text-emerald-400" />
        </div>
        <div className="h-5 w-full rounded bg-emerald-500/10" />
        <div className="h-5 w-full rounded bg-white/5" />
        <div className="h-5 w-full rounded bg-white/5" />
      </div>
      <div className="flex-1 p-3 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <p className="text-slate-400 text-[8px] font-semibold">Lead Pipeline</p>
          <div className="h-4 w-14 rounded bg-emerald-500 flex items-center justify-center text-[7px] text-white font-bold">+ Lead</div>
        </div>
        <div className="flex gap-1.5 h-[calc(100%-24px)]">
          {[
            { title: "NEW", count: 3, color: "bg-slate-500", items: ["Maldives Trip", "Europe Tour", "Bali Adv."] },
            { title: "CONTACTED", count: 2, color: "bg-blue-500", items: ["Thailand", "Japan Tour"] },
            { title: "PROPOSAL", count: 1, color: "bg-amber-500", items: ["Dubai Luxury"] },
            { title: "WON", count: 2, color: "bg-emerald-500", items: ["Paris", "NYC"] },
          ].map((col) => (
            <div key={col.title} className="flex-1 rounded-lg bg-slate-800/50 p-1.5 space-y-1">
              <div className="flex items-center gap-1">
                <div className={`h-1.5 w-1.5 rounded-full ${col.color}`} />
                <span className="text-[7px] text-slate-500 font-bold">{col.title}</span>
                <span className="text-[7px] text-slate-600 ml-auto">{col.count}</span>
              </div>
              {col.items.map((item) => (
                <div key={item} className="rounded bg-slate-700/50 p-1.5 border border-white/5">
                  <p className="text-[8px] text-slate-300 font-medium">{item}</p>
                  <div className="h-1 rounded bg-slate-600/50 w-3/5 mt-0.5" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialMockUI() {
  return (
    <div className="flex h-full w-full bg-slate-900 font-mono text-[10px]">
      <div className="w-[72px] shrink-0 border-r border-white/5 bg-slate-950 p-2 space-y-2">
        <div className="h-6 w-full rounded bg-pink-500/20 flex items-center justify-center">
          <MessageCircle size={10} className="text-pink-400" />
        </div>
        <div className="h-5 w-full rounded bg-pink-500/10" />
        <div className="h-5 w-full rounded bg-white/5" />
        <div className="h-5 w-full rounded bg-white/5" />
      </div>
      <div className="flex-1 p-3 space-y-2 overflow-hidden">
        {/* Profile header */}
        <div className="flex items-center gap-2 rounded-lg bg-slate-800/80 p-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-violet-500" />
          <div>
            <p className="text-slate-200 text-[9px] font-bold">John Doe</p>
            <p className="text-slate-500 text-[7px]">@johndoe • 1.2k followers</p>
          </div>
          <div className="ml-auto h-4 w-12 rounded bg-pink-500 flex items-center justify-center text-[7px] text-white font-bold">Follow</div>
        </div>
        {/* Posts */}
        {[1, 2].map((p) => (
          <div key={p} className="rounded-lg bg-slate-800/80 p-2 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <div className="h-4 w-4 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400" />
              <span className="text-slate-300 text-[8px] font-medium">User {p}</span>
              <span className="text-slate-600 text-[7px] ml-auto">{p}h ago</span>
            </div>
            <div className="h-2 rounded bg-slate-700/50 w-full" />
            <div className="h-2 rounded bg-slate-700/30 w-4/5" />
            <div className="flex gap-3 pt-0.5">
              <span className="text-slate-500 text-[7px]">♥ 24</span>
              <span className="text-slate-500 text-[7px]">💬 8</span>
              <span className="text-slate-500 text-[7px]">↗ 3</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockUIs: Record<string, () => React.JSX.Element> = {
  "hr-management-system": HRMockUI,
  "stripe-billing-system": StripeMockUI,
  "travel-crm": CRMMockUI,
  meetmax: SocialMockUI,
};

const projectIcons: Record<string, React.JSX.Element> = {
  "hr-management-system": <Users size={16} />,
  "stripe-billing-system": <CreditCard size={16} />,
  "travel-crm": <Kanban size={16} />,
  meetmax: <MessageCircle size={16} />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-14 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-0 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[120px]"
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[100px]"
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of the projects I've built"
        />

        <motion.div
          className="grid gap-5 sm:gap-8 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => {
            const MockUI = mockUIs[project.slug];

            return (
              <motion.div
                key={project.slug}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm flex flex-col"
                style={{ position: "relative" }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Mock Screenshot */}
                <div className="relative aspect-video overflow-hidden border-b border-border/40">
                  {/* Browser chrome */}
                  <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 bg-slate-950/90 px-3 py-1.5 backdrop-blur-sm">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500/60" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
                      <div className="h-2 w-2 rounded-full bg-green-500/60" />
                    </div>
                    <div className="mx-2 flex-1 rounded bg-slate-800/80 px-2 py-0.5 text-[8px] text-slate-500 font-mono">
                      localhost:3000
                    </div>
                  </div>
                  {/* Mock UI */}
                  <div className="pt-6 h-full">
                    {MockUI && (
                      <motion.div
                        className="h-full w-full origin-top transition-transform duration-700 ease-out group-hover:scale-105"
                      >
                        <MockUI />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-4 sm:p-6 space-y-4 flex flex-col flex-1">
                  {/* Title row */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {projectIcons[project.slug]}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {project.features.slice(0, 4).map((feature) => (
                      <p
                        key={feature}
                        className="flex items-start gap-1.5 text-xs text-muted-foreground"
                      >
                        <span className="mt-0.5 text-primary shrink-0">&#10003;</span>
                        {feature}
                      </p>
                    ))}
                  </div>

                  {/* Divider + Links pinned to bottom */}
                  <div className="!mt-auto pt-4">
                  <div className="h-px bg-border/50 mb-4" />
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/50 px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <GithubIcon size={12} />
                        Source
                      </motion.a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary group/link"
                    >
                      Case Study
                      <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
