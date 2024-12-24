import React from "react";
import NavBar from "../Navbar";
import footer_second from "./FooterSecond";

const register = () => {
  return (
    <div>
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
        showDivider="true"
      />

    <div>
      <footer className="mt-[150px] flex justify-start gap-[18px] text-[12px] text-[#555] py-[20px] pl-[100px] font-sans">
        <a href="#" className="hover:underline">
          Privacy & terms
        </a>
        <a href="#" className="hover:underline">
          Cookie policy
        </a>
        <a href="#" className="hover:underline">
          Cookies & CCPA preferences
        </a>
        <a href="#" className="hover:underline">
          AI Principles
        </a>
      </footer>
      <hr className="mt-[30px] w-[100px] border-t border-[#797575] ml-[100px] mb-[100px]" />
    </div>
 


    </div>
  );
};

export default register;
