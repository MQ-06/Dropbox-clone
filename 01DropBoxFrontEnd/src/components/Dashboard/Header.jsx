import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { id } = useParams();  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  const userFromQuery = params.get("user"); 
  const { user, setUser } = useContext(UserContext); 

  const [activeSection, setActiveSection] = useState("home");
  const [isContentVisible, setIsContentVisible] = useState(true);

  useEffect(() => {
    if (userFromQuery) {
      const parsedUser = JSON.parse(userFromQuery);
      setUser(parsedUser); 
    }
  }, [userFromQuery, setUser]);

  // If no user is set, you can check if the id from params matches
  useEffect(() => {
    if (id && !user) {
      // Optionally, if the user data is not in context, you can fetch it using the id or token
      console.log("User ID from URL:", id);
      // You could also use `id` to fetch data from an API if necessary
    }
  }, [id, user]);

  const toggleContent = () => {
    setIsContentVisible((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="lg:w-16 w-full bg-[#f7f5f2] flex flex-col items-center py-3 border-r border-gray-300 h-screen fixed lg:relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <a href="/" className="block">
            {/* Your logo here */}
          </a>
        </div>

        <nav className="space-y-6">
          {/* Your navigation buttons */}
        </nav>

        <div className="mt-auto mb-4">
          <button
            onClick={toggleContent}
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
          >
            {isContentVisible ? (
              <FaChevronDown className="text-black w-4 h-4" />
            ) : (
              <FaChevronUp className="text-black w-4 h-4" />
            )}
          </button>
        </div>
      </aside>

      <div className="flex-1 ml-16 lg:ml-0 lg:pl-16 p-4 lg:h-screen">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-[42%]">
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="flex items-center space-x-2 ml-auto mt-2">
            {/* Display user's profile picture or initials */}
            <div className="flex items-center space-x-2">
              {user?.profilePic ? (
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="flex items-center justify-center w-10 h-10 text-xs font-xs text-white bg-blue-400 rounded-full">
                  {user?.firstName?.charAt(0).toUpperCase()}
                  {user?.lastName?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <button className="px-3 py-1.5 text-sm font-sm text-black bg-lime-400 rounded-md hover:bg-lime-500">
              Click to upgrade
            </button>
          </div>
        </div>

        {/* Main Content */}
        {isContentVisible && (
          <div className="content-section">
            {/* Add content here that can be toggled */}
            <h2>Welcome to your dashboard, {user?.firstName}!</h2>
            <p>Here's some content that can be toggled.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
