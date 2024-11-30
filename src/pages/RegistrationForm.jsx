import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../index.css"; // Ensure styles are imported
import NavBar from "../components/NavBar";
import FooterSecond from "../components/Register/FooterSecond";

const RegistrationForm = () => {
  const location = useLocation();
  console.log(location); // Debugging: Check what location contains

  const { email } = location.state || {}; // Destructure email from location.state

  // State for form inputs
  const [formData, setFormData] = useState({
    email: email || "", // Default to empty string if email is not passed
    firstName: "",
    lastName: "",
    password: "",
  });

  const menu = {
    products: false,
    solutions: false,
    enterprise: false,
    pricing: false,
    contactSales: false,
    getApp: false,
    signUp: false,
    logIn: false,
    getStarted: false,
  };

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Password validation function (At least 8 characters, 1 letter, 1 number, and 1 special character)
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate fields
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required.";
    }
    if (!formData.password || !validatePassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, contain 1 letter, 1 number, and 1 special character.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form Submitted:", formData);
    // Add your form submission logic here (e.g., send data to the backend)
    navigate("/success"); // Redirect to a success page after form submission
  };

  const handleBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <NavBar background="white" menuVisibility={menu} showDivider={true} />

      <div className="mx-auto max-w-sm text-center mt-24">
        <div
          className="back-link flex items-center text-sm mb-5 cursor-pointer"
          onClick={handleBack}
        >
          <img
            src="https://img.icons8.com/material-rounded/24/000000/back.png"
            alt="Back"
            className="mr-2"
          />
          <span>Back</span>
        </div>

        <div className="header text-2xl font-bold mb-2">Sign up for free</div>
        <div className="sub-header mt-8 mb-6 text-base">
          We recommend using your <strong>work email</strong>.
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="form-group text-left">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && (
              <div className="text-red-500 text-xs mt-1">{errors.email}</div>
            )}
          </div>

          {/* First Name & Last Name Inputs */}
          <div className="form-group name-fields flex gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.firstName && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.firstName}
                </div>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.lastName && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.lastName}
                </div>
              )}
            </div>
          </div>

          {/* Password Input */}
          <div className="form-group text-left">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.password && (
              <div className="text-red-500 text-xs mt-1 flex items-center">
                <span className="text-xl mr-2">×</span>
                {errors.password}
              </div>
            )}
          </div>

          {/* Agreement Text */}
          <div className="agreement text-sm text-gray-600 text-left mt-4">
            By selecting "Agree and sign up," I agree to the{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Dropbox Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Services Agreement
            </a>
            . Learn about how we use and protect your data in our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-btn bg-blue-600 text-white w-full py-4 rounded-lg text-lg mt-4 hover:bg-blue-700"
          >
            Agree and sign up
          </button>
        </form>
      </div>

      <FooterSecond />
    </div>
  );
};

export default RegistrationForm;
