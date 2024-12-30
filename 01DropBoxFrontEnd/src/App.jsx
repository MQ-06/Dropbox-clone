import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import RegistrationForm from "./pages/RegistrationForm";
import Desktop from "./components/DesktopApp/Desktop";
import Mobile from "./components/MobileApp/Mobile";
import Enterprise from "./components/Enterprise/Enterprise";
import Dashboard from "./pages/Dashboard";
import DownloadApp from "./components/DownloadApp";
import ErrorPage from "./pages/ErrorPage";
import FolderPage from "./components/Dashboard/FolderPage";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": " Dropbox",
      "/register": "Register - Dropbox",
      "/login": "Login - Dropbox",
      "/registration-form": "Registration Form - Dropbox",
      "/password": "Login - Dropbox",
      "/enterprise": "Enterprise - Dropbox",
      "/contact-us": "Contact Us - Dropbox",
      "/plans": "Plans - Dropbox",
      "/desktop-app": "Desktop App - Dropbox",
      "/mobile-app": "Mobile App - Dropbox",
      "/install": "Download - Dropbox",
      "/dashboard:id": "Home - Dropbox",
    };

    document.title = titles[location.pathname] || "dropbox";
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<Register headerText="Sign up or Log in" />}
        />
        <Route
          path="/login"
          element={<Register headerText="Log in or Sign up" />}
        />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/password" element={<Login />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/plans" element={<Pricing />} />
        <Route path="/desktop-app" element={<Desktop />} />
        <Route path="/mobile-app" element={<Mobile />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/install" element={<DownloadApp />} />
        <Route
          path="/folders/:folderName"
          element={<FolderPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
