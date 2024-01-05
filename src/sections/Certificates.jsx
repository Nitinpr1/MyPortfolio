import ImageSlider from "../components/ImageSlider";
import { imgUrls } from "../constants";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="max-container justify-center items-center flex flex-col"
    >
      <h2 className="text-red-500 font-palanquin text-center text-4xl font-bold mb-10">
        Certificates
      </h2>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="md:w-[700px] sm:w-auto"
      >
        <ImageSlider slides={imgUrls} />
      </div>
    </section>
  );
};

export default Certificates;
