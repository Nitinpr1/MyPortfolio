import { WorkExperience } from "../assets";
const ExperienceCard = ({
  name,
  company,
  city,
  comment,
  startTime,
  endTime,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" w-full rounded-[20px] shadow-3xl px-10 py-10 bg-slate-50 dark:bg-gray-900"
    >
      <img src={WorkExperience} width={50} alt="img" />

      <h1 className="mt-3 font-palanquin text-xl md:text-3xl leading-normal font-bold text-red-500">
        {name}
      </h1>
      <p className="mt-2 break-words font-montserrat text-lg leading-normal">
        <span className=" font-semibold">Duration : </span>
        {`${startTime} - ${endTime}`}
      </p>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal">
        <span className=" font-semibold">At :</span> {`${company} - ${city}`}
      </p>

      <p className="mt-3 break-words font-montserrat text-sm md:text-lg leading-normal text-slate-gray text-justify">
        {comment}
      </p>
    </div>
  );
};

export default ExperienceCard;
