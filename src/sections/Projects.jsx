import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
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
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
