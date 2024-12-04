import React, { useState } from "react";

const Slide = ({ quote, buttonText, reviewer, role, date, slideNumber }) => (
  <div id={`slide${slideNumber}`} className="slider-item mb-8">
    <blockquote className="mb-4">
      <p className="font-serif text-xs text-gray-900">{quote}</p>
    </blockquote>
    <button onClick={buttonText} className="text-black underline text-xs">
      {buttonText}
    </button>
    <div className="font-serif text-xs font-semibold text-gray-900 mb-2 mt-6">
      {reviewer}
    </div>
    <div className="text-xs text-gray-600 mt-1 mb-4">{role}</div>
    <div className="text-lg text-gray-600 mb-4">{date}</div>
  </div>
);

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const slidesData = [
    {
      quote:
        "Compared to its competitors, Dropbox is more secure, supports a wider variety of files and syncs files faster. It’s the perfect app if you need to collaborate on a project and share files back and forth, or if you just want to sync up your own files between your devices.",
      buttonText: "Read full review →",
      reviewer: "Chloe Good",
      role: "Project Manager at Vinfen",
      date: "01/03",
    },
    {
      quote:
        "Easy to use, easy to operate, reliable file-syncing and storage service with enhanced collaboration features, provides tighter admin controls and sharing settings, and it’s designed for businesses.",
      buttonText: "Read full review →",
      reviewer: "Verified User",
      role: "Information Technology and Services",
      date: "02/03",
    },
    {
      quote:
        "The file review reminder option is very helpful, especially when a project is live. All project updates can be uploaded to Dropbox Business, and the Admin can allow the participants to either edit or have full control. Dropbox Business can easily be downloaded and set up even on a Mobile device.",
      buttonText: "Read full review →",
      reviewer: "Aurovinda Shyamal",
      role: "Senior Software Engineer at Eurofins",
      date: "03/03",
    },
  ];

  const showSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide - 1 < 1 ? totalSlides : prevSlide - 1
    );
  };

  return (
    <div className="w-full bg-[#f7f5f2] py-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-6 text-center">
          {slidesData.map(
            (slide, index) =>
              currentSlide === index + 1 && (
                <Slide
                  key={index}
                  quote={slide.quote}
                  buttonText={slide.buttonText}
                  reviewer={slide.reviewer}
                  role={slide.role}
                  date={slide.date}
                  slideNumber={index + 1}
                />
              )
          )}

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="text-6xl text-black px-4 py-2"
            >
              ←
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="text-6xl text-black px-4 py-2"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
