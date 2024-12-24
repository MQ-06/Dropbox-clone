import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({
  background = "black",
  menuVisibility = {},
  button_color = "white",
  showDivider = false,
}) => {
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const defaultMenuItems = [
    { name: "Products", path: "/products", key: "products" },
    { name: "Solutions", path: "/solutions", key: "solutions" },
    { name: "Enterprise", path: "/enterprise", key: "enterprise" },
    { name: "Pricing", path: "/plans", key: "pricing" },
    { name: "Contact Sales", path: "/contact-us", key: "contactSales" },
    { name: "Get App", path: "/get-app", key: "getApp", isDropdown: true },
    { name: "Sign Up", path: "/register", key: "signUp" },
    { name: "Log In", path: "/login", key: "signUp" },
    { name: "Get Started", path: "/plans", key: "getStarted", isButton: true },
  ];

  const filteredMenuItems = defaultMenuItems.filter(
    (item) => menuVisibility[item.key] !== false
  );

  const leftMenuItems = filteredMenuItems.slice(0, 4);
  const rightMenuItems = filteredMenuItems.slice(4);

  const textColor = background === "black" ? "white" : "black";

  return (
    <>
      <nav
        className={`sticky top-0 z-50 flex justify-between items-center px-5 py-4`}
        style={{ backgroundColor: background }}
      >
        <div className="flex items-center">
          <NavLink
            to="/"
            className={`flex items-center no-underline`}
            style={{ color: textColor }}
          >
            <span className="inline-flex bg-blue-500 p-1">
              <svg
                className="w-6 h-6"
                viewBox="0 0 30 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.70076 0.320312L0.478516 4.91332L7.70076 9.50633L14.9242 4.91332L22.1465 9.50633L29.3687 4.91332L22.1465 0.320312L14.9242 4.91332L7.70076 0.320312Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M7.70076 18.6925L0.478516 14.0994L7.70076 9.50633L14.9242 14.0994L7.70076 18.6925Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M14.9242 14.0994L22.1465 9.50633L29.3687 14.0994L22.1465 18.6925L14.9242 14.0994Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M14.9242 24.8164L7.70077 20.2234L14.9242 15.6304L22.1465 20.2234L14.9242 24.8164Z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </span>
            <span className="ml-2 text-xl font-bold">Dropbox</span>
          </NavLink>
        </div>

        <ul className="hidden md:flex flex-1 items-center justify-between ml-14">
          <div className="flex items-center space-x-6">
            {leftMenuItems.map((item) => (
              <li key={item.key}>
                <NavLink
                  to={item.path}
                  className={`hover:text-blue-500 focus:outline-none font-semibold text-[15px]`}
                  style={{ color: textColor }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </div>
          <div className="flex items-center space-x-6">
            {rightMenuItems.map((item) =>
              item.isDropdown ? (
                <div key={item.key} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center space-x-2 font-semibold text-[15px] hover:text-blue-500"
                    style={{ color: textColor }}
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-5 h-5 transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 10l5 5 5-5H7z" fill={textColor} />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div
                      className="absolute left-0 w-full bg-black text-white p-4 mt-2 rounded-lg"
                      style={{ zIndex: 1000 }}
                    >
                      <div className="flex flex-col">
                        <NavLink
                          to="/desktop-app"
                          className="block py-2 hover:text-blue-500 text-sm text-white w-full text-center"
                        >
                          Desktop App
                        </NavLink>
                        <NavLink
                          to="/mobile-app"
                          className="block py-2 hover:text-blue-500 text-sm text-white w-full text-center"
                        >
                          Mobile App
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              ) : item.isButton ? (
                <NavLink
                  key={item.key}
                  to={item.path}
                  className=" text-black px-4 py-2 rounded-lg font-semibold text-sm"
                  style={{ backgroundColor: button_color }}
                >
                  {item.name}
                </NavLink>
              ) : (
                <li key={item.key}>
                  <NavLink
                    to={item.path}
                    className={`hover:text-blue-500 focus:outline-none font-semibold text-[15px]`}
                    style={{ color: textColor }}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            )}
          </div>
        </ul>

        {/* Hamburger Button for Small Screens */}
        <button
          onClick={() => setVisible(!visible)}
          className="md:hidden flex items-center justify-center bg-transparent"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            width="32"
            height="32"
            aria-label="Menu"
          >
            <path
              d="M18.5 16.5h-13V18h13v-1.5Zm0-5.5h-13v1.5h13V11Zm0-5.5h-13V7h13V5.5Z"
              fill={textColor}
            ></path>
          </svg>
        </button>
      </nav>

      {showDivider && (
        <hr
          className="sticky top-0 z-50"
          style={{ backgroundColor: "skin", height: "1.1px", width: "100%" }}
        />
      )}
    </>
  );
};

export default Navbar;
