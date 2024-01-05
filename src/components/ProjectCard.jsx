import { linkto, github } from "../assets";

const ProjectCard = ({ imgURL, name, comment, livelink, githublink }) => {
  return (
    <div
      data-aos="zoom-out-up"
      data-aos-duration="1000"
      className="bg-white rounded-lg shadow-lg drop-shadow-2xl hover:bg-slate-200 hover:scale-105 duration-500 dark:bg-slate-900 max-h-[400px] max-w-[400px]"
    >
      <div className="flex flex-1 flex-col w-full max-sm:w-full cursor-pointer">
        <img src={imgURL} alt={name} className="w-full h-full" />
        <div className="p-4 max-h-[120px] overflow-hidden">
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin px-2">
            {name}
          </h3>
          <p className="text-gray-600 font-palanquin text-base px-2 mt-2">
            {comment}
          </p>
        </div>
        <hr />
        <div className="flex justify-center items-center gap-10 lg:p-4 p-3 max-h-[80px]">
          <a
            href={livelink}
            className="bg-coral-red shadow-lg hover:shadow-red-900 p-2 text-white-400 w-full rounded-full flex justify-center items-center gap-2 font-bold"
          >
            live <img src={linkto} width={20} alt="link" />
          </a>
          <a
            href={githublink}
            className="bg-coral-red  shadow-lg hover:shadow-red-900 p-2 text-white-400 w-full rounded-full flex justify-center items-center gap-2 font-bold"
          >
            github <img src={github} width={20} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
