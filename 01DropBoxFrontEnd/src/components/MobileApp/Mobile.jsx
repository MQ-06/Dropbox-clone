import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Mobile = () => {
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
      {/* Navbar */}
      <Navbar
        background="white"
        button_color="rgb(59 130 246)"
        menuVisibility={menuVisibility}
      />

      <div className="bg-[#f7f5f2] py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-xl font-medium text-gray-800 mb-4"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Dropbox mobile app
          </h2>

          <p className="text-2xl text-black font-bold">
            Keep work flowing – on the go
          </p>

          <p
            className="text-base text-center"
            style={{
              fontFamily: "'Helvetica', sans-serif",
              display: "block",
              width: "100%",
              margin: "0 auto",
              lineHeight: "1.5",
              maxWidth: "700px",
            }}
          >
            The free Dropbox mobile app helps you keep projects moving from
            anywhere, so you can stay focused on what matters. Access work,
            collaborate with colleagues and clients, and quickly take care of
            tasks – all from your phone or tablet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-around items-center py-16 px-8 bg-[#f7f5f2]">
        {/* Video Section */}
        <div>
          <video
            className="w-full"
            style={{ maxWidth: "250px" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/mobile/02_Batch-2_CameraUpload_1080.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="relative w-1/2 bg-[#fad24b] text-center py-20 px-4">
          <img
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/qr-code/mobile_qr_code.png?id=4aa4501f-af87-477b-bd82-8f56fd406bda&output_type=png"
            alt="QR Code"
            className="mb-4 mx-auto w-48"
          />
          <p className="text-black mb-0 text-xs">Scan the QR code or go to</p>
          <a
            href="https://dropbox.com/go"
            className="text-black mb-4 block text-xs underline"
          >
            dropbox.com/go
          </a>

          <div className="absolute bottom-[19px] left-1/2 transform -translate-x-1/2 flex space-x-4">
            <a
              href="https://itunes.apple.com/gb/app/dropbox/id327630330?mt=8"
              title="Download from the App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="w-30 mt-2"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.dropbox.android"
              title="Download from Google Play"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="w-36"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className="image-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          height: "900px",
        }}
      >
        <img
          src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/mobile/MobileVideoThumbnail.jpg?id=bc28c534-32b9-487a-a7e0-b93e93e0cc7a&width=1920&output_type=webp"
          alt="Mobile Video Thumbnail"
          className="ml-44"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* similar sections */}

      <div className="flex items-center justify-around bg-[#f7f5f2] text-black p-8 min-h-screen">
        <div className="bg-[#eee9e2] p-16 w-full max-w-3xl flex justify-center items-center">
          <img
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/mobile/MobileOfflineDownloads.png?id=44ed5b96-fe52-44ed-af19-b488178dfef1&output_type=webp"
            alt="Dropbox Sync Example"
            className="rounded-lg w-1/2 sm:w-64"
          />
        </div>

        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4">
            All your work, at your fingertips
          </h2>
          <p className="text-lg mb-4">
            Access your files from anywhere with the Dropbox mobile app, and
            never miss a beat. You can even mark files and folders for offline
            access to make them available if you lose your internet connection.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-around bg-[#f7f5f2] text-black p-8 min-h-screen">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">Give and get feedback</h2>
          <p className="text-lg mb-4">
            Dropbox makes it easy to send files big and small, and collect
            everyone’s comments in one place. Viewers can access links and
            preview over 150 file types, plus add comments and read yours—even
            if they don’t have a Dropbox account.
          </p>
        </div>

        <div className="bg-[#eee9e2] p-16 w-full max-w-3xl flex justify-center items-center">
          <img
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/mobile/MobileComments.png?id=bb691839-d546-4faa-b192-7a2e6667fe39&output_type=webp"
            alt="Dropbox Sharing Example"
            className="rounded-lg w-1/2 sm:w-64"
          />
        </div>
      </div>

      <div className="flex items-center justify-around bg-[#f7f5f2] text-black p-8 min-h-screen">
        <div className="bg-[#eee9e2] p-16 w-full max-w-3xl flex justify-center items-center">
          <img
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/mobile/MobileScans.png?id=019988fc-0096-4d03-828f-f713882bf8ef&output_type=webp"
            alt="Dropbox Sync Example"
            className="rounded-lg w-1/2 sm:w-64"
          />
        </div>

        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4">Get your time back</h2>
          <p className="text-lg mb-4">
            The Dropbox mobile app simplifies common tasks that can eat up your
            day. Scan receipts, stickies, and other documents in seconds using
            your phone’s camera. Save time—and get peace of mind—with automatic
            photo and video backup.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center py-16 px-8 bg-[#f7f5f2]">
        <div className="text-5xl ml-16">
          Keep work flowing on the <br />{" "}
          <span className="justify-center text-center">go</span>
        </div>

        <div className="w-1/2 bg-[#fad24b] text-center py-20 px-4">
          <img
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/qr-code/mobile_qr_code.png?id=4aa4501f-af87-477b-bd82-8f56fd406bda&amp;output_type=png"
            alt="QR Code"
            className="mb-4 mx-auto w-48"
          />

          <p className="text-black mb-0 text-xs">Scan the QR code or go to</p>
          <a
            href="https://dropbox.com/go"
            className="text-black mb-4 block text-xs"
          >
            dropbox.com/go
          </a>
          <div className="absolute left-3/4 transform -translate-x-1/2 flex space-x-4">
            <a
              href="https://itunes.apple.com/gb/app/dropbox/id327630330?mt=8"
              title="Download from the App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="w-30 mt-2"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.dropbox.android"
              title="Download from Google Play"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="w-36"
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mobile;
