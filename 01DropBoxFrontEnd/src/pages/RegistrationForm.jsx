import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../index.css";
import NavBar from "../components/Navbar";
import FooterSecond from "../components/Register/FooterSecond";
import axios from 'axios';


const RegistrationForm = () => {
  const location = useLocation();
  const { email } = location.state || {}; // Using email passed from previous page

  const [formData, setFormData] = useState({
    email: email || "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    letter: false,
    number: false,
    specialChar: false,
  });

  const [isTouched, setIsTouched] = useState(false); // Track if the user interacted with the field
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  const [showValidation, setShowValidation] = useState(false); // To show password validation
  const navigate = useNavigate();

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const letter = /[A-Za-z]/.test(password);
    const number = /\d/.test(password);
    const specialChar = /[@$!%*?&]/.test(password);

    return {
      minLength,
      letter,
      number,
      specialChar,
    };
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
    setIsTouched(true); 

    const validationResults = validatePassword(newPassword);
    setPasswordValidation(validationResults);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordFocus = () => {
    setShowValidation(true);
  };

  const handlePasswordBlur = () => {
    setShowValidation(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required.";
    }
    if (
      !formData.password ||
      Object.values(passwordValidation).includes(false)
    ) {
      newErrors.password =
        "Password must be at least 8 characters long, contain 1 letter, 1 number, and 1 special character.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        formData
      );

      if (response.data.success) {
        navigate("/");
      }
    } catch (error) {
      setErrors({ general: "Registration failed. Please try again." });
    }
  };

  const handleBack = () => {
    navigate(-1);
    ge;
  };
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

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
     
      <NavBar background="white" menuVisibility={menu} showDivider={true} />{" "}
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

          <div className="form-group name-fields flex gap-4 justify-start">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block text-gray-700 mb-1 text-left"
              >
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
              <label
                htmlFor="lastName"
                className="block text-gray-700 mb-1 text-left"
              >
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
          <div className="form-group text-left relative">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handlePasswordChange}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 shadow-xs focus:outline-none focus:ring-blue-500 focus:ring-3 focus:border-blue-500 focus:border-3 sm:text-sm"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-4 transform -translate-y-[-50%] flex items-center justify-center"
            >
              <img
                src={
                  showPassword
                    ? "https://img.icons8.com/ios-filled/50/000000/invisible.png"
                    : "https://img.icons8.com/ios-filled/50/000000/visible.png"
                }
                alt="Toggle password visibility"
                className="w-4 h-4"
              />
            </button>
            {errors.password && (
              <div className="text-red-500 text-xs mt-1 flex items-center">
                <span className="text-xl mr-2">×</span>
                {errors.password}
              </div>
            )}
          </div>

          {/* Password Validation Line */}
          {showValidation && (
            <div className="password-requirements mt-4 text-left text-xs">
              <div
                className={`${
                  passwordValidation.minLength
                    ? "text-green-500"
                    : "text-red-500"
                } flex items-center`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`w-4 h-4 ${
                    passwordValidation.minLength
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                  role="presentation"
                  focusable="false"
                >
                  <path
                    d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm-1 11.56-3.03-3.03 1.06-1.06L11 13.44l3.97-3.97 1.06 1.06L11 15.56Z"
                    fill={passwordValidation.minLength ? "green" : "red"}
                    vector-effect="non-scaling-stroke"
                  ></path>
                </svg>
                <span className="ml-2">At least 8 characters</span>
              </div>
              <div
                className={`${
                  passwordValidation.letter ? "text-green-500" : "text-red-500"
                } flex items-center`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`w-4 h-4 ${
                    passwordValidation.letter
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                  role="presentation"
                  focusable="false"
                >
                  <path
                    d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm-1 11.56-3.03-3.03 1.06-1.06L11 13.44l3.97-3.97 1.06 1.06L11 15.56Z"
                    fill={passwordValidation.letter ? "green" : "red"}
                    vector-effect="non-scaling-stroke"
                  ></path>
                </svg>
                <span className="ml-2">1 letter</span>
              </div>
              <div
                className={`${
                  passwordValidation.number ? "text-green-500" : "text-red-500"
                } flex items-center`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`w-4 h-4 ${
                    passwordValidation.number
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                  role="presentation"
                  focusable="false"
                >
                  <path
                    d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm-1 11.56-3.03-3.03 1.06-1.06L11 13.44l3.97-3.97 1.06 1.06L11 15.56Z"
                    fill={passwordValidation.number ? "green" : "red"}
                    vector-effect="non-scaling-stroke"
                  ></path>
                </svg>
                <span className="ml-2">1 number</span>
              </div>
              <div
                className={`${
                  passwordValidation.specialChar
                    ? "text-green-500"
                    : "text-red-500"
                } flex items-center`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`w-4 h-4 ${
                    passwordValidation.specialChar
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                  role="presentation"
                  focusable="false"
                >
                  <path
                    d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm-1 11.56-3.03-3.03 1.06-1.06L11 13.44l3.97-3.97 1.06 1.06L11 15.56Z"
                    fill={passwordValidation.specialChar ? "green" : "red"}
                    vector-effect="non-scaling-stroke"
                  ></path>
                </svg>
                <span className="ml-2">1 special character</span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="form-group mt-8">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg focus:outline-none hover:bg-blue-600"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <FooterSecond />
    </div>
  );
};

export default RegistrationForm;
