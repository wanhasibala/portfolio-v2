import MagneticEffect from "@/ common/Magnetic";
import { ArrowUpRight, Instagram, Mail, Twitter } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="p-6 md:p-12 lg:p-20 text-white ">
      <div className="px-12 py-10 bg-[#BE6B5C] rounded-[20px] flex flex-col gap-10">
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
            <div className="flex items-center gap-2">
              <Mail size={20} fill="white" className="text-[#BE6B5C]" />
              <p>wanhasibal1122@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Twitter size={20} fill="white" className="text-[#BE6B5C]" />
              <p>wanhasib_ala</p>
            </div>
            <div className="flex items-center gap-2">
              <Instagram size={20} />
              <p>wanhasib.ala</p>
            </div>
          </div>
          <form className="flex flex-col w-full gap-5  ">
            <div className="w-full flex flex-col gap-5">
              Name
              <input
                aria-label="name"
                aria-placeholder="Enter your name"
                className="w-full rounded-full"
              />
            </div>
            <div className="w-full flex flex-col gap-5">
              Name
              <input
                aria-label="name"
                aria-placeholder="Enter your name"
                className="w-full rounded-full"
              />
            </div>
            <div className="w-full flex flex-col gap-5">
              Name
              <input
                aria-label="name"
                aria-placeholder="Enter your name"
                className="w-full rounded-[20px] h-[200px]"
              />
            </div>
            <div className="relative self-center lg:self-start">

            <MagneticEffect>
              <button
                className="h-32 w-32  bg-black rounded-full group flex items-center justify-center gap-2"
                type="submit"
              >
                Submit
                <ArrowUpRight className="hidden group-hover:block transition-transform duration-200 ease-in-out" />
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