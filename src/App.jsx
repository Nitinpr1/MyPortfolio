import Nav from "./components/Nav";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certificates from "./sections/Certificates";
import Footer from "./sections/Footer";
import DownloadResume from "./components/DownloadResume";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className="relative bg-white  dark:bg-slate-800 dark:text-white bg-gradient-to-r from-orange-200 dark:from-slate-900">
      <Nav />
      <section className="xl:padding-l wide:padding-r ">
        <Home />
      </section>
      <section className="padding">
        <Skills />
      </section>
      <section className="padding-x py-10 p-b">
        <Projects />
      </section>
      <section className="padding">
        <Education />
      </section>
      <section className="padding-x py-5">
        <Certificates />
      </section>
      <section className="padding-x py-5 bg-black">
        <Footer />
      </section>
      <DownloadResume />
    </main>
  );
};
export default App;
