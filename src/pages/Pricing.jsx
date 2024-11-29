import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const Pricing = () => {
  return (
    <div className="bg-white">
      <Navbar
        background="white"
        menuVisibility={{
          products: true,
          solutions: true,
          enterprise: true,
          pricing: true,
          contactSales: true,
          getApp: true,
          signUp: true,
          logIn: true,
          getStarted: false,
        }}
        showDivider="true"
      />
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            Go from idea to done with Dropbox
          </h1>
          <p className="text-sm text-gray-800">
            Store and share files. Sign and send documents. Record screens and
            comment. All with Dropbox.
          </p>
        </div>

        <div className="flex justify-start items-center text-sm space-x-4 mt-8">
          <label className="flex items-center text-black cursor-pointer">
            <input
              type="radio"
              name="billing"
              className="form-radio text-black h-4 w-4"
              checked
            />
            <span className="px-1 py-2">Billed monthly</span>
          </label>
          <label className="flex items-center text-black text-sm cursor-pointer">
            <input
              type="radio"
              name="billing"
              className="form-radio text-black h-4 w-4"
            />
            <span className="px-1 py-2">Billed yearly</span>
          </label>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <div className="bg-[#f7f5f2] rounded-lg shadow-lg p-6 border border-gray-200 w-[280px]">
            <p className="text-sm mb-3 text-xs text-gray-600">
              For personal use
            </p>
            <h2 className="text-xl font-bold text-black font-sans">Plus</h2>
            <p className="mt-2 text-black text-lg font-semibold">
              $11.99 / month
            </p>
            <button className="mt-4 w-56 h-12 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-left text-sm font-semibold">
              Buy now <span className="arrow">→</span>
            </button>
            <ul className="mt-14 space-y-2 text-black-100 text-xs">
              <li>
                <i className="fas fa-user mr-2"></i>1 user
              </li>
              <li>
                <i className="fas fa-hdd mr-2"></i>2 TB of storage
              </li>
              <li>
                <i className="fas fa-sync-alt mr-2"></i>Connect all your devices
              </li>
              <li>
                <i className="fas fa-share-square mr-2"></i>Transfer files up to
                50 GB
              </li>
              <li>
                <i className="fas fa-history mr-2"></i>30 days to restore
                deleted files
              </li>
              <li>
                <i className="fas fa-signature mr-2"></i>Edit PDFs and get
                signatures
              </li>
            </ul>
            <a
              href="#"
              className="mt-80 block text-black text-xs font-semibold underline"
            >
              View all features
            </a>
          </div>

          <div className="bg-[#f7f5f2] rounded-lg shadow-lg p-6 border relative w-[280px]">
            <div className="absolute top-0 left-0 bg-[#b4dc19] text-black text-xs font-semibold px-1 py-0.5 w-full rounded-t-md flex">
              <i className="fas fa-star mr-2 twinkle"></i> Best Value
            </div>
            <p className="text-sm mb-3 text-xs text-gray-600">
              For professionals
            </p>

            <h2 className="text-xl font-bold text-black font-sans">
              Essentials
            </h2>
            <p className="mt-2 text-black text-lg font-semibold">
              $19.99 / month
            </p>
            <button className="mt-4 w-56 h-12 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-left text-sm font-semibold">
              Buy now <span className="arrow">→</span>
            </button>
            <ul className="mt-14 space-y-2 text-black-100 text-xs">
              <li>
                <i className="fas fa-user mr-2"></i>1 user
              </li>
              <li>
                <i className="fas fa-hdd mr-2"></i>3 TB of storage
              </li>
              <li>
                <i className="fas fa-sync-alt mr-2"></i>Connect all your devices
              </li>
              <li>
                <i className="fas fa-share-square mr-2"></i>Transfer files up to
                100 GB
              </li>
              <li>
                <i className="fas fa-history mr-2"></i>180 days to restore
                deleted files
              </li>
              <li>
                <i className="fas fa-signature mr-2"></i>Edit PDFs and get
                signatures
              </li>
              <li>
                <i className="fas fa-cogs mr-2"></i>Brand files you share
              </li>
              <li>
                <i className="fas fa-lock mr-2"></i>Password protect any files
              </li>
            </ul>
            <a
              href="#"
              className="mt-[272px] block text-black text-xs font-semibold underline"
            >
              View all features
            </a>
          </div>

          <div className="bg-[#eae6e0] rounded-lg shadow-lg p-6 border border-gray-200 w-[280px]">
            <p className="text-sm mb-3 text-xs text-gray-600">For teams</p>

            <h2 className="text-xl font-bold text-black font-sans">Business</h2>
            <p className="mt-2 text-black text-lg font-semibold">
              $18 / user / month
            </p>
            <button className="mt-4 w-56 h-12 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-left text-sm font-semibold">
              Buy now <span className="arrow">→</span>
            </button>
            <ul className="mt-14 space-y-2 text-black-100 text-xs">
              <li>
                <i className="fas fa-users mr-2"></i>3+ users
              </li>
              <li>
                <i className="fas fa-hdd mr-2"></i>Starts at 9 TB for the team
              </li>
              <li>
                <i className="fas fa-project-diagram mr-2"></i>One place to work
                together
              </li>
              <li>
                <i className="fas fa-share-square mr-2"></i>Transfer files up to
                100 GB
              </li>
              <li>
                <i className="fas fa-history mr-2"></i>180 days to restore
                deleted files
              </li>
              <li>
                <i className="fas fa-signature mr-2"></i>Edit PDFs and get
                signatures
              </li>
              <li>
                <i className="fas fa-folder mr-2"></i>Team folders for
                organization
              </li>
              <li>
                <i className="fas fa-users-cog mr-2"></i>Admin-managed file
                access
              </li>
              <li>
                <i className="fas fa-cogs mr-2"></i>Roles, groups, and
                permissions
              </li>
            </ul>
            <a
              href="#"
              className="mt-[250px] block text-black text-xs font-semibold underline"
            >
              View all features
            </a>
          </div>

          <div className="bg-[#eae6e0] rounded-lg shadow-lg p-6 border border-gray-200 w-[280px]">
            <p className="text-sm mb-3 text-xs text-gray-600">For companies</p>

            <h2 className="text-xl font-bold text-black font-sans">
              Business Plan
            </h2>
            <p className="mt-2 text-black text-lg font-semibold">
              $30 / user / month
            </p>
            <button className="mt-4 w-56 h-12 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-left text-sm font-semibold">
              Buy now <span className="arrow">→</span>
            </button>
            <ul className="mt-14 space-y-2 text-black-100 text-xs">
              <li>
                <i className="fas fa-users mr-2"></i>3+ users
              </li>
              <li>
                <i className="fas fa-hdd mr-2"></i>Starts at 15 TB for the team
              </li>
              <li>
                <i className="fas fa-project-diagram mr-2"></i>One place to work
                together
              </li>
              <li>
                <i className="fas fa-share-square mr-2"></i>Transfer files up to
                250 GB
              </li>
              <li>
                <i className="fas fa-history mr-2"></i>1 year to restore deleted
                files
              </li>
              <li>
                <i className="fas fa-signature mr-2"></i>Edit PDFs and get
                signatures
              </li>
              <li>
                <i className="fas fa-folder mr-2"></i>Team folders for
                organization
              </li>
              <li>
                <i className="fas fa-cogs mr-2"></i>Tiered-admin management
              </li>
              <li>
                <i className="fas fa-users-cog mr-2"></i>Roles, groups, and
                permissions
              </li>
              <li>
                <i className="fas fa-shield-alt mr-2"></i>End-to-end encryption
              </li>
              <li>
                <i className="fas fa-key mr-2"></i>Advanced key management
              </li>
              <li>
                <i className="fas fa-chart-line mr-2"></i>Compliance tracking
              </li>
              <li>
                <i className="fas fa-bell mr-2"></i>Suspicious activity alerts
              </li>
              <li>
                <i className="fas fa-sign-in-alt mr-2"></i>Single sign-on
              </li>
            </ul>
            <a
              href="#"
              className="mt-[130px] block text-black text-xs font-semibold underline"
            >
              View all features
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-1 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f7f5f2] rounded-lg shadow-lg p-6 border">
            <h2 className="text-xl font-bold text-black">Basic</h2>
            <p className="text-sm text-gray-500">Free</p>
            <p className="mt-4 text-gray-800 text-xs">
              2 GB to store and share your files
            </p>
            <button className="mt-10 px-4 py-2 border-2 border-black font-bold text-black rounded-lg  hover:bg-zinc-200 ">
              Get Basic
            </button>
          </div>

          <div className="bg-[#f7f5f2] rounded-lg shadow-lg p-6 border ">
            <h2 className="text-xl font-bold text-black">Enterprise</h2>
            <p className="text-sm text-gray-600">Contact us for pricing</p>
            <p className="mt-4 text-gray-800 text-xs">
              Customize to your business with enterprise-grade security,
              integrations with best-in-className security solutions, and live
              support from dedicated experts
            </p>
            <button className="mt-6 px-4 py-2 border-2 border-black font-bold text-black rounded-lg hover:bg-zinc-200 ">
              Contact us
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto overflow-x-auto mt-0">
        <div className=" top-0 mt-10 bg-white z-10">
          <h1 className="text-center text-2xl font-bold py-4 font-['arial']">
            Compare Plans
          </h1>
          <div className="flex gap-4 mb-4 text-sm ">
            <label className="flex ">
              <input type="radio" name="billing" className="mr-1" checked />
              Billed monthly
            </label>
            <label className="flex items-center">
              <input type="radio" name="billing" className="mr-1" />
              Billed yearly
            </label>
          </div>
          <div className=" sticky grid grid-cols-1 md:grid-cols-5 px-1 pb-5z-10">
            <div className="flex flex-col items-center bg-white p-6 border border-[rgba(210,180,140,.5)]">
              {/* Content here */}
            </div>
            <div className="flex flex-col bg-[#f7f5f2] p-6 border border-[rgba(210,180,140,.5)]">
              <h3 className="text-base font-bold mb-2">Plus</h3>
              <p className="text-sm text-black">$9.99 / month</p>
              <button className="mt-4 bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700">
                Buy now
              </button>
            </div>
            <div className="flex flex-col bg-[#f7f5f2] p-6 border border-[rgba(210,180,140,.5)] sticky top-10">
              <span className="absolute top-0 right-1 bg-[#b4dc19] text-black font-bold text-xs px-2 py-1 rounded-full">
                <i className="fas fa-star text-xs twinkle"></i> Best Value
              </span>
              <h3 className="text-base font-bold mb-2">Essentials</h3>
              <p className="text-sm text-black">$16.58 / month</p>
              <button className="mt-4 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Try for free
              </button>
            </div>
            <div className="flex flex-col bg-[#f7f5f2] p-6 border border-[rgba(223,192,151,0.5)] sticky top-10">
              <h3 className="text-base font-bold mb-2">Business</h3>
              <p className="text-sm text-black">$15 / user / month</p>
              <button className="mt-4 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Try for free
              </button>
            </div>
            <div className="flex flex-col bg-[#f7f5f2] p-6 border border-[rgba(210,180,140,.5)] sticky top-10">
              <h3 className="text-base font-bold mb-2">Business Plus</h3>
              <p className="text-sm text-black">$24 / user / month</p>
              <button className="mt-4 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Try for free
              </button>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto overflow-x-auto bg-[#f7f5f2] mt-0">
            <table className="w-full text-left border-collapse border border-[rgba(223,192,151,0.5)] table-fixed">
              <thead>
                <tr>
                  <th
                    colspan="5"
                    className="font-bold text-black bg-white py-4"
                  >
                    Dropbox core features
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(223,192,151,0.5)]">
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-gray-700 border-r border-[rgba(223,192,151,0.5)]">
                    Users
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    1 user
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    1 user
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    3+ users
                  </td>
                  <td className="py-4 px-6 text-xs text-center">3+ users</td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Storage
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    2,000 GB
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    3,000 GB
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    Starts at 9,000 GB
                  </td>
                  <td className="py-4 px-6 text-sm text-center">
                    Starts at 15,000 GB
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Best-in-className sync technology
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Easy and secure sharing
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Anytime, anywhere access
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Connect Unlimited devices
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    256-bit AES and SSL/TLS encryption
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full text-left border-collapse border border-[rgba(223,192,151,0.5)] table-fixed">
              <thead>
                <tr>
                  <th
                    colSpan="5"
                    className="font-bold text-black bg-white py-4"
                  >
                    Send and track features
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(223,192,151,0.5)]">
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-gray-700 border-r border-[rgba(223,192,151,0.5)]">
                    Real-time document analysis
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]"></td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-xs text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Passcode and email verification
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]"></td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Viewer engagement dashboard
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]"></td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full text-left border-collapse border border-[rgba(223,192,151,0.5)] table-fixed">
              <thead>
                <tr>
                  <th
                    colspan="5"
                    className="font-bold text-black bg-white py-4"
                  >
                    Video tools
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(223,192,151,0.5)]">
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-gray-700 border-r border-[rgba(223,192,151,0.5)]">
                    Video transcripts and closed captions
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-xs text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Video editing
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Video commenting
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Creative review and approvals with Dropbox Replay
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full text-xs">
                      4 file uploads, live review, versions, and video
                      collaboration
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full text-xs">
                      10 file uploads, live review, versions, and video
                      collaboration
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full text-xs">
                      10 file uploads, live review, versions, and video
                      collaboration
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm">
                    <div className="flex justify-center items-center h-full text-xs">
                      10 file uploads, live review, versions, and video
                      collaboration
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full text-left border-collapse border border-[rgba(223,192,151,0.5)] table-fixed">
              <thead>
                <tr>
                  <th
                    colspan="5"
                    className="font-bold text-black bg-white py-4"
                  >
                    One-way transfer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(223,192,151,0.5)]">
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-gray-700 border-r border-[rgba(223,192,151,0.5)]">
                    File and folder transfer
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-xs text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Incoming transfer requests
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Transfer analytics
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]"></td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Custom expiration dates
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]"></td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Password-protected transfers
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]"></td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Branded transfers
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]"></td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full text-left border-collapse border border-[rgba(223,192,151,0.5)] table-fixed">
              <thead>
                <tr>
                  <th
                    colspan="5"
                    className="font-bold text-black bg-white py-4"
                  >
                    Productivity tools
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(223,192,151,0.5)]">
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-gray-700 border-r border-[rgba(223,192,151,0.5)]">
                    Users
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    1 user
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    1 user
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    3+ users
                  </td>
                  <td className="py-4 px-6 text-xs text-center">3+ users</td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Storage
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    2,000 GB
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    3,000 GB
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    Starts at 9,000 GB
                  </td>
                  <td className="py-4 px-6 text-sm text-center">
                    Starts at 15,000 GB
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Best-in-className sync technology
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Easy and secure sharing
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Anytime, anywhere access
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Connect Unlimited devices
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    256-bit AES and SSL/TLS encryption
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Annotate and sign PDFs
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full text-xs">
                      Advanced editing, includes editing existing text
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full text-xs">
                      Advanced editing, includes editing existing text
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full text-xs">
                      Advanced editing, includes editing existing text
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Viewer history
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    File locking
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    PDF editing
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Image search
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Web previews and comments
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Online documents and note taking
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full text-left border-collapse border border-[rgba(223,192,151,0.5)] table-fixed">
              <thead>
                <tr>
                  <th
                    colspan="5"
                    className="font-bold text-black bg-white py-4"
                  >
                    Support
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(223,192,151,0.5)]">
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-gray-700 border-r border-[rgba(223,192,151,0.5)]">
                    Priority email support
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    {" "}
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    {" "}
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    {" "}
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-xs text-center">
                    {" "}
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Live chat support
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    {" "}
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    {" "}
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center border-r border-[rgba(223,192,151,0.5)]">
                    {" "}
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-center">
                    {" "}
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Phone support during business hours
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]"></td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[rgba(223,192,151,0.5)]">
                  <td className="py-4 px-6 text-sm text-black border-r border-[rgba(223,192,151,0.5)]">
                    Easy and secure sharing
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]"></td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm border-r border-[rgba(223,192,151,0.5)]">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm">
                    <div className="flex justify-center items-center h-full">
                      <svg
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        focusable="false"
                      >
                        <path
                          d="M5.5 11.5 10 16l8.25-8.25"
                          stroke="blue"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-black">
        <Footer />;
      </div>
    </div>
  );
};

export default Pricing;
