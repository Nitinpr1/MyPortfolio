import { education } from "../assets";

const EducationCard = ({ name, collage, city, time, comment }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      className="flex-1 sm:w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-10 bg-slate-50 dark:bg-gray-900"
    >
      <img src={education} width={70} alt="img" />

      <h1 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-red-500">
        {name} ( {time})
      </h1>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal">
        <span className=" font-semibold">From :</span> {collage}
      </p>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal">
        {city}
      </p>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray text-justify">
        {comment}
      </p>
    </div>
  );
};

export default EducationCard;
