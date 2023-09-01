import { microsoft, devtown, GDclub } from "../assets";
import { useState } from "react";
import ContactMe from "../components/ContactMe";

const Certificates = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <section
      id="certificates"
      className="max-container justify-center items-center flex flex-col"
    >
      <h2 className="text-red-500 font-palanquin text-center text-4xl font-bold mb-10">
        Certificates
      </h2>
      <div className=" w-full mb-10 h-2/3  border-2">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full scroll-pl-6  flex snap-x snap-mandatory overflow-y-hidden gap-5 px-5 py-10 stylescroll"
        >
          <div className="flex scroll-ml-6 snap-start flex-shrink-0">
            <div className="flex-1  sm:w-[500px] w-full rounded-[20px] shadow-3xl p-5 bg-slate-50 dark:bg-slate-900">
              <img
                src={microsoft}
                width={500}
                className="rounded-[10px]"
                alt="img"
              />
            </div>
          </div>

          <div className="flex scroll-ml-6 snap-start flex-shrink-0">
            <div className="flex-1  sm:w-[500px] w-full rounded-[20px] shadow-3xl p-5 bg-slate-50 dark:bg-slate-900">
              <img
                src={devtown}
                width={500}
                className="rounded-[10px]"
                alt="img"
              />
            </div>
          </div>

          <div className="flex scroll-ml-6 snap-start flex-shrink-0">
            <div className="flex-1  sm:w-[500px] w-full rounded-[20px] shadow-3xl p-5 bg-slate-50 dark:bg-slate-900">
              <img
                src={GDclub}
                width={500}
                className="rounded-[10px]"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="flex flex-col justify-center items-center m-28 w-full"
      >
        <h3 className="m-10 font-montserrat text-3xl font-semibold">
          " Let's collaborate to turn your digital vision into reality "
        </h3>
        <button
          onClick={openForm}
          className="bg-coral-red p-4 text-white text-lg rounded-full w-60 shadow-lg hover:shadow-red-900"
        >
          Contact Me
        </button>
        {isFormOpen && <ContactMe onClose={closeForm} onBack={closeForm} />}
      </div>
    </section>
  );
};

export default Certificates;
