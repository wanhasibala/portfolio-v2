import React from "react";
import Contact from "../(home)/Contact";
import Footer from "../(home)/Footer";

const page = () => {
  return (
    <>
      <div className="pt-28 ">
        <Contact  className="bg-900 border border-zinc-200 dark:border-zinc-800  "/>
      </div>
      <Footer />
    </>
  );
};

export default page;
