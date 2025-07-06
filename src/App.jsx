import Nav from "./components/Nav";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certificates from "./sections/Certificates";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import DownloadResume from "./components/DownloadResume";
import Contact from "./sections/Contact";
import ContactMe from "./components/ContactMe";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true); // Set to true only
  };

  const closeForm = () => {
    setIsFormOpen(false); // Set to false only
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className="relative bg-white  dark:bg-slate-800 dark:text-white bg-gradient-to-r from-orange-200 dark:from-slate-900">
      <Nav />
      <section className="xl:padding-l wide:padding-r ">
        <Home
          isFormOpen={isFormOpen}
          openForm={openForm}
          closeForm={closeForm}
        />
      </section>
      <section className="padding">
        <Skills />
      </section>
      <section className="padding-e">
        <Experience />
      </section>
      <section className="padding-e py-10 p-b">
        <Projects />
      </section>

      <section className="padding-e">
        <Education />
      </section>
      <section className="padding-x py-5">
        <Certificates />
      </section>
      <section className="padding-x py-5">
        <Contact
          isFormOpen={isFormOpen}
          openForm={openForm}
          closeForm={closeForm}
        />
      </section>
      <section className="padding-x py-5 bg-black">
        <Footer />
      </section>
      <DownloadResume />
      {isFormOpen && <ContactMe onClose={closeForm} onBack={closeForm} />}
    </main>
  );
};
export default App;
