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
    <div className="bg-[#f7f5f2]">
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
      <div className="bg-[#1e1919] text-center py-16 px-6 -mt-44">
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
          One clear message from customers: <br />
          Dropbox is where you work together
        </h2>
        <p
          className="text-white text-sm mb-6 text-center mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Customers trust Dropbox as a secure solution that enables easy sharing
          and collaboration. With automated tools built to scale, Dropbox
          Enterprise companies are more efficient.
        </p>
        <a
          href="https://www.g2.com/products/dropbox/reviews"
          target="_blank"
          rel="noreferrer"
          className="text-white font-semibold underline inline-flex items-center hover:text-gray-300 transition"
        >
          Read G2 reviews
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
            />
          </svg>
        </a>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center gap-4 p-8 bg-[#1e1919]">
        <div className="text-center max-w-xs bg-[#2b2929] p-9 shadow-lg">
          <div className="h-56 w-56 mx-auto mb-4">
            <picture>
              <img
                alt="G2 badge"
                className="w-full h-full object-contain"
                loading="lazy"
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/g2-users-badge-480x480.svg?id=523c3c0a-748f-42e4-ae9c-f970be0695ca"
              />
            </picture>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-base text-white">Users love us</h3>
            <p className="mt-2 text-white text-sm">
              Dropbox users rate our products highly among our peers.
            </p>
          </div>
        </div>

        <div className="text-center max-w-xs bg-[#2b2929] p-6 shadow-lg">
          <div className="h-56 w-56 mx-auto mb-4">
            <picture>
              <img
                alt="G2 badge"
                className="w-full h-full object-contain"
                loading="lazy"
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/g2-enterprise-badge-480x480.svg?id=ab211839-ba82-4d4d-816f-e0b8e71ccc20"
              />
            </picture>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-base text-white">
              Leader in enterprise
            </h3>
            <p className="mt-2 text-white text-sm">
              Dropbox is highly rated by G2 users and has a substantial
              Satisfaction and Market Presence score.
            </p>
          </div>
        </div>

        <div className="text-center max-w-xs bg-[#2b2929] p-6 shadow-lg">
          <div className="h-56 w-56 mx-auto mb-4">
            <picture>
              <img
                alt="G2 badge"
                className="w-full h-full object-contain"
                loading="lazy"
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/g2-momentum-badge-480x480.svg?id=20a2685e-ca4d-46fa-8f90-dda10062a2e3"
              />
            </picture>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-base text-white">Momentum leader</h3>
            <p className="mt-2 text-white text-sm">
              Dropbox ranks in the Momentum Grid® rank in the top 25% of our
              category’s products by users.
            </p>
          </div>
        </div>

        <div className="text-center max-w-xs bg-[#2b2929] p-9 shadow-lg">
          <div className="h-56 w-56 mx-auto mb-4">
            <picture>
              <img
                alt="G2 badge"
                className="w-full h-full object-contain"
                loading="lazy"
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/g2-leader-badge-480x480.svg?id=6db8fb57-9b4d-4803-933b-fc197a2685c1"
              />
            </picture>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-base text-white">Leader</h3>
            <p className="mt-2 text-white text-sm">
              Dropbox is a Winter 2024 Leader according to reviews by G2 users!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f7f5f2] text-center py-20 px-6">
        <h2 className="text-black text-3xl md:text-4xl font-semibold mb-4">
          Security isn’t just our priority, it’s our <br />
          promise
        </h2>
        <p
          className="text-black text-sm mb-6 text-center mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Dropbox helps teams work securely. User, device and content controls
          ensure nothing gets shared you don’t want shared, and nothing gets
          seen you don’t want seen.
        </p>
        <a
          href="https://www.g2.com/products/dropbox/reviews"
          target="_blank"
          rel="noreferrer"
          className="text-black font-semibold underline inline-flex items-center hover:text-gray-300 transition"
        >
          Read our security whitepaper
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
      {/* pictures section */}

      <div
        style={{
          fontFamily: "'Times New Roman', Times, serif",
          textAlign: "center",
        }}
        className="text-4xl font-bold bg-[#f7f5f2]"
      >
        <h2>Features built for enterprise teams</h2>
      </div>
      <div
        className="flex flex-col md:flex-row items-center justify-between w-full h-screen py-12 px-6 bg-[#f7f5f2]"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <div className="md:w-2/3 lg:w-3/5 flex justify-center mb-8 md:mb-0">
          <div className="shadow-lg overflow-hidden w-full h-auto">
            <img
              alt="Three people sitting at a desk looking at a tablet."
              className="w-full h-full object-cover"
              loading="lazy"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/work-from-office-01-2560x1709.png?id=a07fd89c-199f-47dd-b447-055c7cf38aa6&amp;width=2560&amp;output_type=png"
            />
          </div>
        </div>

        <div className="md:w-1/3 lg:w-2/5 md:pl-8">
          <div className="text-left ml-12">
            <div className="mb-4">
              <span className="text-sm font-bold text-black uppercase">
                Domain management
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 leading-tight mb-4">
              Simplicity makes security feel effortless
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              Onboarding to Dropbox is simple, quick, and controllable with a
              click.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm">
              Verify users in your organisation and prevent unauthorised usage.
              Migrate anyone with a company email to a single team with domain
              verification and account capture.
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row-reverse items-center justify-between w-full h-screen py-12 px-6 bg-[#f7f5f2]"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <div className="md:w-2/3 lg:w-3/5 flex justify-center mb-14 md:mb-0">
          <div className="shadow-lg overflow-hidden w-full h-auto">
            <img
              alt="Three people sitting at a desk looking at a tablet."
              className="w-full h-full object-cover"
              loading="lazy"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/work-from-office-02-2560x1707.png?id=f4c2bb17-6210-4986-abd3-006eea519f7a&width=1920&output_type=webp"
            />
          </div>
        </div>

        <div className="md:w-1/3 lg:w-2/5 md:pr-8">
          <div className="text-left">
            <div className="mb-4">
              <span className="text-sm font-bold text-black uppercase">
                Data governance add-on
              </span>
            </div>

            <h2 className="text-3xl font-semibold text-gray-900 leading-tight mb-4">
              Data governance gets rid of the risk
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4 text-sm max-w-sm">
              Data management tools ease the burden on IT teams. The wealth of
              data and files across your organisation doesn’t have to feel like
              a liability. You just need to know it’s protected, under control
              and retrievable at any time for up to 10 years.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm max-w-sm">
              So if auditors come with questions, or a client wants to see a
              ten-year-old file, you’re covered.
            </p>

            <div className="mt-6">
              <button className="border border-black text-black px-8 rounded-lg text-sm font-semibold shadow-lg py-4">
                Explore data governance
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1e1919] text-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Dropbox Enterprise: like Dropbox, but bigger
          </h2>
          <p className="text-xs text-gray-300 mb-8">
            Do everything you’d normally do with Dropbox, and more:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto text-left">
          <div className="max-w-[160px]">
            <h3 className="text-base font-bold mb-2">Sharing</h3>
            <p className="text-gray-400 text-xs">
              Share large files and content
            </p>
          </div>
          <div className="max-w-[180px]">
            <h3 className="text-base font-semibold mb-2">Storage</h3>
            <p className="text-gray-400 text-xs">
              Provide secure storage with collaborators, even if they don’t have
              a Dropbox plan
            </p>
          </div>
          <div className="max-w-[160px]">
            <h3 className="text-base font-semibold mb-2">File requests</h3>
            <p className="text-gray-400 text-xs">
              Collect content from stakeholders with file requests
            </p>
          </div>
          <div className="max-w-[180px]">
            <h3 className="text-base font-semibold mb-2">
              Document management
            </h3>
            <p className="text-gray-400 text-xs">
              Speed up document turnaround with the ability to convert, edit,
              sign, and organise PDFs
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          fontFamily: "'Times New Roman', Times, serif",
          textAlign: "center",
        }}
        className="text-4xl font-bold bg-[#f7f5f2]"
      >
        <h2 className="mt-10">Expedia travels with Dropbox</h2>
      </div>

      <div className="bg-[#f7f5f2] flex justify-center items-center py-12 px-6 -mt-5">
        <div className="bg-[#f7f5f2] overflow-hidden p-4">
          <img
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/expedia-video-thumb-1024x564.png?id=6f15f69b-9697-4091-9176-d03422ecf12a&width=1920&output_type=webp"
            alt="Expedia Video Thumbnail"
            className="w-full h-auto"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enterprise;
