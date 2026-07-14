import { Mail, type LucideIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

// ─── Social Links ────────────────────────────────────────────
type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export type SocialLink = {
  name: string;
  href: string;
  icon: IconComponent;
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/shovonchowdhury",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shovon-das-chowdhury-431aa7250/",
    icon: LinkedinIcon,
  },
  {
    name: "Email",
    href: "mailto:shovondaschowdhury1560@gmail.com",
    icon: Mail,
  },
];

// ─── Navigation ──────────────────────────────────────────────
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Problem Solving", href: "#problem-solving" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

// ─── Tech Stack ──────────────────────────────────────────────
export type TechCategory = {
  title: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "Shadcn UI",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST API", "JWT", "Authentication"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Git", "GitHub", "Vercel", "Render", "Railway"],
  },
  {
    title: "Payment",
    items: ["Stripe", "PayPal"],
  },
  {
    title: "Other",
    items: ["WebSocket", "Socket.io", "Firebase", "Cloudinary"],
  },
];

// ─── Projects ────────────────────────────────────────────────
export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "hr-management-system",
    title: "HR Management System",
    description:
      "A comprehensive HR management platform for managing employees, attendance tracking, leave management, and analytics dashboard with role-based access control.",
    image: "/projects/hr-system.png",
    techStack: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Role-based authentication & authorization",
      "Employee management with CRUD operations",
      "Attendance tracking with timezone support",
      "Leave management system",
      "Analytics dashboard with charts",
      "Responsive design",
    ],
    challenges: [
      "Solved timezone issues while storing attendance records across different regions.",
      "Implemented complex role-based access control with granular permissions.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "stripe-billing-system",
    title: "Stripe Billing System",
    description:
      "A complete subscription billing system with Stripe integration, supporting multiple plans, trial periods, and automated webhook synchronization.",
    image: "/projects/stripe-billing.png",
    techStack: ["Next.js", "Node.js", "Stripe", "Prisma", "PostgreSQL"],
    features: [
      "Subscription plan management",
      "Webhook event synchronization",
      "Free trial & upgrade flows",
      "Payment method management",
      "Billing portal integration",
      "Invoice generation",
    ],
    challenges: [
      "Built Stripe subscription management with webhook synchronization.",
      "Handled edge cases in subscription state transitions (trial → active → cancelled).",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "travel-crm",
    title: "Travel CRM",
    description:
      "A customer relationship management system designed for travel agencies with kanban boards, lead tracking, and data import capabilities.",
    image: "/projects/travel-crm.png",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    features: [
      "Kanban board for lead management",
      "Excel data import/export",
      "Advanced search & filters",
      "Lead tracking & pipeline",
      "Customer communication logs",
      "Responsive design",
    ],
    challenges: [
      "Implemented drag-and-drop kanban with optimistic updates for seamless UX.",
      "Built efficient Excel import handling for large datasets.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "meetmax",
    title: "MeetMax",
    description:
      "A social media application with real-time features, user profiles, and interactive content sharing capabilities.",
    image: "/projects/meetmax.png",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    features: [
      "User profiles & authentication",
      "Real-time messaging",
      "Post creation & interactions",
      "News feed algorithm",
      "Notification system",
      "Responsive design",
    ],
    challenges: [
      "Implemented real-time messaging with Socket.io for instant communication.",
      "Built an efficient news feed algorithm with pagination.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

// ─── Experience ──────────────────────────────────────────────
export type Experience = {
  title: string;
  company: string;
  period: string;
  type: "full-time" | "internship";
  technologies: string[];
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    title: "Junior Software Engineer",
    company: "Technext Limited",
    period: "Jul 2025 - Present",
    type: "full-time",
    technologies: ["React", "Next.js", "Node.js", "Prisma", "PostgreSQL", "Zustand", "Tailwind CSS"],
    responsibilities: [
      "Built production-ready React and Next.js applications with scalable backend APIs using Node.js and Prisma.",
      "Developed multi-tenant SaaS features supporting 18+ locales with real-time collaboration.",
      "Implemented complex state management solutions using Zustand and React Query.",
      "Collaborated with cross-functional teams to deliver features on tight deadlines.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Technext Limited",
    period: "Apr 2025 - Jun 2025",
    type: "internship",
    technologies: ["React", "Next.js", "Node.js", "REST API", "Git"],
    responsibilities: [
      "Contributed to frontend development using React and Next.js in a production environment.",
      "Assisted in building RESTful APIs with Node.js and integrated third-party services.",
      "Participated in code reviews and adopted best practices for clean, maintainable code.",
      "Gained hands-on experience with agile development workflows and team collaboration.",
    ],
  },
];

// ─── Education ──────────────────────────────────────────────
export type Education = {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  location: string;
};

export const education: Education[] = [
  {
    institution: "Sylhet Engineering College",
    degree: "B.Sc in Computer Science and Engineering (CSE)",
    period: "Jan 2019 - Feb 2024",
    cgpa: "3.68 out of 4.00",
    location: "Sylhet, Bangladesh",
  },
];

// ─── Problem Solving ─────────────────────────────────────────
export type Platform = {
  name: string;
  problemsSolved: string;
  maxRating?: number;
  profileUrl: string;
};

export const platforms: Platform[] = [
  {
    name: "Codeforces",
    problemsSolved: "1150+",
    maxRating: 1411,
    profileUrl: "https://codeforces.com/profile/shovon60",
  },
  {
    name: "CodeChef",
    problemsSolved: "60+",
    maxRating: 1782,
    profileUrl: "https://www.codechef.com/users/shovon60",
  },
  {
    name: "Other Platforms",
    problemsSolved: "250+",
    profileUrl: "#",
  },
];

// ─── Publications ───────────────────────────────────────────
export type Publication = {
  title: string;
  conference: string;
  year: string;
  publicationUrl?: string;
};

export const publications: Publication[] = [
  {
    title: "S-DrivingRecords: Blockchain Based Enhancing Trust and Transparency in Driving Records Using Hyperledger Fabric",
    conference: "IEEE Xplore Conference",
    year: "2024",
    publicationUrl: "https://ieeexplore.ieee.org/document/10499543",
  },
  {
    title: "SafetyNet: A Decentralized Police Complaint Management System for Bangladesh Using Blockchain Technology",
    conference: "IEEE Xplore Conference",
    year: "2024",
    publicationUrl: "https://ieeexplore.ieee.org/document/10499556",
  },
];
