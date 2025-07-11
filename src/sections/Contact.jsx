// import { useState } from "react";
// import ContactMe from "../components/ContactMe";

// eslint-disable-next-line react/prop-types
const Contact = ({ openForm }) => {
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
        className="bg-gradient-to-r from-coral-red to-red-500 hover:from-red-500 hover:to-red-500 p-4 text-white text-lg rounded-full w-60 shadow-lg hover:shadow-red-900"
      >
        Contact Me
      </button>
      {/* {isFormOpen && <ContactMe onClose={closeForm} onBack={closeForm} />} */}
    </div>
  );
};

export default Contact;
