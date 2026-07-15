"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, Send, ChevronDown } from "lucide-react";
import { socialLinks } from "@/lib/data";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const roles = [
  "Software Engineer",
  "Full Stack Web Developer",
  "Competitive Programmer",
  "Building Scalable Applications",
];

function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-20 right-1/4 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[100px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-[80px]"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <FloatingOrbs />
      <FloatingParticles />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 lg:flex-row lg:gap-16">
        {/* Left — Text content */}
        <motion.div
          className="order-2 lg:order-1 flex-1 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Open to opportunities
            </motion.span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="mt-8 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="hero-gradient-text bg-gradient-to-r from-primary via-violet-500 to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
                Shovon Das Chowdhury
              </span>
            </span>
          </motion.h1>

          {/* Rotating role */}
          <motion.div variants={itemVariants} className="relative mt-5 h-10 sm:h-12">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                className="absolute inset-x-0 text-xl text-muted-foreground sm:text-2xl"
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0 mx-auto"
          >
            A problem solver turned software engineer with 1400+ coding problems solved
            and 2+ years of building web applications. Now focused on crafting complex,
            scalable full stack solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <motion.a
              href="#projects"
              className="group relative box-border inline-flex h-12 w-full sm:w-auto sm:min-w-[200px] items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-md"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              View Projects
              <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group box-border inline-flex h-12 w-full sm:w-auto sm:min-w-[200px] items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-7 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-accent"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Download Resume
              <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-10 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-transparent p-3 text-muted-foreground transition-colors hover:border-border hover:bg-accent hover:text-foreground"
                aria-label={link.name}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Profile image */}
        <motion.div
          className="order-1 lg:order-2 relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Rotating binary ring */}
          <motion.div
            className="absolute -inset-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 300 300" className="h-full w-full">
              <defs>
                <path
                  id="binaryCircle"
                  d="M 150,150 m -135,0 a 135,135 0 1,1 270,0 a 135,135 0 1,1 -270,0"
                  fill="none"
                />
              </defs>
              <text className="fill-primary/30" style={{ fontSize: "7px", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "1px" }}>
                <textPath href="#binaryCircle">
                  010101100101001101010010110010101011001010011010100101100101010110010100110101001011001010101100101001101010010110010101011001010011010100101100101010110010100110101001011001010
                </textPath>
              </text>
            </svg>
          </motion.div>
          {/* Counter-rotating inner binary ring */}
          <motion.div
            className="absolute -inset-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 300 300" className="h-full w-full">
              <defs>
                <path
                  id="binaryCircleInner"
                  d="M 150,150 m -140,0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0"
                  fill="none"
                />
              </defs>
              <text className="fill-primary/15" style={{ fontSize: "6px", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.5px" }}>
                <textPath href="#binaryCircleInner">
                  100101101001101010010110010101011001010011010100101100101010110010100110101001011001010101100101001101010010110010101011001010011010100101100101010110010100110101001011001010101
                </textPath>
              </text>
            </svg>
          </motion.div>
          {/* Soft glow behind image */}
          <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" />
          {/* Image container */}
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-primary/30 sm:h-96 sm:w-96">
            <Image
              src="/portfolio.png"
              alt="Shovon Das Chowdhury"
              fill
              sizes="(min-width: 640px) 384px, 288px"
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
