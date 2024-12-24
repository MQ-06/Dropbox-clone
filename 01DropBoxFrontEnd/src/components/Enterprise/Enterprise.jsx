import React from "react";
import Footer from "../Footer";
import Navbar from "../NavBar";

import Slider from "./Slider";
import {
  FaMoneyBillWave,
  FaRedo,
  FaCheckSquare,
  FaTrophy,
} from "react-icons/fa";

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

      {/* the  app icons section */}

      <div className="bg-[#f7f5f2] font-serif">
        <div className="text-center py-20 px-6">
          <h2 className="text-black text-3xl md:text-4xl font-semibold mb-4">
            Dropbox works with who you work with
          </h2>
          <p
            className="text-black text-sm mb-6 text-center mx-auto"
            style={{ maxWidth: "600px" }}
          >
            When your data automatically syncs between tools, users have more
            time to get things done without constantly switching context.
          </p>
          <a
            href="https://www.g2.com/products/dropbox/reviews"
            target="_blank"
            rel="noreferrer"
            className="text-black font-semibold underline inline-flex items-center hover:text-gray-300 transition"
          >
            Explore app integrations
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[850px] mx-auto">
          <div className="flex flex-col items-start">
            <img
              alt="Zoom logo"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/zoom-64x64.svg?id=efe22ed9-cd50-4936-9d61-3ed948d1f67b"
              className="mb-4"
            />
            <h3 className="font-semibold text-base text-left mb-2">Zoom</h3>
            <p className="text-left text-sm">
              Connect and collaborate on all your content, in real time, no
              matter where your teams may be.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <img
              alt="Slack logo"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/slack-64x64.svg?id=e028dbd7-df26-4076-ad15-faa51c132578"
              className="mb-4"
            />
            <h3 className="font-semibold text-base mb-2">Slack</h3>
            <p className="text-left text-sm">
              Integrate your conversations and Dropbox content to keep teams in
              sync.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <img
              alt="Office 365 logo"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/office-365-64x64.svg?id=4476fa42-2482-45b5-8bbd-3b83027ca3e7"
              className="mb-4"
            />
            <h3 className="font-semibold text-base mb-2">Office365</h3>
            <p className="text-left text-sm">
              Easily access, edit and share Office docs online in Dropbox.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <img
              alt="Google Workspace logo"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/google-workspace-64x64.svg?id=78f36f5f-a55a-4904-b45f-03a76f6688a9"
              className="mb-4"
            />
            <h3 className="font-semibold text-base mb-2">Google Workspace</h3>
            <p className="text-left text-sm">
              Create, edit and share Google Docs, Sheets and Slides from
              Dropbox.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 max-w-[850px] mx-auto">
          <div className="flex flex-col items-start p-4 max-w-xs mx-auto">
            <img
              alt="Microsoft Teams logo"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/microsoft-teams-64x64.svg"
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Microsoft Teams</h3>
            <p className="text-left text-sm">
              Share files directly from Dropbox to Microsoft Teams.
            </p>
          </div>

          <div className="flex flex-col items-start p-4 max-w-xs mx-auto">
            <img
              alt="Canva logo"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/canva-64x64.svg"
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Canva</h3>
            <p className="text-left text-sm">
              Create beautiful graphics in Canva with your Dropbox content.
            </p>
          </div>

          <div className="flex flex-col items-start p-4 max-w-xs mx-auto">
            <img
              alt="Asana logo"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/asana-64x64.svg"
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Asana</h3>
            <p className="text-left text-sm">
              Track work with Asana while keeping Dropbox content nearby.
            </p>
          </div>

          <div className="flex flex-col items-start p-4 max-w-xs mx-auto">
            <img
              alt="Miro logo"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/miro-64x64.svg"
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Miro</h3>
            <p className="text-left text-sm">
              Collaborate with your Dropbox files on an online whiteboard.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1e1919] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            How much better can it get?
          </h2>
          <p className="text-sm mb-6">
            Dropbox improves productivity by accelerating key workflows and
            projects – all while providing a better employee experience.
          </p>
          <a href="#" className="text-white underline">
            Read the Forrester report →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <FaMoneyBillWave className="text-3xl text-white" />
            </div>
            <h3 className="text-base font-semibold mb-2">
              Boost your bottom line
            </h3>
            <p className="text-xs ">
              Teams using Dropbox saw a 375% ROI and payback in under six
              months.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <FaRedo className="text-3xl text-white" />
            </div>
            <h3 className="text-base font-semibold mb-2">Skip the do-overs</h3>
            <p className="text-xs">
              Dropbox increased collaboration by 10% and showed a 90% reduction
              in rework.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <FaCheckSquare className="text-3xl text-white" />
            </div>
            <h3 className="text-base font mb-2">Get more done</h3>
            <p className="text-xs">
              Companies using Dropbox improved productivity – valued at over
              $530,000 – over three years.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <FaTrophy className="text-3xl text-white" />
            </div>
            <h3 className="text-base font mb-2">Go big and go home</h3>
            <p className="text-xs">
              Dropbox supports over 189 file types and can handle large files,
              HD and 4k-rich media up to 2 TB – with 4× faster upload, download
              and sync.
            </p>
          </div>
        </div>
      </div>

      <Slider />
      <div className="bg-[#f7f5f2] font-serif p-8 -mt-24">
        <h2 className="text-center text-3xl font-bold mb-6">
          You’re in good company
        </h2>

        <div className="flex justify-evenly items-center mt-9 gap-x-1">
          <div className="max-w-[200px] w-full text-left">
            <p className="text-sm font-bold">56% of Fortune 500 companies</p>
            <p className="text-xs mt-2">have at least one Dropbox team plan.</p>
          </div>
          <div className="max-w-[200px] w-full text-left">
            <p className="text-sm font-bold">600+ teams globally</p>
            <p className="text-xs mt-2">
              use Dropbox to share work, safeguard content and grow their
              business.
            </p>
          </div>
          <div className="max-w-[200px] w-full text-left">
            <p className="text-sm font-bold">4.5B connections and counting</p>
            <p className="text-xs mt-2">
              created through Dropbox file sharing.
            </p>
          </div>
          <div className="max-w-[200px] w-full text-left">
            <p className="text-sm font-bold">1B+ mobile app downloads</p>
            <p className="text-xs mt-2">
              with Editors’ Choice Awards from the Google Play and Apple App
              Store.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1e1919] text-white py-9 px-6 mt-5">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-around items-center">
          <h2 className="text-4xl lg:text-4xl font-semibold mb-4 lg:mb-0 max-w-[560px]">
            Collaborate at scale with Dropbox Enterprise
          </h2>

          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-4 px-7 rounded-lg flex items-center transition duration-300"
          >
            Contact sales
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enterprise;
