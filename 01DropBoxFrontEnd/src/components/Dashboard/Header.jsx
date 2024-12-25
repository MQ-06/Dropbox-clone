import React, { useState, useContext } from "react";
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
} from "react-icons/fa";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { user, logoutUser } = useContext(UserContext);
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isThemeDropdownVisible, setIsThemeDropdownVisible] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const toggleThemeDropdown = () => {
    setIsThemeDropdownVisible((prevState) => !prevState);
  };

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    setIsThemeDropdownVisible(false);
  };

  return (
    <div
      className={`flex flex-col lg:flex-row ${
        theme === "dark" ? "bg-[#1a1a19] text-white" : "bg-white text-black"
      }`}
    >
      <aside
        className={`lg:w-16 w-full sm:w-9 ${
          theme === "dark" ? "bg-black" : "bg-[#f7f5f2]"
        } flex flex-col items-center py-3 border-r ${
          theme === "dark" ? "border-gray-700" : "border-gray-300"
        } h-screen fixed lg:relative z-10`}
      >
        <div className="mb-8">
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

        <nav className="space-y-6">
          <button
            onClick={() => setActiveSection("home")}
            className={`flex flex-col items-center group ${
              activeSection === "home" ? "text-blue-600" : ""
            }`}
          >
            <div
              className={`p-1.5 rounded-full ${
                theme === "dark" ? "bg-white" : "bg-gray-200"
              } flex items-center justify-center group-hover:bg-white`}
            >
              <FaHome className="text-black w-4 h-4" />
            </div>
            <span
              className={`text-xs mt-2 group-hover:text-gray-900 ${
                theme === "dark" ? "text-white" : "text-gray-700"
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
              className={`text-xs mt-2 group-hover:text-gray-900 ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              Folders
            </span>
          </button>
        </nav>
      </aside>

      <div className="flex-1 ml-16 lg:ml-0 lg:pl-16 p-4 lg:h-screen">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-[42%]">
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
              <FaUserPlus
                className={`mr-2 ${
                  theme === "dark" ? "text-white" : "text-black-600"
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

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center w-8 h-8 text-xs font-xs text-black bg-blue-400 rounded-full"
              >
                {user?.firstName?.charAt(0).toUpperCase()}
                {user?.lastName?.charAt(0).toUpperCase()}
              </button>

              {isDropdownVisible && (
                <div
                  className={`absolute right-0 mt-2 w-54 rounded-md shadow-md ${
                    theme === "dark"
                      ? "bg-[#333333] text-white ]"
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

                  <ul className="py-1 text-xs">
                    <li>
                      <a
                        href="#"
                        className={`block ${
                          theme === "dark" ? "text-white " : "text-black"
                        }`}
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block ${
                          theme === "dark"
                            ? "text-white  hover:text-black"
                            : "text-black"
                        }`}
                      >
                        Manage account
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block ${
                          theme === "dark"
                            ? "text-white  hover:bg-[#333333]"
                            : "text-black"
                        }`}
                      >
                        Automations
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block ${
                          theme === "dark"
                            ? "text-white  hover:bg-[#333333]"
                            : "text-black"
                        }`}
                      >
                        Install desktop app
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={toggleThemeDropdown}
                        className={`block ${
                          theme === "dark" ? "text-white  " : "text-black"
                        }`}
                      >
                        Theme
                      </button>

                      {isThemeDropdownVisible && (
                        <div
                          className={`absolute left-0 mt-1 border border-gray-300 rounded-md shadow-md w-36 ${
                            theme === "dark" ? "bg-[#444444]" : "bg-white"
                          }`}
                        >
                          <button
                            onClick={() => changeTheme("light")}
                            className={`block w-full px-4 py-2 text-left  ${
                              theme === "dark"
                                ? "text-white hover:bg-[#333333]"
                                : "text-black hover:bg-gray-100"
                            }`}
                          >
                            Light Mode
                          </button>
                          <button
                            onClick={() => changeTheme("dark")}
                            className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                              theme === "dark"
                                ? "text-white  hover:bg-[#333333]"
                                : "text-black"
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
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button className="px-3 py-1.5 text-sm font-sm text-black bg-lime-400 rounded-md hover:bg-lime-500">
              Click to upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
