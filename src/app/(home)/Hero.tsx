"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Shield,
  Activity,
  Cpu,
  ArrowBigLeft,
  ArrowRight,
} from "lucide-react";
import TransitionLink from "@/components/Curve/TransitionLink";
import { useVertical, PortfolioVertical } from "@/providers/VerticalContext";
import Button from "@/components/Navbar/Button";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { Lens } from "@/components/ui/lens";
import MagneticEffect from "@/ common/Magnetic";

const Hero = () => {
  const { vertical, setVertical } = useVertical();

  // Animation config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  // Content configurations based on active vertical
  const verticalContent = {
    general: {
      hook: "Building high-performance interfaces that translate complex logic into ",
      highlight: "scalable user experiences.",
      description:
        "I am Wan Hasib Al Aslamy, a Frontend Engineer & UI Architect. I specialize in maximizing client-side performance, reducing time-to-interactive, and establishing strict design-to-code pipelines.",
      techStack: [
        {
          category: "Core Architecture",
          skills: ["React", "Next.js (App Router)", "TypeScript"],
        },
        {
          category: "State & Performance",
          skills: ["Zustand", "React Query", "Web Workers"],
        },
        {
          category: "Interface & Motion",
          skills: ["Tailwind CSS", "GSAP", "Framer Motion"],
        },
      ],
      metrics: [
        {
          value: "-45%",
          label: "Initial Load Time",
          desc: "Optimized bundle sizes & code-splitting strategies",
          icon: <Activity className="w-5 h-5 text-emerald-500" />,
        },
        {
          value: "99/100",
          label: "Lighthouse Score",
          desc: "Maximum accessibility, SEO, and Core Web Vitals performance",
          icon: <Cpu className="w-5 h-5 text-indigo-500" />,
        },
        {
          value: "+24%",
          label: "Conversion Boost",
          desc: "Direct business impact through high-fidelity UX & layout stability",
          icon: <Shield className="w-5 h-5 text-sky-500" />,
        },
      ],
    },
    fintech: {
      hook: "Building high-reliability ledger portals that ensure ",
      highlight: "zero calculation state drift.",
      description:
        "I am Wan Hasib Al Aslamy, a Financial Platform Architect. I specialize in mathematically precise rendering pipelines, memory-cached local state models, and high-frequency transaction dashboards.",
      techStack: [
        {
          category: "Precision & Core",
          skills: ["React", "TypeScript", "Math.js"],
        },
        {
          category: "Data Hydration",
          skills: ["Context API", "RTK Query", "Web Workers"],
        },
        {
          category: "Display Layer",
          skills: ["Tailwind CSS", "ChartJS", "HTML Canvas"],
        },
      ],
      metrics: [
        {
          value: "0.00%",
          label: "Calculation Drift Rate",
          desc: "Zero precision loss across complex recursive computation chains",
          icon: <Shield className="w-5 h-5 text-emerald-500" />,
        },
        {
          value: "100%",
          label: "WCAG AA Compliance",
          desc: "Full layout screen-reader testing and color-contrast compliance",
          icon: <Cpu className="w-5 h-5 text-indigo-500" />,
        },
        {
          value: "-60%",
          label: "Calculation Overhead",
          desc: "Offloaded main thread computation using background worker cycles",
          icon: <Activity className="w-5 h-5 text-sky-500" />,
        },
      ],
    },
    web3: {
      hook: "Architecting decentralized streaming panels that sustain continuous ",
      highlight: "60 FPS web interfaces.",
      description:
        "I am Wan Hasib Al Aslamy, a Web3 UX Engineer. I specialize in real-time asynchronous WebSockets streams, optimized component repaint scopes, and smooth animations.",
      techStack: [
        {
          category: "Decentralized Integration",
          skills: ["Next.js", "TypeScript", "Ethers.js"],
        },
        {
          category: "Real-time State",
          skills: ["Zustand", "SWR", "WebSocket Engine"],
        },
        {
          category: "Interface Performance",
          skills: ["Tailwind CSS", "GSAP", "WebGL"],
        },
      ],
      metrics: [
        {
          value: "60 FPS",
          label: "Locked Frame Rate",
          desc: "Prevented cumulative layout shifts and repaint floods",
          icon: <Activity className="w-5 h-5 text-emerald-500" />,
        },
        {
          value: "<12ms",
          label: "Event Process Loop",
          desc: "Immediate data resolution from raw socket events to UI state",
          icon: <Cpu className="w-5 h-5 text-indigo-500" />,
        },
        {
          value: "+34%",
          label: "Wallet Connect Rate",
          desc: "Improved connection funnel via visual state feedback loops",
          icon: <Shield className="w-5 h-5 text-sky-500" />,
        },
      ],
    },
  };

  const current = verticalContent[vertical];

  return (
    <section className="min-h-screen  w-full flex flex-col items-center justify-center  md:justify-start px-4 sm:px-8 md:px-12 lg:px-20 pt-28 sm:pt-32 md:pt-32 pb-16 bg-neutral-100 dark:bg-transparent text-neutral-900 dark:text-white transition-colors duration-300  ">
      <motion.div className="w-full max-w-[1400px] flex flex-col relative mx-auto">
        <div className="w-full relative rounded-2xl sm:rounded-3xl md:rounded-[36px] overflow-hidden shadow-sm">
          <Lens lensSize={150} isStatic={false} ariaLabel="Zoom Area">
            <img
              src="/hero-image-big.png"
              alt="Wan Hasib - Portfolio"
              className="w-full sm:block hidden aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[2.1/1] object-cover object-top rounded-2xl sm:rounded-3xl md:rounded-[36px]"
            />
            <img
              src="/hero-image-phone.png"
              alt="Wan Hasib - Portfolio"
              className="w-full sm:hidden block aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[2.1/1] object-cover object-top rounded-2xl sm:rounded-3xl md:rounded-[36px]"
            />
          </Lens>
        </div>

        <div className="flex flex-col w-full relative z-10 mix-blend-difference">
          <TextAnimate
            animate="slideUp"
            delay={0.3}
            by="character"
            className="z-10 text-[14.5vw] md:text-[14vw] lg:text-[13.8vw] xl:text-[195px] 2xl:text-[216px] -mt-[16%] sm:-mt-[13%] md:-mt-[11%] lg:-mt-[9%] font-bold tracking-tight text-white mix-blend-difference select-none pointer-events-none leading-[0.85] w-full"
          >
            PORTFOLIO
          </TextAnimate>
          <p className="self-end text-right text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight text-neutral-900 dark:text-white -mt-[2%] sm:-mt-[3%] md:-mt-[4%] select-none">
            WAN HASIB
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full mt-6 sm:mt-8 md:mt-10 gap-6 sm:gap-8">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-800 dark:text-neutral-200 max-w-[280px] sm:max-w-[340px] md:max-w-[380px] font-normal leading-snug">
            Fullstack Developer based in Surabaya, Indonesia
          </p>
          <div className="self-center  justify-self-end md:self-end mt-2 md:mt-2/5">
            <MagneticEffect>
              <Link
                href={"/project"}
                className="group bg-[#676B55] hover:bg-[#565946] px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-3 hover:-translate-y-1 transition-all ease-out duration-300 shadow-md cursor-pointer"
              >
                <span className="text-sm sm:text-base md:text-lg text-white font-medium pl-1">
                  See My works
                </span>
                <div className="bg-[#EDDFC0] rounded-full relative overflow-hidden flex justify-center items-center w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black transition-transform duration-300 ease-out group-hover:translate-x-[160%]" />
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black absolute transition-transform duration-300 ease-out -translate-x-[160%] group-hover:translate-x-0" />
                </div>
              </Link>
            </MagneticEffect>
          </div>
        </div>
      </motion.div>

      {/* <motion.div */}
      {/*   className="w-full max-w-6xl mx-auto flex flex-col justify-between h-full" */}
      {/*   variants={containerVariants} */}
      {/*   initial="hidden" */}
      {/*   animate="visible" */}
      {/* > */}
      {/*   {/* Availability Badge & Vertical Toggle */}
      {/*   <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"> */}
      {/*     <div className="flex items-center gap-2.5"> */}
      {/*       <span className="relative flex h-2 w-2"> */}
      {/*         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span> */}
      {/*         <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span> */}
      {/*       </span> */}
      {/*       <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold"> */}
      {/*         Available for Senior Roles & Contracts */}
      {/*       </span> */}
      {/*     </div> */}
      {/**/}
      {/*     {/* Vertical Toggle Selectors */}
      {/*     <div className="flex bg-neutral-100 dark:bg-neutral-900/60 p-1 rounded-lg border border-neutral-200/50 dark:border-neutral-800/80 max-w-xs self-start sm:self-auto"> */}
      {/*       {(["general", "fintech", "web3"] as PortfolioVertical[]).map((v) => ( */}
      {/*         <button */}
      {/*           key={v} */}
      {/*           onClick={() => setVertical(v)} */}
      {/*           className={`text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded transition-all duration-200 ${ */}
      {/*             vertical === v */}
      {/*               ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-bold shadow-sm" */}
      {/*               : "text-neutral-500 hover:text-neutral-950 dark:hover:text-white" */}
      {/*           }`} */}
      {/*         > */}
      {/*           {v} */}
      {/*         </button> */}
      {/*       ))} */}
      {/*     </div> */}
      {/*   </motion.div> */}
      {/**/}
      {/*   {/* Primary Value Hook & Name */}
      {/*   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"> */}
      {/*     <div className="lg:col-span-8 space-y-6"> */}
      {/*       <motion.h1  */}
      {/*         key={`${vertical}-hook`} */}
      {/*         initial={{ opacity: 0, y: 10 }} */}
      {/*         animate={{ opacity: 1, y: 0 }} */}
      {/*         transition={{ duration: 0.3 }} */}
      {/*         className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-neutral-900 dark:text-white" */}
      {/*       > */}
      {/*         {current.hook} */}
      {/*         <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-100 dark:to-neutral-400"> */}
      {/*           {current.highlight} */}
      {/*         </span> */}
      {/*       </motion.h1> */}
      {/**/}
      {/*       <motion.p  */}
      {/*         key={`${vertical}-desc`} */}
      {/*         initial={{ opacity: 0 }} */}
      {/*         animate={{ opacity: 1 }} */}
      {/*         transition={{ duration: 0.4 }} */}
      {/*         className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl" */}
      {/*       > */}
      {/*         I am <span className="font-semibold text-neutral-900 dark:text-neutral-200">Wan Hasib Al Aslamy</span>, a Frontend Engineer & UI Architect. {current.description} */}
      {/*       </motion.p> */}
      {/**/}
      {/*       {/* CTAs */}
      {/*       <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4"> */}
      {/*         <TransitionLink */}
      {/*           href="/project" */}
      {/*           className="group flex items-center justify-center gap-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm active:scale-95" */}
      {/*         > */}
      {/*           Inspect Technical Case Studies */}
      {/*           <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> */}
      {/*         </TransitionLink> */}
      {/**/}
      {/*         <TransitionLink */}
      {/*           href="/contact" */}
      {/*           className="flex items-center justify-center gap-2 border border-neutral-300 dark:border-neutral-800 px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all active:scale-95 text-neutral-800 dark:text-neutral-200" */}
      {/*         > */}
      {/*           Get in Touch */}
      {/*         </TransitionLink> */}
      {/*       </motion.div> */}
      {/*     </div> */}
      {/**/}
      {/*     {/* Strict Technical Stack Breakdown */}
      {/*     <motion.div  */}
      {/*       key={`${vertical}-stack`} */}
      {/*       initial={{ opacity: 0, scale: 0.98 }} */}
      {/*       animate={{ opacity: 1, scale: 1 }} */}
      {/*       transition={{ duration: 0.3 }} */}
      {/*       className="lg:col-span-4 bg-neutral-50 dark:bg-[#121212] border border-neutral-100 dark:border-neutral-900 rounded-2xl p-6 space-y-6 shadow-sm" */}
      {/*     > */}
      {/*       <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold border-b border-neutral-200/50 dark:border-neutral-800/50 pb-3"> */}
      {/*         Verified Stack ({vertical.toUpperCase()}) */}
      {/*       </h3> */}
      {/**/}
      {/*       <div className="space-y-4"> */}
      {/*         {current.techStack.map((group, idx) => ( */}
      {/*           <div key={idx} className="space-y-1.5"> */}
      {/*             <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 block"> */}
      {/*               {group.category} */}
      {/*             </span> */}
      {/*             <div className="flex flex-wrap gap-1.5"> */}
      {/*               {group.skills.map((skill, sIdx) => ( */}
      {/*                 <span  */}
      {/*                   key={sIdx}  */}
      {/*                   className="text-xs bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 px-2.5 py-1 rounded font-medium text-neutral-800 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors" */}
      {/*                 > */}
      {/*                   {skill} */}
      {/*                 </span> */}
      {/*               ))} */}
      {/*             </div> */}
      {/*           </div> */}
      {/*         ))} */}
      {/*       </div> */}
      {/*     </motion.div> */}
      {/*   </div> */}
      {/**/}
      {/*   {/* High-Impact Business Metrics Section */}
      {/*   <motion.div  */}
      {/*     key={`${vertical}-metrics`} */}
      {/*     initial={{ opacity: 0 }} */}
      {/*     animate={{ opacity: 1 }} */}
      {/*     transition={{ duration: 0.4 }} */}
      {/*     className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 mt-16 border-t border-neutral-200/60 dark:border-neutral-900" */}
      {/*   > */}
      {/*     {current.metrics.map((metric, idx) => ( */}
      {/*       <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition-colors duration-200"> */}
      {/*         <div className="flex-shrink-0 mt-1"> */}
      {/*           {metric.icon} */}
      {/*         </div> */}
      {/*         <div className="space-y-1"> */}
      {/*           <span className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white font-mono"> */}
      {/*             {metric.value} */}
      {/*           </span> */}
      {/*           <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 block"> */}
      {/*             {metric.label} */}
      {/*           </h4> */}
      {/*           <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal"> */}
      {/*             {metric.desc} */}
      {/*           </p> */}
      {/*         </div> */}
      {/*       </div> */}
      {/*     ))} */}
      {/*   </motion.div> */}
      {/* </motion.div> */}
    </section>
  );
};

export default Hero;
