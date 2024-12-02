import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import register from "./components/Register/register";
import RegistrationForm from "./pages/RegistrationForm";
import Desktop from "./components/DesktopApp/Desktop";
import Mobile from "./components/MobileApp/Mobile";
import Enterprise from "./components/Enterprise/Enterprise";

function App() {
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

        <Route path="/contact-Us" element={<ContactUs />} />
        <Route path="/plans" element={<Pricing />} />
        <Route path="/desktop-app" element={<Desktop />} />
        <Route path="/mobile-app" element={<Mobile />} />
      </Routes>
    </div>
  );
}

export default App;
