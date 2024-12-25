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

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="lg:w-16 w-full bg-[#f7f5f2] flex flex-col items-center py-3 border-r border-gray-300 h-screen fixed lg:relative z-10">
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
                fill="black"
              ></path>
              <path
                d="M7.70076 18.6925L0.478516 14.0994L7.70076 9.50633L14.9242 14.0994L7.70076 18.6925Z"
                fill="black"
              ></path>
              <path
                d="M14.9242 14.0994L22.1465 9.50633L29.3687 14.0994L22.1465 18.6925L14.9242 14.0994Z"
                fill="black"
              ></path>
              <path
                d="M14.9242 24.8164L7.70077 20.2234L14.9242 15.6304L22.1465 20.2234L14.9242 24.8164Z"
                fill="black"
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
            <div className="p-1.5 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-300">
              <FaHome className="text-black w-4 h-4" />
            </div>
            <span className="text-gray-700 text-xs mt-2 group-hover:text-gray-900">
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
            <span className="text-gray-700 text-xs mt-2 group-hover:text-gray-900">
              Folders
            </span>
          </button>
        </nav>
      </aside>

      <div className="flex-1 ml-16 lg:ml-0 lg:pl-16 p-4 lg:h-screen">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-[42%]">
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-black font-sans"
            />
          </div>

          <div className="flex items-center space-x-2 ml-auto">
            <button className="flex items-center px-2 py-2 text-xs font-bold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
              <FaUserPlus className="mr-2 text-black-600" />
              Invite members
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-300">
              <FaTh />
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-300">
              <FaQuestionCircle />
            </button>
            <div className="relative">
              <button className="p-2 text-gray-700 hover:bg-gray-300">
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
                <div className="absolute right-0 mt-2 w-54 bg-white border border-gray-300 rounded-md shadow-md">
                  <div className="flex items-center space-x-2 p-2">
                    <button className="flex items-center justify-center w-7 h-7 text-xs text-black bg-blue-400 rounded-lg">
                      {user?.firstName?.charAt(0).toUpperCase()}
                      {user?.lastName?.charAt(0).toUpperCase()}
                    </button>

                    <div>
                      <div className="text-xs font-semibold text-black">
                        {user?.firstName} {user?.lastName}
                      </div>
                      <div className="text-xs text-gray-500">
                        {user?.email || "email@example.com"}
                      </div>
                    </div>
                  </div>

                  <div className="px-2">
                    <p className="text-[10px] text-gray-600 py-3">
                      Your account has 2 GB of storage
                    </p>
                  </div>
                  <hr />

                  <ul className="py-1 text-xs text-black ">
                    <li>
                      <a href="#" className="block ">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block ">
                        Manage account
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block ">
                        Automations
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block ">
                        Install desktop app
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block">
                        Theme
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={logoutUser}
                        className="block w-full text-left"
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

