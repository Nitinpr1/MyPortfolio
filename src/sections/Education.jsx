import EducationCard from "../components/EducationCard";
import { education } from "../constants";

const Education = () => {
  return (
    <section id="education" className="max-container">
      <h2 className="text-red-500 font-palanquin text-center sm:text-4xl text-[40px] font-bold mb-10">
        Education
      </h2>
      <div className="flex justify-center">
        {education.map((education) => (
          <EducationCard key={education.name} {...education} />
        ))}
      </div>
    </section>
  );
};

export default Education;
