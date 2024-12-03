import React from "react";
import Footer from "../Footer";
import Navbar from "../NavBar";

const Enterprise = () => {
  const menuVisibility = {
    products: true,
    solutions: true,
    enterprise: true,
    pricing: true,
    contactSales: true,
    getApp: true,
    signUp: true,
    logIn: true,
    getStarted: true,
  };
  return (
    <div>
      <Navbar
        background="white"
        button_color="rgb(59 130 246)"
        menuVisibility={menuVisibility}
      />
      <div className="w-full min-h-screen bg-[#f7f5f2] flex flex-col md:flex-row items-center md:items-start justify-between gap-x-10 py-16 px-12">
        <div className="md:w-1/2 space-y-6">
          <p
            className="text-black font-semibold text-xl"
            style={{ fontFamily: "'Helvetica', sans-serif" }}
          >
            Dropbox Enterprise
          </p>
          <h1
            className="text-gray-900 text-4xl font-bold leading-tight"
            style={{ fontFamily: "'Helvetica', sans-serif", maxWidth: "500px" }}
          >
            Secure collaboration across your corporation
          </h1>
          <p
            className="text-gray-700 text-lg"
            style={{
              fontFamily: "'Helvetica', sans-serif",
              maxWidth: "500px",
            }}
          >
            Help your teams store, share and get more done. With
            industry-leading security features, you can secure unmanaged data
            and control licenses all in one place.
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact sales
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="ml-2 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </a>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            className="rounded-lg shadow-md w-full"
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/fss-send-track-ui-2048x1280-en_GB.png?id=a3100dda-77ad-4b24-97db-d916197bb1f7&amp;output_type=png"
            alt="Dropbox interface preview"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enterprise;
