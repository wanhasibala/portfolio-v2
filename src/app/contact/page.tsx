import React from "react";
import Contact from "../(home)/Contact";
import Footer from "../(home)/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Wan Hasib for engineering roles, technical inquiries, and project collaborations.",
};
// import Curve from "@/components/Curve/template";

const page = () => {
  return (
    <>
      <div className="pt-28 ">
        <Contact  className="bg-900 border border-zinc-200 dark:border-zinc-800  "/>
      </div>
      <div className="h-[40vh]"/>
      <Footer />
    </>
  );
};

export default page;
