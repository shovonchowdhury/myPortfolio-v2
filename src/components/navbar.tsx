"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="group flex items-center gap-2 transition-transform hover:scale-105"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-violet-500 to-fuchsia-500 shadow-lg shadow-primary/25">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-sm"
            >
              <path
                d="M8 4L4 8L8 12"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.6"
              />
              <path
                d="M16 12L20 16L16 20"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.6"
              />
              <path
                d="M14 4L10 20"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>
          </div>
          <span className="text-lg font-bold text-foreground hidden sm:block tracking-tight">
            shovon<span className="text-primary font-mono">.dev</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      const target = document.querySelector(link.href);
                      if (target) {
                        setTimeout(() => {
                          target.scrollIntoView({ behavior: "smooth" });
                        }, 300);
                      }
                    }}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
