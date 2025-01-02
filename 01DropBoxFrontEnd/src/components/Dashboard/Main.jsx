import React, { useState, useEffect, useRef } from "react";
import {
  FaUpload,
  FaFolderPlus,
  FaFolderOpen,
  FaPlus,
  FaClock,
  FaStar,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Main = ({
  theme,
  createFolder,
  showUpload = true,
  showCreate = true,
  showFolder = true,
  showApp = true,
  showCopy = true,
  showShare = true,
  showFolders = true,
}) => {
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [folders, setFolders] = useState([]);
  const navigate = useNavigate();

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    console.log("Selected files:", selectedFiles);
  };

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    console.log("Dropped files:", droppedFiles);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFolderName("");
  };

  const handleCreateFolder = async () => {
    if (folderName.trim()) {
      try {
        const token = localStorage.getItem("authToken");

        if (!token) {
          throw new Error("User is not authenticated.");
        }

        const response = await fetch("http://localhost:5000/api/folder", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ folderName: folderName }),
        });

        if (!response.ok) {
          throw new Error("Failed to create folder");
        }

        const { folder } = await response.json();

        setFolders((prevFolders) => {
          const updatedFolders = [...prevFolders, folder];
          localStorage.setItem("folders", JSON.stringify(updatedFolders)); // Save to localStorage
          return updatedFolders;
        });
        setFolderName("");
        handleCloseModal();
      } catch (error) {
        console.error("Error creating folder:", error);
      }
    }
  };

  const handleFolderClick = (folderName) => {
    navigate(`/folders/${encodeURIComponent(folderName)}`);
  };

  useEffect(() => {
    // Check if the token exists and the user is authenticated
    const token = localStorage.getItem("authToken");
    const storedFolders = localStorage.getItem("folders");

    if (!token) {
      // Token not available, redirect to login or handle accordingly
      navigate("/login");
    } else {
      // Token is available, proceed with fetching user data and folders
      if (storedFolders) {
        // If folders are already in localStorage, use them
        setFolders(JSON.parse(storedFolders));
      } else {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
          const user = JSON.parse(storedUser);
          const id = user._id;
          if (id) {
            fetchUserData(id);
          }
        }
      }
    }
  }, [navigate]);

  const fetchUserData = async (id) => {
    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.error("Token is missing");
        return;
      }

      const response = await fetch(`http://localhost:5000/api/user/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();

      // Fetch folders
      const foldersResponse = await fetch(
        `http://localhost:5000/api/user/${id}/folders`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!foldersResponse.ok) {
        throw new Error("Failed to fetch user folders");
      }

      const foldersData = await foldersResponse.json();
      setFolders(foldersData);
      localStorage.setItem("folders", JSON.stringify(foldersData)); // Save to localStorage
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  return (
    <div
      className={`flex flex-col relative ${
        theme === "dark" ? "bg-[#1a1a19] text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center space-x-4">
        {showUpload && (
          <>
            <button
              onClick={() => fileInputRef.current.click()}
              // onChange={(e) => setTitle(e.target.value)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className={`flex flex-col items-start justify-start w-32 h-[4.3rem] ${
                theme === "dark"
                  ? "bg-white text-black hover:bg-neutral-300 border border-zinc-700"
                  : "bg-black text-white border border-gray-300"
              } py-2 px-4 rounded-xl font-medium hover:bg-neutral-800`}
            >
              <FaUpload
                className={`text-lg transition-transform transform duration-300 ease-in-out ${
                  theme === "dark" ? "text-black" : "text-white"
                } hover:rotate-180`}
              />
              <span
                className={`text-xs mt-3 ${
                  theme === "dark" ? "text-black border-zinc-700" : "text-white"
                }`}
              >
                Upload or drop
              </span>
            </button>

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              // onChange={(e) => setFile(e.target.value[0])}
              multiple
            />
          </>
        )}

        {showCreate && (
          <button
            onClick={handleOpenModal}
            className={`flex flex-col items-start justify-start w-32 h-[4.3rem] ${
              theme === "dark"
                ? "bg-[#1a1a19] text-white hover:bg-zinc-800 border border-zinc-700"
                : "bg-white text-gray-700 border border-gray-300"
            } py-2 px-4 rounded-xl font-medium hover:bg-[#f7f5f2] transition-all`}
          >
            <FaPlus
              className={`text-lg transition-transform transform duration-300 ease-in-out ${
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
            className={`flex flex-col items-start justify-start w-32 h-[4.3rem] ${
              theme === "dark"
                ? "bg-[#1a1a19] text-white hover:bg-zinc-800 border border-zinc-700"
                : "bg-white text-gray-700 border border-gray-300"
            } py-2 px-4 rounded-xl font-medium hover:bg-[#f7f5f2] transition-all`}
          >
            <FaFolderPlus
              className={`text-lg transition-transform transform duration-300 ease-in-out ${
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

        {isModalOpen && showFolder && (
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

              <label htmlFor="folder-name" className="block mb-1 mt-5 text-xs">
                Name
              </label>
              <input
                id="folder-name"
                type="text"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                className={`w-full p-2 border rounded-md mb-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  theme === "dark"
                    ? "bg-[#1f1f1e] text-white border-gray-600"
                    : "bg-white text-black"
                }`}
                placeholder="Folder name"
              />

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
      </div>

      {showFolders && (
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
          </div>

          <div className="flex space-x-3 mb-8">
            <button
              className={`flex items-left px-4 py-2 rounded-full ${
                theme === "dark"
                  ? "bg-[#ffffff1a] text-white"
                  : "bg-[#f7f5f2] text-black hover:bg-gray-200"
              }`}
            >
              <FaClock className="mr-2 text-sm" />
              <span className="text-xs">Recents</span>
            </button>
            <button
              className={`flex items-center px-4 rounded-full ${
                theme === "dark"
                  ? "bg-[#ffffff1a] text-white"
                  : "bg-[#f7f5f2] text-black hover:bg-gray-200"
              }`}
            >
              <FaStar className="mr-2 text-sm" />
              <span className="text-xs">Starred</span>
            </button>
          </div>

          {folders.length > 0 ? (
            <div
              className={`grid grid-cols-3 gap-8 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {folders.map((folder, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-6 rounded-lg ${
                    theme === "dark"
                      ? "bg-[#272725] text-black border border-gray-300"
                      : "bg-[#f7f5f2] text-gray-700 border border-gray-200"
                  } cursor-pointer hover:shadow-lg transition-all duration-300`}
                  onClick={() => handleFolderClick(folder.folderName)}
                >
                  <FaFolderOpen className="text-[80px] text-blue-400 mb-4" />
                  <p className="text-sm text-center font-medium">
                    {folder.folderName}
                  </p>
                  <p className="text-xs text-center text-gray-500">
                    Folder • {folder.itemsCount || "0"} items
                  </p>
                </div>
              ))}
            </div>
          ) : (
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
                  d="M29.996 9.514v.007c-.734 3.84-4.791 12.18-14.684 15.636l1.32 3.776c6.303-2.203 10.673-5.267 12.22-9.225 1.204-2.029 2.099-3.358 3.289-3.358 1.196 0 2.032 1.396 2.057 2.569l-.177 2.915c.224 3.368-3.237 5.965-7.412 5.532-2.779-.273-4.508-3.513-4.138-5.847.099-.46-.308-.893-.775-.887-.465 0-.891.329-.986.795-1.123 2.364-3.01 2.193-5.55 1.09-2.035-.742-5.555-3.234-7.221-5.723C7.298 13.665 6.764 5.579 8.428 1.364c.749-2.382 2.45-3.548 4.548-3.548 2.097 0 4.242 1.588 5.855 4.189 3.315 5.308 1.085 13.113 7.239 17.419 2.274 1.763 3.681 3.437 4.91 4.46 3.443 2.932 7.178 3.856 10.855 4.88z"
                  fill="#757575"
                ></path>
              </svg>
              <span>No folders yet</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Main;
