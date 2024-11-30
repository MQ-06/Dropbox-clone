import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ReusableSection = ({
  badgeText,
  badgeColor,
  heading,
  subtext,
  videoSrc,
  imgSrc,
  buttonPrimaryText,
  buttonPrimaryLink,
  buttonSecondaryText,
  buttonSecondaryLink,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div
      className="py-12 px-6 bg-white"
      data-aos="fade-up" 
    >
      <div className="text-center">
        <div
          className={`inline-flex items-center px-2 py-1 rounded-full text-white text-xs mb-4 ml-3`}
          style={{ backgroundColor: badgeColor }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-3 mr-1"
          >
            <path d="M16 3H8C6.895 3 6 3.895 6 5V19C6 20.105 6.895 21 8 21H16C17.105 21 18 20.105 18 19V5C18 3.895 17.105 3 16 3ZM16 19H8V5H16V19Z" />
            <path d="M10 17H14V15H10V17ZM10 13H14V11H10V13Z" />
          </svg>
          {badgeText}
        </div>

        <h2 className="text-xl font-bold tracking-tight sm:text-xl">
          {heading}
        </h2>
        <p className="mt-4 text-sm text-gray-500 max-w-xl mx-auto">{subtext}</p>

        <div className="mt-8 flex justify-center space-x-4">
          <a
            href={buttonPrimaryLink}
            className="inline-block border border-black py-2 px-4 rounded-lg text-xs text-black flex items-center hover:bg-slate-300"
          >
            {buttonPrimaryText}
            <span className="ml-2 text-lg">→</span>
          </a>
          <a
            href={buttonSecondaryLink}
            className="inline-block text-sm py-2 px-4 rounded-lg text-black flex items-center"
          >
            {buttonSecondaryText}
            <span className="ml-2 text-lg">→</span>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center mt-3">
        <div className="flex items-center justify-center max-w-[1100px]">
          <div className="relative flex items-center">
            {videoSrc && (
              <div className="relative z-20">
                <video
                  className="max-w-[500px] rounded-lg shadow-lg"
                  autoPlay
                  playsInline
                  loop
                  muted
                  aria-label="Video"
                >
                  <source src={videoSrc} type="video/webm; codecs=vp9" />
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
            )}
            {imgSrc && (
              <div className="relative -ml-[30px]">
                <img
                  className="shadow-lg h-[450px] w-auto object-cover rounded-lg"
                  alt={heading}
                  loading="lazy"
                  src={imgSrc}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusableSection;
