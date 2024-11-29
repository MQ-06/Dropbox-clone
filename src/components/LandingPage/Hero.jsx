import React from "react";
import { NavLink } from "react-router-dom";
// import '.../index.css'

const Hero = () => {
  return (
    <div className="hero bg-black py-16">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-white sm:text-5xl ">
          Get to work, with a lot less work
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          Dropbox delivers tools that help you move your work forward faster,
          keep it safe, and let you collaborate with ease.
        </p>

        <div className="mt-10 flex justify-center gap-x-6">
          <NavLink
            to="/register"
            className="rounded-xl bg-blue-500 px-5 py-4 text-lg font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 arrow-button"
          >
            Sign up free
            <span className="arrow ml-2">→</span>
          </NavLink>

          <NavLink
            to="/plans"
            className="text-lg font-semibold leading-6 text-white flex items-center find-plan"
          >
            Find your plan
            <span className="arrow-plan ml-2">→</span>
          </NavLink>
        </div>

        <p className="text-xs text-gray-400 mt-4 mr-40">
          No credit card required.
        </p>
      </div>
    </div>
  );
};

export default Hero;
