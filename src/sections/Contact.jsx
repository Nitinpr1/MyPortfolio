import { useState } from "react";
import ContactMe from "../components/ContactMe";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className="flex flex-col justify-center items-center sm:mt-20 mt-10 mb-20 w-full"
    >
      <h3 className="p-5 mb-5 md:mb-2 font-montserrat text-2xl md:text-3xl font-semibold">
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
  );
};

export default Contact;
