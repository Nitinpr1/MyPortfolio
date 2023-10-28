import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-full relative flex flex-row">
      <div
        className="absolute top-[40%] left-4  cursor-pointer text-xl md:text-3xl p-2 rounded-md text-coral-red hover:scale-125 duration-200"
        onClick={prevSlide}
      >
        ❰
      </div>
      <div className="p-0 md:p-5 shadow-xl rounded-lg bg-slate-50 dark:bg-slate-900">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide}`}
          className="rounded-2xl"
        />
      </div>
      <div
        className="absolute top-[40%] right-4 cursor-pointer text-xl md:text-3xl p-2 rounded-md text-coral-red hover:scale-125 duration-200"
        onClick={nextSlide}
      >
        ❱
      </div>
    </div>
  );
};

export default ImageSlider;
