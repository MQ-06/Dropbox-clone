import { useParams } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import {
  FaSearch,
  FaUserPlus,
  FaBell,
  FaQuestionCircle,
  FaTh,
  FaHome,
  FaFolder,
  FaChevronUp,
  FaChevronDown,
  FaUser,
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

import {
  MdOutlineFolder,
  MdPhotoLibrary,
  MdPeopleAlt,
  MdEditNote,
  MdFileDownload,
  MdDelete,
} from "react-icons/md";

import { UserContext } from "../../context/UserContext";
import Main from "./main";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FolderPage = () => {
  const navigate = useNavigate();
  const handleFolderClick = (folderName) => {
    navigate(`/folders/${encodeURIComponent(folderName)}`);
  };
  const [folders, setFolders] = useState([]);

  const createFolder = (folderName) => {
    const updatedFolders = [...folders, folderName];
    setFolders(updatedFolders);
    localStorage.setItem("folders", JSON.stringify(updatedFolders));
  };

  useEffect(() => {
    const storedFolders = JSON.parse(localStorage.getItem("folders")) || [];
    setFolders(storedFolders);
  }, []);

  const { user, logoutUser, loginUser } = useContext(UserContext);
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isThemeDropdownVisible, setIsThemeDropdownVisible] = useState(false);
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "light");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    if (user?.id) {
      localStorage.setItem(`theme_${user.id}`, selectedTheme);
    }
    setIsThemeDropdownVisible(false);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const id = urlParams.get("id");

    if (token) {
      localStorage.setItem("authToken", token);
      fetchUserData(token);
    } else if (id) {
      navigate(`/dashboard/${id}`);
    } else {
      console.error("No token or id found in the URL");
    }
  }, [navigate]);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      loginUser(data);

      const savedThemeForUser = localStorage.getItem(`theme_${data.id}`);
      if (savedThemeForUser) {
        setTheme(savedThemeForUser);
      } else {
        setTheme("light");
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [savedTheme]);

  useEffect(() => {
    if (user) {
      const savedThemeForUser = localStorage.getItem(`theme_${user.id}`);
      if (savedThemeForUser) {
        setTheme(savedThemeForUser);
      } else {
        setTheme("light");
      }
    }
  }, [user]);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const toggleThemeDropdown = () => {
    setIsThemeDropdownVisible((prevState) => !prevState);
  };
  useEffect(() => {
    const savedFolders = JSON.parse(localStorage.getItem("folders"));
    if (savedFolders) {
      setFolders(savedFolders);
    }
  }, []);
  
  const { folderName } = useParams();
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const folderId = window.location.pathname.split("/")[2]; // Get folder ID from URL

    if (!file) return;

    try {
      const token = localStorage.getItem("authToken");

      // Step 1: Fetch the upload URL from the backend
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to get upload URL");

      const { uploadUrl } = await response.json();

      // Step 2: Upload the file to the upload URL
      const formData = new FormData();
      formData.append("file", file);

      const uploadResponse = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) throw new Error("File upload failed");

      const { fileUrl } = await uploadResponse.json();

      // Step 3: Send the file metadata along with the folder ID to the backend
      const uploadFileResponse = await fetch(
        `http://localhost:5000/api/folder/${folderId}/upload`, // Pass folderId in URL
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

      if (!uploadFileResponse.ok)
        throw new Error("Error uploading file metadata");

      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload file");
    }
  };

  return (
    <div
      className={`flex flex-col lg:flex-row  ${
        theme === "dark" ? "bg-[#1a1a19] text-white" : "bg-white text-black"
      }`}
    >
      <aside
        className={`flex flex-col items-center py-3 border-r h-screen fixed z-10 ${
          isSidebarVisible ? "w-16" : "lg:w-16 sm:w-9 w-24"
        } ${
          theme === "dark" ? "bg-black" : "bg-[#f7f5f2]"
        } transition-all duration-300 left-1`}
      >
        <div className="mb-8 flex items-center justify-between w-full">
          <a href="/" className="block">
            <svg
              className="w-8 h-8"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.70076 0.320312L0.478516 4.91332L7.70076 9.50633L14.9242 4.91332L22.1465 9.50633L29.3687 4.91332L22.1465 0.320312L14.9242 4.91332L7.70076 0.320312Z"
                fill={theme === "dark" ? "white" : "black"}
              ></path>
              <path
                d="M7.70076 18.6925L0.478516 14.0994L7.70076 9.50633L14.9242 14.0994L7.70076 18.6925Z"
                fill={theme === "dark" ? "white" : "black"}
              ></path>
              <path
                d="M14.9242 14.0994L22.1465 9.50633L29.3687 14.0994L22.1465 18.6925L14.9242 14.0994Z"
                fill={theme === "dark" ? "white" : "black"}
              ></path>
              <path
                d="M14.9242 24.8164L7.70077 20.2234L14.9242 15.6304L22.1465 20.2234L14.9242 24.8164Z"
                fill={theme === "dark" ? "white" : "black"}
              ></path>
            </svg>
          </a>
        </div>

        <nav className="space-y-6 w-full">
          <button
            onClick={() => setActiveSection("home")}
            className={`flex flex-col items-center group ${
              activeSection === "home" ? "text-blue-600" : ""
            }`}
          >
            <div
              className={`p-1.5 rounded-full ${
                theme === "dark" ? "bg-white" : "bg-gray-200"
              } flex items-center justify-center  `}
            >
              <FaHome className="text-black w-4 h-4" />
            </div>
            <span
              className={`text-xs mt-2  ${
                theme === "dark"
                  ? "text-white"
                  : "text-gray-700 group-hover:text-gray-900"
              }`}
            >
              Home
            </span>
          </button>

          <button
            onClick={() => setActiveSection("folders")}
            className={`flex flex-col items-center group ${
              activeSection === "folders" ? "text-blue-600" : ""
            }`}
          >
            <div className="p-1.5 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-300">
              <FaFolder className="text-black w-4 h-4" />
            </div>
            <span
              className={`text-xs mt-2  ${
                theme === "dark"
                  ? "text-white"
                  : "text-gray-700 group-hover:text-gray-900"
              }`}
            >
              Folders
            </span>
          </button>
        </nav>
        <button
          onClick={toggleSidebar}
          className="text-black p-2 absolute bottom-0 mb-8 w-full flex justify-center"
        >
          {isSidebarVisible ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </aside>

      <div className="relative ">
        <div
          className={`flex-grow-0 lg:pl-16 p-4 lg:h-screen transition-all duration-300 ${
            isSidebarVisible ? "ml-48" : "ml-0"
          }`}
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          {isSidebarVisible && activeSection === "folders" && (
            <aside
              className={`fixed left-16 top-0 h-screen  ${
                theme === "dark"
                  ? "bg-[#121211] text-white"
                  : "bg-[#f7f5f2] text-black"
              } shadow-md w-48 z-20`}
            >
              <h2 className="p-4 font-bold">Folders</h2>
              <ul className="space-y-2 p-4 text-xs">
                {folders.length === 0 ? (
                  <li>No folders available</li>
                ) : (
                  folders.map((folder, index) => (
                    <li
                      key={index}
                      className="flex items-center p-2 rounded hover:text-black"
                      onClick={() => handleFolderClick(folder)}
                    >
                      <FaFolder
                        className="mr-2 text-light-blue-500"
                        size={14}
                      />
                      {folder}
                    </li>
                  ))
                )}
              </ul>
            </aside>
          )}

          {isSidebarVisible && activeSection === "home" && (
            <aside
              className={`fixed left-16 top-0 h-screen ${
                theme === "dark"
                  ? "bg-[#121211] text-white"
                  : "bg-[#f7f5f2] text-black"
              } shadow-md w-48 z-20`}
            >
              <h2 className="p-4 font-bold">Home</h2>
              <ul className="space-y-2 p-4 text-xs">
                <li className="flex items-center p-2 rounded  hover:text-black ">
                  <MdOutlineFolder className="mr-2" />
                  All files
                </li>
                <li className="flex items-center p-2 rounded  hover:text-black">
                  <MdPhotoLibrary className="mr-2" />
                  Photos
                </li>
                <li className="flex items-center p-2 rounded  hover:text-black">
                  <MdPeopleAlt className="mr-2" />
                  Shared
                </li>
                <li className="flex items-center p-2 rounded  hover:text-black">
                  <MdEditNote className="mr-2" />
                  Signatures
                </li>
                <li className="flex items-center p-2 rounded  hover:text-black">
                  <MdFileDownload className="mr-2" />
                  File requests
                </li>
                <li className="flex items-center p-2 rounded hover:text-black  ">
                  <MdDelete className="mr-2" />
                  Deleted files
                </li>
              </ul>
            </aside>
          )}
        </div>
      </div>

      {/* new section */}

      <div className="flex-1 ml-16 lg:ml-0 lg:pl-16 p-4 lg:h-screen">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-[50%] right-7">
            <FaSearch
              className={`absolute top-3 left-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <input
              type="text"
              placeholder="Search"
              className={`w-full py-2 pl-10 pr-4 border rounded-md ${
                theme === "dark"
                  ? "bg-[#1c1c1b] text-white border-gray-500"
                  : "bg-white text-black border-gray-300"
              }`}
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            />
          </div>

          <div className="flex items-center space-x-2 ml-auto">
            <button
              className={`flex items-center px-2 py-2 text-xs font-bold rounded-md ${
                theme === "dark"
                  ? "text-white bg-[#333333] hover:bg-[#444444]"
                  : "text-gray-700 bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <FaUser
                Plus
                className={`mr-2 ${
                  theme === " dark" ? "text-white" : "text-black-600"
                }`}
              />
              Invite members
            </button>

            <button
              className={`p-2 ${
                theme === "dark"
                  ? " text-white hover:bg-neutral-700 rounded-lg"
                  : " text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FaTh />
            </button>
            <button
              className={`p-2 ${
                theme === "dark"
                  ? " text-white hover:bg-neutral-700 rounded-lg"
                  : " text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FaQuestionCircle />
            </button>
            <div className="relative">
              <button
                className={`p-2 ${
                  theme === "dark"
                    ? " text-white hover:bg-neutral-700 rounded-lg"
                    : " text-gray-700 hover:bg-gray-300"
                }`}
              >
                <FaBell />
              </button>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            <div className="relative ">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center w-8 h-8 text-xs font-xs text-black bg-blue-400 rounded-full z-10"
              >
                {user?.profilePhoto ? (
                  <img
                    src={user.profilePhoto}
                    alt="User  Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  user?.firstName?.charAt(0).toUpperCase() +
                  user?.lastName?.charAt(0).toUpperCase()
                )}
              </button>
              {isDropdownVisible && (
                <div
                  className={`absolute right-0 mt-2 w-54 rounded-md shadow-md z-50  ${
                    theme === "dark"
                      ? "bg-[#333333] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <div className="flex items-center space-x-2 p-2">
                    <button className="flex items-center justify-center w-7 h-7 text-xs text-black bg-blue-400 rounded-lg">
                      {user?.firstName?.charAt(0).toUpperCase()}
                      {user?.lastName?.charAt(0).toUpperCase()}
                    </button>

                    <div>
                      <div
                        className={`text-xs font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {user?.firstName} {user?.lastName}
                      </div>
                      <div
                        className={`text-xs ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {user?.email || "email@example.com"}
                      </div>
                    </div>
                  </div>

                  <div className="px-2">
                    <p
                      className={`text-[10px] py-3 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Your account has 2 GB of storage
                    </p>
                  </div>
                  <hr />

                  <ul className="py-1 text-xs ">
                    <li
                      className={
                        theme === "dark"
                          ? "hover:bg-[#333333]"
                          : "hover:bg-gray-200"
                      }
                    >
                      <a
                        href="#"
                        className={`block ${
                          theme === "dark" ? "text-black" : "text-black"
                        }`}
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block ${
                          theme === "dark" ? "text-black" : "text-black"
                        }`}
                      >
                        Manage account
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block ${
                          theme === "dark" ? "text-black " : "text-black"
                        }`}
                      >
                        Automations
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block ${
                          theme === "dark" ? "text-black " : "text-black"
                        }`}
                      >
                        Install desktop app
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={toggleThemeDropdown}
                        className={`block  ${
                          theme === "dark" ? "text-black" : "text-black"
                        }`}
                      >
                        Theme
                      </button>

                      {isThemeDropdownVisible && (
                        <div
                          className={`absolute left-0 mt-1 border  rounded-md shadow-md w-36 z-50 ${
                            theme === "dark" ? "bg-[#444444]" : "bg-white"
                          }`}
                        >
                          <button
                            onClick={() => changeTheme("light")}
                            className={`block w-full px-4 py-2 text-left ${
                              theme === "dark"
                                ? "text-white hover:bg-[#333333]"
                                : "text-black hover:bg-gray-100"
                            }`}
                          >
                            Light Mode
                          </button>
                          <button
                            onClick={() => changeTheme("dark")}
                            className={`block w-full px-4 py-2 text-left  ${
                              theme === "dark"
                                ? "text-white hover:bg-[#333333]"
                                : "text-black hover:bg-gray-100"
                            }`}
                          >
                            Dark Mode
                          </button>
                        </div>
                      )}
                    </li>
                    <li>
                      <button
                        onClick={logoutUser}
                        className={`block ${
                          theme === "dark" ? "text-black" : "text-black"
                        }`}
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link to="/plans">
              <button className="px-3 py-1.5 text-sm font-sm text-black bg-lime-400 rounded-md hover:bg-lime-500">
                Click to upgrade
              </button>
            </Link>
          </div>
        </div>

        <div className="main-section ml-[-30px]">
          <Main
            theme={theme}
            createFolder={createFolder}
            showUpload={true}
            showCreate={true}
            showFolder={true}
            showApp={true}
            showCopy={false}
            showShare={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FolderPage;
