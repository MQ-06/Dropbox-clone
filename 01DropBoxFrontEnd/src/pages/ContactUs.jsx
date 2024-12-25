import React, { useState } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    jobTitle: "",
    country: "",
    help: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    )
      newErrors.email = "Invalid email address.";
    if (!formData.phone) newErrors.phone = "Phone Number is required.";
    if (!formData.company) newErrors.company = "Company Name is required.";
    if (!formData.companySize)
      newErrors.companySize = "Company Size is required.";
    if (!formData.jobTitle) newErrors.jobTitle = "Job Title is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.help) newErrors.help = "This field is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted successfully", formData);
      // Handle form submission (e.g., API call)
    }
  };

  return (
    <div className="font-sans">
      <Navbar
        background="white"
        button_color="rgb(59 130 246)"
        menuVisibility={menuVisibility}
      />

      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 contact-heading font-serif">
            Contact our sales team
          </h1>
          <div className="contact-content text-black text-base space-y-4 font-serif">
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

        <div className="px-16">
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "First Name", name: "firstName", type: "text" },
              { label: "Last Name", name: "lastName", type: "text" },
              { label: "Work Email Address", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "tel" },
              { label: "Company Name", name: "company", type: "text" },
              { label: "Job Title", name: "jobTitle", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm text-black"
                >
                  {field.label}:<span className="text-red-500"> *</span>
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${
                    errors[field.name] ? "border-red-500" : "border-gray-300"
                  } shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            {[
              {
                label: "Company Size",
                name: "companySize",
                options: [
                  "Select...",
                  "1-10",
                  "11-50",
                  "51-200",
                  "201-500",
                  "500+",
                ],
              },
              {
                label: "Country",
                name: "country",
                options: ["Select...", "United States", "Canada", "UK", "Other"],
              },
              {
                label: "How can our sales team help you?",
                name: "help",
                options: [
                  "Select...",
                  "Discuss pricing and plans",
                  "Understand specific features",
                  "Improve workflow efficiency",
                  "Other",
                ],
              },
            ].map((dropdown) => (
              <div key={dropdown.name}>
                <label htmlFor={dropdown.name} className="block text-sm text-black">
                  {dropdown.label}:<span className="text-red-500"> *</span>
                </label>
                <select
                  id={dropdown.name}
                  name={dropdown.name}
                  value={formData[dropdown.name]}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${
                    errors[dropdown.name]
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500`}
                >
                  {dropdown.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors[dropdown.name] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[dropdown.name]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm text-black">
                Message:<span className="text-red-500"> *</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Let us know any relevant information that is relevant for your business requirements"
                className={`mt-1 block w-full border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
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
