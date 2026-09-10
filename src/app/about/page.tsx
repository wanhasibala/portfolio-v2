import React from "react";
import Footer from "../(home)/Footer";
import Image from "next/image";
import { Metadata } from "next";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Database,
  Layers,
  Wrench,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Wan Hasib Al Aslamy — Software Engineer (S1 Informatics Engineering) with 2+ years of experience building web applications with Next.js, React, Node.js (NestJS), Laravel, and LLM API integrations.",
};

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5 text-emerald-500" />,
    skills: ["JavaScript (ES6+)", "TypeScript", "PHP", "Go"],
  },
  {
    title: "Frontend / UI",
    icon: <Layers className="w-5 h-5 text-indigo-500" />,
    skills: ["React.js", "Next.js (App Router)", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    title: "Backend & APIs",
    icon: <Wrench className="w-5 h-5 text-sky-500" />,
    skills: ["Node.js (NestJS)", "Laravel", "Go", "RESTful API Design"],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-amber-500" />,
    skills: ["PostgreSQL", "MySQL (Schema & Queries)", "SQL Server"],
  },
  {
    title: "AI & LLM Integration",
    icon: <Sparkles className="w-5 h-5 text-purple-500" />,
    skills: [
      "Claude API Integration",
      "Prompt Engineering",
      "AI-Assisted Development Workflows",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Briefcase className="w-5 h-5 text-rose-500" />,
    skills: ["Git & GitHub", "Docker", "Technical Documentation", "CI/CD"],
  },
];

const experiences = [
  {
    role: "Technical Analyst (Full Stack Developer)",
    company: "PT. Avolut Global Indonesia",
    period: "2024 – Present",
    type: "Full-time",
    points: [
      "Developed and maintained web applications end-to-end using React.js, Next.js, Node.js (NestJS), and Laravel, including an enterprise Website Asset Management System handling 500+ maintenance requests.",
      "Designed robust PostgreSQL and MySQL database schemas and engineered scalable RESTful APIs to support real business workflows following the complete SDLC.",
      "Built a KPI Measurement Analytics Application for a utility company (PDAM) with a Laravel backend and responsive Next.js dashboard for real-time analytics.",
      "Conducted code reviews, maintained Git/GitHub version control standards, and authored comprehensive technical documentation for seamless handoff.",
      "Integrated AI-assisted coding tools and prompt engineering workflows into daily development cycles to accelerate debugging and code optimization.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Freelance (Remote)",
    period: "Aug 2024 – Oct 2024",
    type: "Contract / Remote",
    points: [
      "Built and shipped responsive, animated websites for real-world clients with performance-first architectures.",
      "Integrated third-party APIs for dynamic content and configured headless CMS collections for client content management.",
    ],
  },
];

const certifications = [
  "Flutter & Dart – The Complete Guide (Academind / Udemy)",
  "React Native – The Practical Guide (Academind / Udemy)",
];

const page = () => {
  return (
    <>
      <div className="pt-32 sm:pt-36 md:pt-40 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto flex flex-col gap-20 text-neutral-900 dark:text-white">
        {/* 1. Header & Bio Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
          <div className="flex flex-col w-full lg:w-3/5 gap-6">
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 dark:text-neutral-400">
              Software Engineer & UI Architect
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Wan Hasib Al Aslamy
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-neutral-600 dark:text-neutral-300 leading-snug">
              Building scalable, high-performance web applications backed by solid database architectures and modern AI integrations.
            </h2>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              I am a Software Engineer (S1 Informatics Engineering) with 2+ years of professional experience building end-to-end web applications with JavaScript/TypeScript, Node.js (NestJS), React.js, and Next.js, backed by PostgreSQL/MySQL schema design and RESTful API work.
            </p>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              I have real, shipped production experience integrating LLM APIs (Claude) into functional tools — applying prompt engineering to shape tone and output rather than simple chat experiments. Comfortable with Git-based version control, clear technical documentation, and working independently with minimal synchronization across remote and on-site teams.
            </p>
          </div>

          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
              <Image
                src="/jadi.webp"
                alt="Wan Hasib Al Aslamy"
                width={508}
                height={677}
                priority
                className="w-full h-auto object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* 2. Technical Skills Matrix */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Technical Competencies
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Core technologies, frameworks, and engineering tools I use daily.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                    {cat.icon}
                  </div>
                  <h4 className="font-semibold text-base">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/90 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Professional Experience Timeline */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Professional Experience
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              My industry track record and engineering contributions.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm flex flex-col gap-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 dark:border-neutral-800/60 pb-4">
                  <div>
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="text-base text-neutral-600 dark:text-neutral-300 font-medium">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mt-2">
                  {exp.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Education & Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-neutral-100 dark:border-neutral-800/60 pb-4">
              <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                <GraduationCap className="w-6 h-6 text-indigo-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Education</h4>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  Academic Foundation
                </span>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-base text-neutral-900 dark:text-white">
                Universitas Negeri Surabaya
              </h5>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                Bachelor of Informatics Engineering (S1 Teknik Informatika)
              </p>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-semibold">
                  GPA: 3.28 / 4.00
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  Graduated 2024
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mt-2">
              Relevant Coursework: Web Development, Database Systems, Software Engineering, Data Structures & Algorithms, OOP.
            </p>
          </div>

          {/* Professional Development */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-neutral-100 dark:border-neutral-800/60 pb-4">
              <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                <Sparkles className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Continuous Learning</h4>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  Certifications & Deep Dives
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="h-[20vh]" />
      <Footer />
    </>
  );
};

export default page;
