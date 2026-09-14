"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, Send, CheckCircle2, AlertCircle } from "lucide-react";
import MagneticEffect from "@/ common/Magnetic";

interface ContactProps {
  className?: string;
}

const channels = [
  {
    label: "wanhasibal1122@gmail.com",
    href: "mailto:wanhasibal1122@gmail.com",
  },
  {
    label: "@wanhasib_ala (X / Twitter)",
    href: "https://x.com/wanhasib_ala",
  },
  {
    label: "@wanhasib.ala (Instagram)",
    href: "https://www.instagram.com/wanhasib.ala/",
  },
  {
    label: "linkedin.com/in/wanhasib",
    href: "https://www.linkedin.com/in/wanhasib/",
  },
];

export default function Contact({ className = "" }: ContactProps) {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    first_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");
    setFeedbackMessage("");

    emailjs
      .sendForm(
        "service_z98kpf6",
        "template_jwhxnpk",
        form.current,
        "2BoY3ZncUyZD-3GWC",
      )
      .then(
        () => {
          setStatus("success");
          setFeedbackMessage(
            "Transmission sent successfully! I'll get back to you soon.",
          );
          setFormData({
            first_name: "",
            user_email: "",
            message: "",
          });
          setTimeout(() => {
            setStatus("idle");
            setFeedbackMessage("");
          }, 6000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
          setFeedbackMessage(
            "Failed to send transmission. Please try again or email directly.",
          );
          setTimeout(() => {
            setStatus("idle");
          }, 6000);
        },
      );
  };

  return (
    <section
      className={`px-4 sm:px-8 md:px-12 lg:px-20 w-full max-w-[1440px] mx-auto ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-start w-full">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 font-semibold block mb-3 sm:mb-4">
              INITIATION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
              Let’s Work
              <br />
              Together.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mt-4 sm:mt-5 max-w-md">
              We welcome conversations with talented individuals. Simply say
              hello and we can begin a fruitful collaboration.
            </p>
          </div>

          {/* Selected Channels Card */}
          <div className="bg-white/95 dark:bg-zinc-800/90 rounded-2xl p-4 sm:p-6 shadow-[0_2px_14px_rgba(0,0,0,0.04)] border border-zinc-200/80 dark:border-zinc-700/60 mt-6 sm:mt-10 lg:mt-12 w-full max-w-full lg:max-w-md backdrop-blur-sm">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-400 font-medium block mb-3 sm:mb-4">
              SELECTED CHANNELS
            </span>
            <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-700/40">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={
                    channel.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center justify-between py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors group min-w-0"
                >
                  <span className="truncate pr-2">{channel.label}</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form Card */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-white dark:bg-zinc-800/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 lg:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-zinc-200/80 dark:border-zinc-700/60">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 sm:gap-5"
            >
              {/* Name Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="first_name"
                  className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5 sm:mb-2 block"
                >
                  YOUR NAME
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  required
                  placeholder="e.g. Maya Chen"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full bg-[#f3f3f2] dark:bg-zinc-700/40 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm md:text-base outline-none border border-transparent focus:border-zinc-300 dark:focus:border-zinc-500 transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="user_email"
                  className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5 sm:mb-2 block"
                >
                  YOUR EMAIL
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="e.g. maya@enterprise.com"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="w-full bg-[#f3f3f2] dark:bg-zinc-700/40 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm md:text-base outline-none border border-transparent focus:border-zinc-300 dark:focus:border-zinc-500 transition-colors"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5 sm:mb-2 block"
                >
                  MESSAGE & SCOPE OVERVIEW
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your product requirements, timelines, and technical architecture..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#f3f3f2] dark:bg-zinc-700/40 rounded-xl p-3.5 sm:p-4 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm md:text-base outline-none border border-transparent focus:border-zinc-300 dark:focus:border-zinc-500 transition-colors resize-none min-h-[110px] sm:min-h-[130px]"
                />
              </div>

              {/* Status Message */}
              {feedbackMessage && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-xl text-xs font-mono ${
                    status === "success"
                      ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50"
                      : "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/50"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600 dark:text-rose-400" />
                  )}
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {/* Form Bottom Row with Magnetic Effect Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-1 sm:pt-2">
                <span className="font-mono text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 tracking-wider text-center sm:text-left">
                  Encrypted • No marketing lists
                </span>

                <MagneticEffect>
                  <button
                    type="submit"
                    disabled={
                      status === "sending" ||
                      !formData.first_name ||
                      !formData.user_email ||
                      !formData.message
                    }
                    className="bg-[#18181b] hover:bg-black text-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white rounded-full px-6 py-3.5 font-mono text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center gap-2.5 transition-all shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto cursor-pointer"
                  >
                    <span>
                      {status === "sending"
                        ? "TRANSMITTING..."
                        : "SUBMIT TRANSMISSION"}
                    </span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </MagneticEffect>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
