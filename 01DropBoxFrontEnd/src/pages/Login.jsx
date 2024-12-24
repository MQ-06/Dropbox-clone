import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import FooterSecond from "../components/Register/FooterSecond";
import axios from "axios";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (!email) {
      navigate("/register");
    }
  }, [email, navigate]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token);
        navigate("/");
      } else {
        setErrorMessage(
          response.data.error || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      if (error.response) {
        console.error("Login error:", error.response.data);
        setErrorMessage(
          error.response.data.error || "An error occurred. Please try again."
        );
      } else {
        console.error("Error:", error.message);
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar
        background="white"
        menuVisibility={{
          products: false,
          solutions: false,
          enterprise: false,
          pricing: false,
          contactSales: false,
          getApp: false,
          signUp: false,
          logIn: false,
          getStarted: false,
        }}
        showDivider={true}
      />

      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white p-8 rounded-md w-full sm:w-96 mt-36">
          <div
            className="back-link text-sm mb-5 cursor-pointer flex justify-start"
            onClick={handleBack}
          >
            <img
              src="https://img.icons8.com/material-rounded/24/000000/back.png"
              alt="Back"
              className="mr-2"
            />
            <span>Back</span>
          </div>

          <h2 className="text-3xl text-center font-base mt-4">Welcome back</h2>
          <p className="text-gray-600 mt-2">
            Log in using <span className="font-medium">{email}</span>
          </p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password" className="block text-xs text-gray-500">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-3 border-2 border-gray-300 shadow-xs focus:outline-none focus:ring-blue-500 focus:ring-3 focus:border-blue-500 focus:border-3 sm:text-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                >
                  <img
                    src={
                      showPassword
                        ? "https://img.icons8.com/ios-filled/50/000000/invisible.png"
                        : "https://img.icons8.com/ios-filled/50/000000/visible.png"
                    }
                    alt="Toggle password visibility"
                    className="w-3 h-3"
                  />
                </button>
              </div>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

            <div className="flex items-center justify-between mt-4">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgotten your password?
              </a>
            </div>

            <div className="flex items-center mt-4">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-[17px] text-black font-arial"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-3 text-lg bg-blue-700 text-white font-medium rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
            >
              Log in
            </button>
          </form>
        </div>
      </div>

      <FooterSecond />
    </div>
  );
};

export default Login;
