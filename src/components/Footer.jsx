import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="max-w-screen-xl mx-auto flex justify-between text-white">
        <div className="w-1/5">
          <h3 className="text-xl mb-5 font-semibold">Dropbox</h3>
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Desktop app
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Mobile app
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Integrations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Security
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Early access
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Templates
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Free tools
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-1/5">
          <h3 className="text-xl mb-5 font-semibold">Products</h3>
          <ul className="space-y-3">
            <li>
              <NavLink to="/" className="hover:underline text-gray-300 text-sm">
                Plus
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:underline text-gray-300 text-sm">
                Professional
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Business
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Enterprise
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://dash.dropbox.com"
                className="hover:underline text-gray-300 text-sm"
              >
                Dash
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://sign.dropbox.com/"
                className="hover:underline text-gray-300 text-sm"
              >
                Dropbox Sign
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.docsend.com/"
                className="hover:underline text-gray-300 text-sm"
              >
                DocSend
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Plans
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Product updates
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-1/5">
          <h3 className="text-xl mb-5 font-semibold">Features</h3>
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Send large files
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Send long videos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Cloud photo storage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Secure file transfer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Password manager
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Cloud backup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Edit PDFs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Electronic signatures
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Screen recorder
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Convert to PDF
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-1/5">
          <h3 className="text-xl mb-5 font-semibold">Support</h3>
          <ul className="space-y-3">
            <li>
              <NavLink
                to="https://help.dropbox.com/"
                className="hover:underline text-gray-300 text-sm"
              >
                Help center
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="hover:underline text-gray-300 text-sm"
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Privacy & terms
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://help.dropbox.com/accounts-billing/security/cookies"
                className="hover:underline text-gray-300 text-sm"
              >
                Cookie policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                Cookies & CCPA preferences
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className="hover:underline text-gray-300 text-sm"
              >
                AI principles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://experience.dropbox.com/sitemap"
                className="hover:underline text-gray-300 text-sm"
              >
                Sitemap
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://learn.dropbox.com"
                className="hover:underline text-gray-300 text-sm"
              >
                Learning resources
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-1/5">
          <h3 className="text-xl mb-5 font-semibold">Company</h3>
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                className="hover:underline text-gray-300 text-sm"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://jobs.dropbox.com"
                className="hover:underline text-gray-300 text-sm"
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://investors.dropbox.com/"
                className="hover:underline text-gray-300 text-sm"
              >
                Investor relations
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:underline text-gray-300 text-sm">
                ESG
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-start gap-4 pt-6 border-t border-gray-600 w-max ml-24">
        <div className="flex gap-3 ">
          <NavLink
            to="https://twitter.com/Dropbox"
            target="_blank"
            rel="noreferrer"
            className="text-white"
            aria-label="Twitter"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 21.5" fill="none">
              <path
                d="M13.485 10.775 19.314 4h-1.381l-5.061 5.883L8.83 4H4.168l6.112 8.896L4.168 20h1.381l5.344-6.212L15.162 20h4.662l-6.339-9.225Zm-1.891 2.199-.62-.886L6.047 5.04h2.121l3.977 5.688.62.886 5.168 7.394h-2.121l-4.218-6.034Z"
                fill="currentColor"
              ></path>
            </svg>
          </NavLink>
          <NavLink
            to="https://www.facebook.com/Dropbox/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
            aria-label="Facebook"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 12a8 8 0 0 0-8-8 8.001 8.001 0 0 0-1.25 15.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.009c-.994 0-1.303.617-1.303 1.25V12h2.219l-.355 2.313H13.25v5.59A8.001 8.001 0 0 0 20 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </NavLink>
          <NavLink
            to="https://www.youtube.com/user/dropbox/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
            aria-label="LinkedIn"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.148 7.358c.249.248.427.557.519.896.329 1.248.333 3.851.333 3.851s0 2.604-.333 3.852a2.006 2.006 0 0 1-1.415 1.414c-1.247.335-6.252.335-6.252.335s-5.004 0-6.25-.335a2.004 2.004 0 0 1-1.415-1.414C4 14.709 4 12.105 4 12.105s0-2.603.335-3.85a2.003 2.003 0 0 1 1.414-1.42C6.995 6.5 12 6.5 12 6.5s5.004 0 6.252.34c.34.091.648.27.896.518Zm-4.59 4.747-4.158-2.4v4.8l4.158-2.4Z"
                fill="currentColor"
              ></path>
            </svg>
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
