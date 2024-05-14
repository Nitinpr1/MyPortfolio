import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

const Projects = () => {
  const [project, setProject] = useState(projects.slice(0, 4));
  const [prevBtn, setPrevBtn] = useState(false);

  const handlePrev = () => {
    setProject(projects.slice(0, 4));
    setPrevBtn(false);
  };

  const handleNext = () => {
    setProject(projects.slice(4, 8));
    setPrevBtn(true);
  };

  return (
    <section id="projects" className="flex justify-center items-center w-full">
      <div className="w-full">
        <h1
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="text-red-500 font-palanquin text-center sm:text-4xl text-[40px] font-bold mb-10"
        >
          My Projects
        </h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {project.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
        <div className="flex justify-end gap-1 p-2 mt-2">
          {prevBtn && (
            <button
              className=" text-coral-red font-bold  p-1"
              onClick={handlePrev}
            >
              {"❰ Prev"}
            </button>
          )}

          <button
            className=" text-coral-red font-bold   p-1"
            onClick={handleNext}
          >
            {"Next  ❱"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
