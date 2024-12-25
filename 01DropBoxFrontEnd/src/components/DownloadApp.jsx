import React from "react";
import Navbar from "./Navbar";

const DownloadApp = () => {
  return (
    <div>
      <Navbar
        background="white"
        menuVisibility={{
          products: false,
          solutions: false,
          enterprise: false,
          pricing: false,
          contactSales: false,
          getApp: false,
          signUp: false,
          logIn: false,
          getStarted: false,
        }}
        showDivider={true}
      />
      <div className="bg-white flex flex-col items-center justify-center min-h-screen">
        <p className="text-sm text-neutral-800 mb-2">Install the desktop app</p>
        <h1
          className="text-5xl font-bold mb-4 text-center"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          The Dropbox experience,
          <br />
          without the distraction of web
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-xs">
          Install
        </button>

        <img
          src="https://cfl.dropboxstatic.com/static/metaserver/static/images/install/value_props_localized_desktop_images/dropbox-desktop-mockup-win-en_GB-vflkBMbSu.png"
          alt="Dropbox Desktop Mockup"
          className="mt-3 w-[100%] max-w-3xl"
        />
      </div>
    </div>
  );
};

export default DownloadApp;
