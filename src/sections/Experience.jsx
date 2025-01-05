import Experiences from "../components/ExperienceCard";
import { experience } from "../constants";

const Experience = () => {
  return (
    <section id="exp" className="max-container">
      <h2 className="text-red-500 font-palanquin text-center sm:text-4xl text-[40px] font-bold mb-10">
        Experience
      </h2>
      <div className="flex gap-5 flex-col md:flex-row">
        {experience.map((exp) => (
          <Experiences key={exp.name} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
