import React, { useState } from "react";

const ImageAdjustments = () => {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [highlight, setHighlight] = useState(100);
  const [shadow, setShadow] = useState(100);
  const [exposure, setExposure] = useState(100);

  const filterStyle = {
    filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${highlight}%) 
             sepia(${shadow}%) exposure(${exposure}%)`,
  };

  return (
    <div className="py-12 px-6 bg-white">
      <div className="text-center">
        <div className="inline-flex items-center px-2 py-1 rounded-full bg-orange-600 text-white text-xs mb-4 ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-3 mr-1"
          >
            <path d="M16 3H8C6.895 3 6 3.895 6 5V19C6 20.105 6.895 21 8 21H16C17.105 21 18 20.105 18 19V5C18 3.895 17.105 3 16 3ZM16 19H8V5H16V19Z" />
            <path d="M10 17H14V15H10V17ZM10 13H14V11H10V13Z" />
          </svg>
          Content collaboration
        </div>

        {/* Heading and Subtext */}
        <h2 className="text-xl font-bold tracking-tight sm:text-xl">
          Work with anyone, from anywhere, on any device
        </h2>
        <p className="mt-4 text-sm text-gray-500 max-w-xl mx-auto">
          Dropbox delivers flexible sharing, smart organization, and seamless
          collaboration—even for those without an account—so you and your team
          can get it done, and done right.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#"
            className="inline-block border border-black py-2 px-4 rounded-lg text-xs text-black flex items-center hover:bg-slate-300"
          >
            Get started free
            <span className="ml-2 text-lg">→</span>
          </a>
          <a
            href="#"
            className="inline-block text-sm py-2 px-4 rounded-lg text-black flex items-center"
          >
            Learn more
            <span className="ml-2 text-lg">→</span>
          </a>
        </div>
      </div>

      <div className="mt-12 flex justify-center items-center relative">
        <div className="relative">
          <video
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/collaboration/Bottle-Solo.mp4"
            autoplay
            loop
            muted
            style={filterStyle}
            className="rounded-lg shadow-lg w-[380px] h-auto"
          ></video>

          <div className="relative bottom-[380px] left-1/2 transform -translate-x-1/3 flex items-center space-x-1">
            <img
              src="data:image/webp;base64,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"
              alt="Person"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-black text-white text-sm py-2 px-4 rounded-full shadow-lg">
              <span className="text-blue-500">@Beth</span> adjust brightness
            </div>
          </div>
        </div>

        <div className="absolute left-[840px] top-[80px] bg-black bg-opacity-90 text-white rounded-lg p-4 shadow-lg w-44">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 rounded-full bg-orange-400 text-center text-black font-bold flex items-center justify-center">
              BS
            </div>
            <span className="text-xs text-orange-400 font-medium ml-2">
              Beth
            </span>
          </div>
          <h4 className="text-sm font-semibold mb-3">Adjust</h4>
          <div className="">
            <div>
              <label for="brightness" className="block text-xs">
                Brightness
              </label>
              <input
                id="brightness"
                type="range"
                min="0"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(e.target.value)}
                className="w-32 h-1"
              />
            </div>
            <div>
              <label for="contrast" className="block text-xs">
                Contrast
              </label>
              <input
                id="contrast"
                type="range"
                min="0"
                max="100"
                value={contrast}
                onChange={(e) => setContrast(e.target.value)}
                className="w-32 h-1"
              />
            </div>
            <div>
              <label for="highlight" className="block text-xs">
                Highlight
              </label>
              <input
                id="highlight"
                type="range"
                min="0"
                max="100"
                value={highlight}
                onChange={(e) => setHighlight(e.target.value)}
                className="w-32 h-1"
              />
            </div>
            <div>
              <label for="shadow" className="block text-xs">
                Shadow
              </label>
              <input
                id="shadow"
                type="range"
                min="0"
                max="100"
                value={shadow}
                onChange={(e) => setShadow(e.target.value)}
                className="w-32 h-1"
              />
            </div>
            <div>
              <label for="exposure" className="block text-xs">
                Exposure
              </label>
              <input
                id="exposure"
                type="range"
                min="0"
                max="100"
                value={exposure}
                onChange={(e) => setExposure(e.target.value)}
                className="w-32 h-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAdjustments;
