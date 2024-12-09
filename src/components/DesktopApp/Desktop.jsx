import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
const Desktop = () => {
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
      <body
        className="bg-[#f7f5f2] min-h-screen"
        style={{ fontFamily: "'Helvetica', sans-serif" }}
      >
        <div
          className="bg-[#f7f5f2] w-full min-h-screen flex justify-around items-center"
          style={{ marginBottom: "-135px" }}
        >
          <div className="max-w-full mx-auto rounded-md shadow-md grid grid-cols-1 md:grid-cols-3 bg-[#f7f5f2] w-full">
            <div className="p-8 bg-skin-tone md:col-span-1 ml-1 h-full">
              <h1 className="text-5xl font-bold mb-4">
                <span>The Dropbox</span>
                <br />
                <span className="block">desktop app</span>
              </h1>
              <p className="text-gray-700 mb-6 text-lg">
                Save hard drive space, share and edit files, and send for
                signature — all without the distraction of countless browser
                tabs.
              </p>
              <p className="text-gray-700 mb-6">Get the desktop app now.</p>
              <div className="flex flex-col space-y-4 items-start">
                <a
                  href="#"
                  className="bg-blue-600 text-white px-9 py-4 rounded-md shadow-md hover:bg-blue-700 text-left"
                >
                  Learn more
                </a>
                <a href="#" className="text-black hover:underline text-center">
                  or download the mobile app
                </a>
              </div>
            </div>

            <div
              className="bg-[#be4b0a] p-6 flex justify-center items-center md:col-span-2"
              style={{ opacity: 0.9 }}
            >
              <div className="image-container">
                <img
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/desktop/Image-1-Explorer-en_GB.png?id=b6982c97-bd19-474f-ba53-dc28ccbd895e&output_type=webp"
                  alt="Dropbox App Preview"
                  className="rounded-md shadow-md max-w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around bg-[#1e1919] text-white p-8 min-h-screen">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4">
              Share files quickly, with anyone
            </h2>
            <p className="text-lg mb-4">
              Share a Dropbox link – of photos, videos, zipped folders, CAD
              files and more – with anyone, even if they don’t have a Dropbox
              account.
            </p>
            <p className="text-lg">
              Have big files to share? Got you covered. Dropbox is still the
              best way to share big files.
            </p>
          </div>

          <div className="bg-[#2b2929] p-14">
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/desktop/Image-2-share-en_GB.png?id=fffecd2c-7075-4d2d-af04-f864a59eb0fc&output_type=webp"
              alt="Dropbox Sharing Example"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex items-center justify-around bg-[#1e1919] text-white p-8 min-h-screen">
          <div className="bg-[#2b2929] p-14">
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/desktop/Image-3-sync-en_GB.png?id=653f4fc2-1bf8-44bc-a907-5da15be9c422&output_type=webp"
              alt="Dropbox Sync Example"
              className="rounded-lg"
            />
          </div>

          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4">Changes sync everywhere</h2>
            <p className="text-lg mb-4">
              Every update you make to your desktop file or folder will also
              reflect on dropbox.com, and on your mobile phone and tablet.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-around bg-[#1e1919] text-white p-8 min-h-screen">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4">
              Right-click your files and do more
            </h2>
            <p className="text-lg mb-4">
              Want to send your file for signature? See version history? By
              right-clicking a file in your Dropbox folder, you can uncover a
              whole host of options.
            </p>
          </div>

          <div className="bg-[#2b2929] p-14">
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/desktop/Image-2-share-en_GB.png?id=fffecd2c-7075-4d2d-af04-f864a59eb0fc&output_type=webp"
              alt="Dropbox Sharing Example"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="bg-[#f7f5f2]">
          <h2 className="text-center text-4xl font-base text-gray-900 mb-12 mt-12">
            Unlock the full potential of the Dropbox
            <span className="block">folder on desktop</span>
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-[#eee9e2] p-4 shadow-md flex items-center justify-center h-80">
                <img
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/desktop/Image-5-permissions.png?id=26fe081f-1a9f-48df-b8a3-6f48244dc096&output_type=png"
                  alt="On a file, a user can choose whether the people they share a file with can edit it or view-only."
                  className="rounded-md mx-auto w-full h-40 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-[550] text-gray-900 mb-2">
                  Control file and folder permissions
                </h3>
                <p className="text-gray-600">
                  Dropbox makes it easy to control who can access your files and
                  how much they can do.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#eee9e2] p-4 shadow-md flex items-center justify-center h-80">
                <img
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/desktop/Image-6-tray.png?id=8f3a7deb-f259-4ad7-8c37-187baea075f4&output_type=png"
                  alt="The tray is open and it shows the user a brief list of their recent files and file activity."
                  className="rounded-md mx-auto w-full h-64 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-[550] text-gray-900 mb-2">
                  Take a quick glance
                </h3>
                <p className="text-gray-600">
                  Search your files and see recent activity by clicking the
                  Dropbox icon on your PC’s taskbar or Mac’s menu bar.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#eee9e2] p-4 shadow-md flex items-center justify-center h-80">
                <img
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/desktop/Image-7-organize.png?id=c8b7e392-e70a-408c-bf2a-47c01826c307&output_type=webp"
                  alt="Organizing files by dragging them into different locations."
                  className="rounded-md mx-auto w-full h-40 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-[550] text-gray-900 mb-2">
                  Organize it all
                </h3>
                <p className="text-gray-600">
                  Give your files focus by adding them to folders, dragging to
                  different locations, renaming, and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-20 mt-14 flex text-left bg-[#1e1919] px-8 justify-evenly">
          <div className="max-w-lg">
            <h2 className="text-4xl font-semibold text-white mb-6 ml-1">
              Get the Dropbox desktop app
              <span className="block">today</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3 items-start justify-center mr-8">
            <a
              href="https://help.dropbox.com/installs-integrations/desktop/desktop-application-overview#open"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-600 transition"
            >
              Download now
            </a>
            <a
              href="#"
              className="text-white underline text-lg hover:text-gray-300 transition"
            >
              or learn more
            </a>
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
};

export default Desktop;
