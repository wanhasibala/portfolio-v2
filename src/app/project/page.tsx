import Footer from "../(home)/Footer";
import { Projects } from "../(home)/Projects";
import Header from "./Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore featured technical case studies, engineering projects, and digital products by Wan Hasib.",
};

export default function Page() {
  return (
    <>
      <Header />
      <Projects />
      <div className="h-[40vh]" />
      <Footer />
    </>
  );
}
