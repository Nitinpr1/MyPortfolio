import { github } from "../assets/index";
import { instagram } from "../assets/index";
import { link } from "../assets/index";
import { twitter } from "../assets/index";
import { nitinnew } from "../assets/index";
// import ContactMe from "../components/ContactMe";
// import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Home = ({ openForm }) => {
  // const [isFormOpen, setIsFormOpen] = useState(false);

  // const openForm = () => {
  //   setIsFormOpen(true);
  // };

  // const closeForm = () => {
  //   setIsFormOpen(false);
  // };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center items-center max-container gap-10 md:flex-col-reverse"
    >
      <div
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        className="flex justify-center items-center xl:min-h-screen rounded-xl mt-[140px] md:hidden"
      >
        <div className="bg-coral-red bg-gradient-to-r from-orange-300 w-[150px]  h-[170px]  rounded-xl rotate-12 border"></div>
        <img
          src={nitinnew}
          alt="Nitin Prajapati"
          width={150}
          height={70}
          className="object-contain absolute rounded-xl shadow-3xl border hover:rotate-6 duration-500"
        />
      </div>
      <div className="relative xl:w-3/5 flex flex-col  justify-center items-start w-full  max-xl:padding-x pt-10  xl:mt-10">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="md:mt-0 font-palanquin text-[40px] md:text-8xl font-bold"
        >
          <span className="pr-3 text-coral-red">Nitin</span>
          <span>Prajapati </span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-montserrat text-coral-red text-lg leading-8 mt-1 sm:max-w-sm p-2"
        >
          Full Stack Web Developer
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-montserrat text-slate-gray text-lg  mb-5 w-full text-justify p-2"
        >
          I am a passionate Full Stack Web Developer with expertise in{" "}
          <b>MERN stack</b>. From crafting engaging user interfaces to building
          robust backends and RESTful APIs, I enjoy bringing ideas to life in
          the digital world. With a blend of creativity and problem-solving
          skills, I strive to deliver exceptional web experiences.
        </p>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex flex-row justify-center items-center mt-1 gap-10 w-full"
        >
          <a
            href="https://www.linkedin.com/in/nitin-prajapati1/"
            target="blank"
          >
            <img src={link} alt="linkedin" width={53} />
          </a>

          <a href="https://github.com/Nitinpr1" target="blank">
            <img src={github} alt="github" width={40} />
          </a>
          <a href="https://www.instagram.com/nitin_prajapati15/" target="blank">
            <img src={instagram} alt="Instagram" width={40} />
          </a>
          <a href="https://twitter.com/NitinPr_01" target="blank">
            <img src={twitter} alt="twitter" width={40} />
          </a>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center mt-10 gap-4 w-full">
          <button
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={openForm}
            className="bg-coral-red p-4 text-white text-lg rounded-full w-60 shadow-lg hover:shadow-red-900"
          >
            Contact Me
          </button>

          {/* {isFormOpen && <ContactMe onClose={closeForm} onBack={closeForm} />} */}

          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="#projects"
            className="bg-white text-center border-2 text-red-500 p-4 text-lg rounded-full w-60 shadow-lg hover:shadow-red-500"
          >
            View Projects
          </a>
        </div>
      </div>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        className="flex-1 md:flex justify-center items-center xl:min-h-screen rounded-xl mt-10 hidden md:mt-40 xl:mt-10"
      >
        <div className="bg-coral-red bg-gradient-to-r from-orange-300 w-[260px] md:w-[280px] h-[300px] md:h-[310px] rounded-2xl rotate-12 border-2"></div>
        <img
          src={nitinnew}
          alt="Nitin Prajapati"
          width={280}
          height={270}
          className="object-contain absolute rounded-3xl shadow-3xl border-2 hover:rotate-6 duration-500"
        />
      </div>
    </section>
  );
};

export default Home;
