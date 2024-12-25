import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/Navbar";
import FooterSecond from "../components/Register/FooterSecond";
import { UserContext } from "../context/UserContext";

const Register = ({ headerText = "Register" }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);
  ;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      return;
    }

    setEmailError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/check-email",
        { email }
      );

      setLoading(false);

      if (response.data.exists) {
        navigate("/password", { state: { email } });
      } else {
        navigate("/registration-form", { state: { email } });
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.error("Backend error:", error.response.data);
        setEmailError("Error checking email. Please try again.");
      } else {
        console.error("Error checking email:", error.message);
        setEmailError("An unexpected error occurred. Please try again.");
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/check-login-status")
      .then((response) => {
        if (response.data.loggedIn) {
          const userData = response.data.user;
          loginUser(userData);
          navigate("/Dashboard");
        }
      })
      .catch((err) => console.log("Error checking login status:", err));
  }, [navigate, loginUser]);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
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

      <div className="mx-auto max-w-sm mt-32 p-5 text-center">
        <div className="header text-2xl font-sans mb-3">{headerText}</div>
        <div className="sub-header text-base font-sans mt-8 mb-6">
          We recommend using your <strong>work email</strong>.
        </div>

        <div className="social-login mb-4">
          <button
            className="google-btn flex items-center justify-center w-full py-3 mb-3 border border-gray-300 bg-white hover:shadow-md transition relative"
            onClick={handleGoogleLogin}
          >
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt="Google logo"
              className="absolute left-4 w-6 h-6"
            />
            <span className="ml-8">Continue with Google</span>
          </button>

          <button className="apple-btn flex items-center justify-center w-full py-3 border border-gray-300 bg-white hover:shadow-md transition relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple logo"
              className="absolute left-4 w-5 h-6"
            />
            <span className="ml-8">Continue with Apple</span>
          </button>
        </div>

        <div className="or-divider relative text-gray-500 text-sm my-6">
          <span className="relative z-10 bg-white px-3">or</span>
          <div className="absolute inset-0 flex items-center">
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>
        </div>

        <form onSubmit={handleEmailSubmit} noValidate>
          <div className="auth-field mb-5">
            <label
              htmlFor="email"
              className="input-label block mb-2 text-left text-xs text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input-field w-full px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
            {emailError && (
              <div className="error-message text-red-500 text-xs text-left">
                {emailError}
              </div>
            )}
          </div>

          <div className="submit-container text-center">
            <button
              type="submit"
              className={`submit-button w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Continue"}
            </button>
          </div>
        </form>
      </div>

      <FooterSecond />
    </div>
  );
};

export default Register;
