import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterSecond from "../components/Register/FooterSecond";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "default email";

  const togglePasswordVisibility = () => {
    //prevState wo purana state hota hai jo abhi tak us state variable mein stored hai.
    setShowPassword((prevState) => !prevState);
  };

  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return regex.test(password);
  };

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleSubmit = (e) => {
    const newErrors = {};

    e.preventDefault();
    if (!password || !validatePassword(password)) {
      newErrors.password =
        "Password must be at least 8 characters long, contain 1 letter, 1 number, and 1 special character.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    //login logic here
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
            {errors.password && (
              <div className="text-red-500 text-xs mt-1 flex items-center">
                <span className="text-xl mr-2">×</span>
                {errors.password}
              </div>
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
