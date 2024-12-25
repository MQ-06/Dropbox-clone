import React from "react";
import {
  FaSearch,
  FaUserPlus,
  FaBell,
  FaQuestionCircle,
  FaTh,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
     
      <div className="relative w-1/3">
        <FaSearch className="absolute top-3 left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Right Side Icons and Buttons */}
      <div className="flex items-center space-x-4">
        {/* Invite Members */}
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaUserPlus className="mr-2 text-gray-600" />
          Invite members
        </button>

        {/* Icon Grid */}
        <button className="p-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaTh />
        </button>

        {/* Help Icon */}
        <button className="p-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaQuestionCircle />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button className="p-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300">
            <FaBell />
          </button>
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Profile Circle */}
        <div className="flex items-center justify-center w-8 h-8 text-sm font-medium text-white bg-blue-500 rounded-full">
          MQ
        </div>

        {/* Upgrade Button */}
        <button className="px-4 py-2 text-sm font-medium text-black bg-lime-400 rounded-full hover:bg-lime-500">
          Click to upgrade
        </button>
      </div>
    </div>
  );
};

export default TopBar;
