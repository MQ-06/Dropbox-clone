import React from "react";
import "../index.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
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
    <div className="font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar background="white" button_color="rgb(59 130 246)" menuVisibility={menuVisibility} />

      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 contact-heading">
            Contact our sales team
          </h1>
          <div className="contact-content text-black text-sm space-y-4">
            <p>
              Learn how Dropbox can help your business streamline collaboration
              and increase productivity.
            </p>
            <p>By connecting with our team, you can expect we’ll:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand your current business processes</li>
              <li>
                Explore how Dropbox’s functionality can help drastically improve
                your team’s workflow
              </li>
              <li>
                Determine the ideal Dropbox plan and chat through pricing
                options
              </li>
              <li>Answer any additional, specific questions you have</li>
            </ul>
            <p className="italic">
              Looking for technical support and/or billing help?{" "}
              <NavLink to="#" className="text-black-600 italic underline">
                Check out our FAQ
              </NavLink>
              .
            </p>
            <p className="italic text-black-100">
              Contact sales by phone instead:{" "}
              <span className="italic">1-855-237-6726</span>
            </p>
          </div>
          <img
            src="https://aem.dropbox.com/cms/content/dam/dropbox/experience/en-us/contact/ContactPage-Hero.png/_jcr_content/renditions/ContactPage-Hero.tablet.webp"
            alt="Sales Team"
          />
        </div>

        {/* Right Section (Form) */}
        <div className="px-16">
          <form action="#" method="POST" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm text-black">
                  First Name:<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm text-black">
                  Last Name:<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-black">
                Work Email Address:<span className="text-red-500"> *</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-black">
                Phone Number:<span className="text-red-500"> *</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm text-black">
                Company Name:<span className="text-red-500"> *</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="companySize" className="block text-sm text-black">
                Company size:<span className="text-red-500"> *</span>
              </label>
              <select
                id="companySize"
                name="companySize"
                className="text-sm mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>

            <div>
              <label htmlFor="jobTitle" className="block text-sm text-black">
                Job Title:<span className="text-red-500"> *</span>
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                className="text-sm mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm text-black">
                Country:<span className="text-red-500"> *</span>
              </label>
              <select
                id="country"
                name="country"
                className="text-sm mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="help" className="block text-sm text-black">
                How can our sales team help you?
                <span className="text-red-500"> *</span>
              </label>
              <select
                id="help"
                name="help"
                className="text-sm mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="pricing">Discuss pricing and plans</option>
                <option value="features">Understand specific features</option>
                <option value="workflow">Improve workflow efficiency</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-black">
                Message:<span className="text-red-500"> *</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Let us know any relevant information that is relevant for your business requirements"
                rows="5"
                className="text-sm mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="block text-sm text-black">
              By submitting this form, I authorize Dropbox to contact me about
              product offerings, services, events, and other marketing
              materials. I may unsubscribe at any time. To learn more, see our{" "}
              <NavLink to="#" className="text-blue-600 underline">
                Privacy Policy
              </NavLink>
              .
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 text-base hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
