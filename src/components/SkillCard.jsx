const SkillCard = ({ name, value }) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="w-full max-w-xl mx-auto my-3"
    >
      <div className="flex items-center gap-4">
        
        <div className="min-w-[120px] px-2 py-1 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-slate-300 text-xs md:text-base text-center shadow-sm">
          {name}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-slate-800 rounded-full h-5 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-coral-red to-red-500 text-white text-xs flex items-center justify-end px-2 rounded-full transition-all duration-700 ease-in-out"
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
