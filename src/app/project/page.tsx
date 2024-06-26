import Footer from "../(home)/Footer";
import { Projects } from "../(home)/Projects";
import Header from "./Header";

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
