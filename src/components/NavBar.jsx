import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (

    <>
    <nav className="flex justify-between items-center px-5 py-4 bg-black">
      <div className="flex items-center">
        <NavLink to="/" className="flex items-center text-white no-underline">
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
          <span className="ml-2 text-xl font-bold relative top-[-px]">
            Dropbox
          </span>
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 -ml-[30rem]">
        <li>
          <NavLink
            to="/products"
            className="hover:text-blue-500 focus:outline-none text-white font-semibold text-[15px]"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/solutions"
            className="hover:text-blue-500 focus:outline-none text-white font-semibold text-[15px]"
          >
            Solutions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/enterprise"
            className="hover:text-blue-500 focus:outline-none text-white font-semibold text-[15px]"
          >
            Enterprise
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/plans"
            className="hover:text-blue-500 focus:outline-none text-white font-semibold text-[15px]"
          >
            Pricing
          </NavLink>
        </li>
      </ul>

      {/* Right-side buttons */}
      <div className="flex items-center space-x-5">
        <button className="p-1 text-white hover:text-blue-500 focus:outline-none">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.75 4C6.535 4 4 6.535 4 11.75s2.535 7.75 7.75 7.75 7.75-2.535 7.75-7.75S16.965 4 11.75 4Zm5.714 4.5H14.87a9.237 9.237 0 0 0-.623-2.711A4.454 4.454 0 0 1 17.463 8.5ZM18 11.75c.002.586-.042 1.171-.133 1.75H14.97c.022-.579.03-1.167.03-1.75s-.008-1.171-.03-1.75h2.897c.09.579.135 1.164.133 1.75ZM11.75 18c-.616 0-1.3-.41-1.598-3h3.196c-.298 2.59-.982 3-1.598 3Zm-1.712-4.5c-.024-.524-.038-1.1-.038-1.75 0-.65.014-1.226.038-1.75h3.424c.024.524.038 1.1.038 1.75 0 .65-.014 1.226-.038 1.75h-3.424ZM5.5 11.75c-.002-.586.042-1.171.133-1.75H8.53c-.022.579-.03 1.167-.03 1.75s.008 1.171.03 1.75H5.633a11.074 11.074 0 0 1-.133-1.75Zm6.25-6.25c.616 0 1.3.41 1.598 3h-3.196c.298-2.59.982-3 1.598-3Zm-2.497.289A9.236 9.236 0 0 0 8.63 8.5H6.036a4.454 4.454 0 0 1 3.217-2.711ZM6.036 15H8.63c.07.93.28 1.844.623 2.711A4.453 4.453 0 0 1 6.037 15Zm8.21 2.711A9.237 9.237 0 0 0 14.87 15h2.594a4.454 4.454 0 0 1-3.217 2.711Z" />
          </svg>
        </button>
        <NavLink
          to="/contact-us"
          className="text-white hover:text-blue-500 text-sm"
        >
          Contact sales
        </NavLink>
        <NavLink
          to="/get-app"
          className="text-white hover:text-blue-500 text-sm"
        >
          Get app
        </NavLink>
        <NavLink
          to="/register"
          className="text-white hover:text-blue-500 text-sm"
        >
          Sign up
        </NavLink>
        <NavLink to="/login" className="text-white hover:text-blue-500 text-sm">
          Log in
        </NavLink>
        <NavLink
          to="/plans"
          className="bg-gray-100 text-black px-4 py-2 rounded-lg font-semibold text-sm"
        >
          Get started
        </NavLink>

        {/* Hamburger Button for Small Screens */}
        {/* <button
          onClick={() => setVisible(!visible)}
          className="lg:hidden flex items-center justify-center bg-transparent"
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
              fill="black"
            ></path>
          </svg>
        </button> */}
      </div>
    </nav>
    
    {/* Dropdown Menu for Small Screens */}
    <div
      className={`absolute top-0 right-0 bg-white w-full transition-all ${visible ? "block" : "hidden"}`}
    >
      <ul className="flex flex-col items-center py-4">
        <li>
          <NavLink
            to="/products"
            className="py-2 text-black text-[15px] hover:text-blue-500"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/solutions"
            className="py-2 text-black text-[15px] hover:text-blue-500"
          >
            Solutions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/enterprise"
            className="py-2 text-black text-[15px] hover:text-blue-500"
          >
            Enterprise
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/plans"
            className="py-2 text-black text-[15px] hover:text-blue-500"
          >
            Pricing
          </NavLink>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Navbar;
