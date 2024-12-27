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
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [error, setError] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFolderName("");
    setError("");
  };

  const handleCreateFolder = () => {
    if (!folderName.trim()) {
      setError("Folder name is required!");
      return;
    }
    console.log("Folder created:", folderName);
    setIsModalOpen(false);
    setFolderName("");
    setError("");
  };

  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col relative ${
        theme === "dark" ? "bg-[#1a1a19] text-white" : "bg-white text-black"
      }`}
    >
      <div className={`flex items-center space-x-4`}>
        <button
          className={`flex flex-col items-start justify-start w-32 h-[4.3rem] 
      ${
        theme === "dark"
          ? "bg-white text-black hover:bg-neutral-300 border border-zinc-700"
          : "bg-black text-white border border-gray-300"
      } 
      py-2 px-4 rounded-xl font-medium hover:bg-neutral-800`}
        >
          <FaUpload
            className={`text-lg transition-transform transform duration-300 ease-in-out 
        ${theme === "dark" ? "text-black" : "text-white"} hover:rotate-180`}
          />
          <span
            className={`text-xs mt-3 ${
              theme === "dark" ? "text-black border-zinc-700" : "text-white"
            }`}
          >
            Upload or drop
          </span>
        </button>

        <button
          className={`flex flex-col items-start justify-start w-32 h-[4.3rem] 
      ${
        theme === "dark"
          ? "bg-[#1a1a19] text-white hover:bg-zinc-800 border border-zinc-700"
          : "bg-white text-gray-700 border border-gray-300"
      } 
      py-2 px-4 rounded-xl font-medium hover:bg-[#f7f5f2] transition-all`}
        >
          <FaPlus
            className={`text-lg transition-transform transform duration-300 ease-in-out 
        ${theme === "dark" ? "text-white" : "text-gray-700"} hover:rotate-180`}
          />
          <span
            className={`text-xs mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            Create
          </span>
        </button>

        <button
          onClick={handleOpenModal}
          className={`flex flex-col items-start justify-start w-32 h-[4.3rem] 
      ${
        theme === "dark"
          ? "bg-[#1a1a19] text-white hover:bg-zinc-800 border border-zinc-700"
          : "bg-white text-gray-700 border border-gray-300"
      } 
      py-2 px-4 rounded-xl font-medium hover:bg-[#f7f5f2] transition-all`}
        >
          <FaFolderPlus
            className={`text-lg transition-transform transform duration-300 ease-in-out 
        ${theme === "dark" ? "text-white" : "text-gray-700"} hover:rotate-180`}
          />
          <span
            className={`text-xs mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            Create folder
          </span>
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div
              className={`w-[28rem] p-6 rounded-lg shadow-lg h-[15rem] ${
                theme === "dark"
                  ? "bg-[#232322] text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <div className="flex items-center mb-2">
                <div className="flex items-center justify-center p-3">
                  <FaFolderPlus className="text-blue-500 text-lg" />
                </div>
                <h2 className="text-med font-semibold ml-2">Create Folder</h2>
              </div>

              <hr
                className={`border-t-1 ${
                  theme === "dark" ? "border-gray-600" : "border-gray-300"
                } mb-2`}
              />

              {/* Input Field */}
              <label htmlFor="folder-name" className="block mb-1 mt-5 text-xs">
                Name
              </label>
              <input
                id="folder-name"
                type="text"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                className={`w-full p-2 border rounded-md mb-2  text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  theme === "dark"
                    ? "bg-[#1f1f1e] text-white border-gray-600"
                    : "bg-white text-black"
                }`}
                placeholder="Folder name"
              />
              {error && <p className="text-red-500 text-xs">{error}</p>}

              <div className="flex justify-end space-x-4 mt-5">
                <button
                  onClick={handleCloseModal}
                  className={`py-2 px-3 rounded-md text-xs ${
                    theme === "dark"
                      ? "bg-gray-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateFolder}
                  className={`py-2 px-3 rounded-md text-xs ${
                    theme === "dark"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => navigate("/install")}
          className={`flex flex-col items-start justify-start w-32 h-[4.3rem] 
        ${
          theme === "dark"
            ? "bg-[#1a1a19] text-white hover:bg-zinc-800 border border-zinc-700"
            : "bg-white text-gray-700 border border-gray-300"
        } 
        py-2 px-4 rounded-xl font-medium hover:bg-[#f7f5f2] transition-all`}
        >
          <FaAppStore
            className={`text-lg transition-transform transform duration-300 ease-in-out 
          ${
            theme === "dark" ? "text-white" : "text-gray-700"
          } hover:rotate-180`}
          />
          <span
            className={`text-xs mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            Get the app
          </span>
        </button>

        <button
          className={`flex flex-col items-start justify-start w-32 h-[4.3rem] 
      ${
        theme === "dark"
          ? "bg-[#1a1a19] text-white hover:bg-zinc-800 border border-zinc-700"
          : "bg-white text-gray-700 border border-gray-300"
      } 
      py-2 px-4 rounded-xl font-medium hover:bg-[#f7f5f2] transition-all`}
        >
          <FaCopy
            className={`text-lg transition-transform transform duration-300 ease-in-out 
        ${theme === "dark" ? "text-white" : "text-gray-700"} hover:rotate-180`}
          />
          <span
            className={`text-xs mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            Transfer a copy
          </span>
        </button>

        <button
          className={`flex flex-col items-start justify-start w-32 h-[4.3rem] 
      ${
        theme === "dark"
          ? "bg-[#1a1a19] text-white hover:bg-zinc-800 border border-zinc-700"
          : "bg-white text-gray-700 border border-gray-300"
      } 
      py-2 px-4 rounded-xl font-medium hover:bg-[#f7f5f2] transition-all`}
        >
          <FaShareAlt
            className={`text-lg transition -transform transform duration-300 ease-in-out 
        ${theme === "dark" ? "text-white" : "text-gray-700"} hover:rotate-180`}
          />
          <span
            className={`text-xs mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            Share
          </span>
        </button>
      </div>

      <div className="flex-1 p-2">
        <div className="flex items-center justify-between mb-4">
          <h1
            className={`text-2xl font-medium ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
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
          <button
            className={`flex items-left px-4 py-2 rounded-full ${
              theme === "dark"
                ? "bg-[#ffffff1a] text-white "
                : "bg-[#f7f5f2] text-black hover:bg-gray-200"
            }`}
          >
            <FaClock className="mr-2 text-sm" />
            <span className="text-xs">Recents</span>
          </button>
          <button
            className={`flex items-center px-4 rounded-full ${
              theme === "dark"
                ? "bg-[#ffffff1a] text-white "
                : "bg-[#f7f5f2] text-black hover:bg-gray-200"
            }`}
          >
            <FaStar className="mr-2 text-sm" />
            <span className="text-xs">Starred</span>
          </button>
        </div>

        <div
          className={`border-dashed border-2 ${
            theme === "dark" ? "border-[#a89d96]" : "border-neutral-300"
          } h-72 flex flex-col items-center justify-center text-gray-600`}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="dig-PictogramIcon _emptyStateViewIcon_8b956_287"
            width="64"
            height="64"
            focusable="false"
            role="presentation"
          >
            <path
              d="M29.996 9.514v.007c-.734 3.84-4.791 12.18-14.684 15.636l1.32 3.776c6.303-2.203 10.606-6.11 13.364-10.004V45.99h4V18.923c2.758 3.896 7.061 7.806 13.368 10.01l1.32-3.776C38.79 21.7 34.734 13.36 34 9.52h-.004v-.007h-4ZM8 54.524h48v-4H8v4Z"
              fill={theme === "dark" ? "#D3D3D3" : "#3E1F15"}
            ></path>
          </svg>

          <p
            className={`mt-2 text-xs ${
              theme === "dark" ? "text-gray-300" : "text-black"
            }`}
          >
            Drop files here to upload
          </p>
          <button className="mt-4 bg-[#f7f5f2] text-sm text-black border border-gray-300 py-1 px-4 rounded-md font-medium">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
