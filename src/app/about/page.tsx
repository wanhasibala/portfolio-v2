import React from "react";
import Footer from "../(home)/Footer";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="pt-40 px-6 md:px-12 lg:px20 flex lg:flex-row flex-col gap-20 justify-center items-center">
        <div className="flex flex-col w-full gap-5">
          <h1 className="text-title font-semibold text-zinc-900 dark:text-zinc-100">About </h1>
          <h2 className="text-heading-3 font-medium text-zinc-400 dark:text-zinc-400">Subheading for description or instructions</h2>
          <p className="text-zinc-700 dark:text-zinc-200">
            Body text for your whole bio. We’ll put in some lorem ipsum to show
            how a filled-out page might look: 
           <br /> 
           <br /> 
            Excepteur efficient emerging,
            minim veniam anim aute carefully curated Ginza conversation
            exquisite perfect nostrud nisi intricate Content. Qui international
            first-class nulla ut. Punctual adipisicing, essential lovely queen
            tempor eiusmod irure. Exclusive izakaya charming Scandinavian
            impeccable aute quality of life soft power pariatur Melbourne
            occaecat discerning. Qui wardrobe aliquip, et Porter destination
            Toto remarkable officia Helsinki excepteur Basset hound. Zürich
            sleepy perfect consectetur.
          </p>
        </div>
        <Image
          src="/jadi.webp"
          alt="profile photo"
          width={508}
          className="lg:w-[50vw] w-full h-auto object-cover rounded-2xl" 
          height={677}
        />
      </div>
      <div className="h-[40vh]"/>
      <Footer />
    </>
  );
};

export default page;
