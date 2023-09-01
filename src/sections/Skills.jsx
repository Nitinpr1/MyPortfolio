import { skills } from "../constants/index";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex justify-center items-center w-full rounded-2xl p-4 drop-shadow-xl"
    >
      <div
        data-aos="flip-up"
        data-aos-duration="2000"
        className="md:w-2/4 w-full"
      >
        <h1 className="text-red-500 font-palanquin text-center text-4xl font-bold mb-10">
          SKILLS
        </h1>
        <div>
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
