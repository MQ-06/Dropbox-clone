import React from "react";
import {
  FaUpload,
  FaFolderPlus,
  FaAppStore,
  FaShareAlt,
  FaCopy,
  FaPlus,
  FaClock,
  FaStar,
  FaArrowUp,
} from "react-icons/fa";

const Main = () => {
  return (
    <div className=" bg-white flex flex-col relative">
      <div className="flex items-center  space-x-4 ">
        <button className="flex flex-col items-start justify-start w-32 h-[4.3rem] bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-neutral-700">
          <FaUpload className="text-lg transition-transform transform duration-300 ease-in-out hover:rotate-180" />
          <span className="text-xs mt-3">Upload or drop</span>
        </button>
        <button className="flex flex-col items-start justify-start w-32 h-[4.3rem] bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-md font-medium hover:bg-[#f7f5f2] transition-all ">
          <FaPlus className="text-lg transition-transform transform duration-300 ease-in-out hover:rotate-180" />
          <span className="text-xs mt-3">Create</span>
        </button>
        <button className="flex flex-col items-start justify-start w-32 h-[4.3rem] bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-md font-medium hover:bg-[#f7f5f2] transition-all">
          <FaFolderPlus className="text-lg transition-transform transform duration-300 ease-in-out hover:rotate-180" />
          <span className="text-xs mt-3">Create folder</span>
        </button>
        <button className="flex flex-col items-start justify-start w-32 h-[4.3rem] bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-md font-medium hover:bg-[#f7f5f2] transition-all">
          <FaAppStore className="text-lg transition-transform transform duration-300 ease-in-out hover:rotate-180" />
          <span className="text-xs mt-3">Get the app</span>
        </button>
        <button className="flex flex-col items-start justify-start w-32 h-[4.3rem] bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-md font-medium hover:bg-[#f7f5f2] transition-all">
          <FaCopy className="text-lg transition-transform transform duration-300 ease-in-out hover:rotate-180" />
          <span className="text-xs mt-3">Transfer a copy</span>
        </button>
        <button className="flex flex-col items-start justify-start w-32 h-[4.3rem] bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-md font-medium hover:bg-[#f7f5f2] transition-all">
          <FaShareAlt className="text-lg transition-transform transform duration-300 ease-in-out hover:rotate-180" />
          <span className="text-xs mt-3">Share</span>
        </button>
      </div>

      <div className="flex-1 p-2">
        <div className="flex items-center justify-between mb-4">
          <h1
            className="text-2xl font-bold text-black"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            All files
          </h1>
          <button className="text-gray-600 hover:text-gray-800">
            <span className="sr-only">Settings</span>
            <i className="fas fa-cog"></i>
          </button>
        </div>
        <div className="flex space-x-3 mb-8">
          <button className="flex items-left px-4 py-2 bg-[#f7f5f2]  rounded-full  hover:bg-gray-200">
            <FaClock className="mr-2 text-sm text-gray-800" />
            <span className="text-xs text-black">Recents</span>
          </button>
          <button className="flex items-center px-4  bg-[#f7f5f2] text-black rounded-full hover:bg-gray-200">
            <FaStar className="mr-2 text-sm text-gray-800" />
            <span className="text-xs text-black">Starred</span>
          </button>
        </div>

        {/* Upload Area */}
        <div className="border-dashed border-2 border-neutral-400  h-72 flex flex-col items-center justify-center text-gray-600">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            class="dig-PictogramIcon _emptyStateViewIcon_8b956_287"
            width="64"
            height="64"
            focusable="false"
            role="presentation"
          >
            <path
              d="M29.996 9.514v.007c-.734 3.84-4.791 12.18-14.684 15.636l1.32 3.776c6.303-2.203 10.606-6.11 13.364-10.004V45.99h4V18.923c2.758 3.896 7.061 7.806 13.368 10.01l1.32-3.776C38.79 21.7 34.734 13.36 34 9.52h-.004v-.007h-4ZM8 54.524h48v-4H8v4Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="mt-2 text-xs text-black">Drop files here to upload</p>
          <button className="mt-4 bg-[#f7f5f2] text-sm text-black border border-gray-300 py-1 px-4 rounded-md font-medium">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
