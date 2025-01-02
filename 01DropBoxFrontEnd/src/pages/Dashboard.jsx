import React, { useEffect, useState } from "react";
import Header from "../components/Dashboard/Header";
import Main from "../components/Dashboard/Main";

const Dashboard = () => {
  const [theme, setTheme] = useState("light"); // default theme is light

  // Fetch theme from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Dashboard;
