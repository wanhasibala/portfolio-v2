import MagneticEffect from "@/ common/Magnetic";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ArrowUpRight, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const bgContainer = cva("px-4 md:px-12 py-10 rounded-[20px] flex flex-col gap-10");
const inputContainer = cva("w-full rounded-full p-2 bg-transparent focus:outline-none border")
const Contact = ({ className }: { className: string }) => {
  return (
    <section className="p-6 md:p-12 lg:p-20 text-zinc-950 dark:text-white ">
      <div className={cn(bgContainer({ className }))}>
        {/* Contact Title */}
        <div className="font-semibold text-heading-2 flex flex-col">
          TOGETHER
          <div className="ml-10 md:ml-20">LET'S WORK</div>
        </div>
        {/* Contact content */}
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-5 w-full">
            <p className="flex flex-col">
              We welcome conversations with talented individual. Simply say
              hello and we can begin a fruitful collaboration{" "}
            </p>
            <Link className="flex items-center gap-2 " href='mailto:wanhasibal1122@gmail.com'>
              <Mail size={20}  />
              <p>wanhasibal1122@gmail.com</p>
            </Link>
            <Link className="flex items-center gap-2" href="https://x.com/wanhasib_ala" target="_blank">
              <Twitter size={20}  />
              <p>wanhasib_ala</p>
            </Link>
            <Link className="flex items-center gap-2" href="https://www.instagram.com/wanhasib.ala/" target="_blank">
              <Instagram size={20} />
              <p>wanhasib.ala</p>
            </Link>
          </div>
          <form className="flex flex-col w-full gap-5  transition-all duration-300 ">
            <div className="w-full flex flex-col gap-5">
              <div className="">Name</div>
              <input
                aria-label="name"
               placeholder="Enter your name"
                className={cn(inputContainer({className}))} 
              />
            </div>
            <div className="w-full flex flex-col gap-5">
              Email
              <input
                aria-label="email"
                placeholder="Enter your email"
                className={cn(inputContainer({className}))} 
              />
            </div>
            <div className="w-full flex flex-col gap-5">
              Message
              <textarea
                aria-label="messages"
                placeholder="Enter your message"
                className={cn(inputContainer({className}),"h-[200px] rounded-[20px]")} 
              />
            </div>
            <div className="relative self-center lg:self-start">
              <MagneticEffect>
                <button
                  className="h-32 w-32 transition-all duration-500  bg-[#BE6B5C] dark:bg-black rounded-full group flex items-center justify-center pl-6 hover:pl-0 gap-2 hover:bg-[#171717]  dark:hover:bg-[#BE6B5C] hover:text-white "
                  type="submit"
                >
                  Submit
                  <ArrowUpRight className="scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out" />
                </button>
              </MagneticEffect>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
