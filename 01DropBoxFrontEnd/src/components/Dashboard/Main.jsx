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

const Main = ({
  theme,
  createFolder,
  showUpload = true,
  showCreate = true,
  showFolder = true,
  showApp = true,
  showCopy = true,
  showShare = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [error, setError] = useState("");
  const handleCreateFolder = () => {
    if (folderName.trim()) {
      createFolder(folderName);
      setFolderName("");
      handleCloseModal();
    } else {
      setError("Please enter a valid folder name.");
    }
  };
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFolderName("");
    setError("");
  };

  const navigate = useNavigate();

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const folderId = window.location.pathname.split("/")[2]; // Get folder ID from URL
  
    if (!file) return;
  
    try {
      const token = localStorage.getItem("authToken");
  
      // Step 1: Fetch the upload URL from the backend (which gets it from UploadThing)
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) throw new Error("Failed to get upload URL");
  
      const { uploadUrl } = await response.json();
  
      // Step 2: Upload the file to UploadThing using the upload URL
      const formData = new FormData();
      formData.append("file", file);
  
      const uploadResponse = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });
  
      if (!uploadResponse.ok) throw new Error("File upload failed");
  
      const { fileUrl } = await uploadResponse.json();
  
      // Step 3: Send the file metadata to the backend to store in the database
      const uploadFileResponse = await fetch(
        `http://localhost:5000/api/folder/${folderId}/upload`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileUrl,
            fileName: file.name,
          }),
        }
      );
  
      if (!uploadFileResponse.ok) throw new Error("Error uploading file metadata");
  
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload file");
    }
  };
  
  return (
    <div
      className={`flex flex-col relative ${
        theme === "dark" ? "bg-[#1a1a19] text-white" : "bg-white text-black"
      }`}
    >
      <div className={`flex items-center space-x-4`}>
        {showUpload && (
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
        )}

        {showCreate && (
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
            ${
              theme === "dark" ? "text-white" : "text-gray-700"
            } hover:rotate-180`}
            />
            <span
              className={`text-xs mt-3 ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              Create
            </span>
          </button>
        )}

        {showFolder && (
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
            ${
              theme === "dark" ? "text-white" : "text-gray-700"
            } hover:rotate-180`}
            />
            <span
              className={`text-xs mt-3 ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              Create folder
            </span>
          </button>
        )}

        {showApp && (
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
        )}

        {showCopy && (
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
            ${
              theme === "dark" ? "text-white" : "text-gray-700"
            } hover:rotate-180`}
            />
            <span
              className={`text-xs mt-3 ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              Transfer a copy
            </span>
          </button>
        )}

        {showShare && (
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
            ${
              theme === "dark" ? "text-white" : "text-gray-700"
            } hover:rotate-180`}
            />
            <span
              className={`text-xs mt-3 ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              Share
            </span>
          </button>
        )}
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
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleFileUpload}
            id="file-upload-input"
          />
          <button
            onClick={() => document.getElementById("file-upload-input").click()}
            className="upload-btn mt-4 bg-[#f7f5f2] text-sm text-black border border-gray-300 py-1 px-4 rounded-md font-medium"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
