import { useState } from "react";
import ContactMe from "../components/ContactMe";
import ImageSlider from "../components/ImageSlider";
import { imgUrls } from "../constants";

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

      <div className=" md:w-[700px] sm:w-auto">
        <ImageSlider slides={imgUrls} />
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="flex flex-col justify-center items-center m-28 w-full"
      >
        <h3 className="m-10 font-montserrat text-2xl md:text-3xl font-semibold">
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
