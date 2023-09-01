const SkillCard = ({ name, value }) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="w-full h-auto flex flex-col gap-10"
    >
      <div className="flex gap-5 p-2">
        <div className="w-[180px] bg-gray-200 dark:bg-slate-900 rounded-full p-1">
          <h1 className="text-coral-red font-bold text-center">{name}</h1>
        </div>
        <div className="w-full h-6 bg-gray-200 dark:bg-slate-900 rounded-full mt-1">
          <div
            className="bg-coral-red p-1 text-blue-100 text-center h-full leading-none rounded-full"
            style={{ width: value }}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
