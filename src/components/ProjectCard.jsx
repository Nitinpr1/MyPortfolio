import { linkto, github } from "../assets";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ imgURL, name, comment, livelink, githublink }) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl max-w-[400px] group"
    >
      {/* Image Section with Overlay */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={imgURL}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {comment}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center gap-4 px-5 pb-5">
        <a
          href={livelink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral-red to-red-500 text-white font-semibold shadow-md hover:from-red-500 hover:to-red-500 transition-all duration-300 w-full"
        >
          Live <FaExternalLinkAlt size={16} />
        </a>
        <a
          href={githublink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold shadow-md hover:from-black hover:to-gray-700 transition-all duration-300 w-full"
        >
          GitHub <FaGithub size={18} />
        </a>
      </div>
    </div>
  );
};


export default ProjectCard;
