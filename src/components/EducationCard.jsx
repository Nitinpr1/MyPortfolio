import { IoSchool } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
const EducationCard = ({ name, collage, city, time, comment }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
       className="w-full max-w-5xl rounded-2xl shadow-lg px-8 py-10 bg-gradient-to-br from-slate-100 to-white dark:from-gray-800 dark:to-gray-900 transition-all hover:shadow-xl"
    >
      <div className="flex items-center gap-4">
      {/* Education Icon */}
        <div className="bg-red-100 p-2 rounded-full">
            <IoSchool className="text-red-500 text-2xl"/>
        </div>
          <h1 className="font-palanquin text-xl text-justify md:text-3xl leading-normal font-bold text-gray-700 dark:text-gray-300">
            {name}
          </h1>
      </div>
      <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
        <p className="flex items-center gap-2 text-base font-medium">
          <FaCalendarCheck className="text-red-400" />
          <span>{time}</span>
        </p>
        <p className="flex items-center gap-2 text-base font-medium">
          <BiSolidSchool className="text-red-400" />
          <span>{`${collage} • ${city}`}</span>
        </p>
      </div>
      {comment && (
        <p className="mt-4 break-words font-montserrat leading-normal text-slate-700 dark:text-slate-400 text-justify text-[15px]">
          {comment}
        </p>
      )}
    </div>
  );
};

export default EducationCard;
