import { FaTools, FaBuilding } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { MdWorkHistory } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaCalendarCheck } from "react-icons/fa6";


const ExperienceCard = ({
  name,
  company,
  city,
  comment,
  startTime,
  endTime,
  technologies = [],
  highlights = [],
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full max-w-5xl rounded-2xl shadow-lg px-8 py-10 bg-gradient-to-br from-slate-100 to-white dark:from-gray-800 dark:to-gray-900 transition-all hover:shadow-xl"
    >
      <div className="flex items-center gap-3">
        <div className="bg-red-100 p-2 rounded-full">
          <MdWorkHistory className="text-red-500 text-2xl" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800 dark:text-slate-300">
          {name}
        </h1>
      </div>

      <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
        <p className="flex items-center gap-2 text-base font-medium">
          <FaCalendarCheck className="text-red-400" />
          <span>{`${startTime} – ${endTime}`}</span>
        </p>
        <p className="flex items-center gap-2 text-base font-medium">
          <HiBuildingOffice2 className="text-red-400" />
          <span>{`${company} • ${city}`}</span>
        </p>
      </div>

      <p className="mt-4 text-justify text-[15px] leading-relaxed text-slate-700 dark:text-slate-400">
        {comment}
      </p>

      {technologies.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2 font-semibold text-slate-800 dark:text-slate-300">
            <FaTools className="text-indigo-500" />
            Technologies Used:
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {highlights.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2 font-semibold text-slate-800 dark:text-slate-300">
            <TbTargetArrow className="text-red-500" />
            Key Highlights:
          </div>
          <ul className="list-disc list-inside text-[15px] text-slate-700 dark:text-slate-400">
            {highlights.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
